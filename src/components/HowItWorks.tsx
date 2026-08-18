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
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">Google Profile</span>
                  <span className="text-[10px] text-slate-500">Maps & Search</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <svg className="w-4 h-4 rounded-sm" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="url(#hiw-ig-grad)"/>
                      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="2"/>
                      <circle cx="18" cy="6" r="1.2" fill="white"/>
                      <defs>
                        <linearGradient id="hiw-ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F58529"/>
                          <stop offset="0.5" stopColor="#DD2A7B"/>
                          <stop offset="1" stopColor="#8134AF"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">Instagram</span>
                  <span className="text-[10px] text-slate-500">Feed & Reels</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">Facebook</span>
                  <span className="text-[10px] text-slate-500">Local Audience</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#4285F4"/>
                      <path d="M10 7v5l4-2.5L10 7z" fill="#34A853"/>
                    </svg>
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
            <span>Start now</span>
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
