const FOOTER_SERVICES = [
  'Electrical Sales & Installations',
  'HVAC / AC Systems',
  'Fire Safety Systems',
  'Annual Maintenance Contracts',
  'Testing & Commissioning',
  'Operation & Maintenance Support',
];

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-slate-900 text-slate-400 min-w-screen"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-700 flex items-center justify-center rounded-sm flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 18V9L12 3L21 9V18H15V13H9V18H3Z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-base tracking-tight" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  KRIDHA
                </div>
                <div className="text-slate-500 text-xs tracking-widest uppercase">
                  Engineering & Services
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mt-4 max-w-xs">
              Delivering end-to-end engineering solutions across Electrical, HVAC,
              Fire Safety, and Fabrication — built on precision and trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-slate-700 group-hover:bg-blue-400 transition-colors duration-200 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">
              Services
            </div>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s} className="text-sm text-slate-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">
              Contact Us
            </div>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="text-sm text-slate-500 not-italic leading-relaxed">
                  KRIDHA Engineering & Services<br />
                  B-92, Sector-64,<br />
                  Noida
                </address>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <a href="tel:+918447039906" className="flex items-center gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors group">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 8447039906
                </a>
                <a href="tel:+919560898125" className="flex items-center gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9560898125
                </a>
              </div>

              {/* Email */}
              <a href="mailto:info@kridha.in" className="flex items-center gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@kridha.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} KRIDHA Engineering & Services. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Electrical · HVAC · Fire Safety
          </p>
        </div>
      </div>
    </footer>
  );
}
