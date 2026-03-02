export default function Hero({ onQuoteClick }) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-slate-900"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./hero.webp"
          alt="Engineering Background"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        {/* Gradient overlays to blend the image and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blueprint lines — industrial feel (Moved to LEFT) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-96 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-64 h-px bg-gradient-to-r from-blue-400/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-80 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
        <div
          className="absolute -left-40 top-1/4 w-96 h-96 rounded-full border border-blue-500/20"
          style={{ borderWidth: '1px' }}
        />
        <div
          className="absolute -left-20 top-1/4 w-64 h-64 rounded-full border border-blue-500/20"
          style={{ borderWidth: '1px' }}
        />
      </div>

      {/* Diagonal accent (Moved to LEFT) */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 lg:w-2/5 bg-gradient-to-r from-blue-900/50 to-transparent hidden md:block z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 pt-38 flex justify-center">
        <div className="max-w-3xl w-full text-center">
          {/* Tag */}
          <div className="inline-flex items-center justify-center gap-2 mb-6 w-full">
            <div className="hidden sm:block w-8 h-0.5 bg-blue-500/50" />
            <span className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Engineering Excellence
            </span>
            <div className="hidden sm:block w-8 h-0.5 bg-blue-500/50" />
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '-0.02em' }}
          >
            Committed to Quality.
            <br />
            <span className="text-blue-400">Driven by Engineering.</span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Kridha delivers end-to-end engineering solutions — from electrical
            systems and HVAC to fire safety — built on precision,
            compliance, and trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onQuoteClick}
              style={{ color: '#ffffff', backgroundColor: '#2563eb' }}
              className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-sm transition-all duration-200 text-sm cursor-pointer hover:opacity-90 shadow-lg shadow-blue-500/20"
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-sm transition-all duration-200 text-sm bg-slate-900/50 backdrop-blur-sm"
            >
              Our Services
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 pt-8 border-t border-slate-700/60 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: '20+', label: 'Years Leadership' },
              { value: '100%', label: 'Safety Record' },
              { value: '3', label: 'Core Disciplines' },
            ].map((stat) => (
               <div key={stat.label}>
                <div
                  className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-blue-200/80 text-xs sm:text-sm mt-1 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent z-10" />
    </section>
  );
}
