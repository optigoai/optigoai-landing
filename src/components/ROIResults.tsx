import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ROIResultsProps {
  onOpenGetStarted: () => void;
}

export const ROIResults: React.FC<ROIResultsProps> = ({ onOpenGetStarted }) => {
  const trackingMetrics = [
    { name: 'Google Map Rank', value: 'Rank #1', desc: 'Jumped from position #10 to #1 in local search.' },
    { name: 'Customer Actions', value: '+148%', desc: 'Direct phone calls, directions, and website visits.' },
    { name: 'Map Pack Placement', value: 'Top 3', desc: 'Permanent top placement in Google Places 3-Pack.' },
    { name: 'Hours Saved', value: '28h/mo', desc: 'Autonomous keyword SEO, posts, and review replies.' },
  ];

  return (
    <section id="roi-results" className="py-20 sm:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            Know Where Your <br className="hidden sm:inline" />
            <span className="italic text-slate-800">Marketing Is Working.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            OptigoAI connects your marketing activity with measurable business outcomes. Track search visibility, reviews, calls, and customer growth in real-time. Less guessing. More informed decisions.
          </p>
        </motion.div>

        {/* Real Screen Asset Showcase: Before vs After Google Business Rating */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-sm mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Visual Proof</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                Google Business Profile: Before vs After OptigoAI
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Real Merchant Transformation Example</span>
            </div>
          </div>

          {/* Side-by-Side Before vs After Showcase Grid (Always 2 columns on Mobile & Desktop, compact desktop scale) */}
          <div className="max-w-3xl lg:max-w-4xl mx-auto grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 mb-8">

            {/* Column 1: BEFORE */}
            <div className="flex flex-col bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 sm:pb-3 mb-2.5 sm:mb-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500 shrink-0" />
                  <span className="font-bold text-[10px] sm:text-xs md:text-sm tracking-wide text-red-950 uppercase truncate">
                    BEFORE
                  </span>
                </div>

              </div>

              {/* Before Image (Clean Transparent Phone) */}
              <div className="my-2 sm:my-4 flex justify-center items-center">
                <img
                  src="/assets/rating-before.png"
                  alt="Google Business Profile before OptigoAI"
                  className="max-h-[260px] sm:max-h-[360px] md:max-h-[400px] w-auto object-contain drop-shadow-md"
                />
              </div>

              {/* Before Highlights */}
              <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-slate-700 mt-auto pt-1">
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <span className="text-red-500 font-bold text-xs sm:text-sm leading-none mt-0.5 shrink-0">✕</span>
                  <span><strong>Rank #10</strong> for "best family restaurants"</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <span className="text-red-500 font-bold text-xs sm:text-sm leading-none mt-0.5 shrink-0">✕</span>
                  <span>Buried below neighborhood competitors</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <span className="text-red-500 font-bold text-xs sm:text-sm leading-none mt-0.5 shrink-0">✕</span>
                  <span>Missed high-intent local customer searches</span>
                </li>
              </ul>
            </div>

            {/* Column 2: AFTER */}
            <div className="flex flex-col bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 sm:pb-3 mb-2.5 sm:mb-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="font-bold text-[10px] sm:text-xs md:text-sm tracking-wide text-emerald-950 uppercase truncate">
                    AFTER OPTIGOAI
                  </span>
                </div>
              </div>

              {/* After Image (Clean Transparent Phone) */}
              <div className="my-2 sm:my-4 flex justify-center items-center">
                <img
                  src="/assets/rating-after.png"
                  alt="Google Business Profile after OptigoAI"
                  className="max-h-[260px] sm:max-h-[360px] md:max-h-[400px] w-auto object-contain drop-shadow-md"
                />
              </div>

              {/* After Highlights */}
              <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-slate-700 mt-auto pt-1">
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <span className="text-emerald-600 font-bold text-xs sm:text-sm leading-none mt-0.5 shrink-0">✓</span>
                  <span><strong>#1 Top Spot</strong> for local keyword searches</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <span className="text-emerald-600 font-bold text-xs sm:text-sm leading-none mt-0.5 shrink-0">✓</span>
                  <span>Outranked all area rivals in Google 3-Pack</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <span className="text-emerald-600 font-bold text-xs sm:text-sm leading-none mt-0.5 shrink-0">✓</span>
                  <span><strong>+148% surge</strong> in calls & direction requests</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* 4 Bottom Tracking Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {trackingMetrics.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs"
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                {m.name}
              </span>
              <div className="font-serif-heading text-3xl sm:text-4xl text-slate-900 font-normal mb-2">
                {m.value}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onOpenGetStarted}
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-semibold transition inline-flex items-center gap-2 shadow-md cursor-pointer group"
          >
            <span>See What OptigoAI Can Do For Your Business</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
