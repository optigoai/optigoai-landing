import React, { useState } from 'react';
import { Search, Brain, Lightbulb, PenTool, CheckCircle, TrendingUp, ArrowRight, Cpu } from 'lucide-react';

interface TrustValueStatementProps {
  onOpenGetStarted: () => void;
}

export const TrustValueStatement: React.FC<TrustValueStatementProps> = ({ onOpenGetStarted }) => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      title: 'ANALYZE',
      icon: Search,
      desc: 'Monitors Google Business, local rankings, competitor moves, and reviews 24/7.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'UNDERSTAND',
      icon: Brain,
      desc: 'Learns your business model, customer demographics, and revenue drivers.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'RECOMMEND',
      icon: Lightbulb,
      desc: 'Filters out noise and gives you the top 3 highest-ROI actions for today.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      title: 'CREATE',
      icon: PenTool,
      desc: 'Generates promotional copy, localized SEO posts, review replies, and creatives.',
      color: 'from-emerald-500 to-amber-500',
    },
    {
      title: 'ACT',
      icon: CheckCircle,
      desc: 'Publish or schedule across all connected platforms in 1 click.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'IMPROVE',
      icon: TrendingUp,
      desc: 'Measures foot traffic, phone calls, and revenue growth to get smarter over time.',
      color: 'from-orange-500 to-blue-500',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-slate-200/70 relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-50/50 via-emerald-50/30 to-purple-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Voiceflow Style Circular Context Engine Badge */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
          <div className="relative mb-6">
            {/* Spinning decorative ring */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-blue-200/60 p-1 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/40 animate-spin [animation-duration:30s]" />
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
            Autonomous Growth Infrastructure
          </p>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            You Don't Need Another Dashboard. <br className="hidden sm:inline" />
            <span className="italic text-slate-800">You Need Someone Who Knows What To Do Next.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Most marketing tools show you numbers. OptigoAI turns those numbers into clear actions. It looks at your business, your online presence, customer reviews, search visibility, content, and competitors — then tells you what matters most and what you should do next.
          </p>

          {/* High-Level Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 pb-12 w-full max-w-4xl border-y border-slate-100">
            <div className="text-center">
              <div className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mb-1">
                3.4x
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500">Average Customer Growth</p>
            </div>
            <div className="text-center">
              <div className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mb-1">
                100%
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500">Review Reply Coverage</p>
            </div>
            <div className="text-center">
              <div className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mb-1">
                10K+
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500">Local Businesses Empowered</p>
            </div>
            <div className="text-center">
              <div className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mb-1">
                &lt; 30s
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500">Campaign Creation Time</p>
            </div>
          </div>
        </div>

        {/* Highlight 6-Step Workflow: ANALYZE -> UNDERSTAND -> RECOMMEND -> CREATE -> ACT -> IMPROVE */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Continuous Growth Loop</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              How OptigoAI Executes Your Marketing
            </h3>
          </div>

          {/* Interactive Steps Carousel / Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isSelected = activeStep === index;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-600/10'
                      : 'bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-slate-400">0{index + 1}</span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold tracking-wider ${isSelected ? 'text-blue-600' : 'text-slate-900'}`}>
                      {step.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                {React.createElement(workflowSteps[activeStep].icon, { className: 'w-6 h-6' })}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-600 uppercase">Step 0{activeStep + 1}</span>
                  <h4 className="text-base font-bold text-slate-900">{workflowSteps[activeStep].title}</h4>
                </div>
                <p className="text-sm text-slate-600 mt-0.5">{workflowSteps[activeStep].desc}</p>
              </div>
            </div>

            <button
              onClick={onOpenGetStarted}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition flex items-center gap-1.5 shrink-0 self-end sm:self-auto cursor-pointer"
            >
              <span>Experience It</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
