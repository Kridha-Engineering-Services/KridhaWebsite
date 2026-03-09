const LEADERS = [
  {
    id: 'jg',
    initials: 'JG',
    name: 'Mr. Jay Gautam',
    designation: 'Director',
    bio: 'An experienced engineer with over two decades of experience in the core sector, bringing strong execution capability, project management expertise, and technical leadership.',
  },
  {
    id: 'mb',
    initials: 'MB',
    name: 'Dr. Madan Bansal',
    designation: 'Director',
    bio: 'Ph.D. in Engineering. An alumnus of premier institutions, contributing advanced technical knowledge, research-driven approach, and strategic vision to strengthen engineering excellence.',
  },
  {
    id: 'ps',
    initials: 'PS',
    name: 'Mrs. Pooja Sharma',
    designation: 'Director — Sales & Marketing',
    bio: 'Bringing deep expertise in Sales & Marketing within Electrical, HVAC, and Fire Safety domains, driving client engagement, business development, and long-term partnerships.',
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-24 bg-white"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#f4bb00' }} />
            <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: '#96131e' }}>
              Our People
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            Leadership Team
          </h2>
          <p className="text-slate-500 text-base mt-3 max-w-xl">
            Experienced professionals committed to delivering engineering excellence on every project.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {LEADERS.map((leader) => (
            <div
              key={leader.id}
              className="group relative bg-white overflow-hidden border border-slate-100 p-8 flex flex-col h-full z-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ borderRadius: '2px' }}
            >
              {/* Large faded initial watermark */}
              <div
                className="absolute -right-4 -top-8 text-[180px] font-black opacity-[0.04] pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 z-0 select-none"
                style={{ fontFamily: 'Barlow, sans-serif', color: '#96131e' }}
              >
                {leader.initials.charAt(0)}
              </div>

              {/* Red top accent line */}
              <div
                className="absolute top-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left z-10"
                style={{ backgroundColor: '#96131e' }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Avatar & Name */}
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className="w-16 h-16 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: '#fdf2f3', borderColor: '#f5c6ca' }}
                  >
                    <span
                      className="font-extrabold text-xl tracking-wider"
                      style={{ fontFamily: 'Barlow, sans-serif', color: '#96131e' }}
                    >
                      {leader.initials}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-slate-900 font-extrabold text-xl transition-colors duration-300 group-hover:text-[#96131e]"
                      style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '-0.01em' }}
                    >
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold mt-1 uppercase tracking-widest" style={{ color: '#96131e', opacity: 0.75 }}>
                      {leader.designation}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-8 flex-grow group-hover:text-slate-600 transition-colors duration-300">
                  {leader.bio}
                </p>

                {/* Bottom detail */}
                <div className="mt-auto flex items-center justify-between">
                  <div
                    className="h-px bg-slate-100 group-hover:bg-[#96131e] transition-all duration-500 ease-in-out"
                    style={{ width: '2rem' }}
                    ref={(el) => { if (el) el.style.setProperty('--tw-translate-x', '0'); }}
                  />
                  <svg
                    className="w-5 h-5 text-slate-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ color: '#96131e' }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
