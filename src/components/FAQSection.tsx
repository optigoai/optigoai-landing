import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is OptigoAI?',
      a: 'OptigoAI is an AI marketing assistant and AI CMO for businesses. It connects to your Google Business Profile, Instagram, and Facebook — analyzes performance, finds opportunities, creates content, and gives you a daily action plan.',
    },
    {
      q: 'Is OptigoAI only for large businesses?',
      a: 'No. It’s built specifically for small local businesses — restaurants, salons, gyms, clinics, retailers, and startups without a dedicated marketing team.',
    },
    {
      q: 'Do I need marketing knowledge to use it?',
      a: 'Not at all. Instead of 50 confusing charts, you get 3 plain-English actions daily with ready-to-approve copy in 1 click.',
    },
    {
      q: 'Can OptigoAI manage my Google Business Profile?',
      a: 'Yes. OptigoAI links to your Google Business to track views, optimize keywords, schedule posts, and monitor reviews.',
    },
    {
      q: 'Can AI automatically reply to my customer reviews?',
      a: 'Yes. It detects sentiment and drafts personalized replies. You can approve with 1 tap or enable auto-publishing.',
    },
    {
      q: 'Can OptigoAI create social media content?',
      a: 'Yes. It generates captions, Google Posts, promotional copy, event promos, and visual graphics — all ready to publish.',
    },
    {
      q: 'Can OptigoAI analyze my competitors?',
      a: 'Yes. It scans nearby competitors’ rankings, reviews, and posting frequency to reveal gaps and opportunities for you.',
    },
    {
      q: 'Do I need multiple marketing tools?',
      a: 'No. OptigoAI replaces disjointed SEO, review, and copywriting tools with one unified growth platform.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80">
            <MessageCircleQuestion className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Everything You Need to Know.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Quick answers about how OptigoAI works for your business.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${isOpen
                    ? 'bg-[#FAF9F6] border-blue-200 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
