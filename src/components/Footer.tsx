import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onOpenGetStarted: () => void;
  onOpenVideoGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGetStarted, onOpenVideoGuide }) => {
  return (
    <footer className="pt-10 sm:pt-16 pb-6 sm:pb-10 bg-[#FAF9F6] relative overflow-hidden">
      
      {/* Main Floating Athleats-Style Footer Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F5F3EF] rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 md:p-14 border border-slate-200/80 shadow-xs"
        >
          
          {/* Top Columns Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 pb-12 border-b border-slate-200/80">
            
            {/* Col 1 & 2: Brand Bio */}
            <div className="col-span-2 lg:col-span-2 space-y-4">
              <a href="#" className="flex items-center">
                <img 
                  src="/assets/optigoai-logo-removebg.png" 
                  alt="OptigoAI" 
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </a>

              <p className="text-slate-600 text-xs sm:text-sm max-w-sm leading-relaxed font-normal">
                Your AI Marketing Manager That Helps You Get More Customers. Autonomous Google SEO, 5-star review replies, and daily growth actions in 5 minutes a day.
              </p>

              <div className="pt-1">
                <span className="inline-block font-serif-heading italic text-xs sm:text-sm text-slate-800 bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                  Understand. Create. Act. Grow.
                </span>
              </div>
            </div>

            {/* Col 3: Platform */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
                Platform
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Google Business AI</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Review Auto-Responder</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">AI Creative Studio</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Local SEO 3-Pack</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Competitor Radar</a></li>
              </ul>
            </div>

            {/* Col 4: Solutions */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
                Industries
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li><a href="#for-businesses" className="hover:text-slate-950 transition-colors">Restaurants & Cafes</a></li>
                <li><a href="#for-businesses" className="hover:text-slate-950 transition-colors">Retail Stores</a></li>
                <li><a href="#for-businesses" className="hover:text-slate-950 transition-colors">Salons & Spas</a></li>
                <li><a href="#for-businesses" className="hover:text-slate-950 transition-colors">Clinics & Health</a></li>
                <li><a href="#for-businesses" className="hover:text-slate-950 transition-colors">Gyms & Fitness</a></li>
              </ul>
            </div>

            {/* Col 5: Resources */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li>
                  <button onClick={onOpenVideoGuide} className="hover:text-slate-950 transition-colors flex items-center gap-1 cursor-pointer">
                    <span>Video Guides</span>
                    <ArrowUpRight className="w-3 h-3 text-blue-600" />
                  </button>
                </li>
                <li><button onClick={onOpenGetStarted} className="hover:text-slate-950 transition-colors text-left cursor-pointer">Free Marketing Audit</button></li>
                <li><a href="#roi-results" className="hover:text-slate-950 transition-colors">ROI Calculator</a></li>
                <li><a href="#faq" className="hover:text-slate-950 transition-colors">Help & FAQ</a></li>
              </ul>
            </div>

            {/* Col 6: Company & Legal */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li><button onClick={onOpenGetStarted} className="hover:text-slate-950 transition-colors cursor-pointer">About Us</button></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Security Overview</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Row inside Floating Card */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-6">
              <span>© OptigoAI 2026</span>
              
              {/* Social Links with clean SVGs */}
              <div className="flex items-center gap-4 text-slate-500">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" aria-label="X (Twitter)">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            <div>
              Built for small and growing businesses worldwide.
            </div>
          </div>

        </motion.div>
      </div>

      {/* Large Shadow/Watermark Font Under the Footer that Merges with the Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative -mt-6 sm:-mt-12 md:-mt-20 pointer-events-none select-none overflow-hidden z-0 px-4"
      >
        <div className="text-center font-bold tracking-tight text-[17vw] sm:text-[18vw] leading-none uppercase font-serif-heading bg-gradient-to-b from-slate-900/25 via-slate-900/10 to-transparent bg-clip-text text-transparent whitespace-nowrap">
          OptigoAI
        </div>
      </motion.div>

    </footer>
  );
};
