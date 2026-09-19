import React, { useState } from 'react';
import { ArrowUpRight, BedDouble, Bath, Square } from 'lucide-react';
import { PROPERTY_COLLECTION } from '../data/residences.ts';
import { Residence } from '../types.ts';

interface PropertyCollectionProps {
  onSelectResidence: (residence: Residence) => void;
}

export const PropertyCollection: React.FC<PropertyCollectionProps> = ({ onSelectResidence }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProperties = PROPERTY_COLLECTION.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'alpine') return p.location.includes('Valais') || p.location.includes('Moritz');
    if (filter === 'lake') return p.location.includes('Geneva') || p.location.includes('Ticino');
    return true;
  });

  return (
    <section id="collection" className="relative py-32 bg-[#08090a] text-[#f8f9fa] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8a876] font-medium block mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#f8f9fa] tracking-tight">
              PROPERTY COLLECTION
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors rounded-none cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#c8a876] text-[#08090a] font-medium'
                  : 'bg-transparent text-[#8e929a] border border-white/10 hover:text-[#f8f9fa]'
              }`}
            >
              All Residences
            </button>
            <button
              onClick={() => setFilter('alpine')}
              className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors rounded-none cursor-pointer ${
                filter === 'alpine'
                  ? 'bg-[#c8a876] text-[#08090a] font-medium'
                  : 'bg-transparent text-[#8e929a] border border-white/10 hover:text-[#f8f9fa]'
              }`}
            >
              Alpine Monoliths
            </button>
            <button
              onClick={() => setFilter('lake')}
              className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors rounded-none cursor-pointer ${
                filter === 'lake'
                  ? 'bg-[#c8a876] text-[#08090a] font-medium'
                  : 'bg-transparent text-[#8e929a] border border-white/10 hover:text-[#f8f9fa]'
              }`}
            >
              Waterfront Atriums
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              onClick={() => onSelectResidence(prop)}
              className="group bg-[#0e1013] border border-white/[0.08] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-500 hover:border-[#c8a876]/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#08090a]">
                <img
                  src={prop.image}
                  alt={prop.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-transparent to-transparent opacity-70" />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[8px] uppercase tracking-[0.2em] bg-black/60 backdrop-blur-md text-[#e3cd9e] border border-white/10">
                  {prop.type}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#8e929a] block mb-1">
                    {prop.location}
                  </span>
                  <h3 className="text-lg font-serif text-[#f8f9fa] group-hover:text-[#c8a876] transition-colors duration-300 mb-2">
                    {prop.name}
                  </h3>
                  <p className="text-xs text-[#9ca3af] font-light line-clamp-2 mb-4">
                    {prop.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#8e929a]">
                  <span>{prop.area}</span>
                  <div className="inline-flex items-center space-x-1 text-[#f8f9fa] group-hover:text-[#c8a876] transition-colors text-[10px] uppercase tracking-[0.15em]">
                    <span>View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
