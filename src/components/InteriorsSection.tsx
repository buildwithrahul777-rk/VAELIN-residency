import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { INTERIOR_SPACES } from '../data/residences.ts';

export const InteriorsSection: React.FC = () => {
  const [activeSpaceId, setActiveSpaceId] = useState<string>(INTERIOR_SPACES[0].id);

  const activeSpace = INTERIOR_SPACES.find((s) => s.id === activeSpaceId) || INTERIOR_SPACES[0];

  return (
    <section id="interiors" className="relative py-32 bg-[#08090a] text-[#f8f9fa] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8a876] font-medium block mb-3">
              Sensory Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#f8f9fa] tracking-tight">
              INTERIOR SANCTUARY
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#9ca3af] font-light leading-relaxed">
            A cohesive interior world where monolithic honed travertine, tactile washed linen, and custom fluted bronze elements meet seamless acoustic glass.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-12 border-b border-white/10 pb-4 overflow-x-auto">
          {INTERIOR_SPACES.map((space) => (
            <button
              key={space.id}
              onClick={() => setActiveSpaceId(space.id)}
              className={`px-5 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-none cursor-pointer ${
                activeSpaceId === space.id
                  ? 'bg-[#c8a876] text-[#08090a] font-medium'
                  : 'bg-[#14171b]/60 text-[#8e929a] hover:text-[#f8f9fa] hover:bg-[#1b1f24]'
              }`}
            >
              {space.title}
            </button>
          ))}
        </div>

        {/* Active Space Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Large Visual */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0e1013] border border-white/10 group">
              <img
                key={activeSpace.id}
                src={activeSpace.image}
                alt={activeSpace.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 filter brightness-95 group-hover:scale-103 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] text-[#e3cd9e] uppercase tracking-[0.2em]">
                <span>{activeSpace.subtitle}</span>
                <span className="text-[#8e929a] font-mono">2700K Ambient</span>
              </div>
            </div>
          </div>

          {/* Editorial Space Details */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8a876] font-medium mb-2">
              Bespoke Interior
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#f8f9fa] mb-4">
              {activeSpace.title}
            </h3>
            <p className="text-sm text-[#9ca3af] font-light leading-relaxed mb-8">
              {activeSpace.description}
            </p>

            <div className="space-y-4 pt-6 border-t border-white/10 mb-8">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#6b7280] font-mono block">
                Architectural Features
              </span>
              {activeSpace.features.map((feat) => (
                <div key={feat} className="flex items-start space-x-3 text-xs text-[#b4b8c0]">
                  <Check className="w-3.5 h-3.5 text-[#c8a876] mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#14171b]/70 border border-white/10 text-xs text-[#8e929a] font-light">
              Furnishings custom-built by northern Italian ateliers exclusively for this development.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
