import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050607] text-[#8e929a] pt-24 pb-16 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <span className="font-serif text-3xl tracking-[0.25em] text-[#f8f9fa] block mb-2 font-light">
              VAELIN
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#c8a876] block mb-6">
              Architectural Residences
            </span>
            <p className="text-xs text-[#6b7280] font-light max-w-sm leading-relaxed mb-6">
              An architectural development atelier sculpting residences from Roman travertine, acoustic glass, and contemplative water reflection courtyards.
            </p>
            <div className="text-[10px] font-mono text-[#525760]">
              GENÈVE • MILANO • KYOTO • ZÜRICH
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#f8f9fa] font-medium block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#8e929a]">
              <li><a href="#hero-track" className="hover:text-[#c8a876] transition-colors">Reveal Experience</a></li>
              <li><a href="#residences" className="hover:text-[#c8a876] transition-colors">Featured Residences</a></li>
              <li><a href="#architecture" className="hover:text-[#c8a876] transition-colors">Architecture</a></li>
              <li><a href="#signature" className="hover:text-[#c8a876] transition-colors">Signature Residence</a></li>
              <li><a href="#interiors" className="hover:text-[#c8a876] transition-colors">Interiors</a></li>
              <li><a href="#lifestyle" className="hover:text-[#c8a876] transition-colors">Lifestyle</a></li>
              <li><a href="#philosophy" className="hover:text-[#c8a876] transition-colors">Philosophy</a></li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="lg:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#f8f9fa] font-medium block mb-4">
              Private Concierge
            </span>
            <div className="space-y-3 text-xs text-[#8e929a] font-light">
              <p>Boulevard des Tranchées 14<br />CH-1206 Genève (Fictional Demo)</p>
              <p className="font-mono text-[#c8a876]">concierge@vaelin-residences.demo</p>
              <p className="font-mono">+41 22 800 00 00 (Demo)</p>
            </div>
          </div>

          {/* Social Placeholders & Back to Top */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#f8f9fa] font-medium block mb-4">
                Dispatches
              </span>
              <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.2em] text-[#8e929a]">
                <span className="hover:text-[#c8a876] cursor-pointer transition-colors">Instagram</span>
                <span>•</span>
                <span className="hover:text-[#c8a876] cursor-pointer transition-colors">Architectural Digest</span>
                <span>•</span>
                <span className="hover:text-[#c8a876] cursor-pointer transition-colors">Vimeo</span>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#c8a876] hover:text-[#f8f9fa] transition-colors cursor-pointer"
              >
                <span>Return to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Fictional Demo Disclaimer Banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-wider text-[#525760]">
          <p>
            © {new Date().getFullYear()} VAELIN RESIDENCES. ALL RIGHTS RESERVED.
          </p>
          <p className="text-center md:text-right max-w-xl">
            DEMO DISCLAIMER: This website is an autonomous creative design demonstration. All architectural properties, images, descriptions, names, and contact details are purely fictional and generated for visual concept evaluation.
          </p>
        </div>

      </div>
    </footer>
  );
};
