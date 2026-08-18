import React from 'react';
import { ArrowRight, Sparkles, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface WhyOptigoAIProps {
  onOpenGetStarted: () => void;
}

export const WhyOptigoAI: React.FC<WhyOptigoAIProps> = ({ onOpenGetStarted }) => {
  return (
    <section id="why-optigo" className="py-20 sm:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The OptigoAI Architecture</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            From Scattered Data <br className="hidden sm:inline" />
            <span className="italic text-slate-800">to One Daily Action Plan.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            OptigoAI connects your business touchpoints, filters out the noise, and delivers 3 clear actions every morning.
          </p>
        </motion.div>

        {/* 1. Visual Flowchart Pipeline (Data Funnel ➔ AI Engine ➔ 1 Action Plan) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm mb-10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

            {/* Step 1: Input Channels (4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                1. Connected Touchpoints
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70 text-left">
                  <span className="text-base block mb-1">📍</span>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Google Maps</span>
                  <span className="text-[10px] text-slate-500">Local Ranking</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70 text-left">
                  <span className="text-base block mb-1">⭐</span>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Reviews</span>
                  <span className="text-[10px] text-slate-500">Customer Ratings</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70 text-left">
                  <span className="text-base block mb-1">📸</span>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Instagram & FB</span>
                  <span className="text-[10px] text-slate-500">Social Audience</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70 text-left">
                  <span className="text-base block mb-1">🔍</span>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Search Trends</span>
                  <span className="text-[10px] text-slate-500">Keyword Gaps</span>
                </div>
              </div>
            </div>

            {/* Middle Pipeline: Real AI Marketing Synthesis Hub (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center py-4 px-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="hidden lg:block w-8 h-[2px] bg-gradient-to-r from-slate-200 to-blue-400" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/25 relative">
                  <Sparkles className="w-7 h-7" />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  </span>
                </div>
                <div className="hidden lg:block w-8 h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400" />
              </div>
              <span className="text-xs font-bold text-slate-900 block">OptigoAI Synthesis</span>
              <span className="text-[11px] text-slate-500 mt-0.5 max-w-[220px]">
                Analyzes reviews, rank drops & competitor promos automatically
              </span>
            </div>

            {/* Step 3: Output Action Plan (4 cols) */}
            <div className="lg:col-span-4">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-3">
                2. Daily 5-Minute Checklist
              </span>
              <div className="bg-emerald-50/70 rounded-2xl p-3.5 border border-emerald-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 pb-1 border-b border-emerald-100">
                  <span className="flex items-center gap-1.5">
                    <span>🎯</span> 3 Ready Actions
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200 shadow-xs">
                    1-Click Ready
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-700">
                  <div className="bg-white px-3 py-2 rounded-xl border border-emerald-100/90 shadow-2xs flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                      <span className="truncate font-medium">Inject #1 Map Keyword</span>
                    </div>
                    <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">SEO</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-emerald-100/90 shadow-2xs flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                      <span className="truncate font-medium">Publish Weekend Promo</span>
                    </div>
                    <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">Post</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-emerald-100/90 shadow-2xs flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                      <span className="truncate font-medium">Auto-Reply to 5★ Reviews</span>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Reviews</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. Visual Comparison Bento: Old Fragmentation vs. OptigoAI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-12">

          {/* Left: Traditional Marketing Chaos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Traditional Way</span>
                <span className="text-[11px] font-bold bg-red-50 text-red-700 px-3 py-0.5 rounded-full border border-red-100">
                  Chaos & Waste
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif-heading">
                5+ Tools & Expensive Retainers
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 font-medium">50+ confusing charts with zero clear steps</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 font-medium">15–20 wasted hours/week on manual tasks</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 font-medium">$1,500/mo agency fees for slow updates</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Time: 15+ Hours / Week</span>
              <span>Cost: $$$ High</span>
            </div>
          </motion.div>

          {/* Right: The OptigoAI Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-blue-900/60 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient light glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">OptigoAI Way</span>
                <span className="text-[11px] font-bold bg-blue-500/20 text-blue-300 px-3 py-0.5 rounded-full border border-blue-400/30">
                  Autonomous CMO
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-6 font-serif-heading">
                One Simple Action Plan Daily
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-md text-xs sm:text-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-200 font-medium">3 Daily plain-English actions ready to approve</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-md text-xs sm:text-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-200 font-medium">Studio creatives & 5★ review replies in 1 tap</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-md text-xs sm:text-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-200 font-medium">24/7 Google Maps #1 rank optimization</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-blue-200 font-medium">
              <span>Time: &lt; 5 Mins / Day</span>
              <span className="text-emerald-400 font-bold">1/10th Agency Cost</span>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenGetStarted}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <span>Get Started in 60 Seconds</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
