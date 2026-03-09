const FOOTER_SERVICES = [
  'Electrical Sales & Installations',
  'HVAC / AC Systems',
  'Fire Safety Systems',
  'Annual Maintenance Contracts',
  'Testing & Commissioning',
  'Operation & Maintenance Support',
];

const FOOTER_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About Us',  href: '#about' },
  { label: 'Services',  href: '#services' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact',   href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#96131e' }}>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img
                src="./FooterLogo2.png"
                loading="lazy"
                alt="Kridha Engineering Logo"
                className="h-24 sm:h-28 lg:h-36 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mt-4 max-w-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Delivering end-to-end engineering solutions across Electrical, HVAC,
              Fire Safety, and Fabrication — built on precision and trust.
            </p>
            {/* Gold divider */}
            <div className="mt-6 w-12 h-0.5" style={{ backgroundColor: '#f4bb00' }} />
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white text-sm font-bold mb-5 uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm transition-colors duration-200 flex items-center gap-2 group"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#f4bb00'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    <span
                      className="w-3 h-px flex-shrink-0 transition-colors duration-200"
                      style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-white text-sm font-bold mb-5 uppercase tracking-wider">
              Services
            </div>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s} className="text-sm flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#f4bb00' }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white text-sm font-bold mb-5 uppercase tracking-wider">
              Contact Us
            </div>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#f4bb00' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="text-sm not-italic leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  KRIDHA Engineering &amp; Services<br />
                  B-114, Sector-64,<br />
                  Noida
                </address>
              </div>

              {/* Phones */}
              <div className="flex flex-col gap-2">
                {['+91 8447039906', '+91 8447781925'].map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#f4bb00'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#f4bb00' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {phone}
                  </a>
                ))}
              </div>

              {/* Email */}
              <a
                href="mailto:info@kridha.in"
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.65)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#f4bb00'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#f4bb00' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@kridha.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', backgroundColor: '#7a0f18' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © {new Date().getFullYear()} KRIDHA Engineering &amp; Services. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Electrical · HVAC · Fire Safety
          </p>
        </div>
      </div>
    </footer>
  );
}
