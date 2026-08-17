import React, { useState } from 'react';
import { Sparkles, MessageSquare, ArrowRight, Check, Play } from 'lucide-react';

interface AICMOExampleProps {
  onOpenGetStarted: () => void;
  onOpenVideoGuide: () => void;
}

export const AICMOExample: React.FC<AICMOExampleProps> = ({ onOpenGetStarted, onOpenVideoGuide }) => {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [actionExecuted, setActionExecuted] = useState<Record<string, boolean>>({});

  const conversations = [
    {
      query: "How can I get more customers this month?",
      category: "Customer Growth",
      opportunities: [
        {
          num: "1",
          title: "Google Review Response Gap",
          desc: "Your Google reviews have increased by 24%, but you haven't replied to 8 recent customer reviews.",
        },
        {
          num: "2",
          title: "Competitor Posting Velocity",
          desc: "Your competitors are posting promotional content and special offers 3x more frequently.",
        },
        {
          num: "3",
          title: "Search Action Conversion Dip",
          desc: "Your Google profile has strong visibility (4.2k views), but customer actions have declined by 12%.",
        },
      ],
      recommendedSteps: [
        { id: 'step-1', label: "Reply to 8 pending reviews", detail: "5-star personalized responses drafted." },
        { id: 'step-2', label: "Publish a weekend promotional post", detail: "Google Post with '20% off brunch' created." },
        { id: 'step-3', label: "Create a limited-time customer offer", detail: "Social story & feed creative generated." },
      ],
      closingNote: "I've prepared all the content, creatives, and replies for you.",
    },
    {
      query: "Why are my competitors ranking higher on Google?",
      category: "Local SEO Audit",
      opportunities: [
        {
          num: "1",
          title: "Service Keyword Coverage",
          desc: "Competitor #1 ranks for 14 localized keywords not currently listed in your Google Business service catalog.",
        },
        {
          num: "2",
          title: "Weekly Google Post Recency",
          desc: "Google favors active profiles. Top competitors post fresh photos and updates twice every week.",
        },
        {
          num: "3",
          title: "Customer Photo Uploads",
          desc: "Profiles with customer-tagged photos receive 42% more direction requests on Google Maps.",
        },
      ],
      recommendedSteps: [
        { id: 'step-seo-1', label: "Add 6 high-volume keywords to services", detail: "Optimized for 'specialty coffee' & 'artisan bakery'." },
        { id: 'step-seo-2', label: "Schedule 2 weekly Google Posts", detail: "Pre-written with localized hashtags." },
        { id: 'step-seo-3', label: "Activate Review Photo Prompt flyer", detail: "QR code template ready for print." },
      ],
      closingNote: "Implementing these 3 steps typically boosts local map pack rank within 14 days.",
    },
    {
      query: "What should I post on social media today?",
      category: "Daily Content",
      opportunities: [
        {
          num: "1",
          title: "Trending Local Foodie Topic",
          desc: "Local audience engagement peaks on Thursday mornings for weekend breakfast planning.",
        },
        {
          num: "2",
          title: "Behind-the-Scenes High Engagement",
          desc: "Bakery preparation reels generate 3.2x higher save rates than static menu shots.",
        },
        {
          num: "3",
          title: "Limited Quantity FOMO Hook",
          desc: "Highlighting limited-batch seasonal pastries drives urgent morning visits.",
        },
      ],
      recommendedSteps: [
        { id: 'step-soc-1', label: "Publish 'Fresh Batch Brioche' Instagram Reel", detail: "Caption, sound suggestion, and hashtags ready." },
        { id: 'step-soc-2', label: "Cross-post to Google Business Updates", detail: "Instant map pack viewer engagement." },
        { id: 'step-soc-3', label: "Post Morning Poll on Instagram Stories", detail: "'Matcha Latte vs Classic Cappuccino?'" },
      ],
      closingNote: "Everything is formatted with captions, hashtags, and ideal posting time (8:30 AM).",
    },
  ];

  const current = conversations[selectedConversation];

  const handleExecute = (id: string) => {
    setActionExecuted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="ai-cmo-demo" className="py-20 sm:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            Just Ask Your AI CMO.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Experience how OptigoAI turns real business questions into immediate, high-converting marketing campaigns and actions.
          </p>
        </div>

        {/* Prompt Selector Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {conversations.map((c, idx) => (
            <button
              key={c.query}
              onClick={() => setSelectedConversation(idx)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                selectedConversation === idx
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>"{c.query}"</span>
            </button>
          ))}
        </div>

        {/* Conversation Display Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          
          {/* User Message Bubble */}
          <div className="flex items-start justify-end gap-3 mb-6">
            <div className="bg-blue-600 text-white px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-md font-medium text-sm sm:text-base max-w-lg">
              "{current.query}"
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs shrink-0">
              You
            </div>
          </div>

          {/* AI CMO Response Bubble */}
          <div className="flex items-start gap-3 sm:gap-4 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md shrink-0 mt-1">
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>

            <div className="flex-1 bg-slate-50 rounded-2xl p-5 sm:p-7 border border-slate-200/80 space-y-6">
              
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-slate-900">OptigoAI Marketing Manager</span>
                  <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Confidence: 98%
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                  Based on your current business presence, I found 3 high-impact opportunities:
                </p>
              </div>

              {/* 3 Opportunities */}
              <div className="space-y-3">
                {current.opportunities.map((opp) => (
                  <div key={opp.num} className="p-3.5 bg-white rounded-xl border border-slate-200/80 flex items-start gap-3 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {opp.num}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{opp.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{opp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommended Next Steps Checklist */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Recommended Next Steps (1-Click Execution):
                </p>
                <div className="space-y-2">
                  {current.recommendedSteps.map((step) => {
                    const isDone = actionExecuted[step.id];
                    return (
                      <div
                        key={step.id}
                        onClick={() => handleExecute(step.id)}
                        className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                          isDone 
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                            isDone ? 'bg-emerald-600 text-white' : 'border border-slate-300 text-transparent'
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-semibold">{step.label}</span>
                            <span className="text-[11px] text-slate-500 block">{step.detail}</span>
                          </div>
                        </div>

                        <button 
                          className={`text-xs px-3 py-1.5 rounded-lg font-bold transition ${
                            isDone 
                              ? 'bg-emerald-600 text-white' 
                              : 'bg-slate-900 text-white hover:bg-slate-800'
                          }`}
                        >
                          {isDone ? 'Executed ✓' : 'Approve & Run'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Closing Callout */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium text-emerald-700">✓ {current.closingNote}</span>
                <span className="text-[10px] text-slate-400">Execution time: &lt; 5s</span>
              </div>

            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-600/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Try OptigoAI Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenVideoGuide}
              className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-full transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-slate-700" />
              <span>Watch AI CMO in Action</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
