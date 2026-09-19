import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface PrivateEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedResidenceName?: string;
}

export const PrivateEnquiryModal: React.FC<PrivateEnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedResidenceName,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    residenceInterest: selectedResidenceName || 'General Architectural Inquiry',
    format: 'In-Person Atelier Consultation',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0e1013] border border-white/10 p-6 sm:p-10 text-[#f8f9fa] shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-[#8e929a] hover:text-[#f8f9fa] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c8a876] font-medium block mb-2">
                Confidential Commission
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#f8f9fa] tracking-tight mb-2">
                PRIVATE ENQUIRY
              </h3>
              <p className="text-xs sm:text-sm text-[#8e929a] font-light">
                Please provide your contact information to arrange a private dossier consultation with our architectural directors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8e929a] mb-1.5 font-mono">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Harrington"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#14171b] border border-white/10 text-xs text-[#f8f9fa] placeholder-[#525760] focus:outline-none focus:border-[#c8a876] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8e929a] mb-1.5 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@representative.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#14171b] border border-white/10 text-xs text-[#f8f9fa] placeholder-[#525760] focus:outline-none focus:border-[#c8a876] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8e929a] mb-1.5 font-mono">
                    Residence of Interest
                  </label>
                  <select
                    value={formData.residenceInterest}
                    onChange={(e) => setFormData({ ...formData, residenceInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-[#14171b] border border-white/10 text-xs text-[#f8f9fa] focus:outline-none focus:border-[#c8a876] transition-colors"
                  >
                    <option value="Pavilion Zero — The Crown Residence">Pavilion Zero — Crown Residence</option>
                    <option value="The Solstice Monolith">The Solstice Monolith</option>
                    <option value="The Cantilever Pavilion">The Cantilever Pavilion</option>
                    <option value="The Travertine Sanctuary">The Travertine Sanctuary</option>
                    <option value="General Architectural Inquiry">General Portfolio Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8e929a] mb-1.5 font-mono">
                    Consultation Medium
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-4 py-3 bg-[#14171b] border border-white/10 text-xs text-[#f8f9fa] focus:outline-none focus:border-[#c8a876] transition-colors"
                  >
                    <option value="In-Person Atelier Consultation">In-Person Atelier (Genève/Milano)</option>
                    <option value="Private 3D Virtual Walkthrough">Private 3D Virtual Walkthrough</option>
                    <option value="Confidential Phone Briefing">Confidential Phone Briefing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8e929a] mb-1.5 font-mono">
                  Specific Requirements or Timelines
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide any specific spatial or architectural requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#14171b] border border-white/10 text-xs text-[#f8f9fa] placeholder-[#525760] focus:outline-none focus:border-[#c8a876] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[10px] text-[#6b7280]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c8a876]" />
                  <span>Strict NDA &amp; Client Anonymity Observed</span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#c8a876] text-[#08090a] font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#dfc495] cursor-pointer"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center flex flex-col items-center">
            <CheckCircle2 className="w-12 h-12 text-[#c8a876] mb-6" />
            <h3 className="text-2xl font-serif text-[#f8f9fa] mb-3">
              Enquiry Transmitted
            </h3>
            <p className="text-sm text-[#8e929a] max-w-md font-light leading-relaxed mb-8">
              Thank you, {formData.fullName}. A senior architectural director from the Atelier has received your confidential transmission regarding <span className="text-[#c8a876]">{formData.residenceInterest}</span>.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-white/10 text-[#f8f9fa] text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-colors"
            >
              Return to Gallery
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
