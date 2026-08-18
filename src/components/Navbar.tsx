import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Video } from 'lucide-react';

interface NavbarProps {
  onOpenGetStarted: () => void;
  onOpenVideoGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetStarted, onOpenVideoGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Impact', href: '#roi-results' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'AI Demo', href: '#ai-cmo-demo' },
    { label: 'For Businesses', href: '#for-businesses' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 pt-4 sm:pt-6 transition-all duration-300 pointer-events-none">

      {/* Dynamic Voiceflow-style Morphing Navbar Container */}
      <div
        className={`pointer-events-auto transition-all duration-300 flex items-center justify-between ${isScrolled
          ? 'w-full max-w-6xl rounded-full glass-nav shadow-lg shadow-black/5 border border-slate-200/80 px-6 sm:px-8 py-3'
          : 'w-full max-w-7xl px-2 sm:px-6 py-1'
          }`}
      >
        {/* Left: OptigoAI Logo */}
        <div className="flex items-center shrink-0 mr-4 sm:mr-8">
          <a href="#" className="flex items-center group">
            <img
              src="/assets/optigoai-logo-removebg.png"
              alt="OptigoAI"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center flex-1 px-4">
          <div
            className={`transition-all duration-300 flex items-center justify-center gap-6 xl:gap-8 whitespace-nowrap ${isScrolled
              ? 'bg-transparent px-0 py-0'
              : 'bg-black/[0.03] backdrop-blur-sm border border-black/[0.04] px-8 py-2.5 rounded-full shadow-xs'
              }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap tracking-normal"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0 ml-4 sm:ml-8">
          <button
            onClick={onOpenVideoGuide}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-950 rounded-full hover:bg-black/[0.04] transition-colors border border-transparent hover:border-slate-200 cursor-pointer whitespace-nowrap"
            title="View Video Recommendations & Specifications"
          >
            <Video className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>Video Guide</span>
          </button>

          <button
            onClick={onOpenGetStarted}
            className="flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all group cursor-pointer whitespace-nowrap"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenGetStarted}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-full shadow-sm whitespace-nowrap"
          >
            Get Started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:text-slate-950 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 inset-x-4 glass-card rounded-2xl p-5 shadow-2xl border border-slate-200 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVideoGuide();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-xl"
            >
              <Video className="w-4 h-4 text-blue-600" />
              <span>Recommended Video Guides</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow transition"
            >
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
