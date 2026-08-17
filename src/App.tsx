import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustValueStatement } from './components/TrustValueStatement';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { CoreFeatures } from './components/CoreFeatures';
import { AICMOExample } from './components/AICMOExample';
import { ActionFirstMarketing } from './components/ActionFirstMarketing';
import { BuiltForSmallBusinesses } from './components/BuiltForSmallBusinesses';
import { SimpleByDesign } from './components/SimpleByDesign';
import { ROIResults } from './components/ROIResults';
import { PrivacySecurity } from './components/PrivacySecurity';
import { WhyOptigoAI } from './components/WhyOptigoAI';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { VideoGuideModal } from './components/VideoGuideModal';
import { GetStartedModal } from './components/GetStartedModal';

export function App() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isVideoGuideOpen, setIsVideoGuideOpen] = useState(false);

  const openGetStarted = () => setIsGetStartedOpen(true);
  const closeGetStarted = () => setIsGetStartedOpen(false);

  const openVideoGuide = () => setIsVideoGuideOpen(true);
  const closeVideoGuide = () => setIsVideoGuideOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* Floating Pill Navigation */}
      <Navbar 
        onOpenGetStarted={openGetStarted} 
        onOpenVideoGuide={openVideoGuide} 
      />

      {/* Main Content Sections */}
      <main>
        {/* 1 & 2: Hero Section */}
        <HeroSection 
          onOpenGetStarted={openGetStarted} 
          onOpenVideoGuide={openVideoGuide} 
        />

        {/* 3: Trust & Value Statement with Radial Engine Metrics */}
        <TrustValueStatement 
          onOpenGetStarted={openGetStarted} 
        />

        {/* Visual Proof / Before vs After Comparison & ROI Results */}
        <ROIResults 
          onOpenGetStarted={openGetStarted} 
        />

        {/* 4: The Problem & Voiceflow 3-Column Pillars */}
        <ProblemSection 
          onOpenGetStarted={openGetStarted} 
        />

        {/* 5: Solution - Meet Your AI CMO */}
        <SolutionSection 
          onOpenGetStarted={openGetStarted} 
        />

        {/* 6: How It Works - 6 Step System */}
        <HowItWorks 
          onOpenGetStarted={openGetStarted} 
        />

        {/* 7: Core Features Hub (Athleats / Voiceflow Tabs) */}
        <CoreFeatures 
          onOpenGetStarted={openGetStarted} 
        />

        {/* 8: AI CMO Example - Live Simulation */}
        <AICMOExample 
          onOpenGetStarted={openGetStarted} 
          onOpenVideoGuide={openVideoGuide} 
        />

        {/* 9: Action-First Marketing */}
        <ActionFirstMarketing 
          onOpenGetStarted={openGetStarted} 
        />

        {/* 10: Built for Small Businesses - 10 Industry Playbooks */}
        <BuiltForSmallBusinesses 
          onOpenGetStarted={openGetStarted} 
        />

        {/* 11: Simple by Design - Goal to Action Converter */}
        <SimpleByDesign 
          onOpenGetStarted={openGetStarted} 
        />

        {/* 13: Privacy & Security */}
        <PrivacySecurity />

        {/* 14 & 15: Who is OptigoAI for? & Why OptigoAI? Matrix */}
        <WhyOptigoAI 
          onOpenGetStarted={openGetStarted} 
        />

        {/* 17 & 19: High Converting CTA Banner */}
        <CTASection 
          onOpenGetStarted={openGetStarted} 
        />

        {/* 18: Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 20: Comprehensive Footer */}
      <Footer 
        onOpenGetStarted={openGetStarted} 
        onOpenVideoGuide={openVideoGuide} 
      />

      {/* Interactive Modals */}
      <GetStartedModal 
        isOpen={isGetStartedOpen} 
        onClose={closeGetStarted} 
      />

      <VideoGuideModal 
        isOpen={isVideoGuideOpen} 
        onClose={closeVideoGuide} 
      />

    </div>
  );
}

export default App;
