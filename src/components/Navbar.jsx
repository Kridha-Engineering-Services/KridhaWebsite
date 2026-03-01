import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onQuoteClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white border-b border-slate-200 shadow-sm'
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent'
      }`}
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-sm flex-shrink-0 transition-colors duration-200"
              style={{ backgroundColor: '#1d4ed8' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 18V9L12 3L21 9V18H15V13H9V18H3Z" fill="white" />
              </svg>
            </div>
            <div className="leading-none">
              <div className="text-slate-900 font-bold text-base tracking-tight" style={{ fontFamily: 'Barlow, sans-serif' }}>
                KRIDHA
              </div>
              <div className="text-slate-500 text-xs font-medium tracking-widest uppercase mt-0.5">
                Engineering &amp; Services
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors duration-200 rounded-md hover:bg-blue-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onQuoteClick}
              style={{ color: '#ffffff', backgroundColor: '#1d4ed8' }}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-sm transition-all duration-200 cursor-pointer hover:opacity-90"
            >
              Request a Quote
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 px-2 text-sm font-medium text-slate-700 hover:text-blue-700 border-b border-slate-50 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onQuoteClick(); }}
              style={{ color: '#ffffff', backgroundColor: '#1d4ed8' }}
              className="mt-3 mb-1 w-full text-sm font-semibold py-2.5 rounded-sm transition-colors hover:opacity-90 cursor-pointer"
            >
              Request a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
