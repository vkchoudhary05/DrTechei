import React, { useState } from 'react';
import { Target, Eye, HeartHandshake, ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'approach'>('mission');

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#FAFBFD] relative overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-20 items-center">
          {/* Left Column: Visual & Brand Philosophy Box */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-[#111622] group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="DrTechei IT Solutions engineering and technical leadership team collaborating on enterprise software"
                width="1200"
                height="800"
                className="w-full h-96 sm:h-[480px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-[#111622]/40 to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl text-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2D2575] border border-[#D98E3A]/60 text-white flex items-center justify-center font-black text-sm shrink-0">
                    DT
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#111622]">
                      Engineering Meets Diagnostic Strategy
                    </div>
                    <p className="text-xs text-slate-500">
                      We treat your digital platform as your primary revenue engine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D1CDF4]/70">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>About DrTechei IT Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Technology With a Business Mindset
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              DrTechei IT Solutions helps businesses transform their ideas into modern digital experiences. From custom web development to CMS and e-commerce solutions, we combine thoughtful design, modern technology and business strategy to create websites that are built to perform.
            </p>

            {/* Interactive Pillar Selector Tabs */}
            <div className="mt-8 flex items-center gap-2 p-1.5 rounded-xl bg-slate-200/70">
              <button
                onClick={() => setActiveTab('mission')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'mission'
                    ? 'bg-[#2D2575] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </button>

              <button
                onClick={() => setActiveTab('vision')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'vision'
                    ? 'bg-[#2D2575] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Our Vision</span>
              </button>

              <button
                onClick={() => setActiveTab('approach')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'approach'
                    ? 'bg-[#2D2575] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Client-First</span>
              </button>
            </div>

            {/* Selected Pillar Content Card */}
            <div className="mt-5 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              {activeTab === 'mission' && (
                <div>
                  <h4 className="text-base font-bold text-[#111622] mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#2D2575]" />
                    <span>Our Mission</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    To liberate businesses from sluggish, fragile, and bloated websites by engineering clean, lightning-fast digital solutions that demonstrably accelerate customer acquisition, engagement, and operational scale.
                  </p>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D98E3A]" />
                      <span>Zero technical shortcuts; pristine code standards.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D98E3A]" />
                      <span>Speed as a foundational business asset.</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div>
                  <h4 className="text-base font-bold text-[#111622] mb-2 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#D98E3A]" />
                    <span>Our Vision</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    To be the world’s most trusted digital solutions partner for enterprises and forward-thinking brands looking to lead their industries with cutting-edge Next.js, headless CMS, and conversion architecture.
                  </p>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D98E3A]" />
                      <span>Democratizing enterprise-grade web performance.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D98E3A]" />
                      <span>Pioneering accessible, sustainable web ecosystems.</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div>
                  <h4 className="text-base font-bold text-[#111622] mb-2 flex items-center gap-2">
                    <HeartHandshake className="w-5 h-5 text-[#D98E3A]" />
                    <span>Client-First Approach</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    We operate as an extension of your leadership team. No junior handoffs, no hidden fees, and no confusing technical jargon. We prioritize your business metrics above all else.
                  </p>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D98E3A]" />
                      <span>Dedicated senior engineering leads on every account.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D98E3A]" />
                      <span>Transparent weekly milestones and production previews.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
