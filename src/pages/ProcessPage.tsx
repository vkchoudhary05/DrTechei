import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { Process } from '../components/Process';
import { CaseStudyResults } from '../components/CaseStudyResults';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { Sparkles, ArrowRight, CheckCircle2, FileCheck, Shield, Clock } from 'lucide-react';

interface ProcessPageProps {
  onOpenQuoteModal: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();

  const approvalGates = [
    {
      gate: 'Gate 1',
      title: 'Discovery & Spec Sign-off',
      deliverable: 'Comprehensive PRD, sitemap, wireframes, and technical architecture spec.',
    },
    {
      gate: 'Gate 2',
      title: 'Interactive Prototype Review',
      deliverable: 'Figma high-fidelity components and interactive user journey walkthrough.',
    },
    {
      gate: 'Gate 3',
      title: 'Private Staging Environment',
      deliverable: 'Fully functional Next.js build on private URL for team testing and feedback.',
    },
    {
      gate: 'Gate 4',
      title: 'Audited Production Cutover',
      deliverable: '95+ Lighthouse verification, SSL certificates, DNS switch, and 100% IP transfer.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="process" subtitle="Agile Engineering Methodology & Staged Approval Gates" />

      {/* SEO Dedicated Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Transparent Agile Methodology</span>
            </div>

            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Our 6-Step Web Development Engineering Process
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed">
              We eliminate guesswork with structured sprints, transparent milestone deliverables, and strict quality verification at every phase of your build.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-100" />
                <span>Start Discovery Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Interactive Timeline */}
      <Process onStartProject={() => navigate('contact')} />

      {/* Staged Approval Gates */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622]">
              Staged Approval Gates & Client Sign-Off
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              You maintain complete oversight and control over every milestone before we advance to the next sprint.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approvalGates.map((g, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 hover:border-[#2D2575]/50 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#EEEDFA] text-[#2D2575] mb-3">
                    {g.gate}
                  </span>
                  <h3 className="text-sm font-bold text-[#111622] mb-2">{g.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{g.deliverable}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Guaranteed Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <CaseStudyResults />

      {/* CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
