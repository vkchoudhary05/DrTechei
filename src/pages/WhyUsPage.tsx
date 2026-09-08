import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Users,
  Zap,
  Lock,
  Award,
  Globe,
  Mail,
  PhoneCall
} from 'lucide-react';

interface WhyUsPageProps {
  onOpenQuoteModal: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();

  const comparison = [
    {
      criteria: 'Direct Access to Senior Engineers',
      drTechei: 'Direct weekly calls with senior architects',
      freelancers: 'Yes, but solo developer has single point of failure',
      agencies: 'Hidden behind junior account managers',
    },
    {
      criteria: 'Source Code & Intellectual Property',
      drTechei: '100% full IP transfer & repo ownership on day 1',
      freelancers: 'Often ambiguous licensing terms',
      agencies: 'Proprietary CMS lock-in or recurring license fees',
    },
    {
      criteria: 'Performance Guarantee (Core Web Vitals)',
      drTechei: 'Contractual 95+ PageSpeed & sub-second LCP',
      freelancers: 'Rarely measured or guaranteed',
      agencies: 'Often bloat code with unoptimized plugins',
    },
    {
      criteria: 'Global Engineering Hubs',
      drTechei: 'Triple hubs in India (Delhi), Finland & Ireland for 24h coverage',
      freelancers: 'Single timezone availability only',
      agencies: 'Fragmented offshore teams with timezone lag',
    },
    {
      criteria: 'Post-Launch Hypercare & Support',
      drTechei: 'Included 30-day hypercare + transparent SLA',
      freelancers: 'Hard to reach once final invoice paid',
      agencies: 'Expensive monthly retainers required',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="why-us" subtitle="The DrTechei Engineering & Business Advantage" />

      {/* DEDICATED SPECIALIZED WHY US HERO */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Direct Value Pitch */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-4 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>The Senior Developer Advantage • Zero Vendor Lock-in</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-[1.15]">
                Why Forward-Thinking Businesses Choose DrTechei
              </h1>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                We bridge the gap between creative design agency craft and rigorous enterprise software engineering. No templates, zero junior handoffs, and 100% intellectual property ownership.
              </p>

              {/* Global Offices & Inquiries */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-600 font-medium">
                <span className="text-slate-400">Global Hubs:</span>
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
                  href="mailto:wearedrtechie@gmail.com"
                  className="text-[#2D2575] hover:text-[#D98E3A] font-bold flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>wearedrtechie@gmail.com</span>
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
                  <span>Get Free Project Evaluation</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#2D2575] bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all cursor-pointer"
                >
                  <span>Book Senior Technical Call</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Architectural Trust Shield Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D2575] to-[#1F1954] text-[#F2BC7B] flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111622]">The DrTechei Guarantee</h3>
                    <p className="text-xs text-slate-500">Contractual Performance & IP Protection</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-[#111622]">100% Repository Handover:</strong> All code, design tokens, and infrastructure configs belong to you from day one.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-[#111622]">Senior Engineers Only:</strong> No junior developers practicing on your production budget.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-[#111622]">Sub-Second PageSpeed SLA:</strong> Measured on real mobile 4G networks via Google Lighthouse.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-[#111622]">Dual Hub Redundancy:</strong> Global engineering hubs in India and Finland ensure continuous coverage.
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>100% Mutual NDA Protected</span>
                  <span className="font-bold text-[#D98E3A]">Zero Vendor Lock-in</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Mockup & WhyChooseUs Features */}
      <WhyChooseUs onStartProject={() => navigate('contact')} />

      {/* Agency vs Freelancers Comparison Table */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622]">
              How DrTechei Compares to Other Options
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              See why technical founders and marketing leaders prefer our direct senior developer partnership model.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-[#FAFBFD] shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-[#111622]">
                  <th className="p-4 sm:p-5 font-bold uppercase text-[11px] tracking-wider">Evaluation Factor</th>
                  <th className="p-4 sm:p-5 font-bold text-[#2D2575] bg-[#EEEDFA]/60">DrTechei IT Solutions</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-500">Freelancers</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-500">Traditional Big Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#111622]">{row.criteria}</td>
                    <td className="p-4 sm:p-5 text-[#2D2575] font-semibold bg-[#EEEDFA]/20">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.drTechei}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">{row.freelancers}</td>
                    <td className="p-4 sm:p-5 text-slate-500">{row.agencies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verified Client Testimonials */}
      <Testimonials onStartProject={() => navigate('contact')} />

      {/* CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
