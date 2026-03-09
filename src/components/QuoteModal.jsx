import { useEffect, useState } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset state if opened again
      setStatus({ loading: false, success: false, error: '' });
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id.replace('modal-', '')]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
        
        // Auto-close after short delay
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Validation failed. Please try again.' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Internal server error. Please try again later.' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative bg-white w-full max-w-lg rounded-sm shadow-2xl animate-fade-in max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 flex items-start justify-between flex-shrink-0" style={{ backgroundColor: '#96131e' }}>
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <div className="w-4 h-0.5" style={{ backgroundColor: '#f4bb00' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#f4bb00' }}>
                KRIDHA Engineering
              </span>
            </div>
            <h2
              id="modal-title"
              className="text-white font-bold text-xl"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              Request a Quote
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1 ml-4 mt-0.5 cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form body */}
        <div className="px-6 py-6 overflow-y-auto custom-scrollbar">
          {status.success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fdf2f3', color: '#96131e' }}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quote Request Sent!</h3>
              <p className="text-slate-500">Thank you. Our engineering team will contact you shortly.</p>
            </div>
          ) : (
            <>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                Fill in the details below and our engineering team will contact you with a
                tailored proposal within 24 hours.
              </p>

              {status.error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-sm">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-name">
                      Full Name *
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-company">
                      Company / Organization
                    </label>
                    <input
                      id="modal-company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-email">
                      Email Address *
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-phone">
                      Phone Number *
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-service">
                    Service Required *
                  </label>
                  <select
                    id="modal-service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
                  >
                    <option value="">Select a service…</option>
                    <option value="electrical">Electrical Systems</option>
                    <option value="hvac">HVAC Systems</option>
                    <option value="fire">Fire Safety Systems</option>
                    <option value="amc">AMC & Maintenance</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-message">
                    Project Details
                  </label>
                  <textarea
                    id="modal-message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project scope, location, and timeline…"
                    className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status.loading}
                  style={{ color: '#ffffff', backgroundColor: '#96131e' }}
                  className={`w-full font-semibold py-3 rounded-sm transition-colors duration-200 text-sm mt-2 flex items-center justify-center gap-2 ${status.loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}`}
                >
                  {status.loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
