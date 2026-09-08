import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Smartphone, 
  Monitor, 
  Sparkles,
  Gauge,
  Lock,
  HeadphonesIcon,
  Wifi,
  Battery,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface WhyChooseUsProps {
  onStartProject: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onStartProject }) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');

  const benefits = [
    { title: 'Modern & Professional Design', desc: 'Interfaces inspired by world-class tech leaders that instantly establish trust.' },
    { title: 'Fast & Responsive Websites', desc: 'Sub-second page loads that delight users and pass all Core Web Vitals.' },
    { title: 'SEO-Friendly Development', desc: 'Semantic hierarchy, clean JSON-LD schemas, and technical search engine readiness.' },
    { title: 'Mobile-First Approach', desc: 'Fluid experiences that look and perform exquisitely on every viewport.' },
    { title: 'Scalable Technology', desc: 'Architectures engineered with Next.js and Node that effortlessly handle traffic spikes.' },
    { title: 'Clear Communication', desc: 'Direct access to senior developers, transparent milestones, and zero jargon.' },
    { title: 'Reliable Support', desc: 'Post-launch maintenance, security patches, and ongoing performance tuning.' },
    { title: 'Business-Focused Solutions', desc: 'Every feature is aligned directly with your lead generation and sales conversion goals.' },
  ];

  return (
    <section
      id="why-us"
      className="py-14 sm:py-20 md:py-28 bg-[#FAFBFD] relative overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 2xl:gap-16 items-center">
          
          {/* Left Column: Device & Interactive Architecture Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative w-full min-w-0">
            {/* Soft decorative blur */}
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#2D2575]/15 via-[#D98E3A]/15 to-[#4338CA]/10 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            {/* Device Container Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xl sm:shadow-2xl p-3.5 sm:p-5 md:p-6 overflow-hidden">
              
              {/* Responsive Mockup Top Navigation Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-100">
                {/* Traffic Lights & URL Bar */}
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  
                  {/* Real Address Capsule: preview.drtechei.com */}
                  <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/90 text-slate-700 min-w-0 max-w-[210px] sm:max-w-xs shadow-2xs">
                    <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold truncate">
                      preview.drtechei.com
                    </span>
                  </div>

                  <span className="hidden xs:inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live</span>
                  </span>
                </div>

                {/* Device Viewport Toggle (Desktop / Mobile) */}
                <div className="flex items-center self-start sm:self-auto bg-slate-100 p-1 rounded-xl shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveTab('desktop')}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'desktop'
                        ? 'bg-[#2D2575] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5 shrink-0" />
                    <span>Desktop</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('mobile')}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'mobile'
                        ? 'bg-[#2D2575] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5 shrink-0" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Viewport Display Simulation */}
              <div className="w-full transition-all duration-300">
                {activeTab === 'desktop' ? (
                  /* DESKTOP VIEWPORT SIMULATION */
                  <div className="w-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#111622] via-[#161D2C] to-[#1F1954] p-3.5 sm:p-5 text-white shadow-inner relative overflow-hidden border border-[#2B3548]">
                    {/* Subtle Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D98E3A]/20 rounded-full blur-2xl pointer-events-none" />

                    {/* Header of Mock Site */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#21293A] mb-3 sm:mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[#2D2575] border border-[#D98E3A]/60 flex items-center justify-center font-black text-[10px] text-white">
                          DT
                        </div>
                        <span className="text-xs sm:text-sm font-bold tracking-tight">DrTechei Core Engine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline-block text-[10px] text-slate-300 font-medium">Global Edge Caching</span>
                        <span className="text-[10px] text-[#F2BC7B] bg-[#D98E3A]/15 px-2 py-0.5 rounded-full border border-[#D98E3A]/30 font-mono font-bold">
                          Next.js 15.2
                        </span>
                      </div>
                    </div>

                    {/* Mock Site Hero Card */}
                    <div className="space-y-1.5 sm:space-y-2 mb-3.5 sm:mb-4">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-amber-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D98E3A]" />
                        <span>Sub-Second Delivery Platform</span>
                      </div>
                      <h4 className="text-sm sm:text-base md:text-lg font-extrabold text-white leading-snug">
                        High-Converting Digital Platform
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed max-w-lg">
                        Engineered for speed, zero layout shift (CLS 0.0), and instant global edge response.
                      </p>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#21293A]">
                      <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#111622]/90 border border-[#2B3548] text-center">
                        <span className="text-xs sm:text-sm font-black text-emerald-400">99</span>
                        <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">Performance</p>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#111622]/90 border border-[#2B3548] text-center">
                        <span className="text-xs sm:text-sm font-black text-[#F2BC7B]">100%</span>
                        <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">Accessibility</p>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#111622]/90 border border-[#2B3548] text-center">
                        <span className="text-xs sm:text-sm font-black text-[#818CF8]">100%</span>
                        <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">SEO Score</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* MOBILE VIEWPORT SIMULATION (AUTHENTIC SMARTPHONE FRAME) */
                  <div className="max-w-[280px] sm:max-w-[300px] mx-auto rounded-[28px] sm:rounded-[32px] bg-[#0C1017] p-2.5 sm:p-3 border-3 border-slate-700 shadow-2xl relative overflow-hidden">
                    {/* Phone Top Dynamic Notch */}
                    <div className="flex items-center justify-between px-3 pt-1 pb-2">
                      <span className="text-[10px] font-bold text-white font-mono">9:41</span>
                      <div className="w-16 h-3 bg-black rounded-full border border-slate-700/80 mx-auto" />
                      <div className="flex items-center gap-1 text-slate-400">
                        <Wifi className="w-2.5 h-2.5" />
                        <Battery className="w-3 h-3 text-emerald-400" />
                      </div>
                    </div>

                    {/* Phone Screen Content */}
                    <div className="rounded-2xl bg-gradient-to-b from-[#111622] via-[#161D2C] to-[#1F1954] p-3 text-white border border-[#2B3548]/80">
                      {/* Mobile App Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-md bg-[#2D2575] border border-[#D98E3A]/60 flex items-center justify-center font-black text-[9px] text-white">
                            DT
                          </div>
                          <span className="text-[11px] font-bold tracking-tight">DrTechei</span>
                        </div>
                        <span className="text-[9px] text-[#F2BC7B] bg-[#D98E3A]/15 px-1.5 py-0.5 rounded-full font-mono">
                          Mobile 100%
                        </span>
                      </div>

                      {/* Mobile Hero Content */}
                      <div className="space-y-1 mb-2.5">
                        <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                          Fluid Mobile Engine
                        </div>
                        <h5 className="text-xs font-extrabold leading-tight text-white">
                          Tailored for Small Screens
                        </h5>
                        <p className="text-[10px] text-slate-300 leading-normal">
                          Full touch-friendly ergonomics, ultra-fast 0.8s mobile LCP, zero layout shifts.
                        </p>
                      </div>

                      {/* Mobile Metrics 2-column */}
                      <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-white/10">
                        <div className="p-1.5 rounded-lg bg-black/40 border border-white/10 text-center">
                          <span className="text-xs font-black text-emerald-400">99</span>
                          <p className="text-[8.5px] text-slate-400 font-medium">Mobile Score</p>
                        </div>
                        <div className="p-1.5 rounded-lg bg-black/40 border border-white/10 text-center">
                          <span className="text-xs font-black text-[#F2BC7B]">0.8s</span>
                          <p className="text-[8.5px] text-slate-400 font-medium">Touch Latency</p>
                        </div>
                      </div>

                      {/* Mobile Quick Action */}
                      <div className="mt-2.5">
                        <div className="w-full py-1 px-2 rounded-lg bg-gradient-to-r from-[#D98E3A] to-[#B26E20] text-white text-[10px] font-bold text-center">
                          100% Mobile Ready
                        </div>
                      </div>
                    </div>

                    {/* Bottom Home Indicator Bar */}
                    <div className="w-20 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
                  </div>
                )}
              </div>

              {/* Bottom Live Diagnostic Callouts - Fully Responsive */}
              <div className="mt-3.5 sm:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-[#FDF7EF] text-[#D98E3A] flex items-center justify-center shrink-0">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">0.8s LCP</div>
                    <div className="text-[10px] text-slate-500 truncate">Core Web Vitals Pass</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-[#EEEDFA] text-[#2D2575] flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">SSL + HSTS</div>
                    <div className="text-[10px] text-slate-500 truncate">Enterprise Security</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <HeadphonesIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">24/7 SLA</div>
                    <div className="text-[10px] text-slate-500 truncate">Always Monitored</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Benefits List - Fully Responsive */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D1CDF4]/70 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>The DrTechei Advantage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Why Businesses Choose DrTechei
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              We combine diagnostic precision with sharp commercial engineering. You do not just get clean code; you get a high-converting digital platform designed to build your business and multiply revenue.
            </p>

            {/* Benefits Responsive Grid (1 col on mobile, 2 cols on sm+) */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#D98E3A]/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FDF7EF] border border-[#F2BC7B]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#D98E3A]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111622] leading-snug">
                      {benefit.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-0.5">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive CTA Button */}
            <div className="mt-6 sm:mt-8 pt-2 sm:pt-4">
              <button
                id="why-us-cta-btn"
                onClick={onStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-lg shadow-[#D98E3A]/25 hover:shadow-[#D98E3A]/35 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Let's Build Something Great</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-amber-100" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
