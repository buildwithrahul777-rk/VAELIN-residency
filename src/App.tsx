import React, { useState } from 'react';
import { Navigation } from './components/Navigation.tsx';
import { HeroScrollReveal } from './components/HeroScrollReveal.tsx';
import { FeaturedResidences } from './components/FeaturedResidences.tsx';
import { ArchitectureSection } from './components/ArchitectureSection.tsx';
import { SignatureResidence } from './components/SignatureResidence.tsx';
import { InteriorsSection } from './components/InteriorsSection.tsx';
import { LifestyleSection } from './components/LifestyleSection.tsx';
import { PropertyCollection } from './components/PropertyCollection.tsx';
import { PhilosophySection } from './components/PhilosophySection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { PrivateEnquiryModal } from './components/PrivateEnquiryModal.tsx';
import { ResidenceDetailModal } from './components/ResidenceDetailModal.tsx';
import { Residence } from './types.ts';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [selectedResidenceForEnquiry, setSelectedResidenceForEnquiry] = useState<string>('');
  const [detailModalResidence, setDetailModalResidence] = useState<Residence | null>(null);

  const handleOpenEnquiry = (residenceName?: string) => {
    setSelectedResidenceForEnquiry(residenceName || 'General Architectural Inquiry');
    setEnquiryModalOpen(true);
  };

  const handleExploreResidences = () => {
    const el = document.getElementById('residences');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090a] text-[#f8f9fa] selection:bg-[#c8a876]/30 selection:text-[#f8f9fa] relative">
      
      {/* Fixed Minimal Luxury Navigation */}
      <Navigation onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Hero Signature Scroll-Scrubbed Building Reveal */}
      <HeroScrollReveal
        onOpenEnquiry={() => handleOpenEnquiry('Pavilion Zero')}
        onExploreResidences={handleExploreResidences}
      />

      {/* 8. Featured Residences (3 Visually Consistent Properties) */}
      <FeaturedResidences
        onSelectResidence={(residence) => setDetailModalResidence(residence)}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* 9. Architecture Section ("DESIGNED WITH INTENTION.") */}
      <ArchitectureSection />

      {/* 10. Signature Residence (Visually Dominant Compound) */}
      <SignatureResidence
        onSelectResidence={(residence) => setDetailModalResidence(residence)}
        onOpenEnquiry={() => handleOpenEnquiry('Pavilion Zero — The Crown Residence')}
      />

      {/* 11. Luxury Interiors Section (Living, Bedroom, Dining, Lounge) */}
      <InteriorsSection />

      {/* 12. Cinematic Lifestyle Section (Landscape, Materiality, Atmosphere) */}
      <LifestyleSection />

      {/* 13. Property Collection Grid */}
      <PropertyCollection
        onSelectResidence={(residence) => setDetailModalResidence(residence)}
      />

      {/* 14. Brand Philosophy ("WE CREATE PLACES WORTH COMING HOME TO.") */}
      <PhilosophySection />

      {/* 15. Final Dramatic Full-Screen CTA */}
      <FinalCtaSection
        onOpenEnquiry={() => handleOpenEnquiry()}
        onExploreCollection={handleExploreCollection}
      />

      {/* 16. Minimal Luxury Footer */}
      <Footer />

      {/* Private Enquiry Consultation Modal */}
      <PrivateEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        selectedResidenceName={selectedResidenceForEnquiry}
      />

      {/* Property Details Modal */}
      <ResidenceDetailModal
        residence={detailModalResidence}
        onClose={() => setDetailModalResidence(null)}
        onOpenEnquiry={(name) => handleOpenEnquiry(name)}
      />

    </div>
  );
}
