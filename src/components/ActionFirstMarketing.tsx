import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Check, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActionFirstMarketingProps {
  onOpenGetStarted: () => void;
}

export const ActionFirstMarketing: React.FC<ActionFirstMarketingProps> = ({ onOpenGetStarted }) => {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const tasks = [
    {
      id: 'task-1',
      priority: '🔴 High Priority',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      title: 'Reply to 5 unanswered customer reviews.',
      impact: '+18% Local Algorithm Boost',
      timeToExecute: '1 min with AI',
      desc: 'Five 5-star Google reviews from this week need replies. Unanswered reviews lower your local pack ranking.',
      aiAction: 'Pre-written 5-star replies generated. 1 Click to publish.',
    },
    {
      id: 'task-2',
      priority: '🟠 Opportunity',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Create a weekend promotion for your most popular service.',
      impact: '+24 Estimated Bookings',
      timeToExecute: '2 mins with AI',
      desc: 'Competitors within 2 miles are active with weekend deals. Launching a 15% promotional post captures weekend demand.',
      aiAction: 'Visual creative & caption formatted for Google & Instagram.',
    },
    {
      id: 'task-3',
      priority: '🟢 Improvement',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Update your Google Business Profile description.',
      impact: '+140 Monthly Search Views',
      timeToExecute: '30 seconds with AI',
      desc: 'Your business profile is missing 3 top local search keywords: "artisan sourdough", "specialty espresso", "weekend brunch".',
      aiAction: 'Optimized 750-character SEO description ready to paste/sync.',
    },
  ];

  const toggleComplete = (id: string) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(completed).filter(Boolean).length;

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
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
            <Target className="w-3.5 h-3.5" />
            <span>Action-First Paradigm</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            Know What To Do. <br className="hidden sm:inline" />
            <span className="italic text-slate-800">Not Just What Happened.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Traditional marketing platforms give you dashboards. OptigoAI gives you decisions. Instead of spending hours analyzing charts, you get a simple priority list of actions that can help your business grow.
          </p>
        </motion.div>

        {/* Interactive Today's Priority Action Board */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
        >
          {/* Header inside Board */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                TODAY
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">Your Daily Growth Agenda</h3>
                <p className="text-xs text-slate-500">Curated by OptigoAI Context Engine</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs text-xs font-bold text-slate-700">
              <span>Status:</span>
              <span className="text-blue-600 font-mono">{completedCount} of {tasks.length} Completed</span>
            </div>
          </div>

          {/* Tasks Stack */}
          <div className="space-y-4 mb-8">
            {tasks.map((task) => {
              const isDone = !!completed[task.id];
              return (
                <div
                  key={task.id}
                  onClick={() => toggleComplete(task.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isDone
                      ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                    }`}
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isDone ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300'
                      }`}>
                      {isDone && <Check className="w-4 h-4" />}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${task.badgeColor}`}>
                          {task.priority}
                        </span>
                        <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                          {task.impact}
                        </span>
                      </div>

                      <h4 className={`text-sm sm:text-base font-bold transition-all ${isDone ? 'line-through text-slate-400' : 'text-slate-900'
                        }`}>
                        {task.title}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {task.desc}
                      </p>

                      <div className="text-[11px] text-blue-700 font-medium pt-1 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-blue-500" />
                        <span>{task.aiAction}</span>
                      </div>
                    </div>
                  </div>

                  <div className="self-end sm:self-center shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(task.id);
                      }}
                      className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${isDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                    >
                      {isDone ? 'Completed ✓' : 'Execute Now'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Card Footer */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Complete your daily 3 actions to maintain a <strong>4.9★ rating</strong> and <strong>#1 map placement</strong>.</span>
            </div>

            <button
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>View Your Action Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
