import React, { useState } from 'react';
import { 
  Zap, 
  TrendingUp, 
  UserCheck, 
  ArrowRight, 
  Check, 
  X, 
  SlidersHorizontal,
  Sparkles,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

export const CaseStudyResults: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  return (
    <section
      id="case-study"
      className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D1CDF4]/70">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
            <span>Measurable Diagnostic Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111622] tracking-tight">
            From Outdated Websites to Modern Digital Experiences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            See how upgrading to DrTechei's Next.js and high-performance stack directly unlocks revenue, search dominance, and user retention.
          </p>
        </div>

        {/* 3 Prominent Metrics Cards */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 2xl:gap-10 mb-14">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAFBFD] to-[#FDF7EF] border border-[#F2BC7B]/50 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#D98E3A] text-white flex items-center justify-center mb-4 shadow-sm">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#A8631B] tracking-tight">
              +180%
            </div>
            <div className="mt-2 text-base font-bold text-[#111622]">
              Faster Performance
            </div>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              Sub-second server response times and zero cumulative layout shifts (CLS &lt; 0.05).
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAFBFD] to-[#EEEDFA] border border-[#D1CDF4]/80 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#2D2575] text-white flex items-center justify-center mb-4 shadow-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#2D2575] tracking-tight">
              +65%
            </div>
            <div className="mt-2 text-base font-bold text-[#111622]">
              More Engagement
            </div>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              Visitors browse 3.2x more pages per session with butter-smooth instant routing.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAFBFD] to-[#FDF7EF] border border-[#F2BC7B]/50 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D2575] to-[#D98E3A] text-white flex items-center justify-center mb-4 shadow-sm">
              <UserCheck className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#111622] tracking-tight">
              +40%
            </div>
            <div className="mt-2 text-base font-bold text-[#111622]">
              More Leads & Sales
            </div>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              Frictionless mobile checkout funnels and conversion-engineered contact forms.
            </p>
          </div>
        </div>

        {/* Interactive Before vs After Comparison Deck */}
        <div className="rounded-3xl bg-[#111622] text-white p-6 sm:p-10 border border-[#2B3548] shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient light */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D98E3A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-[#21293A] gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#F2BC7B] uppercase tracking-wider">
                Benchmark Comparison Analysis
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Legacy Architecture vs. The DrTechei Standard
              </h3>
            </div>

            {/* Switch Control */}
            <div className="w-full sm:w-auto flex items-center bg-[#171E2B] p-1.5 rounded-xl border border-[#2B3548]">
              <button
                onClick={() => setActiveTab('before')}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                  activeTab === 'before'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Before (Legacy Site)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                  activeTab === 'after'
                    ? 'bg-gradient-to-r from-[#D98E3A] to-[#B26E20] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                After (DrTechei Modern Solution)
              </button>
            </div>
          </div>

          {/* Comparison Content */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {/* Left: Comparison Checklist */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                Key Technical Diagnostics
              </h4>

              {activeTab === 'after' ? (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#191D34]/80 border border-[#2D2A68] flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Next.js 15 & Server-Side Rendering</p>
                      <p className="text-[11px] text-slate-300">Near-instant First Contentful Paint (&lt;0.6s) on all cellular connections.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#191D34]/80 border border-[#2D2A68] flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#F2BC7B] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Conversion-Engineered UX System</p>
                      <p className="text-[11px] text-slate-300">High-intent CTA hierarchy, sticky mobile navigation, and zero cognitive drag.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#191D34]/80 border border-[#2D2A68] flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Automated SEO & Schema.org Rich Snippets</p>
                      <p className="text-[11px] text-slate-300">Structured data enables Google search carousels and top local ranking.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/50 flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Bloated Templates & Uncached Assets</p>
                      <p className="text-[11px] text-slate-400">4.8s initial load time causing 53% mobile visitors to bounce immediately.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/50 flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Unresponsive Mobile Forms</p>
                      <p className="text-[11px] text-slate-400">Cumbersome multi-field inputs with high abandonment and zero analytics.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/50 flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Outdated Security & Broken Plugins</p>
                      <p className="text-[11px] text-slate-400">Frequent runtime vulnerabilities and high maintenance overhead.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Simulated Lighthouse Radar */}
            <div className="p-5 rounded-2xl bg-[#0B0E14] border border-[#1E2534] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-[#1E2534]">
                <span className="text-xs font-mono text-slate-400">Google Lighthouse Audit</span>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${activeTab === 'after' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                  {activeTab === 'after' ? 'All Green' : 'Critical Issues'}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 my-4 text-center">
                <div className="p-2.5 rounded-xl bg-[#171E2B] border border-[#263144]">
                  <div className={`text-xl font-black ${activeTab === 'after' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {activeTab === 'after' ? '99' : '41'}
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Performance</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#171E2B] border border-[#263144]">
                  <div className={`text-xl font-black ${activeTab === 'after' ? 'text-[#F2BC7B]' : 'text-amber-400'}`}>
                    {activeTab === 'after' ? '100' : '62'}
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Accessibility</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#171E2B] border border-[#263144]">
                  <div className={`text-xl font-black ${activeTab === 'after' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {activeTab === 'after' ? '100' : '58'}
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Best Practices</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#171E2B] border border-[#263144]">
                  <div className={`text-xl font-black ${activeTab === 'after' ? 'text-[#818CF8]' : 'text-rose-400'}`}>
                    {activeTab === 'after' ? '100' : '49'}
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">SEO Score</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic text-center">
                * Note: Performance metrics represent benchmark transformation results across typical client modernization projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
