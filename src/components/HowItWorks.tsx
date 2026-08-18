import React, { useState } from 'react';
import { Brain, PenTool, BarChart3, ArrowRight, CheckCircle2, Globe, Star, Check, Zap, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

interface HowItWorksProps {
  onOpenGetStarted: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenGetStarted }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNum: '01',
      title: 'Connect Your Business',
      tagline: 'Instant 1-Click Platform Linking',
      desc: 'Link your existing platforms in under 60 seconds. Your data stays 100% private.',
      platforms: ['Google Business Profile', 'Google Search Console', 'Instagram', 'Facebook', 'TripAdvisor', 'Yelp'],
      preview: {
        badge: 'Connected Platforms',
        items: [
          { name: 'Google Business Profile', status: 'Connected & Verified', icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50' },
          { name: 'Instagram Business', status: 'Syncing Insights', icon: Globe, color: 'text-pink-600', bg: 'bg-pink-50' },
          { name: 'Facebook Page', status: 'Active (2.4k followers)', icon: Globe, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { name: 'Google Search Console', status: 'Local Rank Monitored', icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ],
        highlight: 'Zero technical setup required. Connect in under 60 seconds.',
      },
    },
    {
      stepNum: '02',
      title: 'OptigoAI Understands Your Business',
      tagline: 'Deep Business Knowledge Modeling',
      desc: 'Share your business, customers, and goals. AI builds an accurate model of your brand voice.',
      platforms: ['Brand Voice', 'Service Catalog', 'Target Audience', 'Local Competitors', 'Seasonal Specials'],
      preview: {
        badge: 'Business Knowledge Graph',
        items: [
          { name: 'Niche & Category', status: 'Artisan Cafe & Bakery', icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
          { name: 'Target Demographics', status: 'Local foodies & professionals', icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
          { name: 'Brand Tone', status: 'Warm, artisanal & premium', icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
          { name: 'Primary Growth Goal', status: '+35% Weekend footfall', icon: Brain, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ],
        highlight: 'AI learns your distinct voice and never sounds like a generic robot.',
      },
    },
    {
      stepNum: '03',
      title: 'AI Finds Opportunities',
      tagline: 'Continuous 24/7 Intelligence Scan',
      desc: 'Continuously scans your online presence to uncover missed opportunities, ranking drops, and competitor gaps.',
      platforms: ['Review Sentiment', 'Search Visibility', 'Competitor Postings', 'Photo Engagement', 'Keyword Gaps'],
      preview: {
        badge: 'Live Intelligence Feed',
        items: [
          { name: 'Search Visibility Dip', status: '-18% on "best latte near me"', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
          { name: 'Competitor Velocity', status: 'Rival posted 3 seasonal offers', icon: Zap, color: 'text-blue-600', bg: 'bg-blue-50' },
          { name: 'Pending Reviews', status: '5 reviews waiting for reply', icon: Zap, color: 'text-purple-600', bg: 'bg-purple-50' },
          { name: 'Photo Content Gap', status: 'No new photos in 21 days', icon: Zap, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ],
        highlight: 'Scans thousands of local data points so you never miss a customer.',
      },
    },
    {
      stepNum: '04',
      title: 'Get Clear Recommendations',
      tagline: 'Plain-English Actions, Not Numbers',
      desc: 'Instead of complicated analytics reports, you get simple, bite-sized actions with estimated business impact.',
      platforms: ['High Priority Action', 'Revenue Opportunity', 'SEO Optimization', 'Reputation Shield'],
      preview: {
        badge: 'Today’s Recommendation',
        quote: '"Google actions dropped 32%. Competitors are posting more. Here\'s your fix:"',
        items: [
          { name: 'Priority 1', status: 'Approve 5 pre-drafted review replies', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { name: 'Priority 2', status: 'Publish "Weekend 20% Off Brunch" Post', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { name: 'Priority 3', status: 'Inject 4 localized keywords into GMB', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ],
        highlight: 'Tells you exactly what matters most and what you should do next.',
      },
    },
    {
      stepNum: '05',
      title: 'Create & Execute',
      tagline: '1-Click Multi-Channel Publishing',
      desc: 'Creates posts, review replies, campaigns, and AI-generated creatives — ready in 1 click.',
      platforms: ['Google Posts', 'Social Captions', 'AI Creatives', 'Review Replies', 'Marketing Campaigns'],
      preview: {
        badge: 'Generated Creative & Copy',
        items: [
          { name: 'Google Business Update', status: 'Ready: "Autumn Specialty Drinks"', icon: PenTool, color: 'text-blue-600', bg: 'bg-blue-50' },
          { name: 'Instagram Carousel Copy', status: 'Ready with 15 localized tags', icon: PenTool, color: 'text-pink-600', bg: 'bg-pink-50' },
          { name: 'Review Responses', status: '5 personalized replies verified', icon: PenTool, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { name: 'Visual Creative', status: 'Promotional graphic generated', icon: PenTool, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        ],
        highlight: 'Generate professional marketing assets without hiring a full agency.',
      },
    },
    {
      stepNum: '06',
      title: 'Track What Happens',
      tagline: 'Proven ROI & Autonomous Learning',
      desc: 'See if your actions are driving growth. AI learns from results and refines future recommendations.',
      platforms: ['Phone Calls Lift', 'Direction Requests', 'Review Score', 'Foot Traffic', 'Revenue Growth'],
      preview: {
        badge: 'Growth Outcome Tracker',
        items: [
          { name: 'Phone Calls from Google', status: '+46 calls this month (+148%)', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { name: 'Google Map Directions', status: '+112 customer requests', icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50' },
          { name: 'Google Review Score', status: '4.9 ★ (100% response rate)', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
          { name: 'Local Search Ranking', status: '#1 Map Pack for primary keywords', icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-50' },
        ],
        highlight: 'Less guessing. More measurable, compounding customer growth.',
      },
    },
  ];

  const currentStep = steps[activeStep];

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
            <Layers className="w-3.5 h-3.5" />
            <span>Step-by-Step System</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            From Business Information <br className="hidden sm:inline" />
            <span className="italic text-slate-800">to Growth Actions.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Six simple steps to turn your everyday business data into continuous customer acquisition.
          </p>
        </motion.div>

        {/* Step Navigation Pill Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {steps.map((s, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={s.stepNum}
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${isSelected
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                  {s.stepNum}
                </span>
                <span>{s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Step Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-sm"
        >

          {/* Left Column: Step Description & Platform tags */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-blue-100 text-blue-800">
                  STEP {currentStep.stepNum} OF 06
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {currentStep.tagline}
                </span>
              </div>

              <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight mb-4">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {currentStep.desc}
              </p>

              {/* Supported Platforms / Tags */}
              <div className="mb-8">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Supported Touchpoints:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStep.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-200/80"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition cursor-pointer"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition cursor-pointer"
                >
                  Next Step →
                </button>
              </div>

              <button
                onClick={onOpenGetStarted}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Try Step {currentStep.stepNum}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Warm Pastel Light-Themed Showcase Canvas */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#F5F8F5] via-[#F8FAF8] to-[#EEF5F0] rounded-3xl p-4 sm:p-7 md:p-8 flex flex-col justify-between border border-emerald-900/10 shadow-sm relative overflow-hidden">

            {/* Subtle soft ambient light glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header inside Mockup */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-emerald-900/10 mb-4 sm:mb-5 gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-xs font-bold text-slate-800 truncate">
                    Optigo Growth Engine
                  </span>
                  <span className="text-xs text-slate-400">/</span>
                  <span className="text-xs text-slate-600 font-medium whitespace-nowrap">Step {currentStep.stepNum}</span>
                </div>
                <span className="text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white text-emerald-800 font-bold border border-emerald-200/80 shadow-xs shrink-0 whitespace-nowrap">
                  {currentStep.preview.badge}
                </span>
              </div>

              {/* Optional Quote Callout */}
              {currentStep.preview.quote && (
                <div className="bg-white/90 rounded-2xl p-3.5 sm:p-4 border border-emerald-200/70 mb-4 text-xs sm:text-sm italic text-slate-700 shadow-xs">
                  {currentStep.preview.quote}
                </div>
              )}

              {/* Items List - Crisp Light Cards with Full Text Visibility */}
              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                {currentStep.preview.items.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white hover:bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 transition-all group"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${item.bg || 'bg-slate-100'} flex items-center justify-center shrink-0 border border-black/5`}>
                          <ItemIcon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{item.name}</span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0 flex items-center gap-1 self-start sm:self-auto ml-10.5 sm:ml-0">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{item.status}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Highlight inside Mockup */}
            <div className="relative z-10 pt-3 sm:pt-4 border-t border-emerald-900/10 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{currentStep.preview.highlight}</span>
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
