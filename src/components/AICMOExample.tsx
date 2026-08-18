import React, { useState } from 'react';
import { MessageSquare, ArrowRight, Check, Play, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

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
        { id: 'step-4', label: "Add 14 missing local keywords", detail: "Updated Google Business service catalog ready." },
        { id: 'step-5', label: "Schedule 2 weekly Google updates", detail: "Photo posts with location pins generated." },
        { id: 'step-6', label: "Enable customer photo prompt campaign", detail: "QR review cards created for in-store display." },
      ],
      closingNote: "All keyword expansions and post schedules are ready to deploy in 1 tap.",
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
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            Just Ask Your AI CMO.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Experience how OptigoAI turns real business questions into immediate, high-converting marketing campaigns and actions.
          </p>
        </motion.div>

        {/* Prompt Selector Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-center gap-2 flex-wrap mb-8"
        >
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
        </motion.div>

        {/* Conversation Display Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-3.5 sm:p-8 md:p-10 border border-slate-200 shadow-xl"
        >
          
          {/* User Message Bubble */}
          <div className="flex items-start justify-end gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="bg-blue-600 text-white px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-2xl rounded-tr-sm shadow-md font-medium text-xs sm:text-base max-w-lg">
              "{current.query}"
            </div>
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-[10px] sm:text-xs shrink-0 mt-0.5">
              You
            </div>
          </div>

          {/* AI CMO Response Bubble */}
          <div className="flex items-start gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white border border-slate-200 p-1 flex items-center justify-center shadow-xs shrink-0 mt-0.5">
              <img 
                src="/assets/optigoai-logo-removebg.png" 
                alt="OptigoAI Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 bg-slate-50/90 rounded-2xl p-3.5 sm:p-6 md:p-7 border border-slate-200/80 space-y-4 sm:space-y-6 min-w-0">
              
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-900">OptigoAI Marketing Manager</span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md border border-emerald-300/80 font-bold shrink-0">
                    Confidence: 98%
                  </span>
                </div>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-900 leading-snug">
                  Based on your current business presence, I found 3 high-impact opportunities:
                </p>
              </div>

              {/* 3 Opportunities */}
              <div className="space-y-2 sm:space-y-3">
                {current.opportunities.map((opp) => (
                  <div key={opp.num} className="p-2.5 sm:p-3.5 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5 sm:gap-3 shadow-xs">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] sm:text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {opp.num}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{opp.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">{opp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommended Next Steps Checklist */}
              <div className="pt-1 sm:pt-2">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 sm:mb-3">
                  RECOMMENDED NEXT STEPS (1-CLICK EXECUTION):
                </p>
                <div className="space-y-2">
                  {current.recommendedSteps.map((step) => {
                    const isDone = actionExecuted[step.id];
                    return (
                      <div
                        key={step.id}
                        onClick={() => handleExecute(step.id)}
                        className={`p-2.5 sm:p-3 rounded-xl border transition-all flex items-center justify-between gap-2 sm:gap-3 cursor-pointer ${
                          isDone 
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                          <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-xs shrink-0 ${
                            isDone ? 'bg-emerald-600 text-white' : 'border border-slate-300 text-transparent'
                          }`}>
                            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-xs sm:text-sm font-semibold block truncate leading-tight">{step.label}</span>
                            <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">{step.detail}</span>
                          </div>
                        </div>

                        <button 
                          className={`text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-lg font-bold transition shrink-0 whitespace-nowrap ${
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
              <div className="pt-2.5 sm:pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs text-slate-600">
                <span className="font-medium text-emerald-700">✓ {current.closingNote}</span>
                <span className="text-[10px] text-slate-400">Execution time: &lt; 5s</span>
              </div>

            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg shadow-blue-600/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Try OptigoAI Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenVideoGuide}
              className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium rounded-full transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-slate-700" />
              <span>Watch AI CMO in Action</span>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
