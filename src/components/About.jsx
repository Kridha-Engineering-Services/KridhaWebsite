const VALUES = [
  { icon: '✓', text: 'Integrity & Transparency' },
  { icon: '✓', text: 'Technical Excellence' },
  { icon: '✓', text: 'Safety First Approach' },
  { icon: '✓', text: 'Commitment to Quality' },
  { icon: '✓', text: 'Continuous Improvement' },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-6 h-0.5 bg-blue-600" />
          <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase">
            Who We Are
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              Integrated Engineering Solutions — Built on Quality & Trust
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-5">
              Kridha Engineering & Services is a professionally managed engineering company
              delivering integrated solutions in Electrical Systems, Air Conditioning (HVAC), and
              Fire Safety serving residential, commercial, and industrial projects.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              We specialize in end-to-end services — from product sales and system design to
              installation, commissioning, and maintenance — ensuring safe, efficient, and
              high-performance infrastructure with a strong commitment to quality, compliance,
              and timely execution.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '✓', label: 'Safety First' },
                { icon: '✓', label: 'Regulatory Compliance' },
                { icon: '✓', label: 'On-Time Delivery' },
                { icon: '✓', label: 'Quality Products' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 bg-blue-700 flex items-center justify-center rounded-sm flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual panel */}
          <div className="space-y-5">
            {/* Industrial graphic card */}
            <div className="bg-slate-900 rounded-sm p-6 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03] md:opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />


              <div className="relative">
                <div className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-5">
                  Our Values
                </div>
                <div className="space-y-3">
                  {[
                    'Integrity & Transparency',
                    'Technical Excellence',
                    'Safety First Approach',
                    'Commitment to Quality',
                    'Continuous Improvement',
                  ].map((val) => (
                    <div key={val} className="flex gap-3 items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      <p className="text-slate-300 text-sm">{val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust badges row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'AMC', sub: 'Service Contracts' },
                { value: '24/7', sub: 'Support Available' },
                { value: '3', sub: 'Core Disciplines' },
              ].map((badge) => (
                <div
                  key={badge.value}
                  className="bg-white border border-slate-200 rounded-sm p-4 text-center"
                >
                  <div
                    className="text-blue-700 font-bold text-xl"
                    style={{ fontFamily: 'Barlow, sans-serif' }}
                  >
                    {badge.value}
                  </div>
                  <div className="text-slate-500 text-xs mt-1 font-medium">{badge.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
