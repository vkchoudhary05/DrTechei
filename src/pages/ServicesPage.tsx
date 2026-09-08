import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { Services } from '../components/Services';
import { FAQSection } from '../components/FAQSection';
import { CTA } from '../components/CTA';
import { ContactForm } from '../components/ContactForm';
import { useRouter } from '../context/RouterContext';
import { ServiceItem } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, CheckCircle2, Code2, Globe } from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteModal: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectServiceForContact: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenQuoteModal,
  onSelectService,
  onSelectServiceForContact,
}) => {
  const { navigate } = useRouter();

  const deliverables = [
    {
      title: 'Full Source Code & 100% IP Ownership',
      desc: 'All repositories, design components, and deployment pipelines transferred to your company with zero recurring licensing fees.',
      icon: ShieldCheck,
    },
    {
      title: 'Lighthouse 95+ Performance Guarantee',
      desc: 'Strict performance audits ensuring sub-second LCP, zero CLS, and instant page loads on real-world mobile networks.',
      icon: Zap,
    },
    {
      title: 'Production-Grade TypeScript & Security',
      desc: 'Enterprise coding standards with strict type checking, robust sanitization, and automated CI/CD staging gates.',
      icon: Code2,
    },
    {
      title: 'Built-in Technical SEO & Schema Markup',
      desc: 'Search engine ready architecture featuring semantic HTML5, JSON-LD microdata, sitemaps, and automated OpenGraph tags.',
      icon: Globe,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="services" subtitle="Engineering Capabilities & Full-Cycle Solutions" />

      {/* SEO Dedicated Page Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Diagnostic Engineering & Development Services</span>
            </div>

            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Web Development Services Engineered for Business Growth
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed">
              From sub-second Next.js 15 enterprise web applications to headless CMS migrations and scalable Node.js microservices, we build software that turns visitors into high-value customers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-100" />
                <span>Calculate Project Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-[#2D2575] bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all active:scale-95 cursor-pointer"
              >
                <span>Book 15-Min Discovery Call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Full Services Catalog */}
      <Services
        onSelectService={onSelectService}
        onOpenQuoteWithService={(serviceName) => {
          onSelectServiceForContact(serviceName);
          navigate('contact');
        }}
      />

      {/* Engineering Deliverables Guarantee */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622]">
              What Is Included In Every DrTechei Project
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              We never cut corners on architecture, code quality, or long-term maintainability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-[#D98E3A]/40 transition-all hover:shadow-md group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEEDFA] group-hover:bg-[#2D2575] text-[#2D2575] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111622] mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical FAQ on Services */}
      <FAQSection />

      {/* CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
