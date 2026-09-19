import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Maximize2, BedDouble, Bath } from 'lucide-react';
import { FEATURED_RESIDENCES } from '../data/residences.ts';
import { Residence } from '../types.ts';

interface FeaturedResidencesProps {
  onSelectResidence: (residence: Residence) => void;
  onOpenEnquiry: () => void;
}

export const FeaturedResidences: React.FC<FeaturedResidencesProps> = ({
  onSelectResidence,
  onOpenEnquiry,
}) => {
  return (
    <section id="residences" className="relative py-32 bg-[#08090a] text-[#f8f9fa] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase text-[#c8a876] font-medium mb-3">
              <span>Collection 2026</span>
              <span className="text-[#3a3f47]">•</span>
              <span>Architectural Monoliths</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#f8f9fa] tracking-tight">
              FEATURED RESIDENCES
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#9ca3af] font-light leading-relaxed">
            Three signature estates embodying the same architectural language of monolithic travertine,
            continuous floor-to-ceiling acoustic glass, and contemplative water reflection courtyards.
          </p>
        </div>

        {/* 3 Visually Consistent Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_RESIDENCES.map((residence, idx) => (
            <div
              key={residence.id}
              id={`featured-card-${residence.id}`}
              onClick={() => onSelectResidence(residence)}
              className="group relative bg-[#0e1013] border border-white/[0.08] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-700 hover:border-[#c8a876]/40 hover:shadow-2xl hover:shadow-black/80"
            >
              {/* Image Container with Cinematic Zoom Effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#08090a]">
                <img
                  src={residence.image}
                  alt={residence.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108 filter brightness-95 group-hover:brightness-105"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

                {/* Property Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[9px] uppercase tracking-[0.2em] bg-black/60 backdrop-blur-md text-[#e3cd9e] border border-white/10 font-medium">
                    {residence.type}
                  </span>
                </div>

                {/* Card Number */}
                <div className="absolute top-4 right-4 text-[11px] font-mono text-[#6b7280] tracking-widest">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Information */}
              <div className="p-8 flex-1 flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-1">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8e929a] mb-1.5">
                    {residence.location}
                  </p>
                  <h3 className="text-2xl font-serif text-[#f8f9fa] tracking-wide mb-2 group-hover:text-[#c8a876] transition-colors duration-300">
                    {residence.name}
                  </h3>
                  <p className="text-xs text-[#c8a876] italic mb-4 font-serif">
                    {residence.tagline}
                  </p>
                  <p className="text-sm text-[#9ca3af] font-light leading-relaxed line-clamp-3 mb-6">
                    {residence.description}
                  </p>
                </div>

                {/* Property Metrics & Explore CTA */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-[#8e929a]">
                    <span className="flex items-center space-x-1">
                      <BedDouble className="w-3.5 h-3.5 text-[#c8a876]" />
                      <span>{residence.suites} Suites</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Bath className="w-3.5 h-3.5 text-[#c8a876]" />
                      <span>{residence.baths} Baths</span>
                    </span>
                  </div>

                  <div className="inline-flex items-center space-x-1 text-xs uppercase tracking-[0.2em] text-[#f8f9fa] group-hover:text-[#c8a876] transition-colors font-medium">
                    <span>Explore</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#6b7280]">
            Each residence is engineered with bespoke travertine quarry allocations and acoustic isolated envelopes.
          </p>
        </div>

      </div>
    </section>
  );
};
