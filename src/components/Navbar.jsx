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
    <>
      <header
        className={`fixed z-50 transition-all duration-500 rounded-2xl
          top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[94%] sm:w-[95%] max-w-7xl
          ${
            menuOpen
              ? 'bg-white/95 border-white/50 shadow-xl py-1.5' // Solid background when menu is open to keep top section visible
              : scrolled
                ? 'bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg py-1'
                : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl py-1.5'
          }
        `}
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-1">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center group focus:outline-none"
            >
              <img 
                src="./NavLogo.png" 
                loading="lazy" 
                alt="Kridha Engineering Logo" 
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 origin-left ${
                  scrolled || menuOpen ? 'h-9 sm:h-12 lg:h-14 drop-shadow-sm' : 'h-10 sm:h-14 lg:h-16 drop-shadow-md'
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
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full hover:bg-blue-600/10 ${
                    scrolled 
                      ? 'text-slate-600 hover:text-blue-700' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={onQuoteClick}
                style={{ color: '#ffffff', backgroundColor: '#2563eb' }}
                className="hidden sm:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 transition-transform duration-300 cursor-pointer hover:-translate-y-0.5"
              >
                Request a Quote
              </button>

              {/* Mobile hamburger */}
              <button
                className={`lg:hidden p-2 transition-colors relative z-50 ${
                  menuOpen 
                    ? 'text-slate-900' 
                    : 'text-white drop-shadow-md'
                }`}
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

      {/* Mobile Menu Full Screen Overlay - Moved outside header to escape transform container */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[45] bg-white/98 backdrop-blur-2xl flex flex-col items-center justify-center animate-fade-in pt-20">
          <nav className="flex flex-col items-center gap-6 w-full px-6 overflow-y-auto">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors w-full text-center py-2"
                style={{ 
                  fontFamily: 'Barlow, sans-serif',
                  animationDelay: `${index * 50}ms` 
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onQuoteClick(); }}
              className="mt-6 px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full w-full max-w-xs shadow-lg shadow-blue-500/20 active:scale-95 transition-transform"
            >
              Request a Quote
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

