import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Star, Users, TrendingUp, Zap, ThumbsUp, MapPin, Check, Wifi, Battery, MessageSquare, Flame } from 'lucide-react';

interface ProblemSectionProps {
  onOpenGetStarted: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenGetStarted }) => {
  const [selectedPainPoint, setSelectedPainPoint] = useState(0);

  const painPoints = [
    {
      quote: "I don't know what I should post.",
      solution: "OptigoAI auto-generates high-converting weekly posts, promotional specials, and seasonal announcements tailored to your niche.",
      category: "Content Creation",
      renderPhoneScreen: () => (
        <div className="space-y-3.5">
          {/* Post Preview Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  AI
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Weekend Promo Campaign</span>
                  <span className="text-[10px] text-slate-500">Google Post & Instagram</span>
                </div>
              </div>
              <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                Ready
              </span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 space-y-2">
              <p className="text-xs text-slate-800 leading-relaxed font-normal">
                "Start your weekend right! Enjoy 20% off all artisan specialty drinks and fresh pastries this Saturday & Sunday. 🥐☕"
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-blue-600 font-medium">
                <span>#WeekendEats</span> <span>#SpecialtyCoffee</span> <span>#LocalBakery</span>
              </div>
            </div>

            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20">
              <Check className="w-3.5 h-3.5" />
              <span>Approve & Publish (1-Click)</span>
            </button>
          </div>

          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between text-[11px] shadow-xs">
            <span className="text-slate-500">Predicted Reach: +850 local views</span>
            <span className="text-emerald-600 font-bold">High ROI</span>
          </div>
        </div>
      )
    },
    {
      quote: "Why aren't more people finding my business?",
      solution: "OptigoAI audits your Google presence, uncovers local keyword gaps, and updates your profile to rank in the top 3 map pack.",
      category: "Local SEO",
      renderPhoneScreen: () => (
        <div className="space-y-3.5">
          {/* Map Pack Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Google Map Pack</span>
                  <span className="text-[10px] text-slate-500">Local Area Visibility</span>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
                #1 Map Rank
              </span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">1. Your Business</span>
                <div className="flex items-center gap-1 text-amber-500 text-[11px]">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span className="font-bold text-slate-900">4.9</span>
                  <span className="text-slate-400">(284)</span>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[94%] rounded-full" />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500">
                <span>Search: "best cafe near me"</span>
                <span className="text-emerald-600 font-bold">+184% Discovery</span>
              </div>
            </div>

            <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200/80 text-[11px] text-emerald-800 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>4 local keyword gaps resolved</span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between text-[11px] shadow-xs">
            <span className="text-slate-500">Competitors Checked</span>
            <span className="text-blue-600 font-bold">5 Nearby Rivals</span>
          </div>
        </div>
      )
    },
    {
      quote: "My competitors are getting more customers.",
      solution: "OptigoAI monitors nearby competitor pricing, posting frequency, and customer feedback to reveal actionable gaps you can capitalize on.",
      category: "Competitor Intel",
      renderPhoneScreen: () => (
        <div className="space-y-3.5">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Competitor Radar</span>
                  <span className="text-[10px] text-slate-500">5 Local Rivals Tracked</span>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                Opportunity
              </span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-800">
                <span className="font-medium">Your Posting Cadence</span>
                <span className="text-emerald-600 font-bold">3x / week (Active)</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Top Local Rival</span>
                <span className="text-red-500 font-semibold">0 posts in 3 weeks</span>
              </div>
              <div className="p-2.5 bg-blue-50 rounded-lg border border-blue-100 text-[11px] text-blue-900 font-medium">
                💡 Action: Launch weekend offer to capture ~35 searching customers.
              </div>
            </div>

            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20">
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span>Launch Counter-Campaign</span>
            </button>
          </div>

          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between text-[11px] shadow-xs">
            <span className="text-slate-500">Market Advantage</span>
            <span className="text-emerald-600 font-bold">+28% Higher Visibility</span>
          </div>
        </div>
      )
    },
    {
      quote: "I don't have time to manage reviews.",
      solution: "AI drafts authentic, professional 5-star responses to every Google review instantly, protecting your reputation while you work.",
      category: "Reputation",
      renderPhoneScreen: () => (
        <div className="space-y-3.5">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <ThumbsUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Google Review Stream</span>
                  <span className="text-[10px] text-slate-500">100% Reply Coverage</span>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                4.9 ★ Rating
              </span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">Sarah M.</span>
                <div className="flex items-center text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                </div>
              </div>
              <p className="text-[11px] text-slate-600 italic">
                "Incredible coffee and friendly staff! Best espresso in town."
              </p>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[11px] text-slate-800">
                <span className="text-blue-600 font-bold block mb-0.5">OptigoAI Drafted:</span>
                "Thank you Sarah! We roast our beans fresh every week. See you again soon!"
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
              <span>Reply time: &lt; 3 mins</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Auto-Replied
              </span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between text-[11px] shadow-xs">
            <span className="text-slate-500">Unanswered Reviews</span>
            <span className="text-emerald-600 font-bold">0 Pending</span>
          </div>
        </div>
      )
    },
    {
      quote: "Is my Google Business Profile actually performing well?",
      solution: "Get a plain-English health score and specific action items—not 50 confusing charts.",
      category: "Performance",
      renderPhoneScreen: () => (
        <div className="space-y-3.5">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Google Profile Health</span>
                  <span className="text-[10px] text-slate-500">Monthly Report</span>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                94 / 100
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                <span className="text-[10px] text-slate-500 block">Phone Calls</span>
                <span className="text-lg font-bold text-slate-900 mt-0.5 block">+142</span>
                <span className="text-[9px] text-emerald-600 font-semibold">+38% vs last mo</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                <span className="text-[10px] text-slate-500 block">Directions</span>
                <span className="text-lg font-bold text-slate-900 mt-0.5 block">+389</span>
                <span className="text-[9px] text-emerald-600 font-semibold">+24% visits</span>
              </div>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 text-[11px] text-slate-700 flex items-center justify-between font-medium">
              <span>Local Search Category Rank</span>
              <span className="text-emerald-600 font-bold">Top 5%</span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between text-[11px] shadow-xs">
            <span className="text-slate-500">Profile Completeness</span>
            <span className="text-blue-600 font-bold">100% Optimized</span>
          </div>
        </div>
      )
    },
    {
      quote: "What should I improve first?",
      solution: "Your daily prioritized action list ranks tasks by estimated revenue impact so you never guess where to start.",
      category: "Prioritization",
      renderPhoneScreen: () => (
        <div className="space-y-3.5">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Today's Priorities</span>
                  <span className="text-[10px] text-slate-500">Revenue Impact Order</span>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full border border-purple-200">
                3 Tasks
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 flex items-center justify-between">
                <span className="font-medium text-slate-800 truncate mr-2">1. Reply to 5 reviews</span>
                <span className="text-[9px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200 shrink-0">High</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 flex items-center justify-between">
                <span className="font-medium text-slate-800 truncate mr-2">2. Post weekend promo</span>
                <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">Opportunity</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 flex items-center justify-between">
                <span className="font-medium text-slate-800 truncate mr-2">3. Update description</span>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">Quick Win</span>
              </div>
            </div>

            <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20">
              <Check className="w-3.5 h-3.5" />
              <span>Execute All 3 in 1 Click</span>
            </button>
          </div>

          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between text-[11px] shadow-xs">
            <span className="text-slate-500">Daily Execution Time</span>
            <span className="text-slate-900 font-bold">&lt; 5 Minutes</span>
          </div>
        </div>
      )
    },
    {
      quote: "I'm spending money on marketing, but is it working?",
      solution: "OptigoAI tracks real customer actions (calls, directions, bookings) to prove clear return on every activity.",
      category: "ROI Analytics",
      renderPhoneScreen: () => (
        <div className="space-y-3.5">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Verified Marketing ROI</span>
                  <span className="text-[10px] text-slate-500">Monthly Growth Metric</span>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                +148% Net Lift
              </span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Tracked Customer Actions</span>
                <span className="font-bold text-slate-900">482 this month</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Estimated Revenue Added</span>
                <span className="font-bold text-emerald-600">+$3,400</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Agency Fees Eliminated</span>
                <span className="font-bold text-blue-600">$1,500 / month</span>
              </div>
            </div>

            <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-800 flex items-center justify-between font-medium">
              <span>Verified 100% Attribution</span>
              <span className="font-bold">Active</span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between text-[11px] shadow-xs">
            <span className="text-slate-500">Net Return On Tool</span>
            <span className="text-emerald-600 font-bold">12.4x ROI</span>
          </div>
        </div>
      )
    },
  ];

  const current = painPoints[selectedPainPoint];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-red-200/80">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Small Business Dilemma</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight mb-5">
            Marketing Is Hard When <br className="hidden sm:inline" />
            <span className="italic text-slate-800">You're Running a Business.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            You already have a business to manage. You shouldn't have to become an SEO expert, social media manager, content creator, advertising specialist, and marketing analyst just to get more customers.
          </p>
        </div>

        {/* Voiceflow Style 3-Column Visual Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          {/* Card 1: Diagnose & Uncover */}
          <div className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              {/* Mockup Preview Header with Background Texture */}
              <div className="h-44 sm:h-48 rounded-2xl bg-slate-950 p-4 mb-6 border border-slate-800 flex flex-col justify-between text-white relative overflow-hidden">
                <img 
                  src="/assets/audit_card_bg.jpg" 
                  onError={(e) => { e.currentTarget.src = '/assets/hero_lush_background.jpg'; }}
                  alt="Audit background texture" 
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                
                <div className="relative z-10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">Google Business Audit</span>
                  <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-bold border border-red-500/30">3 Gaps Found</span>
                </div>

                <div className="relative z-10 space-y-2 bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-white/10">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-300">Missing description keywords</span>
                    <span className="text-amber-400 font-mono font-semibold">Urgent</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-300">Unanswered customer reviews</span>
                    <span className="text-red-400 font-mono font-semibold">8 pending</span>
                  </div>
                </div>

                <div className="relative z-10 text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Auto-diagnosed in 12 seconds
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Diagnose.</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect your business profiles and let AI uncover hidden growth blockers, ranking blindspots, and competitor advantages.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Automatic Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Autonomous AI CMO */}
          <div className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              {/* Mockup Preview Header with Background Texture */}
              <div className="h-44 sm:h-48 rounded-2xl bg-slate-950 p-4 mb-6 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
                <img 
                  src="/assets/hero_lush_background.jpg" 
                  alt="AI CMO Background texture" 
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                
                <div className="relative z-10 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400" /> AI CMO Agent
                  </span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-bold border border-blue-400/30">Always On</span>
                </div>
                
                <div className="relative z-10 bg-white/95 rounded-xl p-3 shadow-lg text-slate-900 space-y-1">
                  <p className="text-[11px] font-bold">"What should I do this week?"</p>
                  <p className="text-[10px] text-slate-600">➔ Launch weekend special + reply to 5 recent reviews.</p>
                </div>
                
                <div className="relative z-10 text-[10px] text-slate-300 flex items-center justify-between">
                  <span>Zero guesswork</span>
                  <span className="text-emerald-400 font-semibold">1-Click Approval</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">Guide.</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Receive practical, plain-English guidance and prioritized daily tasks instead of drowning in complicated dashboards.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Decision Engine</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Instant Execution & ROI */}
          <div className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              {/* Mockup Preview Header with Background Texture */}
              <div className="h-44 sm:h-48 rounded-2xl bg-slate-950 p-4 mb-6 border border-slate-800 flex flex-col justify-between text-white relative overflow-hidden">
                <img 
                  src="/assets/growth_card_bg.jpg" 
                  onError={(e) => { e.currentTarget.src = '/assets/hero_lush_background.jpg'; }}
                  alt="Growth chart background texture" 
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                
                <div className="relative z-10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">Revenue Impact</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-400/30">+148% Lift</span>
                </div>
                
                <div className="relative z-10 flex items-end justify-between gap-2 h-16 pt-2 bg-slate-900/60 backdrop-blur-xs p-2 rounded-xl border border-white/10">
                  <div className="flex-1 bg-slate-700/60 rounded-t h-[30%] flex items-center justify-center text-[9px] text-slate-400">W1</div>
                  <div className="flex-1 bg-slate-700/60 rounded-t h-[45%] flex items-center justify-center text-[9px] text-slate-400">W2</div>
                  <div className="flex-1 bg-slate-700/60 rounded-t h-[60%] flex items-center justify-center text-[9px] text-slate-400">W3</div>
                  <div className="flex-1 bg-emerald-500 rounded-t h-[95%] flex items-center justify-center text-[9px] font-bold text-slate-950">W4</div>
                </div>
                
                <div className="relative z-10 text-[10px] text-slate-300 flex items-center justify-between">
                  <span>Customer Phone Calls:</span>
                  <span className="text-emerald-400 font-bold font-mono">+95 calls/mo</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                <h3 className="text-lg font-bold text-slate-900">Execute & Scale.</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Create promotional posts, publish review replies, and track real business growth without hiring an expensive agency.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Measurable Growth</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        {/* Interactive Solution Finder with 9:16 Light-Themed iPhone Mockup */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-sm">
          
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Interactive Solution Finder</span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl text-slate-900 mt-1">
              Do Any of These Sound Familiar?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
              Click any common marketing challenge to see how OptigoAI solves it inside your pocket.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Quotes List */}
            <div className="lg:col-span-6 space-y-2.5 flex flex-col justify-center">
              {painPoints.map((item, idx) => {
                const isSelected = selectedPainPoint === idx;
                return (
                  <button
                    key={item.quote}
                    onClick={() => setSelectedPainPoint(idx)}
                    className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer group ${
                      isSelected
                        ? 'bg-slate-900 text-white font-semibold shadow-md ring-2 ring-blue-600/20 translate-x-1'
                        : 'bg-[#FAF9F6] text-slate-700 hover:bg-slate-100/90 border border-slate-200/80'
                    }`}
                  >
                    <span className="flex items-center gap-3 truncate">
                      <span className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                        isSelected ? 'bg-blue-400' : 'bg-slate-300 group-hover:bg-slate-400'
                      }`} />
                      <span className="truncate">"{item.quote}"</span>
                    </span>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold shrink-0 border ${
                      isSelected 
                        ? 'bg-slate-800 text-slate-300 border-slate-700' 
                        : 'bg-white text-slate-500 border-slate-200'
                    }`}>
                      {item.category}
                    </span>
                  </button>
                );
              })}

              <div className="pt-2">
                <button
                  onClick={onOpenGetStarted}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/20 group"
                >
                  <span>Solve This For Your Business</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Tall 9:16 iPhone Pro Device Frame (Light Themed App UI) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              
              {/* iPhone Outer Hardware Chassis (Titanium Bezel) */}
              <div className="w-[315px] sm:w-[335px] rounded-[52px] bg-slate-900 p-3 sm:p-3.5 shadow-[0_30px_70px_-15px_rgba(15,23,42,0.35)] border-4 border-slate-700/80 relative">
                
                {/* Physical Side Hardware Buttons */}
                <div className="absolute -left-[7px] top-24 w-[3px] h-8 bg-slate-700 rounded-l" />
                <div className="absolute -left-[7px] top-36 w-[3px] h-11 bg-slate-700 rounded-l" />
                <div className="absolute -left-[7px] top-50 w-[3px] h-11 bg-slate-700 rounded-l" />
                <div className="absolute -right-[7px] top-28 w-[3px] h-14 bg-slate-700 rounded-r" />

                {/* iPhone Screen Inner Display (Light Mode Theme) */}
                <div className="rounded-[42px] bg-[#F8FAFC] p-4 sm:p-4.5 border border-slate-200/90 flex flex-col justify-between min-h-[600px] sm:min-h-[640px] relative overflow-hidden shadow-inner">
                  
                  <div>
                    {/* Top iOS Status Bar */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-900 mb-3 px-2 pt-0.5">
                      <span>9:41</span>
                      
                      {/* Dynamic Island */}
                      <div className="w-22 h-4.5 bg-black rounded-full flex items-center justify-between px-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                        <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700" />
                      </div>

                      <div className="flex items-center gap-1.5 text-slate-800">
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Light-Themed Mobile App Bar */}
                    <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                          O
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-slate-900 block leading-none">OptigoAI</span>
                          <span className="text-[9px] text-emerald-600 font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                            Autopilot Active
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold border border-blue-100">
                        {current.category}
                      </span>
                    </div>

                    {/* Challenge Banner Header inside Mobile Screen */}
                    <div className="mb-3 px-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Live Solution
                      </span>
                      <p className="text-xs font-serif-heading italic text-slate-900 leading-tight">
                        "{current.quote}"
                      </p>
                    </div>

                    {/* Dynamic Light-Themed App Content */}
                    <div className="transition-all duration-300">
                      {current.renderPhoneScreen()}
                    </div>
                  </div>

                  {/* Light-Themed iOS Bottom Tab Bar & Home Indicator */}
                  <div className="pt-3 border-t border-slate-200/80 mt-3 bg-white/80 backdrop-blur-xs rounded-2xl p-2">
                    <div className="flex items-center justify-around text-slate-400 text-[10px] pb-1.5">
                      <span className="text-blue-600 font-bold flex flex-col items-center gap-0.5">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Today</span>
                      </span>
                      <span className="flex flex-col items-center gap-0.5 hover:text-slate-600 transition-colors">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Growth</span>
                      </span>
                      <span className="flex flex-col items-center gap-0.5 hover:text-slate-600 transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>AI CMO</span>
                      </span>
                    </div>
                    {/* iOS Home Bar */}
                    <div className="w-24 h-1 bg-slate-900 rounded-full mx-auto" />
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
