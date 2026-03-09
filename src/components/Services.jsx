const SERVICES = [
  {
    id: 'electrical',
    image: './photos/electrical-distribution-cabinet.jpeg',
    tag: 'Electrical',
    title: 'Electrical Sales & Installations',
    description:
      'End-to-end electrical solutions — LT & HT installations, internal & external electrification, panels & distribution systems, structured cabling, wiring, testing & commissioning.',
    tags: ['LT & HT Installations', 'Panels & Distribution', 'Structured Cabling', 'Testing & Commissioning'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: 'hvac',
    image: './photos/hvac-installation.jpeg',
    tag: 'HVAC',
    title: 'Air Conditioning (HVAC) Sales & Installations',
    description:
      'Energy-efficient cooling solutions — VRV/VRF systems, centralized & ductable AC, split & package units, HVAC design & load calculations, installation, commissioning, and AMC.',
    tags: ['VRV / VRF Systems', 'Ductable AC', 'HVAC Design', 'Annual Maintenance'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    id: 'fire',
    image: './photos/fireSafety.png',
    tag: 'Fire Safety',
    title: 'Fire Safety Sales & Installations',
    description:
      'Comprehensive fire protection installed in strict accordance with safety norms — alarm & detection systems, firefighting, hydrant & sprinkler systems, smoke suppression & compliance.',
    tags: ['Fire Alarm & Detection', 'Hydrant & Sprinklers', 'Smoke Suppression', 'Safety Compliance'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#f4bb00' }} />
            <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: '#96131e' }}>
              What We Do
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              Our Core Services
            </h2>
            <p className="text-slate-500 text-sm max-w-xs sm:text-right">
              Three integrated engineering disciplines under one roof.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white border border-slate-100 overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-400 cursor-default"
              style={{ borderRadius: '2px' }}
            >
              {/* Photo — top 55% */}
              <div className="relative w-full overflow-hidden" style={{ paddingTop: '58%' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient over photo */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(150,19,30,0.75) 0%, transparent 55%)' }}
                />
                {/* Tag badge */}
                <div
                  className="absolute top-3 left-3 text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1"
                  style={{ backgroundColor: '#96131e' }}
                >
                  {service.tag}
                </div>
                {/* Icon over bottom of image */}
                <div
                  className="absolute bottom-3 left-4 w-9 h-9 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'rgba(150,19,30,0.8)' }}
                >
                  {service.icon}
                </div>
              </div>

              {/* Text body */}
              <div className="flex flex-col flex-1 p-5">
                <h3
                  className="font-bold text-base text-slate-900 mb-2 group-hover:text-[#96131e] transition-colors duration-300"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-0.5 transition-colors duration-300"
                      style={{
                        backgroundColor: '#fdf2f3',
                        color: '#96131e',
                        borderRadius: '2px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Red bottom accent */}
              <div
                className="h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: '#96131e' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
