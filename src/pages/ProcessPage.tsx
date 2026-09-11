import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { Process } from '../components/Process';
import { CaseStudyResults } from '../components/CaseStudyResults';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Shield,
  Clock,
  Compass,
  Layers,
  Globe,
  Mail,
  PhoneCall
} from 'lucide-react';

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

      {/* DEDICATED SPECIALIZED PROCESS & SPRINTS HERO */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Structured Delivery Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-4 shadow-2xs">
                <Compass className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>Predictable Sprints • Zero Surprises</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-[1.15]">
                Our 6-Step Web Development Engineering Process
              </h1>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                We eliminate guesswork with structured sprints, transparent milestone deliverables, and strict quality verification at every phase of your build. No ghosting, no deadline drift.
              </p>

              {/* Global Offices & Inquiries */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-600 font-medium">
                <span className="text-slate-400">Global Sprints:</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <span>🇮🇳</span> India (Delhi)
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <span>🇫🇮</span> Finland
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <span>🇮🇪</span> Ireland
                </span>
                <span className="text-slate-300">•</span>
                <a
                  href="mailto:hello@drtechei.com"
                  className="text-[#2D2575] hover:text-[#D98E3A] font-bold flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>hello@drtechei.com</span>
                </a>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer ring-1 ring-white/30"
                >
                  <Sparkles className="w-4 h-4 text-amber-100" />
                  <span>Start Discovery Sprint</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#2D2575] bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all cursor-pointer"
                >
                  <span>Book Initial Architecture Call</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Sprint Milestone Timeline Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D98E3A]" />
                    <span className="text-xs font-bold text-[#111622] uppercase tracking-wider">
                      Sprint Delivery Cadence
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#2D2575] bg-[#EEEDFA] px-2 py-0.5 rounded border border-[#D1CDF4]">
                    Weekly Demos
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#EEEDFA] text-[#2D2575] font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111622]">Discovery & PRD Architecture (Week 1)</h4>
                      <p className="text-[11px] text-slate-500">Mutual NDA, technical requirements, edge stack choice.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#FDF7EF] text-[#D98E3A] font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111622]">UI/UX Design Systems (Weeks 1-2)</h4>
                      <p className="text-[11px] text-slate-500">Figma high-fidelity prototype, design tokens & brand alignment.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111622]">Next.js Full-Stack Engineering (Weeks 2-4)</h4>
                      <p className="text-[11px] text-slate-500">Weekly working URL demos on private cloud staging environments.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#EEEDFA] text-[#2D2575] font-bold text-xs flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111622]">Lighthouse Audit & Launch (Week 4+)</h4>
                      <p className="text-[11px] text-slate-500">95+ PageSpeed guarantee, DNS cutover & 30-day hypercare.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Zero Hydration Errors
                  </span>
                  <span>100% IP Transferred</span>
                </div>
              </div>
            </motion.div>
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
            {approvalGates.map((gate, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 hover:border-[#D98E3A]/40 transition-all hover:shadow-md"
              >
                <span className="text-[11px] font-mono font-bold text-[#D98E3A] uppercase tracking-wider block mb-2">
                  {gate.gate}
                </span>
                <h3 className="text-sm font-bold text-[#111622] mb-2">{gate.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{gate.deliverable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Results */}
      <CaseStudyResults />

      {/* CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
