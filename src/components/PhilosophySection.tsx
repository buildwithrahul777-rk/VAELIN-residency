import React from 'react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-36 bg-[#0a0c0e] text-[#f8f9fa] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Label & Numerical Philosophy Anchors */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8a876] font-medium block mb-3">
                Design Ethos
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8e929a] font-mono">
                Architectural Principles • No. 01—03
              </p>
            </div>

            <div className="space-y-8 border-l border-white/10 pl-6">
              <div>
                <span className="text-xs font-mono text-[#c8a876] block mb-1">01 / PERMANENCE</span>
                <p className="text-xs text-[#9ca3af] font-light">
                  Structures designed in Roman travertine to age with profound dignity over centuries.
                </p>
              </div>
              <div>
                <span className="text-xs font-mono text-[#c8a876] block mb-1">02 / SILENCE</span>
                <p className="text-xs text-[#9ca3af] font-light">
                  Decoupled structural envelopes eliminating ambient noise to create true psychological sanctuary.
                </p>
              </div>
              <div>
                <span className="text-xs font-mono text-[#c8a876] block mb-1">03 / HARMONY</span>
                <p className="text-xs text-[#9ca3af] font-light">
                  Dissolving the separation between interior rooms and the reflective waters of the exterior.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typographic Manifesto */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f8f9fa] tracking-tight leading-[1.08] mb-10">
              WE CREATE PLACES <br />
              <span className="italic text-[#c8a876] font-light">WORTH COMING</span> <br />
              HOME TO.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#b4b8c0] font-light leading-relaxed max-w-2xl">
              <p>
                True luxury is not defined by excess, but by the intentional absence of noise.
                In our architecture, every line serves a purpose; every opening frames an unrepeatable
                encounter with nature; every material invites touch.
              </p>
              <p className="text-sm text-[#8e929a]">
                We partner with world-renowned stone artisans, acoustic engineers, and master landscape architects to produce fictional residential landmarks designed for generations to come.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex items-center space-x-6">
              <div>
                <span className="text-xs font-serif text-[#f8f9fa] tracking-wide block">
                  Marcus Vaelin &amp; Elena Solis
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c8a876]">
                  Founding Principals • Fictional Atelier
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
