import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

interface HeroSectionProps {
  onOpenGetStarted: () => void;
  onOpenVideoGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenGetStarted, onOpenVideoGuide }) => {
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  const headlinePart1 = ["Your", "AI", "Marketing", "Assistant"];
  const headlinePart2 = ["That", "Helps", "You", "Get", "More", "Customers."];

  const wordContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.08,
      },
    },
  };

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 overflow-hidden">

      {/* Background soft ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-blue-100/50 via-emerald-50/40 to-indigo-100/40 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-50/60 rounded-full blur-2xl -z-10" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-emerald-50/60 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Centered Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18 relative z-10">

          {/* Semi-Circular Ambient Dome Gradient Originating Directly from the Top of the Bottom Showcase Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-14 sm:-bottom-18 md:-bottom-20 w-[140vw] sm:w-[115vw] max-w-[1450px] h-[650px] sm:h-[800px] md:h-[950px] pointer-events-none -z-10"
          >
            {/* Outer Broad Arch */}
            <div
              className="w-full h-full rounded-t-[1200px] blur-3xl opacity-90"
              style={{
                background: 'radial-gradient(ellipse 95% 90% at 50% 100%, rgba(59, 130, 246, 0.42) 0%, rgba(99, 102, 241, 0.28) 35%, rgba(147, 197, 253, 0.20) 65%, rgba(219, 234, 254, 0.08) 85%, transparent 100%)'
              }}
            />
            {/* Inner Vibrant Core */}
            <div
              className="absolute inset-x-[8%] bottom-0 h-[90%] rounded-t-[900px] blur-2xl opacity-95"
              style={{
                background: 'radial-gradient(ellipse 85% 80% at 50% 100%, rgba(37, 99, 235, 0.52) 0%, rgba(56, 189, 248, 0.38) 40%, rgba(147, 197, 253, 0.18) 75%, transparent 90%)'
              }}
            />
          </motion.div>

          {/* Small Badge - Clean Dot Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm border border-slate-700/60 hover:border-slate-500 transition-colors"
          >
            <span>AI-POWERED MARKETING ASSISTANT</span>
          </motion.div>

          {/* Editorial Grand Headline with Letter/Word Boot Reveal Animation */}
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="visible"
            className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.08] mb-6 flex flex-wrap justify-center gap-x-3 sm:gap-x-4.5 gap-y-1"
          >
            <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 w-full">
              {headlinePart1.map((word, idx) => (
                <motion.span key={idx} variants={wordVariant} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 w-full">
              <span className="italic font-serif-heading font-normal text-slate-800 flex flex-wrap justify-center gap-x-2 sm:gap-x-3">
                {headlinePart2.map((word, idx) => (
                  <motion.span key={idx} variants={wordVariant} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </span>
            </div>
          </motion.h1>

          {/* Subheadline - Enters smoothly after headline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10"
          >
            OptigoAI finds what’s holding you back, creates your marketing, and tells you exactly what to do next.
          </motion.p>

          {/* CTA Buttons - Enter after subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6"
          >
            <button
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenVideoGuide}
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-medium text-slate-700 bg-white hover:bg-slate-50 rounded-full border border-slate-200/90 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-blue-600 translate-x-0.5" />
              </div>
              <span>See How It Works</span>
            </button>
          </motion.div>

          {/* Small Trust Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-medium"
          >
            <span>Built for small and growing businesses. No marketing degree required.</span>
          </motion.div>
        </div>

        {/* Hero Showcase Split Card with Subtle Nature Backdrop & Cool iOS Liquid Glass Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] border border-slate-200/80 bg-slate-950 p-4 sm:p-7 md:p-10 transform-gpu"
        >
          {/* Subdued, Calm Landscape Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/assets/hero_lush_background.jpg"
              alt="Lush landscape texture"
              className="w-full h-full object-cover object-center opacity-70 saturate-[80%]"
            />
            {/* Cool Slate-Blue Ambient Tint (Tones down harsh warmth & brightness) */}
            <div className="absolute inset-0 bg-slate-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/50" />
          </div>

          <div className="relative z-10">

            {/* Visual Bento Grid: 3 Cool Liquid Glass Product Widgets */}
            <div className="space-y-4">

              {/* Mobile Tab Switcher (Subtle Frosted Capsule) */}
              <div className="flex sm:hidden items-center justify-between p-1.5 bg-white/[0.08] backdrop-blur-2xl rounded-2xl border border-white/20 shadow-md mb-3">
                {[
                  { label: 'Map Rank', id: 0 },
                  { label: 'AI Studio', id: 1 },
                  { label: 'Reviews', id: 2 },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePromptIndex(tab.id)}
                    className={`flex-1 py-2 px-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activePromptIndex === tab.id
                      ? 'bg-white text-slate-900 shadow-md'
                      : 'text-slate-300 hover:text-white'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* 3 Cool Liquid Glass Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">

                {/* Card 1: Google Map #1 Rank Booster */}
                <div className={`bg-white/[0.10] backdrop-blur-2xl rounded-3xl p-5 sm:p-6 border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.25),inset_0_1px_1.5px_rgba(255,255,255,0.3)] flex flex-col justify-between transition-all hover:bg-white/[0.14] ${activePromptIndex !== 0 ? 'hidden md:flex' : 'flex'
                  }`}>
                  <div>


                    <div className="text-center py-3.5 bg-white/[0.06] backdrop-blur-md rounded-2xl border border-white/15 mb-4">
                      <span className="text-[11px] text-slate-400 font-medium block mb-1">Search Position</span>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-slate-500 line-through text-sm font-bold">#10</span>
                        <span className="text-emerald-400 font-bold text-sm">→</span>
                        <span className="text-2xl sm:text-3xl font-serif-heading text-white font-bold">#1 Rank</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between bg-white/[0.06] backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                        <span className="text-slate-200 font-medium">"Specialty Coffee"</span>
                        <span className="text-emerald-300 font-bold">#1 Map</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/[0.06] backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                        <span className="text-slate-200 font-medium">"Best Cafe Near Me"</span>
                        <span className="text-emerald-300 font-bold">#1 Map</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                    <span>Actions & Calls:</span>
                    <span className="text-emerald-300 font-bold text-sm">+148%</span>
                  </div>
                </div>

                {/* Card 2: 1-Click AI Campaign Studio */}
                <div className={`bg-white/[0.10] backdrop-blur-2xl rounded-3xl p-5 sm:p-6 border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.25),inset_0_1px_1.5px_rgba(255,255,255,0.3)] flex flex-col justify-between transition-all hover:bg-white/[0.14] ${activePromptIndex !== 1 ? 'hidden md:flex' : 'flex'
                  }`}>
                  <div>

                    {/* Creative Card Preview (Subtle Cool Frosted) */}
                    <div className="bg-white/[0.08] backdrop-blur-md p-4 rounded-2xl border border-white/15 mb-4 text-center">
                      <h4 className="font-bold text-white text-sm">Weekend 20% Off Brunch</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5 font-normal">Formatted for Google, IG & Facebook</p>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <span className="text-[10px] font-medium bg-white/[0.08] px-2.5 py-1 rounded-lg border border-white/10 text-slate-300">Google Post</span>
                      <span className="text-[10px] font-medium bg-white/[0.08] px-2.5 py-1 rounded-lg border border-white/10 text-slate-300">Instagram</span>
                      <span className="text-[10px] font-medium bg-white/[0.08] px-2.5 py-1 rounded-lg border border-white/10 text-slate-300">Facebook</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/15">
                    <button
                      onClick={onOpenGetStarted}
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/30"
                    >
                      <span>Publish in 1-Click</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card 3: 5-Star Review Shield */}
                <div className={`bg-white/[0.10] backdrop-blur-2xl rounded-3xl p-5 sm:p-6 border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.25),inset_0_1px_1.5px_rgba(255,255,255,0.3)] flex flex-col justify-between transition-all hover:bg-white/[0.14] ${activePromptIndex !== 2 ? 'hidden md:flex' : 'flex'
                  }`}>
                  <div>

                    {/* Customer Review Bubble */}
                    <div className="bg-white/[0.06] backdrop-blur-md p-3.5 rounded-2xl border border-white/10 mb-2.5 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-white">Sarah M.</span>
                        <span className="text-amber-400">★★★★★</span>
                      </div>
                      <p className="text-xs text-slate-300 italic leading-snug">
                        "Best croissant & coffee in the neighborhood!"
                      </p>
                    </div>

                    {/* AI Reply Bubble (Subtle Frosted Mint) */}
                    <div className="bg-emerald-500/[0.12] backdrop-blur-md p-3.5 rounded-2xl border border-emerald-400/25 space-y-1">
                      <span className="text-[10px] font-bold text-emerald-300 block">AI Auto-Reply:</span>
                      <p className="text-xs text-emerald-100 leading-snug font-normal">
                        "Thanks Sarah! We bake fresh at 6am every day. See you soon! 🥐"
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                    <span>Response Time:</span>
                    <span className="text-emerald-300 font-bold text-sm">&lt; 3 Mins</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
