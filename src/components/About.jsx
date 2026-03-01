const MILESTONES = [
  { year: '2012', text: 'Founded with a focus on electrical engineering solutions' },
  { year: '2016', text: 'Expanded into HVAC and mechanical systems' },
  { year: '2019', text: 'Launched fire safety and fabrication verticals' },
  { year: '2023', text: 'Scaling AMC services across industrial clients' },
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
              Engineering Solutions Built on Integrity & Expertise
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-5">
              KRIDHA Engineering & Services is a multi-discipline engineering company
              delivering comprehensive solutions across Electrical Systems, HVAC, Fire Safety,
              and Fabrication. We serve commercial, industrial, and infrastructure clients with
              a commitment to quality workmanship and regulatory compliance.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Our teams of qualified engineers and technicians bring deep domain expertise to
              every project, from design and installation through testing, commissioning, and
              ongoing maintenance. We are trusted by facility managers, contractors, and
              business owners who demand reliability above all else.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '✓', label: 'Safety First' },
                { icon: '✓', label: 'Regulatory Compliance' },
                { icon: '✓', label: 'On-Time Delivery' },
                { icon: '✓', label: 'Certified Engineers' },
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
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />
              <div className="relative">
                <div className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-5">
                  Company Timeline
                </div>
                <div className="space-y-4">
                  {MILESTONES.map((m) => (
                    <div key={m.year} className="flex gap-4 items-start">
                      <div
                        className="text-blue-400 font-bold text-sm w-10 flex-shrink-0 mt-0.5"
                        style={{ fontFamily: 'Barlow, sans-serif' }}
                      >
                        {m.year}
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-px bg-slate-700 mb-2" />
                        <p className="text-slate-300 text-sm leading-relaxed">{m.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust badges row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'ISO', sub: 'Aligned Practices' },
                { value: '24/7', sub: 'Support Available' },
                { value: 'AMC', sub: 'Service Contracts' },
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
