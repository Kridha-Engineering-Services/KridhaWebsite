const SERVICES = [
  {
    id: 'electrical',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Electrical Systems',
    description:
      'Complete electrical contracting — LV/MV panel installation, cable laying, earthing systems, transformer work, power distribution, and switchgear commissioning.',
    tags: ['LV/MV Panels', 'Power Distribution', 'Earthing', 'Commissioning'],
  },
  {
    id: 'hvac',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'HVAC Systems',
    description:
      'Design, supply, installation, and commissioning of air handling units, ducting systems, VRF/VRV systems, chillers, cooling towers, and BMS integration.',
    tags: ['AHU & FCU', 'VRF/VRV Systems', 'Ducting', 'BMS Integration'],
  },
  {
    id: 'fire',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: 'Fire Safety Systems',
    description:
      'Comprehensive fire protection — sprinkler systems, fire alarm panels, suppression systems, hydrant networks, emergency lighting, and NBC/NFPA compliance.',
    tags: ['Sprinkler Systems', 'Fire Alarms', 'Hydrant Networks', 'NBC Compliance'],
  },
  {
    id: 'fabrication',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Fabrication Work',
    description:
      'Structural and architectural steel fabrication — cable trays, MS structures, canopies, equipment enclosures, platforms, and custom metal work for industrial sites.',
    tags: ['Structural Steel', 'Cable Trays', 'MS Structures', 'Custom Metalwork'],
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
            <div className="w-6 h-0.5 bg-blue-600" />
            <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase">
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
              Four integrated engineering disciplines under one roof.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white border border-slate-200 rounded-sm p-6 flex flex-col
                         hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-50 text-blue-700 flex items-center justify-center rounded-sm mb-5 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-slate-900 font-bold text-base mb-3" style={{ fontFamily: 'Barlow, sans-serif' }}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
