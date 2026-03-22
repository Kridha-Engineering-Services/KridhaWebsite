import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const body = req.body || {};
    
    const data = typeof body === 'string' ? JSON.parse(body) : body;

    
    const { name, company, email, phone, service, message } = data;

    if (!name || !email || !phone || !service) {
      return res.status(400).json({ success: false, message: 'Validation failed.' });
    }

    const safeName = String(name).trim();
    const safeCompany = company ? String(company).trim() : 'N/A';
    const safeEmail = String(email).trim();
    const safePhone = String(phone).trim();
    const safeService = String(service).trim();
    const safeMessage = message ? String(message).trim() : 'N/A';

    const now = new Date();

    const timestamp = now.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
});

    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          // Replace escaped newlines with actual newlines to fix Vercel env formatting
          private_key: process.env.GOOGLE_PRIVATE_KEY
            ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
            : undefined,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });
      
      try {
        const existingRows = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: 'Sheet1!A:A',
        });

        const rowCount = existingRows.data.values
          ? existingRows.data.values.length
          : 1;

        const serialNumber = rowCount; // Row 1 is header

        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: 'Sheet1!A:I',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[
              serialNumber,
              timestamp,
              safeName,
              safeCompany,
              safePhone,
              safeEmail,
              safeService,
              safeMessage,
              "New" // Default Status
            ]],
          },
        });
      } catch (sheetError) {
        console.error('Error writing to Google Sheets. Check permissions and Sheet ID.', sheetError);
      }
    } else {
      console.warn('Google Sheets environment variables missing. Skipping Sheets append.');
    }

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // --- HOSTINGER EMAIL CONFIGURATION ---
      const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.HEMAIL_USER,
          pass: process.env.HEMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // --- GOOGLE EMAIL CONFIGURATION (Commented out) ---
      /*
      const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      */

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, 
        subject: 'New Quote Request – Company Website',
        html: `
          <h2 style="color: #1d4ed8;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Date:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${timestamp}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${safeName}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${safeCompany}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${safePhone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${safeEmail}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Service Required:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${safeService}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Message:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${safeMessage.replace(/\n/g, '<br>')}</td></tr>
          </table>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn('Nodemailer environment variables missing. Skipping email notification.');
    }

    return res.status(200).json({ success: true, message: 'Quote request submitted successfully.' });

  } catch (error) {
    console.error('Contact Form Error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
}
