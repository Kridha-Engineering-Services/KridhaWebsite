import { useState, useEffect, useCallback } from 'react';

const SLIDES = [
  {
    image: './photos/Electrical.jpeg',
    tag: 'Electrical Engineering',
    headline: 'Committed to Quality.',
    accent: 'Driven by Engineering.',
    body: 'End-to-end electrical solutions — HT/LT installations, distribution panels, structured cabling, and commissioning.',
  },
  {
    image: './photos/hvac-installation.jpeg',
    tag: 'HVAC & Mechanical',
    headline: 'Engineered Comfort.',
    accent: 'Built to Last.',
    body: 'Energy-efficient HVAC systems — VRV/VRF, ductable AC, centralized cooling, and Annual Maintenance Contracts.',
  },
  {
    image: './photos/fireSafety.png',
    tag: 'Fire Safety',
    headline: 'Safety You Trust.',
    accent: 'Built to Code.',
    body: 'Comprehensive fire protection — alarm & detection systems, hydrant & sprinkler systems, smoke suppression and full compliance.',
  },
];

export default function Hero({ onQuoteClick }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Background slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt="slide"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.38) saturate(0.8)' }}
          />
        </div>
      ))}

      {/* Deep red gradient overlay — left heavy */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(110deg, rgba(150,19,30,0.82) 0%, rgba(150,19,30,0.55) 45%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      {/* Subtle texture grid */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-36 pt-40">
        <div className="max-w-2xl">

          {/* Tag pill */}
          <div
            key={`tag-${current}`}
            className="animate-slide-up inline-flex items-center gap-2.5 mb-6"
            style={{ animationDuration: '0.6s' }}
          >
            <div className="w-8 h-0.5" style={{ backgroundColor: '#f4bb00' }} />
            <span
              className="text-xs font-bold tracking-[0.22em] uppercase"
              style={{ color: '#f4bb00' }}
            >
              {slide.tag}
            </span>
          </div>

          {/* Headline */}
          <h1
            key={`h1-${current}`}
            className="animate-slide-up text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
            style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '-0.02em', animationDuration: '0.65s' }}
          >
            {slide.headline}
            <br />
            <span style={{ color: '#f4bb00' }}>{slide.accent}</span>
          </h1>

          {/* Body */}
          <p
            key={`body-${current}`}
            className="animate-slide-up text-slate-200 text-lg leading-relaxed mb-10 max-w-xl font-light"
            style={{ animationDuration: '0.7s' }}
          >
            {slide.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 text-sm transition-all duration-200 cursor-pointer hover:opacity-90 shadow-lg"
              style={{ backgroundColor: '#f4bb00', color: '#1a0508' }}
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 text-sm transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'white', color: '#1a0508' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
            >
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-8 max-w-sm">
            {[
              { value: '20+', label: 'Years Leadership' },
              { value: '100%', label: 'Safety Record' },
              { value: '3',   label: 'Core Disciplines' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-xs mt-1 font-medium tracking-wide" style={{ color: '#f4bb00' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide controls — elegant circular arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-5 sm:left-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-110"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(8px)',
          border: '1.5px solid rgba(255,255,255,0.35)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}
      >
        <span className="text-2xl font-light mb-1">&lt;</span>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-5 sm:right-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-110"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(8px)',
          border: '1.5px solid rgba(255,255,255,0.35)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}
      >
        <span className="text-2xl font-light mb-1">&gt;</span>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 cursor-pointer"
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === current ? '#f4bb00' : 'rgba(255,255,255,0.4)',
              border: 'none',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 sm:h-16" fill="#ffffff">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
