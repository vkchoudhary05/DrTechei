import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { ContactForm } from '../components/ContactForm';
import { FAQSection } from '../components/FAQSection';
import { useRouter } from '../context/RouterContext';
import { Sparkles, PhoneCall, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  preselectedService: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedService }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="contact" subtitle="Discovery Consultation & Project Blueprint" />

      {/* SEO Dedicated Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Direct Senior Architect Intake</span>
            </div>

            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Let's Build Something High-Performance Together
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed">
              Schedule a 15-minute technical discovery call or submit your project details below. Our senior engineering leads respond within 24 business hours with an initial blueprint.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D98E3A]" />
                <span>100% Mutual NDA Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D98E3A]" />
                <span>24-Hour Business Response SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D98E3A]" />
                <span>Free Architectural Roadmap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Form & Direct Reassurance */}
      <ContactForm preselectedService={preselectedService} />

      {/* Technical FAQ */}
      <FAQSection />
    </div>
  );
};
