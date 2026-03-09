export default function ContactCTA({ onQuoteClick }) {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 relative overflow-hidden"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#96131e' }} />

      {/* Background decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ backgroundColor: '#96131e' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#f4bb00' }} />
            <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: '#96131e' }}>
              Get Started
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: '#f4bb00' }} />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            Ready to Start Your{' '}
            <span style={{ color: '#96131e' }}>Next Project?</span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your requirements and our engineering team will get back to you with a
            detailed proposal — usually within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center gap-2 font-bold px-8 py-4 transition-all duration-200 text-sm cursor-pointer hover:opacity-90 shadow-lg"
              style={{ backgroundColor: '#96131e', color: '#ffffff' }}
            >
              Request a Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="tel:+918447039906"
              className="inline-flex items-center gap-2 font-medium text-sm transition-colors duration-200 hover:opacity-80"
              style={{ color: '#96131e' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Or call us directly
            </a>
          </div>

          {/* Reassurance */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-slate-500">
            {['No obligation quote', 'Response within 24 hours', 'Certified engineering team'].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#fdf2f3' }}
                >
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#96131e' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
