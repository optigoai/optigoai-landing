import React from 'react';
import { TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';

interface ROIResultsProps {
  onOpenGetStarted: () => void;
}

export const ROIResults: React.FC<ROIResultsProps> = ({ onOpenGetStarted }) => {
  const trackingMetrics = [
    { name: 'Search Visibility', value: '+184%', desc: 'Appear in top 3 Google local map searches.' },
    { name: 'Customer Interactions', value: '+148%', desc: 'Phone calls, direction requests, website clicks.' },
    { name: 'Review Score', value: '4.9 ★', desc: '100% verified AI responses within minutes.' },
    { name: 'Hours Saved', value: '28h/mo', desc: 'Automated content, posting, and reputation.' },
  ];

  return (
    <section id="roi-results" className="py-20 sm:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Business Impact</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            Know Where Your <br className="hidden sm:inline" />
            <span className="italic text-slate-800">Marketing Is Working.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            OptigoAI connects your marketing activity with measurable business outcomes. Track search visibility, reviews, calls, and customer growth in real-time. Less guessing. More informed decisions.
          </p>
        </div>

        {/* Real Screen Asset Showcase: Before vs After Google Business Rating */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-sm mb-12">
          
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

          {/* Generated Screen Image Container */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50 p-2 sm:p-4 mb-8">
            <img 
              src="/assets/google_rating_screen.jpg" 
              alt="Google Business Profile rating screen before and after using OptigoAI"
              className="w-full h-auto rounded-xl object-contain shadow-sm"
            />
          </div>

          {/* Comparison Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before Box */}
            <div className="p-5 rounded-2xl bg-red-50/50 border border-red-200/80">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-red-950">BEFORE OPTIGOAI</h4>
                <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">Dormant Profile</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>3.8 Star rating with 14 unreplied customer complaints</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Zero Google Posts published in past 6 months</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Ranked #8 in local map pack behind neighborhood competitors</span>
                </li>
              </ul>
            </div>

            {/* After Box */}
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-emerald-950">AFTER OPTIGOAI (60 DAYS)</h4>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Top 3 Map Pack</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>4.9 Star rating with 284 reviews and 100% AI reply rate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>+148% increase in customer phone calls and direction requests</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Consistently ranking #1 for high-intent local buyer keywords</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* 4 Outcome Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {trackingMetrics.map((metric) => (
            <div key={metric.name} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <div className="font-serif-heading text-3xl sm:text-4xl text-slate-900 mb-1">
                {metric.value}
              </div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">{metric.name}</h4>
              <p className="text-xs text-slate-500">{metric.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold">Ready to see your business rating and customer actions surge?</h4>
            <p className="text-xs text-slate-400">Connect your Google Business Profile in 60 seconds with zero credit card required.</p>
          </div>
          <button
            onClick={onOpenGetStarted}
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Start Your Free Growth Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
