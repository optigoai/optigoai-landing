import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FutureVisionProps {
  onOpenGetStarted: () => void;
}

export const FutureVision: React.FC<FutureVisionProps> = ({ onOpenGetStarted }) => {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-emerald-600/10 to-indigo-600/20 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Mission</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight mb-8">
            We're Building the AI Marketing Team <br className="hidden sm:inline" />
            <span className="italic font-serif-heading text-slate-300">for Every Business.</span>
          </h2>

          <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-slate-800 text-left space-y-6 max-w-3xl mx-auto shadow-2xl">
            <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
              Our goal is simple: Give every small and medium-sized business access to the marketing intelligence and execution capabilities of a world-class marketing team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs font-bold text-red-400 block mb-1">01. Zero High Retainers</span>
                <p className="text-xs text-slate-300">Without the $5,000/mo agency-sized cost.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs font-bold text-amber-400 block mb-1">02. Zero Complexity</span>
                <p className="text-xs text-slate-300">Without confusing enterprise software.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs font-bold text-emerald-400 block mb-1">03. Zero Guesswork</span>
                <p className="text-xs text-slate-300">Without needing to become a marketer.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Democratizing autonomous marketing for 33M+ small businesses worldwide.
              </span>
              <button
                onClick={onOpenGetStarted}
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30 shrink-0"
              >
                <span>Join Our Growth Movement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
