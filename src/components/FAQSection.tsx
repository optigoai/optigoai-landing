import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is OptigoAI?',
      a: 'OptigoAI is an AI-powered marketing platform that acts as your dedicated AI Chief Marketing Officer. It connects to your business profiles (Google Business, Instagram, Facebook), analyzes your performance, identifies revenue opportunities, generates marketing copy and creatives, and gives you a prioritized daily action plan.',
    },
    {
      q: 'Is OptigoAI only for large businesses?',
      a: 'No. OptigoAI is built specifically for small and medium-sized local businesses, retail stores, restaurants, clinics, gyms, salons, contractors, and startups that do not have a dedicated full-time marketing department.',
    },
    {
      q: 'Do I need marketing knowledge to use it?',
      a: 'No. OptigoAI is designed from the ground up for busy owners. Instead of overwhelming you with 50 complex analytical graphs, it gives you 3 simple, plain-English action items every day with pre-composed copy ready to approve in 1 click.',
    },
    {
      q: 'Can OptigoAI manage my Google Business Profile?',
      a: 'Yes. With your official authorization, OptigoAI securely links to your Google Business Profile to track search views, optimize description keywords, schedule Google Posts, analyze local map pack rankings, and monitor customer reviews.',
    },
    {
      q: 'Can AI automatically reply to my customer reviews?',
      a: 'Yes. OptigoAI analyzes all incoming reviews, detects customer sentiment, and drafts personalized, professional 5-star responses. Depending on your preference, you can review and approve replies before posting with 1 tap or enable auto-publishing.',
    },
    {
      q: 'Can OptigoAI create social media content?',
      a: 'Yes. OptigoAI generates complete marketing content including social media captions, weekly Google Posts, promotional announcements, limited-time offers, event promotions, and studio-grade visual graphics.',
    },
    {
      q: 'Can OptigoAI analyze my competitors?',
      a: 'Yes. OptigoAI scans nearby local competitors within your territory, comparing their Google rankings, review scores, and posting frequencies to reveal strategic gaps and opportunities for your business.',
    },
    {
      q: 'Do I need multiple marketing tools?',
      a: 'No. The goal of OptigoAI is to replace disjointed single-purpose tools (dashboard tools, SEO software, review platforms, and copywriting apps) into one unified, intelligent growth cockpit.',
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
            Have questions about how OptigoAI works for your business? Here are direct answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen 
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
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
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
