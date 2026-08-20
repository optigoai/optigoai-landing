import React from 'react';
import { Search, ArrowRight, Utensils, ShoppingBag, Scissors, Dumbbell, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface BuiltForSmallBusinessesProps {
  onOpenGetStarted: () => void;
}

export const BuiltForSmallBusinesses: React.FC<BuiltForSmallBusinessesProps> = ({ onOpenGetStarted }) => {
  const growthLevers = [
    'Google 3-Pack', '5-Star Reviews', 'Local SEO', 'Seasonal Offers',
    'Competitor Radar', 'Photo SEO', 'Holiday Hours', 'Multi-Channel Sync',
    'Keyword Gaps', 'Direct Phone Calls', 'Direction Requests', 'Review Shield'
  ];

  return (
    <section id="for-businesses" className="py-20 sm:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Athleats Style Split Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.08]">
              The AI marketing assistant <br className="hidden sm:inline" />
              for small businesses.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Tailored growth playbooks and daily actions to stay ahead.
            </p>
          </div>
        </motion.div>

        {/* Athleats Bento Grid Layout (100% Feature-Focused & Product-Driven) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">

          {/* Card 1 (Top Left, 4 Cols): Advanced Campaign Studio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="lg:col-span-4 bg-[#F5F3EF] rounded-3xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between shadow-xs"
          >
            <div>
              {/* Mockup Search & Post Preview */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs mb-6 space-y-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-700">
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-medium">Weekend Special Promo|</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 space-y-1">
                    <div className="h-16 bg-gradient-to-tr from-amber-200/60 to-orange-100/80 rounded-lg flex items-center justify-center text-xs font-bold text-amber-900">
                      🥐 20% Off
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 block truncate">Google Post</span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 space-y-1">
                    <div className="h-16 bg-gradient-to-tr from-blue-200/60 to-indigo-100/80 rounded-lg flex items-center justify-center text-xs font-bold text-blue-900">
                      ☕ Story Banner
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 block truncate">Instagram Story</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <strong className="text-slate-900 font-bold">1-Click Campaign Studio.</strong> Create seasonal promos and posts for every platform in under 15 seconds.
              </p>
            </div>
          </motion.div>

          {/* Card 2 (Top Center, 4 Cols): Key Growth Levers Pill Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.55 }}
            className="lg:col-span-4 bg-[#F5F3EF] rounded-3xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between shadow-xs"
          >
            <div>
              {/* Cloud of pills preview */}
              <div className="flex flex-wrap gap-2 mb-6 p-2">
                {growthLevers.map((lever, idx) => (
                  <span
                    key={lever}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${idx === 0
                        ? 'bg-blue-600 text-white shadow-xs'
                        : idx === 1
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : 'bg-white text-slate-700 border border-slate-200/80 shadow-xs'
                      }`}
                  >
                    {lever}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <strong className="text-slate-900 font-bold">Key Growth Levers.</strong> Prioritizes what moves the needle for your revenue — automatically.
              </p>
            </div>
          </motion.div>

          {/* Card 3 (Top Right, 4 Cols): Soft Peach Reputation Shield Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.55 }}
            className="lg:col-span-4 bg-[#FDF0E6] rounded-3xl p-6 sm:p-8 border border-[#F6DEC9] flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/80 text-amber-900 px-3 py-1 rounded-full border border-amber-200">
                  Reputation Shield
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-amber-500 mb-2">
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <span className="font-bold text-slate-900 text-sm ml-1">4.9 / 5.0</span>
              </div>

              <h3 className="font-serif-heading text-2xl text-slate-900 mb-2">
                Autonomous Review Manager
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Never leave a review unanswered. Instant personalized replies protect your reputation 24/7.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2D2BA] flex items-center justify-between text-xs text-amber-950 font-semibold">
              <span>Response Speed: &lt; 3 mins</span>
              <span className="text-emerald-700 font-bold">100% Coverage</span>
            </div>
          </motion.div>

          {/* Card 4 (Bottom Left, 8 Cols): Soft Sage Green Local Dominance Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="lg:col-span-8 bg-[#EAF3E8] rounded-3xl p-6 sm:p-8 border border-[#D7E8D3] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Local Search Discovery
                </span>
              </div>

              <h3 className="font-serif-heading text-2xl sm:text-3xl text-slate-900 leading-tight">
                Dominate Local Google Searches
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl">
                Stay in Google’s top 3 results with optimized keywords, fresh posts, and consistent engagement.
              </p>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white/80 rounded-2xl p-3 border border-emerald-200/80 text-center">
                  <span className="text-base sm:text-lg font-bold text-slate-900 block">+148%</span>
                  <span className="text-[10px] text-slate-600 font-medium">Local Actions</span>
                </div>
                <div className="bg-white/80 rounded-2xl p-3 border border-emerald-200/80 text-center">
                  <span className="text-base sm:text-lg font-bold text-slate-900 block">Top 3</span>
                  <span className="text-[10px] text-slate-600 font-medium">Map Pack Rank</span>
                </div>
                <div className="bg-white/80 rounded-2xl p-3 border border-emerald-200/80 text-center">
                  <span className="text-base sm:text-lg font-bold text-slate-900 block">&lt; 5 Min</span>
                  <span className="text-[10px] text-slate-600 font-medium">Daily Routine</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-2 w-full md:w-auto">
              <button
                onClick={onOpenGetStarted}
                className="w-full md:w-auto px-6 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-full text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Audit Your Search Rank</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] text-emerald-800 font-medium">Instant 60-Second Scan</span>
            </div>
          </motion.div>

          {/* Card 5 (Bottom Right, 4 Cols): Industries & Playbooks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.20, duration: 0.55 }}
            className="lg:col-span-4 bg-[#F5F3EF] rounded-3xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between shadow-xs"
          >
            <div>
              {/* 2x2 Category Tiles */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 text-center shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 mx-auto flex items-center justify-center mb-1.5">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 block">Restaurant</span>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 text-center shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-1.5">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 block">Retail Store</span>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 text-center shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 mx-auto flex items-center justify-center mb-1.5">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 block">Salon & Spa</span>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 text-center shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 mx-auto flex items-center justify-center mb-1.5">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 block">Gym & Fitness</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <strong className="text-slate-900 font-bold">Pre-Trained Industry Playbooks.</strong> Customized growth plans for your industry — zero setup needed.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
