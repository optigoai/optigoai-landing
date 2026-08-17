import React from 'react';
import { ShieldCheck, Key, Lock, Database, Shield, Check, RefreshCw, FileCheck2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export const PrivacySecurity: React.FC = () => {
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
            <Shield className="w-3.5 h-3.5" />
            <span>Enterprise Security & Privacy</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight mb-4">
            Your Business Data <br className="hidden sm:inline" />
            <span className="italic text-slate-800">Stays Protected.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Your business information, customer reviews, and connected marketing accounts are handled with rigorous security protocols from day one.
          </p>
        </motion.div>

        {/* Asymmetric Security Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
          
          {/* Card 1 (Left 7 Cols): Zero-Knowledge OAuth 2.0 Token Vault */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="lg:col-span-7 bg-[#FAF9F6] rounded-3xl p-6 sm:p-9 border border-slate-200/90 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/60">
                    <Key className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Zero-Password OAuth Vault</h3>
                    <p className="text-xs text-slate-500 font-normal">Direct official platform handshakes</p>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1 shadow-xs">
                  <Check className="w-3 h-3 text-emerald-600" />
                  0 Passwords Stored
                </span>
              </div>

              {/* Visual 4-Node Encrypted Token Stream */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-slate-900 block truncate">Google Business</span>
                      <span className="text-[10px] text-slate-500">OAuth 2.0 Scoped</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Encrypted</span>
                </div>

                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-slate-900 block truncate">Meta Graph API</span>
                      <span className="text-[10px] text-slate-500">Scoped Token</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Encrypted</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              We never ask for or store your Google or Meta passwords. We only use official API access tokens with least-privilege permissions, securely stored with hardware-backed encryption.
            </div>
          </motion.div>

          {/* Card 2 (Right 5 Cols): Isolated Data Sandbox */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.55 }}
            className="lg:col-span-5 bg-[#FAF9F6] rounded-3xl p-6 sm:p-9 border border-slate-200/90 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200/60">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Isolated Data Sandbox</h3>
                    <p className="text-xs text-slate-500 font-normal">100% Single-tenant privacy</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 shadow-xs">
                  Zero Leakage
                </span>
              </div>

              {/* Data Flow Diagram Card */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">Your Business Reviews & Photos</span>
                  <span className="text-[10px] text-slate-400">Strictly Siloed</span>
                </div>

                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-full rounded-full" />
                </div>

                <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-100 text-xs text-purple-900 font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Never used to train public AI foundation models.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Your business data, customer sentiment, drafts, and customer interactions remain your exclusive property. We will never share or pool your insights with competing local businesses.
            </div>
          </motion.div>

        </div>

        {/* Bottom Row: 3 Enterprise Assurance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="p-6 rounded-3xl bg-[#FAF9F6] border border-slate-200/90 shadow-xs flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/60">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">AES-256 & TLS 1.3</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All communications and stored credentials utilize the same cryptographic ciphers trusted by top-tier financial institutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 rounded-3xl bg-[#FAF9F6] border border-slate-200/90 shadow-xs flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/60">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">1-Click Revocation</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Full transparency and control. You can instantly disconnect any social or Google integration in your settings with zero residue.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="p-6 rounded-3xl bg-[#FAF9F6] border border-slate-200/90 shadow-xs flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/60">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">GDPR & CCPA Compliant</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Full adherence to Google API Service User Data Policies, Meta Platform Rules, and international customer privacy laws.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
