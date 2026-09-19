import React from 'react';
import { ArrowUpRight, Shield } from 'lucide-react';
import { ASSETS } from '../data/residences.ts';

interface FinalCtaSectionProps {
  onOpenEnquiry: () => void;
  onExploreCollection: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenEnquiry,
  onExploreCollection,
}) => {
  return (
    <section id="contact" className="relative min-h-[90vh] flex items-center justify-center bg-[#08090a] overflow-hidden border-t border-white/[0.08]">
      
      {/* Dramatic Evening Architectural Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.eveningCta}
          alt="Evening Monolith Architectural Residence"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-110 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/40 to-[#08090a]/80" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 mb-8 rounded-full border border-[#c8a876]/40 bg-black/60 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8a876]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#e3cd9e] font-medium">
            Private Portfolio Access
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#f8f9fa] tracking-tight leading-[0.98] mb-8">
          YOUR NEXT ADDRESS <br />
          <span className="italic font-light text-[#c8a876]">STARTS HERE.</span>
        </h2>

        <p className="max-w-xl text-base sm:text-lg text-[#cbd0d8] font-light leading-relaxed mb-12">
          Commission your residence or arrange a confidential private review with our architectural partners. 
          Limited to select private estates worldwide.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            id="final-request-consultation-btn"
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-10 py-5 bg-[#c8a876] text-[#08090a] font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#dfc495] shadow-2xl hover:shadow-[#c8a876]/30 cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Request a Private Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            id="final-explore-collection-btn"
            onClick={onExploreCollection}
            className="w-full sm:w-auto px-10 py-5 bg-black/50 border border-white/20 text-[#f8f9fa] font-medium text-xs tracking-[0.25em] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#c8a876] hover:text-[#c8a876] cursor-pointer"
          >
            Explore the Collection
          </button>
        </div>

        <p className="mt-12 text-[10px] tracking-[0.25em] text-[#8e929a] uppercase font-mono">
          Strictly Confidential • Fictional Demo Real Estate Portal
        </p>

      </div>
    </section>
  );
};
