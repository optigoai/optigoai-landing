import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Zap, Star, ShieldCheck, Send, Mic, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenGetStarted: () => void;
  onOpenVideoGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenGetStarted, onOpenVideoGuide }) => {
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  const prompts = [
    {
      query: "How can I get more customers this weekend?",
      aiResponse: "I analyzed your Google Profile and local search trends. Here are 3 immediate actions for this weekend:",
      actions: [
        { label: "Reply to 5 pending Google reviews", impact: "SEO boost" },
        { label: "Publish 'Weekend 20% Off Brunch' Google Post", impact: "+28 calls" },
        { label: "Post weekend reel to Instagram & Meta", impact: "High reach" }
      ],
      kpi: "+34% Weekend Footfall"
    },
    {
      query: "Why are competitors ranking higher on Google?",
      aiResponse: "Found 2 keyword gaps in your services list. Competitors are publishing twice weekly with fresh photos.",
      actions: [
        { label: "Inject 'specialty espresso' into services", impact: "#1 rank" },
        { label: "Schedule 2 weekly Google updates", impact: "Active status" },
        { label: "Request photo reviews from 10 recent patrons", impact: "+42% views" }
      ],
      kpi: "Top 3 Map Pack"
    },
    {
      query: "Draft 3 social posts for my autumn special",
      aiResponse: "3 high-converting post copies, seasonal captions, and hashtag bundles generated for your brand.",
      actions: [
        { label: "Approve Autumn Special Instagram Caption", impact: "Ready" },
        { label: "Schedule Google Business Announcement", impact: "Ready" },
        { label: "Export 1080x1080 Promotional Creative", impact: "Ready" }
      ],
      kpi: "Ready in 15s"
    }
  ];

  const current = prompts[activePromptIndex];

  const handleSelectPrompt = (index: number) => {
    if (index === activePromptIndex) return;
    setIsGenerating(true);
    setActivePromptIndex(index);
    setTimeout(() => {
      setIsGenerating(false);
    }, 400);
  };

  const toggleStep = (step: number) => {
    if (completedSteps.includes(step)) {
      setCompletedSteps(completedSteps.filter(s => s !== step));
    } else {
      setCompletedSteps([...completedSteps, step]);
    }
  };

  return (
    <section className="relative pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-blue-100/50 via-emerald-50/40 to-indigo-100/40 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-50/60 rounded-full blur-2xl -z-10" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-emerald-50/60 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          {/* Small Badge - Clean Dot Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm border border-slate-700/60 hover:border-slate-500 transition-colors">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>AI-POWERED MARKETING MANAGER</span>
          </div>

          {/* Editorial Grand Headline */}
          <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.08] mb-6">
            Your AI Marketing Manager <br className="hidden sm:inline" />
            <span className="italic font-serif-heading font-normal text-slate-800">
              That Helps You Get More Customers.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
            OptigoAI understands your business, finds what's stopping you from growing, creates your marketing, and helps you take action — all from one simple app.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
            <button
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenVideoGuide}
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-medium text-slate-700 bg-white hover:bg-slate-50 rounded-full border border-slate-200/90 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-blue-600 translate-x-0.5" />
              </div>
              <span>See How It Works</span>
            </button>
          </div>

          {/* Small Trust Note */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Built for small and growing businesses. No marketing degree required.</span>
          </div>
        </div>

        {/* Hero Showcase Split Card (Voiceflow Aesthetic with Organic Lush Backdrop) */}
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950">
          
          {/* Lush Green Landscape Photography Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/hero_lush_background.jpg" 
              alt="Lush green organic landscape texture" 
              className="w-full h-full object-cover object-center opacity-85 saturate-120"
            />
            {/* Soft dark vignette gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
          </div>

          {/* Content Over the Backdrop */}
          <div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-14">
            
            {/* Top Bar inside Card */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-white/15 mb-8 sm:mb-10">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  OptigoAI Autonomous Growth Engine
                </span>
                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-400/30">
                  ACTIVE
                </span>
              </div>

              {/* Quick Result Badges */}
              <div className="flex items-center gap-4 text-white text-xs">
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-300">Local Actions:</span>
                  <span className="font-bold text-white">+148%</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-slate-300">Rating:</span>
                  <span className="font-bold text-white">4.9 / 5.0</span>
                </div>
              </div>
            </div>

            {/* 3-Column Layout Matching Voiceflow Reference (Case Study Card + Central Chat Agent + Live Action Meter) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              
              {/* Left Column: Voiceflow-style Editorial Case Study Card */}
              <div className="lg:col-span-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-xl border border-white/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                      Verified Outcome
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">60 Days</span>
                  </div>

                  <div className="font-serif-heading text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight mb-2">
                    +148%
                  </div>

                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    Customer Actions & Calls
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    Local businesses use OptigoAI to automate Google review replies, uncover local keyword gaps, and launch weekend promotions without an agency.
                  </p>

                  {/* Quick Pill Stats */}
                  <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Google Map Pack</span>
                      <span className="font-bold text-emerald-600">Top 3 (#1 Avg)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Review Reply Speed</span>
                      <span className="font-bold text-emerald-600">&lt; 15 Minutes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Weekly Time Saved</span>
                      <span className="font-bold text-slate-900">7.5 Hours</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenGetStarted}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span>Read local business case study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Center Column: Interactive Conversational AI CMO Mockup (Voiceflow Central Mobile Frame Style) */}
              <div className="lg:col-span-5 bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/80 flex flex-col justify-between">
                <div>
                  {/* Agent Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                          AI
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">OptigoAI Marketing Manager</h4>
                        <p className="text-[10px] text-emerald-600 font-medium">Ready with your daily growth strategy</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      Step 1 of 3
                    </span>
                  </div>

                  {/* Interactive Prompt Tabs */}
                  <div className="mb-3.5">
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                      {prompts.map((p, idx) => (
                        <button
                          key={p.query}
                          onClick={() => handleSelectPrompt(idx)}
                          className={`text-[11px] px-3 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                            activePromptIndex === idx
                              ? 'bg-slate-900 text-white font-semibold shadow-xs'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                          }`}
                        >
                          {p.query.split(' ')[0]} {p.query.split(' ')[1]}...
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chat Conversation Area */}
                  <div className="space-y-3 bg-slate-50/90 rounded-xl p-3.5 border border-slate-100/90 text-xs">
                    {/* User Query Bubble */}
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white px-3.5 py-2 rounded-2xl rounded-tr-xs font-medium max-w-[90%] shadow-xs">
                        "{current.query}"
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex items-start gap-2 pt-1 min-w-0 w-full">
                      <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                        AI
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-xs p-3 border border-slate-200/80 shadow-xs space-y-2 flex-1 min-w-0 overflow-hidden">
                        {isGenerating ? (
                          <div className="flex items-center gap-1.5 text-slate-400 py-1">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" />
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                            <span className="text-[11px]">Analyzing Google & Competitors...</span>
                          </div>
                        ) : (
                          <>
                            <p className="font-semibold text-slate-900 leading-snug break-words">
                              {current.aiResponse}
                            </p>
                            <div className="space-y-1.5 pt-1">
                              {current.actions.map((act, aIdx) => (
                                <div key={aIdx} className="flex items-center justify-between text-[11px] bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 min-w-0 gap-2">
                                  <span className="text-slate-700 font-medium truncate flex-1 min-w-0">
                                    {act.label}
                                  </span>
                                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap">
                                    {act.impact}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                              <span className="text-emerald-700 font-semibold">✓ Creatives & copy drafted</span>
                              <span>Ready to execute</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Realistic Input Bar */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex-1 flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full text-xs text-slate-400">
                    <Mic className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">Ask OptigoAI anything...</span>
                  </div>
                  <button 
                    onClick={onOpenGetStarted}
                    className="w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition shrink-0 cursor-pointer shadow-xs"
                    title="Send"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Right Column: Live Action Checklist (Voiceflow Resolution / Action Meter) */}
              <div className="lg:col-span-3 bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-xl border border-white/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-blue-600" />
                      Today's Priorities
                    </span>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                      {completedSteps.length}/3 Done
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
                    Zero guesswork. Plain-English actions to complete today.
                  </p>

                  <div className="space-y-2">
                    {/* Action 1 */}
                    <div 
                      onClick={() => toggleStep(1)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                        completedSteps.includes(1) 
                          ? 'bg-emerald-50/70 border-emerald-200' 
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        completedSteps.includes(1) ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                      }`}>
                        {completedSteps.includes(1) && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold text-slate-900 block truncate">Reply to 5 reviews</span>
                        <span className="text-[10px] text-slate-500">AI drafted 5-star replies</span>
                      </div>
                    </div>

                    {/* Action 2 */}
                    <div 
                      onClick={() => toggleStep(2)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                        completedSteps.includes(2) 
                          ? 'bg-emerald-50/70 border-emerald-200' 
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        completedSteps.includes(2) ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                      }`}>
                        {completedSteps.includes(2) && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold text-slate-900 block truncate">Publish Weekend Promo</span>
                        <span className="text-[10px] text-slate-500">Targets nearby foodies</span>
                      </div>
                    </div>

                    {/* Action 3 */}
                    <div 
                      onClick={() => toggleStep(3)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                        completedSteps.includes(3) 
                          ? 'bg-emerald-50/70 border-emerald-200' 
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        completedSteps.includes(3) ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                      }`}>
                        {completedSteps.includes(3) && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold text-slate-900 block truncate">Update GMB Keywords</span>
                        <span className="text-[10px] text-slate-500">4 local keywords injected</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100">
                  <button
                    onClick={onOpenGetStarted}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Execute 3 Actions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
