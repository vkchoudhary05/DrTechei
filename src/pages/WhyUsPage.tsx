import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TrustValueStrip } from '../components/TrustValueStrip';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { Sparkles, ArrowRight, ShieldCheck, Award, Users, CheckCircle2, XCircle } from 'lucide-react';

interface WhyUsPageProps {
  onOpenQuoteModal: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();

  const comparisonData = [
    {
      criteria: 'Direct Senior Engineering Access',
      drTechei: 'Yes - Direct collaboration with architects',
      freelancers: 'Variable skill level & availability',
      agencies: 'Hidden behind junior account managers',
    },
    {
      criteria: '100% Client Source Code Ownership',
      drTechei: 'Guaranteed in contract - Zero vendor lock-in',
      freelancers: 'Often messy repository handoffs',
      agencies: 'Often tied to proprietary hosting/CMS fees',
    },
    {
      criteria: 'Lighthouse 95+ Core Web Vitals',
      drTechei: 'Audited & guaranteed before production launch',
      freelancers: 'Rarely optimized beyond basic templates',
      agencies: 'Often bloated with third-party tracking scripts',
    },
    {
      criteria: 'Turnaround Velocity',
      drTechei: '2 - 6 Weeks with staged agile sprints',
      freelancers: 'Unpredictable delays & ghosting risk',
      agencies: '3 - 6 Months with bureaucratic red tape',
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

      {/* SEO Dedicated Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Diagnostic Quality & Senior Talent</span>
            </div>

            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Why Forward-Thinking Businesses Choose DrTechei
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed">
              We bridge the gap between creative design agency craft and rigorous enterprise software engineering. No templates, no junior handoffs, and 100% intellectual property ownership.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-100" />
                <span>Get Free Project Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
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
                {comparisonData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#111622]">{item.criteria}</td>
                    <td className="p-4 sm:p-5 text-[#2D2575] font-semibold bg-[#EEEDFA]/20">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item.drTechei}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <span>{item.freelancers}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <span>{item.agencies}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
