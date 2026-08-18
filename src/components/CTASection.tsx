import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  onOpenGetStarted: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenGetStarted }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F6] relative overflow-hidden">

      {/* Background Soft Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-emerald-100/40 via-blue-100/30 to-teal-100/40 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Light-Themed Luxury CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-[#F5F8F5] via-white to-[#EEF5F0] rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 md:p-20 text-center shadow-lg border border-emerald-900/10 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow inside Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-200/80 shadow-xs">
              <span>Start Now</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-6">
              Stop Wondering What To Do Next. <br />
              <span className="italic font-serif-heading font-normal text-slate-800">
                Ready to Grow Your Business Smarter?
              </span>
            </h2>

            {/* Subheadline & Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
              Let OptigoAI understand your business, find your hidden opportunities, and help you turn them into customer growth. You focus on running your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={onOpenGetStarted}
                className="w-full sm:w-auto px-9 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Start Growing with OptigoAI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenGetStarted}
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 rounded-full border border-slate-200/90 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join the Waitlist</span>
              </button>
            </div>

            {/* Trust Badges under CTA */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Easy Onboarding
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> AI Expert Support
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Instant Google Profile sync
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-6">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Your AI Marketing Manager is ready when you are.</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
