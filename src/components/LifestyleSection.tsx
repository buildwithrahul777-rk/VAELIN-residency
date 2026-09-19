import React from 'react';
import { LIFESTYLE_ITEMS, ASSETS } from '../data/residences.ts';

export const LifestyleSection: React.FC = () => {
  return (
    <section id="lifestyle" className="relative py-32 bg-[#090b0d] text-[#f8f9fa] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8a876] font-medium block mb-3">
            Atmospheric Living
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#f8f9fa] tracking-tight mb-6">
            A LIFE SHAPED BY STILLNESS
          </h2>
          <p className="text-base text-[#9ca3af] font-light leading-relaxed">
            The experience of living within VAELIN architecture is one of continuous communion with light,
            water, and mountain horizons. Every moment unfolds in an environment calibrated for profound ease.
          </p>
        </div>

        {/* Cinematic Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Large Item: Landscaped Pavilion */}
          <div className="md:col-span-8 group relative bg-[#0e1013] border border-white/10 overflow-hidden">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={ASSETS.landscapePavilion}
                alt="Sculpted Landscape Courtyard"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="p-8 relative z-10 -mt-16">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#c8a876] font-medium block mb-2">
                Landscaped Water Mirrors
              </span>
              <h3 className="text-2xl font-serif text-[#f8f9fa] mb-2">
                The Quiet Courtyard
              </h3>
              <p className="text-sm text-[#9ca3af] font-light max-w-xl">
                Black granite reflection pools engineered with silent circulating pumps mirror the changing sky from sunrise amber to blue hour indigo.
              </p>
            </div>
          </div>

          {/* Secondary Stack Item: Material Tactility */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-8">
            <div className="group relative bg-[#0e1013] border border-white/10 overflow-hidden flex-1">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={ASSETS.architecturalDetail}
                  alt="Material Tactility"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="p-6 relative z-10 -mt-12">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#c8a876] font-medium block mb-1">
                  Tactile Harmony
                </span>
                <h3 className="text-xl font-serif text-[#f8f9fa] mb-1">
                  Honed Roman Travertine
                </h3>
                <p className="text-xs text-[#9ca3af] font-light">
                  Hand-selected stone blocks from ancient quarries, cured and finished with matte silk treatments.
                </p>
              </div>
            </div>

            {/* Editorial Atmosphere Callout Quote */}
            <div className="p-8 bg-[#14171b]/60 border border-white/10 flex flex-col justify-center">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#6b7280] font-mono mb-3 block">
                Circadian Lighting
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#e3cd9e] leading-relaxed mb-4">
                "We do not illuminate walls; we reveal textures and shadows that allow the mind to decompress."
              </p>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8e929a]">
                Atelier Vaelin Lighting Studio
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
