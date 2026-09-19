import React from 'react';
import { X, BedDouble, Bath, Maximize2, Shield, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { Residence } from '../types.ts';

interface ResidenceDetailModalProps {
  residence: Residence | null;
  onClose: () => void;
  onOpenEnquiry: (residenceName: string) => void;
}

export const ResidenceDetailModal: React.FC<ResidenceDetailModalProps> = ({
  residence,
  onClose,
  onOpenEnquiry,
}) => {
  if (!residence) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0e1013] border border-white/10 text-[#f8f9fa] shadow-2xl overflow-y-auto max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 bg-black/60 text-[#f8f9fa] hover:text-[#c8a876] transition-colors rounded-full border border-white/15 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Architectural Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#08090a]">
          <img
            src={residence.image}
            alt={residence.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8a876] font-mono block mb-1">
                {residence.location}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#f8f9fa] tracking-tight">
                {residence.name}
              </h2>
            </div>

            <div className="hidden sm:block text-right">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8e929a] font-mono block">
                Total Internal Area
              </span>
              <span className="text-base font-serif text-[#f8f9fa]">
                {residence.area}
              </span>
            </div>
          </div>
        </div>

        {/* Details Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <p className="text-base text-[#c8a876] font-serif italic mb-3">
              "{residence.tagline}"
            </p>
            <p className="text-sm sm:text-base text-[#b4b8c0] font-light leading-relaxed">
              {residence.description}
            </p>
          </div>

          {/* Specifications Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#14171b] border border-white/[0.08]">
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#6b7280] font-mono block mb-1">
                Accommodations
              </span>
              <span className="text-sm font-serif text-[#f8f9fa]">
                {residence.suites} Suites / {residence.baths} Baths
              </span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#6b7280] font-mono block mb-1">
                Ceiling Volume
              </span>
              <span className="text-sm font-serif text-[#f8f9fa]">
                {residence.specs.ceilingHeight}
              </span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#6b7280] font-mono block mb-1">
                Solar Orientation
              </span>
              <span className="text-sm font-serif text-[#f8f9fa]">
                {residence.specs.exposure}
              </span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#6b7280] font-mono block mb-1">
                Water Element
              </span>
              <span className="text-sm font-serif text-[#f8f9fa]">
                {residence.specs.pool}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#8e929a] font-mono mb-4">
              Architectural Highlights &amp; Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {residence.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 bg-[#111316] border border-white/[0.06] flex items-center space-x-2 text-xs text-[#d1d5db]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#c8a876] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] text-[#6b7280] font-mono">
              Confidential Fictional Architectural Portfolio
            </span>

            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(residence.name);
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#c8a876] text-[#08090a] font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#dfc495] flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Schedule Dossier Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
