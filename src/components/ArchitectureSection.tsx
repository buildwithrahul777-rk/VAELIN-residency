import React from 'react';
import { Compass, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/residences.ts';

export const ArchitectureSection: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'Material Authenticity',
      desc: 'Honed Roman travertine cut from single quarry blocks, matched with custom fluted architectural bronze profiles and patinated by hand.',
    },
    {
      icon: Sparkles,
      title: 'Choreography of Light',
      desc: 'Frameless low-iron acoustic glazing calibrated to circadian sunrise and blue hour twilight, framing exterior reflections without distortion.',
    },
    {
      icon: Compass,
      title: 'Continuous Horizon',
      desc: 'Flush track systems that sink entirely beneath travertine floor slabs, erasing all boundary between interior sanctuary and water mirrors.',
    },
    {
      icon: ShieldCheck,
      title: 'Acoustic Silence',
      desc: 'Double-envelope structural decoupling ensuring an ambient interior sound rating of less than 22 decibels for profound meditative calm.',
    },
  ];

  return (
    <section id="architecture" className="relative py-32 bg-[#08090a] text-[#f8f9fa] overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="w-8 h-[1px] bg-[#c8a876]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8a876] font-medium">
            Architectural Manifesto
          </span>
        </div>

        {/* Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f8f9fa] tracking-tight leading-[1.05]">
              DESIGNED WITH <br />
              <span className="italic text-[#c8a876] font-light">INTENTION.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#9ca3af] font-light leading-relaxed">
              Architecture is not mere shelter; it is an instrument of perception. We calibrate every elevation, material joint, and water reflection to create spaces that evoke a timeless sense of permanence and tranquility.
            </p>
          </div>
        </div>

        {/* Large Architectural Image & Architectural Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Large Architectural Detail Photograph */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0e1013] border border-white/10">
              <img
                src={ASSETS.architecturalDetail}
                alt="Architectural Materiality Detail"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-95"
              />
              
              {/* Overlay Specification Plate */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#c8a876] font-medium">
                    Material Specification
                  </p>
                  <p className="text-xs font-serif text-[#f8f9fa]">
                    Honed Roman Travertine × Fluted Dark Bronze Joint
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#8e929a] tracking-wider">
                  5mm Shadow Reveal
                </span>
              </div>
            </div>
          </div>

          {/* Architectural Pillars & Negative Space Composition */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:pl-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative pl-6 border-l border-white/10 hover:border-[#c8a876] transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon className="w-4 h-4 text-[#c8a876]" />
                    <h3 className="text-lg font-serif text-[#f8f9fa] tracking-wide group-hover:text-[#c8a876] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8e929a] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
