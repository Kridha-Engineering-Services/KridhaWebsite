import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Leadership',   href: '#leadership' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar({ onQuoteClick }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const isLight = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 rounded-2xl
          top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[94%] sm:w-[95%] max-w-7xl
          ${
            menuOpen
              ? 'py-1.5 shadow-xl'
              : scrolled
                ? 'py-1 backdrop-blur-xl shadow-lg border border-white/30'
                : 'py-1.5 backdrop-blur-md border border-white/15 shadow-xl'
          }
        `}
        style={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-1">

            {/* Logo + text */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex flex-col items-start group focus:outline-none"
            >
              <img
                src="./logo1.png"
                loading="lazy"
                alt="Kridha Engineering Logo"
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 origin-left ${
                  isLight ? 'h-12 sm:h-14 lg:h-16 drop-shadow-sm' : 'h-14 sm:h-16 lg:h-20 drop-shadow-md'
                }`}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full"
                  style={{
                    color: '#374151',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#96131e'; e.currentTarget.style.backgroundColor = '#fdf2f3'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#374151'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={onQuoteClick}
                className="hidden sm:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                style={{ color: '#ffffff', backgroundColor: '#96131e', border: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#7a0f18'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#96131e'; }}
              >
                Request a Quote
              </button>

              {/* Mobile hamburger */}
              <button
                className={`lg:hidden p-2 transition-colors relative z-50`}
                style={{ color: '#96131e', background: 'none', border: 'none' }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[45] flex flex-col items-center justify-center animate-fade-in pt-20"
          style={{ backgroundColor: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)' }}
        >
          <nav className="flex flex-col items-center gap-6 w-full px-6 overflow-y-auto">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-bold transition-colors w-full text-center py-2"
                style={{ fontFamily: 'Barlow, sans-serif', color: '#1e293b', animationDelay: `${index * 50}ms` }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#96131e'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#1e293b'; }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onQuoteClick(); }}
              className="mt-6 px-8 py-3.5 font-bold w-full max-w-xs shadow-lg active:scale-95 transition-transform cursor-pointer"
              style={{ backgroundColor: '#96131e', color: 'white', border: 'none' }}
            >
              Request a Quote
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
