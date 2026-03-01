export default function Hero({ onQuoteClick }) {
  return (
    <section
      id="home"
      className="relative min-h-screen min-w-screen flex items-center overflow-hidden bg-slate-900"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blueprint lines — industrial feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-px bg-gradient-to-l from-blue-500/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-64 h-px bg-gradient-to-l from-blue-400/15 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-80 h-px bg-gradient-to-l from-blue-500/20 to-transparent" />
        <div
          className="absolute -right-40 top-1/4 w-96 h-96 rounded-full border border-blue-500/10"
          style={{ borderWidth: '1px' }}
        />
        <div
          className="absolute -right-20 top-1/4 w-64 h-64 rounded-full border border-blue-500/10"
          style={{ borderWidth: '1px' }}
        />
      </div>

      {/* Diagonal accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 lg:w-2/5 bg-gradient-to-l from-blue-900/40 to-transparent hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-0.5 bg-blue-500" />
            <span className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Engineering Excellence
            </span>
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
          <p className="text-slate-300 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-light">
            KRIDHA delivers end-to-end engineering solutions — from electrical
            systems and HVAC to fire safety and fabrication — built on precision,
            compliance, and trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onQuoteClick}
              style={{ color: '#ffffff', backgroundColor: '#2563eb' }}
              className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-sm transition-all duration-200 text-sm cursor-pointer hover:opacity-90"
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
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-sm transition-all duration-200 text-sm"
            >
              Our Services
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Delivered' },
              { value: '4', label: 'Core Disciplines' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-500 text-xs mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
