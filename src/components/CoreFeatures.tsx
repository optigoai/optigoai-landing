import React, { useState } from 'react';
import {
  Sparkles, Globe, MessageSquareQuote, Search, PenTool, Image, Users, Megaphone, Lightbulb,
  CheckCircle2, ArrowRight, Star, Send, ShieldCheck, Flame, Copy, Check, Layers
} from 'lucide-react';
import { motion } from 'framer-motion';

interface CoreFeaturesProps {
  onOpenGetStarted: () => void;
}

export const CoreFeatures: React.FC<CoreFeaturesProps> = ({ onOpenGetStarted }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const features = [
    {
      id: 'ai-cmo',
      title: 'AI CMO',
      shortTitle: 'AI CMO',
      icon: Sparkles,
      tagline: 'Your always-available AI marketing manager',
      badge: 'Core Intelligence',
      headline: 'Practical answers and actionable recommendations on demand.',
      desc: 'Ask your AI CMO any question about growth, local rankings, or campaign ideas. Receive plain-English guidance and prioritized next steps rather than confusing metrics.',
      bullets: [
        'Ask "How can I get more customers this month?"',
        'Ask "What should I improve this week?"',
        'Ask "Why are my competitors doing better?"',
        'Ask "What should I post today?"',
      ],
      interactiveType: 'chat-mock',
    },
    {
      id: 'google-business',
      title: 'Google Business Manager',
      shortTitle: 'Google Business',
      icon: Globe,
      tagline: 'Dominate local Google search and map pack',
      badge: 'Local Ranking',
      headline: 'Optimize, manage, and scale your Google presence.',
      desc: 'Connect your Google Business Profile to track real customer views, optimize your services & bio, publish high-converting Google Posts, and boost search visibility.',
      bullets: [
        'Business profile insights & search trends',
        'AI-drafted Google Posts and announcements',
        'Profile optimization & category ranking recommendations',
        'Direct local visibility audits',
      ],
      interactiveType: 'gmb-mock',
    },
    {
      id: 'review-manager',
      title: 'AI Review Manager',
      shortTitle: 'Reviews AI',
      icon: MessageSquareQuote,
      tagline: 'Never leave your customers waiting for a response',
      badge: 'Reputation Shield',
      headline: 'Automated 5-star sentiment analysis & personalized replies.',
      desc: 'OptigoAI analyzes every incoming review, detects customer sentiment, and drafts personalized, professional responses that build trust and please Google algorithms.',
      bullets: [
        '24/7 Google review monitoring & sentiment alerts',
        'AI-generated personalized responses with 1-click approval',
        'Turn neutral reviews into loyal returning customers',
        'Full reputation analytics and trend monitoring',
      ],
      interactiveType: 'review-mock',
    },
    {
      id: 'local-seo',
      title: 'Local SEO',
      shortTitle: 'Local SEO',
      icon: Search,
      tagline: 'Get discovered by more nearby customers',
      badge: 'Search Visibility',
      headline: 'Rank #1 in the Google 3-Pack for high-intent local searches.',
      desc: 'OptigoAI analyzes your local search presence and identifies untapped keyword opportunities, citation gaps, and actionable profile enhancements.',
      bullets: [
        'Local SEO gap analysis against top 5 neighborhood rivals',
        'Keyword opportunities tailored to high-converting buyer intent',
        'Google Map pack visibility tracking & coordinate scan',
        'Actionable step-by-step optimization recommendations',
      ],
      interactiveType: 'seo-mock',
    },
    {
      id: 'content-creator',
      title: 'AI Content Creator',
      shortTitle: 'Content AI',
      icon: PenTool,
      tagline: 'High-converting copy without hiring a full-time writer',
      badge: 'Copy Generator',
      headline: 'Generate engaging social captions, posts, and promotional copy.',
      desc: 'Create captivating social media captions, Google Posts, promotional announcements, and marketing copy tailored precisely to your brand tone.',
      bullets: [
        'Social media captions for Instagram, Facebook, and LinkedIn',
        'Weekly Google Posts with high-conversion calls to action',
        'Promotional offers, event announcements, and discounts',
        'Ad copy ready for Google & Meta local campaigns',
      ],
      interactiveType: 'content-mock',
    },
    {
      id: 'creative-studio',
      title: 'AI Creative Studio',
      shortTitle: 'Creative Studio',
      icon: Image,
      tagline: 'Turn ideas into professional marketing creatives',
      badge: 'Visual Design',
      headline: 'Studio-quality visual assets designed automatically for your brand.',
      desc: 'Transform simple ideas into stunning marketing graphics, promotional banners, and social posts without needing Canva or Photoshop skills.',
      bullets: [
        'Visuals for promotions, weekend offers, and seasonal sales',
        'Social media feed & story graphic dimensions',
        'Product marketing visuals & service banners',
        'Consistent typography, colors, and branding applied automatically',
      ],
      interactiveType: 'creative-mock',
    },
    {
      id: 'competitor-intel',
      title: 'Competitor Intelligence',
      shortTitle: 'Competitor Intel',
      icon: Users,
      tagline: 'Know what your competitors are doing before they do it',
      badge: 'Market Radar',
      headline: 'Track rival pricing, content frequency, and review sentiment.',
      desc: 'OptigoAI continuously tracks nearby competitors, uncovering what they do better, where their customers complain, and the opportunities you can capitalize on.',
      bullets: [
        'Identify top local direct and indirect competitors',
        'Analyze competitor content activity, promotions, and gaps',
        'Identify competitor weak spots in customer reviews',
        'Actionable tactics to win over local market share',
      ],
      interactiveType: 'competitor-mock',
    },
    {
      id: 'marketing-campaigns',
      title: 'Marketing Campaigns',
      shortTitle: 'Campaigns',
      icon: Megaphone,
      tagline: 'Launch multi-channel campaigns without complicated software',
      badge: 'Growth Engine',
      headline: 'Tell OptigoAI: "I want more customers this weekend."',
      desc: 'OptigoAI builds the complete end-to-end campaign, drafts the promotional offer, designs the creatives, and outlines the recommended publishing schedule.',
      bullets: [
        'Instant multi-platform promotional campaigns',
        'Turn goals ("Fill slow Tuesday nights") into full campaigns',
        'Pre-packaged offer copy, image assets, and schedule',
        'Single-click deployment across all channels',
      ],
      interactiveType: 'campaign-mock',
    },
    {
      id: 'smart-insights',
      title: 'Smart Marketing Insights',
      shortTitle: 'Smart Insights',
      icon: Lightbulb,
      tagline: 'No confusing analytics dashboards',
      badge: 'Clarity First',
      headline: 'Instead of "Here are 50 metrics" — "Here are the 3 things to do."',
      desc: 'Eliminate analytical paralysis. OptigoAI filters out vanity metrics and delivers a daily prioritized checklist with estimated revenue upside.',
      bullets: [
        'No endless graphs or confusing acronyms',
        'Plain-English summaries of your monthly progress',
        '3 prioritized actions refreshed every 24 hours',
        'Direct tracking of phone calls, website clicks, and foot traffic',
      ],
      interactiveType: 'insights-mock',
    },
  ];

  const current = features[activeTab];

  return (
    <section id="features" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80">
            <Layers className="w-3.5 h-3.5" />
            <span>Integrated Platform</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            Everything You Need to Market <br className="hidden sm:inline" />
            <span className="italic text-slate-800">Your Business Smarter.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Nine integrated AI capabilities engineered to handle strategy, creation, execution, and analytics in one cohesive workspace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-start lg:justify-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {features.map((f, idx) => {
            const Icon = f.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={f.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{f.shortTitle}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >

          {/* Left Column: Feature Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  {current.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">{current.tagline}</span>
              </div>

              <h3 className="font-serif-heading text-3xl sm:text-4xl text-slate-900 leading-tight mb-3">
                {current.title}
              </h3>

              <p className="text-base font-medium text-slate-700 mb-2">
                {current.headline}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Bullets List */}
            <div className="space-y-2.5 pt-2">
              {current.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenGetStarted}
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Try {current.shortTitle}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Instant Activation
              </span>
            </div>
          </div>

          {/* Right Column: Live Interactive Mockup Widget */}
          <div className="lg:col-span-6">

            {/* 1. AI CMO Chat Simulation Widget */}
            {current.interactiveType === 'chat-mock' && (
              <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/90 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">Ask OptigoAI CMO</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">Active Agent</span>
                </div>

                <div className="bg-blue-50/80 rounded-xl p-3 text-xs text-blue-950 font-medium text-right">
                  "How can I increase revenue for this weekend's slow hours?"
                </div>

                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs text-slate-800 space-y-2">
                  <p className="font-bold text-slate-900">Here are 2 instant revenue plays:</p>
                  <p>1. Send a "Complimentary Dessert with 2 Entrees" promo to your 450 past local diners.</p>
                  <p>2. Publish an updated Google Post featuring your chef's weekend special.</p>
                  <div className="pt-2 border-t border-slate-200 flex justify-end">
                    <button
                      onClick={onOpenGetStarted}
                      className="px-3 py-1 bg-blue-600 text-white text-[11px] font-bold rounded-lg cursor-pointer"
                    >
                      Generate Content (1 Click)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Google Business Manager Widget */}
            {current.interactiveType === 'gmb-mock' && (
              <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/90 space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-slate-900">Google Business Profile Score</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">94/100 (Optimal)</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-slate-400 text-[10px] block">Profile Views</span>
                    <span className="text-base font-bold text-slate-900">12,480</span>
                    <span className="text-[10px] text-emerald-600 block mt-0.5">↑ 34% vs last mo</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-slate-400 text-[10px] block">Direct Calls</span>
                    <span className="text-base font-bold text-slate-900">142 calls</span>
                    <span className="text-[10px] text-emerald-600 block mt-0.5">↑ 52% vs last mo</span>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                  <span>✓ 3 Scheduled Google Posts for next 7 days</span>
                  <span className="font-bold text-emerald-700">Auto-Scheduled</span>
                </div>
              </div>
            )}

            {/* 3. AI Review Manager Widget */}
            {current.interactiveType === 'review-mock' && (
              <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">Latest Google Review</span>
                  <span className="text-[10px] text-slate-400">12 mins ago</span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-800 ml-1.5">Sarah Jenkins</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">"The avocado sourdough and oat milk flat white were unmatched! Best cafe in the neighborhood."</p>
                </div>

                <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-800 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-600" /> AI-Generated Reply (Ready to Send)
                    </span>
                    <span className="text-[10px] text-emerald-600">SEO Optimized</span>
                  </div>
                  <p className="text-[11px] text-slate-700">
                    "Thank you Sarah! We take huge pride in our fresh artisan sourdough and specialty coffee. Can't wait to welcome you back for brunch!"
                  </p>
                  <button
                    onClick={onOpenGetStarted}
                    className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Approve & Post Reply</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {/* 4. Local SEO Widget */}
            {current.interactiveType === 'seo-mock' && (
              <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">Local Keyword Map Pack Rank</span>
                  <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">3 Mile Radius</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl text-xs">
                    <span className="font-medium text-slate-700">"best specialty coffee near me"</span>
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">#1 Position</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl text-xs">
                    <span className="font-medium text-slate-700">"weekend brunch bakery"</span>
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">#2 (↑ 4 spots)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl text-xs">
                    <span className="font-medium text-slate-700">"artisan gluten free pastries"</span>
                    <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">#3 Opportunity</span>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl text-xs text-blue-900">
                  <p className="font-bold mb-0.5">Recommended SEO Action:</p>
                  <p className="text-[11px] text-slate-600">Inject "gluten free pastries" into your Google Profile services list to capture 180 monthly searches.</p>
                </div>
              </div>
            )}

            {/* 5. AI Content Creator Widget */}
            {current.interactiveType === 'content-mock' && (
              <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">AI-Generated Social Caption</span>
                  <span className="text-[10px] bg-pink-50 text-pink-700 font-bold px-2 py-0.5 rounded">Instagram & Meta</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-800 space-y-2">
                  <p className="font-medium text-slate-900">
                    "Crispy crust. Soft, pillowy center. Fresh out of the oven every morning at 7 AM. 🥐☕️
                  </p>
                  <p className="text-slate-600">
                    Drop by this weekend and pair our signature cinnamon brioche with a warm flat white. Show this post at checkout for 15% off your drink!"
                  </p>
                  <p className="text-blue-600 text-[11px] font-mono">
                    #LocalBakery #SpecialtyCoffee #WeekendBrunch #ArtisanPastries
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(0, "Crispy crust. Soft, pillowy center...")}
                    className="flex-1 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedIndex === 0 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIndex === 0 ? 'Copied to Clipboard' : 'Copy Caption'}</span>
                  </button>
                  <button
                    onClick={onOpenGetStarted}
                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition cursor-pointer"
                  >
                    Publish
                  </button>
                </div>
              </div>
            )}

            {/* 6. AI Creative Studio Widget */}
            {current.interactiveType === 'creative-mock' && (
              <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">AI Creative Studio Export</span>
                  <span className="text-[10px] bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded">1080x1080 Ready</span>
                </div>

                <div 
                  className="rounded-xl overflow-hidden border border-slate-200 relative aspect-video bg-slate-900 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/assets/hero_lush_background.jpg)' }}
                  data-nosnippet
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/40 p-4 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Weekend Special</span>
                    <h4 className="text-base font-bold font-serif-heading">Artisan Coffee & Bakery Flight</h4>
                    <p className="text-[11px] text-slate-300">20% Off every Saturday morning</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500">Auto-branded with your colors & logo</span>
                  <button
                    onClick={onOpenGetStarted}
                    className="text-blue-600 font-bold hover:underline cursor-pointer"
                  >
                    Download Asset →
                  </button>
                </div>
              </div>
            )}

            {/* 7. Competitor Intelligence Widget */}
            {current.interactiveType === 'competitor-mock' && (
              <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">Competitor Gap Analysis</span>
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold">Opportunity Found</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 block">Downtown Roast Lab (0.4 mi)</span>
                      <span className="text-slate-500 text-[11px]">No weekend promos posted in 14 days</span>
                    </div>
                    <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">Advantage: You</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 block">The Corner Patisserie (1.1 mi)</span>
                      <span className="text-slate-500 text-[11px]">Recent negative reviews on slow service</span>
                    </div>
                    <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded">Highlight Speed</span>
                  </div>
                </div>

                <div className="p-2.5 bg-emerald-50 rounded-xl text-xs text-emerald-900">
                  <span className="font-bold">Playbook:</span> Launch a "Fast & Fresh Morning Pickup" campaign to capture frustrated local patrons.
                </div>
              </div>
            )}

            {/* 8. Marketing Campaigns Widget */}
            {current.interactiveType === 'campaign-mock' && (
              <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">Campaign Blueprint</span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded">Ready to Deploy</span>
                </div>

                <div className="bg-slate-900 text-white p-3.5 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-400">Target: "Weekend Foot Traffic Surge"</span>
                    <span className="text-[10px] text-slate-400">Estimated Reach: 3.2k</span>
                  </div>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    <p>• Google Business Offer Post drafted</p>
                    <p>• Instagram & Facebook promo scheduled</p>
                    <p>• Loyalty SMS copy ready</p>
                  </div>
                </div>

                <button
                  onClick={onOpenGetStarted}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Flame className="w-4 h-4 text-amber-300 fill-amber-300" />
                  <span>Launch Weekend Campaign</span>
                </button>
              </div>
            )}

            {/* 9. Smart Marketing Insights Widget */}
            {current.interactiveType === 'insights-mock' && (
              <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">3 Things To Do Next</span>
                  <span className="text-[10px] text-slate-500 font-mono">Updated 10m ago</span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 bg-red-50/70 border border-red-200 rounded-xl text-xs flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-1.5" />
                    <div>
                      <span className="font-bold text-red-950 block">Reply to 3 pending reviews</span>
                      <span className="text-slate-600 text-[11px]">Estimated impact: +12% ranking boost</span>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <div>
                      <span className="font-bold text-amber-950 block">Publish weekend promo offer</span>
                      <span className="text-slate-600 text-[11px]">Estimated impact: +25 customer visits</span>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <div>
                      <span className="font-bold text-emerald-950 block">Update business holiday hours</span>
                      <span className="text-slate-600 text-[11px]">Prevents customer confusion on Monday</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
};
