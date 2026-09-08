import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { Portfolio } from '../components/Portfolio';
import { CaseStudyResults } from '../components/CaseStudyResults';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { PortfolioProject } from '../types';
import { Sparkles, ArrowRight, Award, TrendingUp, Cpu, CheckCircle } from 'lucide-react';

interface PortfolioPageProps {
  onOpenQuoteModal: () => void;
  onSelectProject: (project: PortfolioProject) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenQuoteModal,
  onSelectProject,
}) => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="portfolio" subtitle="Case Studies, Performance Audits & Live Client Builds" />

      {/* SEO Dedicated Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Proven Business Results & Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Featured Web Development Projects & Case Studies
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed">
              Explore how we've partnered with startups, scale-ups, and established enterprises to deliver sub-second performance, modern UX, and measurable conversion uplift.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D98E3A]" />
                <span>+180% Avg. Speed Acceleration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D98E3A]" />
                <span>+65% Lead Conversion Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D98E3A]" />
                <span>100% Client Code Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Interactive Portfolio Showcase */}
      <Portfolio onSelectProject={onSelectProject} />

      {/* Before vs After Performance Benchmarks */}
      <CaseStudyResults />

      {/* Strategic Call to Action */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
