const CAPABILITIES = [
  {
    id: 'execution',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'End-to-End Execution',
    description:
      'We handle every project phase — from design and procurement through installation, testing, and handover — eliminating coordination overhead for our clients.',
  },
  {
    id: 'safety',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Safety & Compliance',
    description:
      'All work is executed in accordance with NBC, NFPA, and local regulatory codes. Our teams maintain strict HSE protocols on every site, ensuring zero-compromise safety.',
  },
  {
    id: 'amc',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'AMC & Maintenance',
    description:
      'Annual Maintenance Contracts tailored to keep your systems running at peak efficiency, with scheduled preventive maintenance, rapid response, and detailed service records.',
  },
  {
    id: 'commissioning',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Testing & Commissioning',
    description:
      'Rigorous testing and commissioning procedures ensure every system performs to specification before handover, with documented test reports and punch-list clearance.',
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-24 relative overflow-hidden bg-slate-900"
    >
      {/* Subtle red pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#f4bb00' }} />
            <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: '#f4bb00' }}>
              Why KRIDHA
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              Our Core Capabilities
            </h2>
            <p className="text-white/50 text-sm max-w-xs sm:text-right">
              Strengths that set our delivery apart.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <div key={cap.id} className="group">
              {/* Number */}
              <div
                className="text-5xl font-extrabold leading-none mb-4 select-none transition-colors duration-300"
                style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(244,187,0,0.18)' }}
              >
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 border flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  borderColor: 'rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                <div className="group-hover:text-white group-hover:hidden">{cap.icon}</div>
                <div className="hidden group-hover:block" style={{ color: '#f4bb00' }}>{cap.icon}</div>
              </div>

              {/* Title */}
              <h3
                className="text-white font-bold text-base mb-3 group-hover:text-white/90 transition-colors"
                style={{ fontFamily: 'Barlow, sans-serif' }}
              >
                {cap.title}
              </h3>

              {/* Divider */}
              <div
                className="w-8 h-0.5 mb-4 transition-all duration-300 group-hover:w-14"
                style={{ backgroundColor: '#96131e' }}
              />

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-10 sm:h-14" fill="#ffffff">
          <path d="M0,30 C480,55 960,5 1440,30 L1440,50 L0,50 Z" />
        </svg>
      </div>
    </section>
  );
}
