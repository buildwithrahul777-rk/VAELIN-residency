import React from 'react';
import { ArrowUpRight, BedDouble, Bath, Maximize2, Waves, Eye } from 'lucide-react';
import { SIGNATURE_RESIDENCE } from '../data/residences.ts';
import { Residence } from '../types.ts';

interface SignatureResidenceProps {
  onSelectResidence: (residence: Residence) => void;
  onOpenEnquiry: () => void;
}

export const SignatureResidence: React.FC<SignatureResidenceProps> = ({
  onSelectResidence,
  onOpenEnquiry,
}) => {
  return (
    <section id="signature" className="relative py-32 bg-[#0a0c0e] text-[#f8f9fa] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8a876] font-medium block mb-2">
            The Pinnacle Estate
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#f8f9fa] tracking-tight">
            SIGNATURE RESIDENCE
          </h2>
        </div>

        {/* Hero Dominant Card */}
        <div className="relative w-full bg-[#0e1013] border border-white/10 overflow-hidden group">
          
          {/* Large Exterior Image with Cinematic Scaling */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={SIGNATURE_RESIDENCE.image}
              alt={SIGNATURE_RESIDENCE.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-black/30 to-transparent opacity-90" />
            
            {/* Top Right Live Tag */}
            <div className="absolute top-6 right-6 px-4 py-1.5 bg-black/70 backdrop-blur-md border border-[#c8a876]/40 text-[#c8a876] text-[10px] uppercase tracking-[0.2em] font-medium">
              Private Commission Only
            </div>
          </div>

          {/* Editorial Content & Specs Grid */}
          <div className="p-8 sm:p-12 lg:p-16 -mt-16 sm:-mt-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              
              <div className="lg:col-span-8">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#8e929a] mb-2">
                  {SIGNATURE_RESIDENCE.location}
                </p>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f8f9fa] tracking-tight mb-4">
                  {SIGNATURE_RESIDENCE.name}
                </h3>
                <p className="text-sm sm:text-base text-[#b4b8c0] font-light leading-relaxed max-w-2xl mb-8">
                  {SIGNATURE_RESIDENCE.description}
                </p>

                {/* Specs Pill Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8e929a] block mb-1 font-mono">
                      Internal Footprint
                    </span>
                    <span className="text-sm font-serif text-[#f8f9fa]">{SIGNATURE_RESIDENCE.area}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8e929a] block mb-1 font-mono">
                      Accommodations
                    </span>
                    <span className="text-sm font-serif text-[#f8f9fa]">
                      {SIGNATURE_RESIDENCE.suites} Suites • {SIGNATURE_RESIDENCE.baths} Baths
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8e929a] block mb-1 font-mono">
                      Ceiling Height
                    </span>
                    <span className="text-sm font-serif text-[#f8f9fa]">{SIGNATURE_RESIDENCE.specs.ceilingHeight}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8e929a] block mb-1 font-mono">
                      Reflection Pool
                    </span>
                    <span className="text-sm font-serif text-[#f8f9fa]">32m Black Mirror</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
                <button
                  id="signature-explore-btn"
                  onClick={() => onSelectResidence(SIGNATURE_RESIDENCE)}
                  className="w-full py-4 px-6 bg-[#c8a876] text-[#08090a] font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#dfc495] flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Explore Signature Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  id="signature-enquiry-btn"
                  onClick={onOpenEnquiry}
                  className="w-full py-4 px-6 bg-transparent border border-white/20 text-[#f8f9fa] font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:border-[#c8a876] hover:text-[#c8a876] cursor-pointer text-center"
                >
                  Schedule Private Viewing
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
