import React, { useState } from 'react';
import { X, Video, Sparkles, Film, Layers, Copy, Check } from 'lucide-react';

interface VideoGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoGuideModal: React.FC<VideoGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const videoRecommendations = [
    {
      id: 'vid-hero',
      title: 'Hero Section: 60-Second AI CMO Interactive Walkthrough',
      placement: 'Hero Section ("See How It Works" Trigger & Main Card)',
      aspectRatio: '16:9 (1920x1080 or 4K)',
      duration: '45 - 60 seconds',
      format: 'MP4 / WebM / Loom Embed',
      purpose: 'Gives visitors an instant, high-trust visual demonstration of how asking OptigoAI one question transforms into an actionable growth campaign.',
      storyboard: [
        { time: '0:00 - 0:10', action: 'Business owner opens OptigoAI on desktop and clicks/types "How can I get more customers this weekend?".' },
        { time: '0:10 - 0:25', action: 'Screen shows OptigoAI scanning Google Business profile, competitor posts, and review sentiment in 3 seconds.' },
        { time: '0:25 - 0:45', action: 'OptigoAI presents the 3-step action plan: 5 review replies + weekend promo post + GMB keyword update.' },
        { time: '0:45 - 0:60', action: 'Owner clicks "Approve All" and watches the posts publish live to Google & Instagram with surge in views.' },
      ],
      scriptNotes: 'Keep background upbeat, show cursor movements clearly, and highlight the instant gratification of 1-click execution.',
    },
    {
      id: 'vid-gmb-reviews',
      title: 'Google Business & AI Review Manager in Action',
      placement: 'Core Features Section (Google Business & Reviews AI Tabs)',
      aspectRatio: '16:9 (1920x1080)',
      duration: '30 - 45 seconds',
      format: 'MP4 / WebM',
      purpose: 'Shows how local business owners eliminate hours of manual typing with automated, SEO-optimized 5-star review replies.',
      storyboard: [
        { time: '0:00 - 0:12', action: 'Show notification of 3 new Google reviews (positive & neutral).' },
        { time: '0:12 - 0:28', action: 'OptigoAI instantly crafts 3 distinct, warm, keyword-rich responses that sound authentic (not robotic).' },
        { time: '0:28 - 0:45', action: 'Owner taps "Approve" — review score stays at 4.9★ and map pack rank climbs to #1.' },
      ],
      scriptNotes: 'Emphasize the contrast between slow manual typing vs 1-second AI drafting.',
    },
    {
      id: 'vid-creative-studio',
      title: 'AI Creative Studio & 1-Click Multi-Channel Campaign',
      placement: 'Features Hub (AI Creative Studio & Marketing Campaigns)',
      aspectRatio: '16:9 or 1:1',
      duration: '30 - 40 seconds',
      format: 'MP4 / WebM',
      purpose: 'Demonstrates how a business owner without any design skills generates professional social banners and flyers in seconds.',
      storyboard: [
        { time: '0:00 - 0:10', action: 'Type goal: "Create 20% Off Weekend Brunch Special for local foodies".' },
        { time: '0:10 - 0:25', action: 'AI generates styled Instagram square, story vertical, and Google Post banner with branding.' },
        { time: '0:25 - 0:40', action: 'Shows simultaneous scheduling across Instagram, Facebook, and Google Business.' },
      ],
      scriptNotes: 'Showcase beautiful food/retail imagery with modern typography overlays.',
    },
    {
      id: 'vid-mobile-app',
      title: 'Mobile Morning Routine: Today’s 3 Growth Actions',
      placement: 'Action-First Section & Built for Small Businesses',
      aspectRatio: '9:16 (Vertical Phone Format 1080x1920)',
      duration: '20 - 30 seconds',
      format: 'MP4 (Reel / Shorts format)',
      purpose: 'Demonstrates the effortless mobile experience for owners checking their 3 daily tasks while opening their store in the morning.',
      storyboard: [
        { time: '0:00 - 0:08', action: 'Store owner opens OptigoAI mobile app at 8:00 AM coffee in hand.' },
        { time: '0:08 - 0:20', action: 'Checks off "Reply to 3 reviews", "Approve weekend post", and "Sync holiday hours".' },
        { time: '0:20 - 0:30', action: 'Shows progress bar reaching 100% and estimated customer reach (+148%).' },
      ],
      scriptNotes: 'Real-world feel, fast paced, perfect for social proof and mobile responsiveness.',
    },
  ];

  const current = videoRecommendations[activeVideo];

  const handleCopySpec = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold">Recommended Product Video Specifications</h3>
              <p className="text-xs text-slate-300">Exact blueprints for videos to record and embed in OptigoAI</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Top Video Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100">
            {videoRecommendations.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => setActiveVideo(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
                  activeVideo === idx
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Video 0{idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Active Video Blueprint Details */}
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Video Asset #{activeVideo + 1} of 4
              </span>
              <h4 className="text-xl font-bold text-slate-900">{current.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">{current.purpose}</p>
            </div>

            {/* Spec Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Ideal Placement</span>
                <span className="text-xs font-bold text-slate-800">{current.placement}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Aspect Ratio</span>
                <span className="text-xs font-bold text-slate-800">{current.aspectRatio}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Duration</span>
                <span className="text-xs font-bold text-emerald-700">{current.duration}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Format</span>
                <span className="text-xs font-bold text-slate-800">{current.format}</span>
              </div>
            </div>

            {/* Storyboard Breakdown */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                Recommended Scene Timeline & Actions:
              </h5>
              <div className="space-y-2.5">
                {current.storyboard.map((scene, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3 text-xs bg-white p-3 rounded-xl border border-slate-200">
                    <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded shrink-0">
                      {scene.time}
                    </span>
                    <span className="text-slate-700">{scene.action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Tips Callout */}
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Creator Note:</strong> {current.scriptNotes} Once you record this video, save it to <code>public/assets/videos/</code> or embed your Loom/YouTube link directly into the video player component!
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => handleCopySpec(JSON.stringify(current, null, 2), current.id)}
            className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copiedId === current.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedId === current.id ? 'Specification Copied' : 'Copy Video Spec'}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
