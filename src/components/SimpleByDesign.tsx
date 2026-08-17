import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Zap, Target, Flame, Star, Store, Trophy } from 'lucide-react';

interface SimpleByDesignProps {
  onOpenGetStarted: () => void;
}

export const SimpleByDesign: React.FC<SimpleByDesignProps> = ({ onOpenGetStarted }) => {
  const [selectedGoal, setSelectedGoal] = useState(0);

  const goals = [
    {
      goalText: 'I want more customers.',
      icon: Target,
      tagline: 'Customer Acquisition Engine',
      plan: [
        { step: '1', title: 'Audit local buyer keywords', desc: 'Identifies 5 high-converting search queries in your zip code.' },
        { step: '2', title: 'Publish limited-time promo', desc: 'Deploys a 15% discount post across Google Maps & Instagram.' },
        { step: '3', title: 'Activate referral campaign', desc: 'Sends automated review & referral incentives to top customers.' },
      ],
      output: 'Estimated +28-45 new local customer visits within 14 days.',
    },
    {
      goalText: 'I want more Google reviews.',
      icon: Star,
      tagline: '5-Star Reputation Engine',
      plan: [
        { step: '1', title: 'Deploy instant QR review cards', desc: 'Generates branded in-store QR code cards for table/counter display.' },
        { step: '2', title: 'Automate post-visit review requests', desc: 'Sends friendly SMS/Email review invitations after purchases.' },
        { step: '3', title: 'Auto-reply to all new reviews', desc: 'AI posts 5-star responses within 15 minutes to maximize Google favor.' },
      ],
      output: 'Average of +18 to +32 authentic 5-star reviews added per month.',
    },
    {
      goalText: 'I want to promote my new offer.',
      icon: Flame,
      tagline: 'Multi-Channel Launch Engine',
      plan: [
        { step: '1', title: 'Create promo graphics & copy', desc: 'Generates studio-quality banner graphics and compelling caption text.' },
        { step: '2', title: 'Schedule multi-platform posts', desc: 'Syncs launch across Google Business Posts, Instagram & Facebook.' },
        { step: '3', title: 'Track coupon & booking redemptions', desc: 'Measures exact revenue generated from the promotional offer.' },
      ],
      output: 'Full campaign created & deployed in under 2 minutes.',
    },
    {
      goalText: 'I want more people to visit my store.',
      icon: Store,
      tagline: 'Foot-Traffic Acceleration Engine',
      plan: [
        { step: '1', title: 'Optimize Google Map Pack coordinates', desc: 'Ensures exact pin accuracy, opening hours, and parking details.' },
        { step: '2', title: 'Publish weekend local event post', desc: 'Highlights store specials for weekend foot-traffic shoppers.' },
        { step: '3', title: 'Sync local directory citations', desc: 'Distributes verified business data across Apple Maps, Yelp, & Bing.' },
      ],
      output: '+48% increase in Google Maps direction requests.',
    },
    {
      goalText: 'I want to beat my competitors.',
      icon: Trophy,
      tagline: 'Competitive Domination Engine',
      plan: [
        { step: '1', title: 'Scan top 3 local competitors', desc: 'Audits competitor keyword rankings, review sentiment, and posting habits.' },
        { step: '2', title: 'Capitalize on competitor weaknesses', desc: 'Highlights your unique advantages in Google Posts & social ads.' },
        { step: '3', title: 'Outrank on high-intent keywords', desc: 'Injects missing local keywords into your business profile.' },
      ],
      output: 'Overtakes competitor search prominence in 30 days.',
    },
  ];

  const current = goals[selectedGoal];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero Complexity</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            No Marketing Degree Required.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            You don't need to understand SEO, analytics, algorithms, content strategy, or marketing automation. Just tell OptigoAI what you want.
          </p>
        </div>

        {/* Goal Converter Interactive Tool */}
        <div className="max-w-4xl mx-auto bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          
          <div className="mb-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Step 1: Pick your business goal:
            </span>
            <div className="flex flex-wrap gap-2">
              {goals.map((g, idx) => {
                const Icon = g.icon;
                const isSelected = selectedGoal === idx;
                return (
                  <button
                    key={g.goalText}
                    onClick={() => setSelectedGoal(idx)}
                    className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>"{g.goalText}"</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generated Plan Output Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">Generated Roadmap</span>
                  <h4 className="text-base font-bold text-slate-900">{current.tagline}</h4>
                </div>
              </div>

              <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-bold">
                Auto-Planned in 1.2s
              </span>
            </div>

            {/* 3 Step Plan */}
            <div className="space-y-4 mb-6">
              {current.plan.map((p) => (
                <div key={p.step} className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {p.step}
                  </span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900">{p.title}</h5>
                    <p className="text-xs text-slate-600 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Projected Output Banner */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-medium flex items-center justify-between gap-2 mb-6">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Target Outcome:</strong> {current.output}</span>
              </span>
            </div>

            {/* Action CTA */}
            <button
              onClick={onOpenGetStarted}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Execute This Growth Plan For My Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
