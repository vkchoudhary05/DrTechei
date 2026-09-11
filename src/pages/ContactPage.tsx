import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { ContactForm } from '../components/ContactForm';
import { FAQSection } from '../components/FAQSection';
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
  Globe2,
  CalendarCheck2
} from 'lucide-react';
import { GsapScrollText } from '../components/GsapScrollText';

interface ContactPageProps {
  preselectedService: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ 
  preselectedService,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="contact" subtitle="Discovery Consultation & Project Blueprint" />

      {/* DEDICATED SPECIALIZED CONTACT & ARCHITECT INTAKE HERO */}
      <section className="relative py-8 sm:py-14 md:py-20 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden w-full">
        <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Direct Intake Pitch */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="w-full lg:col-span-7 min-w-0"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-[11px] sm:text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs max-w-full">
                <Sparkles className="w-3.5 h-3.5 text-[#D98E3A] shrink-0" />
                <span className="truncate">Direct Senior Architect Intake • 24h SLA</span>
              </div>

              {/* Smooth GSAP Headline Reveal */}
              <GsapScrollText
                as="h1"
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111622] tracking-tight leading-[1.18] break-words"
              >
                Let's Build Something High-Performance Together
              </GsapScrollText>

              {/* Smooth GSAP Subtitle Reveal */}
              <GsapScrollText
                as="p"
                delay={0.1}
                className="mt-3 sm:mt-5 text-xs xs:text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl"
              >
                Schedule a 15-minute technical discovery call or submit your project details below. Our senior engineering leads respond within 24 business hours with an initial architectural blueprint and estimated investment.
              </GsapScrollText>

              {/* Global Delivery Hubs Bar (All India, Europe, Australia, Canada) */}
              <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-700 font-medium">
                <span className="font-bold text-[#2D2575] shrink-0 flex items-center gap-1">
                  <Globe2 className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>Active Hubs:</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[11px] font-semibold">
                  <span>🇮🇳</span> Delhi NCR (HQ) &amp; Pan-India
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[11px] font-semibold">
                  <span>🇪🇺</span> London &amp; Dublin
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[11px] font-semibold">
                  <span>🇦🇺</span> Sydney
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[11px] font-semibold">
                  <span>🇨🇦</span> Toronto
                </span>
              </div>

              {/* Key Guarantees Strip */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D98E3A] shrink-0" />
                  <span>100% Mutual NDA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D98E3A] shrink-0" />
                  <span>24-Hour SLA Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D98E3A] shrink-0" />
                  <span>Free Architecture Roadmap</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Instant Contact Snapshot Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:col-span-5 min-w-0 mt-2 lg:mt-0"
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden p-4 sm:p-6 space-y-3.5 w-full">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 min-w-0">
                    <Building2 className="w-4 h-4 text-[#D98E3A] shrink-0" />
                    <span className="text-xs font-bold text-[#111622] uppercase tracking-wider truncate">
                      Direct Senior Desk
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                    Live Intake Open
                  </span>
                </div>

                <div className="space-y-2.5 text-xs w-full">
                  {/* Email Box */}
                  <a
                    href="mailto:wearedrtechie@gmail.com"
                    className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80 hover:border-[#D98E3A]/60 transition-colors flex items-center gap-3 group block w-full min-w-0"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EEEDFA] text-[#2D2575] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#D98E3A]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Direct RFPs &amp; Project Scopes</div>
                      <div className="font-bold text-[#111622] group-hover:text-[#D98E3A] transition-colors text-xs sm:text-sm break-all">
                        wearedrtechie@gmail.com
                      </div>
                    </div>
                  </a>

                  {/* Phone Box */}
                  <a
                    href="tel:+18005408324"
                    className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80 hover:border-[#D98E3A]/60 transition-colors flex items-center gap-3 group block w-full min-w-0"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FDF7EF] text-[#D98E3A] flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4 text-[#D98E3A]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Toll-Free Senior Tech Lead</div>
                      <div className="font-bold text-[#111622] group-hover:text-[#D98E3A] transition-colors text-xs sm:text-sm break-all">
                        +1 (800) 540-TECH
                      </div>
                    </div>
                  </a>

                  {/* Regional Hours Box */}
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80 flex items-center gap-3 w-full min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Global Timezone Coverage</div>
                      <div className="font-bold text-[#111622] text-[11px] sm:text-xs">
                        Europe • Australia • Canada • Pan-India
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500">
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    24h turnaround SLA
                  </span>
                  <span className="text-slate-400">Strictly confidential</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Form & Direct Reassurance */}
      <div className="w-full max-w-full overflow-hidden">
        <ContactForm 
          preselectedService={preselectedService}
        />
      </div>

      {/* Technical FAQ */}
      <div className="w-full max-w-full overflow-hidden">
        <FAQSection />
      </div>
    </div>
  );
};
