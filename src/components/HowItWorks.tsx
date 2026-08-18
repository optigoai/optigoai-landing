import React from 'react';
import { ArrowRight, CheckCircle2, Globe, Zap, TrendingUp, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface HowItWorksProps {
  onOpenGetStarted: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenGetStarted }) => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80">
            <Zap className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            From Setup to Customer Growth <br className="hidden sm:inline" />
            <span className="italic text-slate-800">in 3 Simple Steps.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            No complex dashboards. No marketing jargon. Just clear daily actions that drive results.
          </p>
        </motion.div>

        {/* 3-Step Visual Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">

          {/* Card 1: Visual Integration Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    01
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border bg-blue-50 text-blue-700 border-blue-200">
                    Instant Link
                  </span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
                  <Globe className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-serif-heading">
                Connect in 60 Seconds
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Secure 1-click platform linking. No technical developer or manual setup required.
              </p>

              {/* Visual 2x2 App Tiles Matrix */}
              <div className="grid grid-cols-2 gap-2.5 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 mb-5">
                <div className="bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base">📍</span>
                    <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">Google Profile</span>
                  <span className="text-[10px] text-slate-500">Maps & Search</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base">📸</span>
                    <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">Instagram</span>
                  <span className="text-[10px] text-slate-500">Feed & Reels</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base">💬</span>
                    <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">Facebook</span>
                  <span className="text-[10px] text-slate-500">Local Audience</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base">🔍</span>
                    <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">Search Console</span>
                  <span className="text-[10px] text-slate-500">Keywords</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% private & secure OAuth</span>
            </div>
          </motion.div>

          {/* Card 2: Live AI Signal Scanner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    02
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border bg-purple-50 text-purple-700 border-purple-200">
                    24/7 Radar
                  </span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-serif-heading">
                AI Finds Opportunities
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Continuously tracks competitor moves, ranking shifts, and missed customer leads.
              </p>

              {/* Visual Live Signal Scanner Box */}
              <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 mb-5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-200/60">
                  <span className="flex items-center gap-1.5 font-bold text-slate-700">
                    Scan multiple Local Signals
                  </span>
                  <span className="text-purple-700 font-semibold">Live</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <span>⚠️</span> Rank Shift Detected
                    </span>
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Actionable</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Competitor posted 3 offers. AI drafted an instant counter-campaign to preserve <strong className="text-slate-900 font-semibold">#1 Rank</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Zero guesswork, automated insights</span>
            </div>
          </motion.div>

          {/* Card 3: 1-Click Action & Growth Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    03
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200">
                    1-Click Growth
                  </span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-serif-heading">
                Approve & Get Customers
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Receive 3 clear daily actions. Review, tap once to publish, and watch customer calls grow.
              </p>

              {/* Visual 1-Click Action Card Preview */}
              <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 mb-5 space-y-2.5">
                <div className="bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">🥐 Weekend 20% Off Promo</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Ready</span>
                  </div>

                  {/* Real 1-Click Action Button Visual */}
                  <div className="w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs">
                    <span>⚡ Publish in 1-Click</span>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-emerald-50/80 px-3 py-2 rounded-xl border border-emerald-200/60 text-xs">
                  <span className="text-emerald-950 font-medium">Customer Actions:</span>
                  <span className="text-emerald-700 font-extrabold text-sm">+148% Calls</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Proven compounding foot traffic</span>
            </div>
          </motion.div>

        </div>

        {/* Bottom Centered CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <button
            onClick={onOpenGetStarted}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <span>Start Free 14-Day Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-slate-500 mt-3">
            Try out • Instant 60-second setup
          </p>
        </motion.div>

      </div>
    </section>
  );
};
