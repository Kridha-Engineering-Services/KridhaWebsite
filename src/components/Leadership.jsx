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
        <div className="grid md:grid-cols-3 gap-8">
          {LEADERS.map((leader) => (
            <div
              key={leader.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-[0_10px_40px_-15px_rgba(29,78,216,0.15)] transition-all duration-500 hover:-translate-y-2 border border-slate-200 p-8 flex flex-col h-full z-10"
            >
              {/* Decorative Background Element (Large faded initial) */}
              <div 
                className="absolute -right-4 -top-8 text-[180px] font-black text-slate-50 opacity-50 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 z-0"
                style={{ fontFamily: 'Barlow, sans-serif' }}
              >
                {leader.initials.charAt(0)}
              </div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Avatar & Name Row */}
                <div className="flex items-center gap-5 mb-6">
                  {/* Clean Avatar */}
                  <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors duration-300">
                    <span 
                      className="text-blue-600 font-extrabold text-xl tracking-wider" 
                      style={{ fontFamily: 'Barlow, sans-serif' }}
                    >
                      {leader.initials}
                    </span>
                  </div>
                  
                  {/* Name & Title */}
                  <div>
                    <h3 
                      className="text-slate-900 font-extrabold text-xl group-hover:text-blue-700 transition-colors duration-300" 
                      style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '-0.01em' }}
                    >
                      {leader.name}
                    </h3>
                    <p className="text-blue-600/80 text-xs font-bold mt-1 uppercase tracking-widest">
                      {leader.designation}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-8 flex-grow group-hover:text-slate-600 transition-colors duration-300">
                  {leader.bio}
                </p>

                {/* Bottom detail */}
                <div className="mt-auto flex items-center justify-between">
                  {/* Small animated line */}
                  <div className="w-8 h-px bg-slate-200 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-500 ease-in-out" />
                  
                  {/* Small arrow icon appearing on hover */}
                  <svg 
                    className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transform translate-x-0 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-500" 
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
