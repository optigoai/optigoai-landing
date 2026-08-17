import React, { useState } from 'react';
import { AlertOctagon, HelpCircle, Lightbulb, Zap, CheckCircle2, ArrowRight, Check, Activity } from 'lucide-react';

interface SolutionSectionProps {
  onOpenGetStarted: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenGetStarted }) => {
  const [activeTab, setActiveTab] = useState(0);

  const diagnosticScenarios = [
    {
      business: "Artisan Bakery & Cafe",
      issue: "Your Google Business profile views grew 40%, but phone calls and direction requests dropped by 22% this week.",
      whyItMatters: "High search impressions with low customer conversions usually indicates missing menu items, outdated opening hours, or unanswered customer questions.",
      whatToDo: "Update your weekend operating hours, upload 3 photos of fresh baked goods, and add the direct ordering link to your profile.",
      howOptigoHelps: "OptigoAI generated the exact photo tags, formatted your hours, and pre-composed the Google Post announcement ready for 1-click publishing.",
    },
    {
      business: "Dental & Wellness Clinic",
      issue: "6 recent 5-star patient reviews have received zero owner replies over the past 45 days.",
      whyItMatters: "Google's local algorithm factors owner responsiveness into top-3 map pack rankings, and 84% of new patients evaluate doctor review replies.",
      whatToDo: "Publish warm, professional, HIPAA-compliant thank-you responses highlighting your gentle care and convenient booking.",
      howOptigoHelps: "OptigoAI drafted 6 unique, personalized review responses ready for instant review and 1-tap submission.",
    },
    {
      business: "Fitness Club & Gym",
      issue: "Competitors within 3 miles launched 4 new seasonal membership promotions on Instagram & Google.",
      whyItMatters: "Prospective members looking for workout classes are being captured by competitors running active local promos.",
      whatToDo: "Launch a '7-Day Free Pass + Personal Training Consultation' campaign with targeted local social creative.",
      howOptigoHelps: "OptigoAI drafted the campaign copy, designed Instagram-ready creatives, and set up your Google Business special offer.",
    },
  ];

  const current = diagnosticScenarios[activeTab];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80">
            <Activity className="w-3.5 h-3.5" />
            <span>The Solution</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            Meet Your AI CMO.
          </h2>

          <p className="text-lg sm:text-xl font-medium text-slate-700 mb-3">
            A marketing manager that is available whenever you need it.
          </p>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            OptigoAI learns about your business and continuously looks for ways to improve your marketing and customer growth. It doesn't just tell you what happened.
          </p>
        </div>

        {/* 4 Pillars Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-slate-200/80 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4 border border-red-100">
              <AlertOctagon className="w-4 h-4" />
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Pillar 01</h3>
            <h4 className="text-base font-bold text-slate-900 mb-1.5">What is wrong.</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Pinpoints exact bottlenecks in your online presence and visibility.</p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-slate-200/80 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-100">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Pillar 02</h3>
            <h4 className="text-base font-bold text-slate-900 mb-1.5">Why it matters.</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Translates algorithm changes and competitor metrics into real revenue impact.</p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-slate-200/80 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Pillar 03</h3>
            <h4 className="text-base font-bold text-slate-900 mb-1.5">What you should do.</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Delivers direct, high-priority actions rather than confusing analytics.</p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-slate-200/80 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Pillar 04</h3>
            <h4 className="text-base font-bold text-slate-900 mb-1.5">And helps you do it.</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Generates all creatives, copies, and review replies ready for 1-click execution.</p>
          </div>
        </div>

        {/* Live Diagnostic Showcase (Light Themed Luxury Case Study Canvas) */}
        <div className="bg-gradient-to-br from-[#FAF9F6] via-white to-[#F5F8F6] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-md relative overflow-hidden">
          
          {/* Subtle Ambient Soft Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            
            {/* Top Scenario Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  Live AI CMO Diagnostic Stream
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Real Business Case Study
                </h3>
              </div>

              {/* Segmented Buttons (Athleats Style) */}
              <div className="flex items-center bg-white p-1 rounded-2xl border border-slate-200 shadow-xs overflow-x-auto max-w-full no-scrollbar">
                {diagnosticScenarios.map((s, idx) => (
                  <button
                    key={s.business}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      activeTab === idx 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {s.business}
                  </button>
                ))}
              </div>
            </div>

            {/* 4 Step Diagnostic Flow in Light Mode */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
              
              {/* Left Column: What is wrong & Why it matters */}
              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>01. What Is Wrong</span>
                    </div>
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                      Bottleneck
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    "{current.issue}"
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>02. Why It Matters</span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      Revenue Impact
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {current.whyItMatters}
                  </p>
                </div>

              </div>

              {/* Right Column: What you should do & How OptigoAI helps */}
              <div className="space-y-4">
                
                {/* Step 3 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>03. What You Should Do</span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      Action Plan
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {current.whatToDo}
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/50 border-2 border-emerald-500/40 shadow-xs">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>04. And OptigoAI Helps You Do It</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                      1-Click Execution
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium mb-3">
                    {current.howOptigoHelps}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-semibold">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Auto-drafted & ready for live release</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Bar inside Showcase */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Ready to see what OptigoAI discovers for your business?</span>
              </div>

              <button
                onClick={onOpenGetStarted}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/20 group"
              >
                <span>Run Free Business Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
