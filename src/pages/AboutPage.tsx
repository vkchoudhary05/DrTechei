import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { About } from '../components/About';
import { TrustValueStrip } from '../components/TrustValueStrip';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { Sparkles, ArrowRight, ShieldCheck, Users, Target, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();

  const coreValues = [
    {
      title: 'Craftsmanship & Diagnostic Rigor',
      desc: 'We treat code as enduring engineering, not disposable marketing collateral. Everything is strictly typed, modular, and performant.',
      icon: Target,
    },
    {
      title: '100% Client IP Ownership',
      desc: 'You paid for it, you own it. Complete repository transfer, clean documentation, and no vendor lock-in.',
      icon: ShieldCheck,
    },
    {
      title: 'Senior-Level Accountability',
      desc: 'Direct communication with seasoned technical architects who have built systems that handle millions of requests.',
      icon: Users,
    },
    {
      title: 'Radical Transparency',
      desc: 'Clear sprint timelines, honest estimates, and proactive technical guidance before writing a single line of code.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="about" subtitle="Engineering Excellence & Senior Software Craft" />

      {/* SEO Dedicated Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Diagnostic Software Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-tight">
              About DrTechei IT Solutions: Technology That Builds Your Business
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed">
              We are a team of senior engineers, technical architects, and product designers dedicated to helping ambitious businesses launch ultra-fast web experiences that convert.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer"
              >
                <span>Talk With Our Senior Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Core Values Grid */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622]">
              Our Guiding Engineering Principles
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              The foundational values that steer our technical decisions and client partnerships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 hover:border-[#D98E3A]/40 transition-all hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEEDFA] text-[#2D2575] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111622] mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <TrustValueStrip />

      {/* Strategic CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
