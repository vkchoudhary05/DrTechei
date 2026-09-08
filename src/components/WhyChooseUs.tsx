import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Smartphone, 
  Monitor, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  Gauge,
  Lock,
  HeadphonesIcon
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
      className="py-20 md:py-28 bg-[#FAFBFD] relative overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 2xl:gap-16 items-center">
          {/* Left Column: Device & Interactive Architecture Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            {/* Soft decorative blur */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#2D2575]/15 via-[#D98E3A]/15 to-[#4338CA]/10 rounded-3xl blur-2xl opacity-60" />

            {/* Device Container Frame */}
            <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-4 sm:p-6 overflow-hidden">
              {/* Mockup Top Navigation Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">preview.drtechei.com</span>
                </div>

                {/* Device Viewport Toggle */}
                <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setActiveTab('desktop')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'desktop'
                        ? 'bg-[#2D2575] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'mobile'
                        ? 'bg-[#2D2575] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Viewport Display Simulation */}
              <div className={`transition-all duration-300 ${activeTab === 'mobile' ? 'max-w-xs mx-auto' : 'w-full'}`}>
                <div className="rounded-2xl bg-gradient-to-br from-[#111622] via-[#161D2C] to-[#1F1954] p-5 text-white shadow-inner relative overflow-hidden border border-[#2B3548]">
                  {/* Subtle Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D98E3A]/20 rounded-full blur-2xl" />

                  {/* Header of Mock Site */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#21293A] mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#2D2575] border border-[#D98E3A]/60 flex items-center justify-center font-black text-[10px] text-white">
                        DT
                      </div>
                      <span className="text-xs font-bold tracking-tight">DrTechei Core Engine</span>
                    </div>
                    <span className="text-[10px] text-[#F2BC7B] bg-[#D98E3A]/15 px-2 py-0.5 rounded-full border border-[#D98E3A]/30 font-mono">
                      Precision Diagnostic
                    </span>
                  </div>

                  {/* Mock Site Hero Card */}
                  <div className="space-y-2 mb-4">
                    <div className="w-16 h-2 bg-[#D98E3A] rounded-full" />
                    <h4 className="text-sm sm:text-base font-extrabold text-white">
                      Scalable Next.js 15 Platform
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Optimized for conversion, zero layout shift, and instant global edge caching.
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#21293A]">
                    <div className="p-2 rounded-lg bg-[#111622]/90 border border-[#2B3548] text-center">
                      <span className="text-xs font-black text-emerald-400">99</span>
                      <p className="text-[9px] text-slate-400 font-medium">Performance</p>
                    </div>
                    <div className="p-2 rounded-lg bg-[#111622]/90 border border-[#2B3548] text-center">
                      <span className="text-xs font-black text-[#F2BC7B]">100%</span>
                      <p className="text-[9px] text-slate-400 font-medium">Accessibility</p>
                    </div>
                    <div className="p-2 rounded-lg bg-[#111622]/90 border border-[#2B3548] text-center">
                      <span className="text-xs font-black text-[#818CF8]">100%</span>
                      <p className="text-[9px] text-slate-400 font-medium">SEO Score</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Live Diagnostic Callouts */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Gauge className="w-4 h-4 text-[#D98E3A] shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-900">0.8s LCP</div>
                    <div className="text-[9px] text-slate-500">Core Web Vitals</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Lock className="w-4 h-4 text-[#2D2575] shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-900">SSL + HSTS</div>
                    <div className="text-[9px] text-slate-500">Enterprise Safe</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <HeadphonesIcon className="w-4 h-4 text-[#D98E3A] shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-900">24/7 SLA</div>
                    <div className="text-[9px] text-slate-500">Always Monitored</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Benefits List */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D1CDF4]/70">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>The DrTechei Advantage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Why Businesses Choose DrTechei
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We combine diagnostic precision with sharp commercial engineering. You do not just get clean code; you get a high-converting digital platform designed to build your business and multiply revenue.
            </p>

            {/* Benefits 2-column list */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4 sm:gap-5">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#D98E3A]/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FDF7EF] border border-[#F2BC7B]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#D98E3A]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111622]">
                      {benefit.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                id="why-us-cta-btn"
                onClick={onStartProject}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-lg shadow-[#D98E3A]/25 hover:shadow-[#D98E3A]/35 transition-all duration-200 active:scale-[0.98] cursor-pointer"
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
