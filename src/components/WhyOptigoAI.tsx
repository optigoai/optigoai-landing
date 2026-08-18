import React from 'react';
import { Store, TrendingUp, UserCheck, Users, Check, X, ArrowRight, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

interface WhyOptigoAIProps {
  onOpenGetStarted: () => void;
}

export const WhyOptigoAI: React.FC<WhyOptigoAIProps> = ({ onOpenGetStarted }) => {
  const personas = [
    {
      title: 'Local Businesses',
      icon: Store,
      desc: 'Get discovered by more high-intent customers in your neighborhood and top the Google map pack.',
    },
    {
      title: 'Growing Businesses',
      icon: TrendingUp,
      desc: 'Build a dependable, consistent marketing system without having to hire a large in-house team.',
    },
    {
      title: 'Busy Business Owners',
      icon: UserCheck,
      desc: 'Know exactly what to focus on every morning without spending painful hours studying confusing charts.',
    },
    {
      title: 'Marketing Teams & Agencies',
      icon: Users,
      desc: 'Automate repetitive copywriting, review responses, and reporting to focus on high-level growth strategy.',
    },
  ];

  const comparisonRows = [
    { feature: 'Primary Output', traditional: '50+ charts & confusing metric dashboards', optigo: '3 prioritized, revenue-driving actions' },
    { feature: 'Review Management', traditional: 'Manual typing or robotic canned templates', optigo: 'Personalized 5-star AI replies in 1 click' },
    { feature: 'Content & Creatives', traditional: 'Hire copywriters or spend hours on Canva', optigo: 'Instant studio-grade copy, posts & visuals' },
    { feature: 'Local SEO Strategy', traditional: 'Pay $1,500/mo to an agency with slow updates', optigo: 'Continuous 24/7 autonomous Google optimization' },
    { feature: 'Time Required', traditional: '15-20 hours every week managing tools', optigo: 'Less than 5 minutes a day' },
  ];

  return (
    <section id="why-optigo" className="py-20 sm:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Who Is OptigoAI For? */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80">
            <Layers className="w-3.5 h-3.5" />
            <span>Built For Growth</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            Built for Businesses <br className="hidden sm:inline" />
            <span className="italic text-slate-800">That Want to Grow.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Whether you operate a single storefront or manage multi-location operations, OptigoAI adapts to your growth stage.
          </p>
        </motion.div>

        {/* 4 Persona Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Part 2: Why OptigoAI? & One Business -> One Action Plan */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-slate-200 shadow-sm"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">The OptigoAI Difference</span>
            <h3 className="font-serif-heading text-3xl sm:text-4xl text-slate-900 mt-2 mb-4">
              Your Business Has Enough To Manage.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              You shouldn't need five different marketing tools just to figure out what to do next. OptigoAI brings business intelligence, marketing recommendations, content creation, customer engagement, and marketing execution together in one simple experience.
            </p>
          </div>

          {/* Unified Flow Graphic */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 mb-12 bg-slate-50 rounded-2xl border border-slate-200/80">
            <div className="px-6 py-3 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Unified Foundation</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">ONE BUSINESS</span>
            </div>

            <div className="text-blue-600 font-bold text-lg hidden md:block">→</div>
            <div className="text-blue-600 font-bold text-lg md:hidden">↓</div>

            <div className="px-6 py-3 bg-blue-600 text-white rounded-xl text-center shadow-md shadow-blue-600/20">
              <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wider block">Always-On Intelligence</span>
              <span className="text-sm sm:text-base font-bold">ONE AI MARKETING MANAGER</span>
            </div>

            <div className="text-blue-600 font-bold text-lg hidden md:block">→</div>
            <div className="text-blue-600 font-bold text-lg md:hidden">↓</div>

            <div className="px-6 py-3 bg-slate-900 text-white rounded-xl text-center shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Daily Execution</span>
              <span className="text-sm sm:text-base font-bold">ONE CLEAR ACTION PLAN</span>
            </div>
          </div>

          {/* Comparison Matrix Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-4 font-bold text-slate-500 uppercase text-[11px]">Workflow</th>
                  <th className="py-3 px-4 font-bold text-slate-400 uppercase text-[11px]">Traditional Marketing Tools</th>
                  <th className="py-3 px-4 font-bold text-blue-600 uppercase text-[11px] bg-blue-50/50 rounded-t-lg">OptigoAI AI CMO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-3.5 px-4 text-slate-500 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-900 font-medium bg-blue-50/30">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.optigo}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Call to action at bottom of matrix */}
          <div className="text-center">
            <button
              onClick={onOpenGetStarted}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs sm:text-sm font-semibold transition inline-flex items-center gap-2 cursor-pointer shadow-md shadow-blue-600/20"
            >
              <span>Get Your 1-Page Action Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
