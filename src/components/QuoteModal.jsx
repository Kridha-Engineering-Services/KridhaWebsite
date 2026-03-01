import { useEffect } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <div className="w-4 h-0.5 bg-blue-500" />
              <span className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">
                KRIDHA Engineering
              </span>
            </div>
            <h2
              id="modal-title"
              className="text-white font-bold text-xl"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              Request a Quote
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1 ml-4 mt-0.5 cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form body */}
        <div className="px-6 py-6">
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Fill in the details below and our engineering team will contact you with a
            tailored proposal within 24 hours.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); onClose(); }}
            className="space-y-4"
          >
            {/* Name + Company */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-name">
                  Full Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-company">
                  Company / Organization
                </label>
                <input
                  id="modal-company"
                  type="text"
                  placeholder="Company name"
                  className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-email">
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-phone">
                  Phone Number *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-service">
                Service Required *
              </label>
              <select
                id="modal-service"
                required
                className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
              >
                <option value="">Select a service…</option>
                <option value="electrical">Electrical Systems</option>
                <option value="hvac">HVAC Systems</option>
                <option value="fire">Fire Safety Systems</option>
                <option value="fabrication">Fabrication Work</option>
                <option value="amc">AMC & Maintenance</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="modal-message">
                Project Details
              </label>
              <textarea
                id="modal-message"
                rows={3}
                placeholder="Briefly describe your project scope, location, and timeline…"
                className="w-full border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{ color: '#ffffff', backgroundColor: '#1d4ed8' }}
              className="w-full font-semibold py-3 rounded-sm transition-colors duration-200 text-sm mt-2 cursor-pointer hover:opacity-90"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
