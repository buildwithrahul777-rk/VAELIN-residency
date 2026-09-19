import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface NavigationProps {
  onOpenEnquiry: () => void;
  activeSection?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Residences', href: '#residences' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Signature', href: '#signature' },
    { label: 'Interiors', href: '#interiors' },
    { label: 'Lifestyle', href: '#lifestyle' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#08090a]/90 backdrop-blur-xl border-b border-white/[0.08] py-4'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex flex-col cursor-pointer"
          aria-label="VAELIN Architectural Residences Home"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-[#f8f9fa] font-light group-hover:text-[#c8a876] transition-colors duration-300">
            VAELIN
          </span>
          <span className="text-[8px] uppercase tracking-[0.4em] text-[#8e929a] font-light -mt-1 group-hover:text-[#e3cd9e] transition-colors duration-300">
            Residences
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-9" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[11px] uppercase tracking-[0.25em] text-[#b4b8c0] hover:text-[#c8a876] transition-colors duration-300 relative py-1 group font-medium"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c8a876] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            id="nav-private-enquiry-btn"
            onClick={onOpenEnquiry}
            className="group relative inline-flex items-center space-x-2.5 px-6 py-2.5 bg-transparent border border-[#c8a876]/40 hover:border-[#c8a876] text-[#f5f6f8] hover:text-[#c8a876] text-[10px] uppercase tracking-[0.25em] transition-all duration-300 rounded-none cursor-pointer"
          >
            <span>Private Enquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#c8a876] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#e3e4e8] hover:text-[#c8a876] transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[#08090a]/98 backdrop-blur-2xl border-t border-white/10 z-40 p-8 flex flex-col justify-between">
          <nav className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg uppercase tracking-[0.25em] text-[#e3e4e8] hover:text-[#c8a876] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-4 bg-[#c8a876] text-[#08090a] font-medium text-xs tracking-[0.25em] uppercase transition-colors hover:bg-[#dfc495]"
            >
              Private Enquiry
            </button>
            <p className="text-center text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">
              Fictional Architectural Concept • Demo Only
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
