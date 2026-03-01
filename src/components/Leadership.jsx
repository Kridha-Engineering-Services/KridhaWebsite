const LEADERS = [
  {
    id: 'jg',
    initials: 'JG',
    name: 'Mr. Jay Gautam',
    designation: 'Director',
    bio: 'An experienced engineer with over two decades of experience in the core sector, bringing strong execution capability, project management expertise, and technical leadership.',
    color: 'bg-blue-700',
  },
  {
    id: 'mb',
    initials: 'MB',
    name: 'Dr. Madan Bansal',
    designation: 'Director',
    bio: 'Ph.D. in Engineering. An alumnus of premier institutions, contributing advanced technical knowledge, research-driven approach, and strategic vision to strengthen engineering excellence.',
    color: 'bg-slate-800',
  },
  {
    id: 'pa',
    initials: 'PA',
    name: 'Mr. Parvez Alam',
    designation: 'Director — Sales & Marketing',
    bio: 'Bringing deep expertise in Sales & Marketing within Electrical, HVAC, and Fire Safety domains, driving client engagement, business development, and long-term partnerships.',
    color: 'bg-blue-900',
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-24 bg-slate-50"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-blue-600" />
            <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase">
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
        <div className="grid sm:grid-cols-3 gap-6">
          {LEADERS.map((leader) => (
            <div
              key={leader.id}
              className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              {/* Top bar */}
              <div className={`${leader.color} px-6 py-8 flex items-start gap-4`}>
                {/* Avatar */}
                <div className="w-14 h-14 rounded-sm bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {leader.initials}
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold text-base leading-tight" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {leader.name}
                  </div>
                  <div className="text-blue-200 text-xs font-medium mt-1 uppercase tracking-wider">
                    {leader.designation}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
