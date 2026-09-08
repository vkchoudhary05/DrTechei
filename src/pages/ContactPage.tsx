import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { ContactForm } from '../components/ContactForm';
import { FAQSection } from '../components/FAQSection';
import { useRouter } from '../context/RouterContext';
import { motion } from 'motion/react';
import {
  Sparkles,
  PhoneCall,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Building2,
  Globe
} from 'lucide-react';

interface ContactPageProps {
  preselectedService: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedService }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="contact" subtitle="Discovery Consultation & Project Blueprint" />

      {/* DEDICATED SPECIALIZED CONTACT & ARCHITECT INTAKE HERO */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Direct Intake Pitch */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>Direct Senior Architect Intake • 24h SLA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-[1.15]">
                Let's Build Something High-Performance Together
              </h1>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Schedule a 15-minute technical discovery call or submit your project details below. Our senior engineering leads respond within 24 business hours with an initial architectural blueprint and estimated investment.
              </p>

              {/* Global Offices & Inquiries */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-600 font-medium">
                <span className="text-slate-400">Offices:</span>
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

              <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap gap-5 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D98E3A]" />
                  <span>100% Mutual NDA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D98E3A]" />
                  <span>24-Hour SLA Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D98E3A]" />
                  <span>Free Architecture Roadmap</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Instant Contact Snapshot Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#D98E3A]" />
                    <span className="text-xs font-bold text-[#111622] uppercase tracking-wider">
                      Direct Senior Desk
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Live Intake Open
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <a
                    href="mailto:wearedrtechie@gmail.com"
                    className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80 hover:border-[#D98E3A]/60 transition-colors flex items-start gap-3 group block"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EEEDFA] text-[#2D2575] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#D98E3A]" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Direct RFPs & Project Scopes</div>
                      <div className="font-bold text-[#111622] group-hover:text-[#D98E3A] transition-colors text-sm">
                        wearedrtechie@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+18005408324"
                    className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80 hover:border-[#D98E3A]/60 transition-colors flex items-start gap-3 group block"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FDF7EF] text-[#D98E3A] flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4 text-[#D98E3A]" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Toll-Free Senior Engineer Line</div>
                      <div className="font-bold text-[#111622] group-hover:text-[#D98E3A] transition-colors text-sm">
                        +919690941439
                      </div>
                    </div>
                  </a>

                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Global Engineering Hubs</div>
                      <div className="font-bold text-[#111622] text-xs">
                        🇮🇳 Delhi, India • 🇫🇮 Finland • 🇮🇪 Ireland
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="text-emerald-600 font-semibold">24-hour turnaround SLA</span>
                  <span className="text-slate-400">Strictly confidential</span>
                </div>
              </div>
            </motion.div>
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
