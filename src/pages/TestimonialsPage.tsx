import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { Testimonials } from '../components/Testimonials';
import { TrustValueStrip } from '../components/TrustValueStrip';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { Sparkles, ArrowRight, Star, ShieldCheck, Award, MessageSquare } from 'lucide-react';

interface TestimonialsPageProps {
  onOpenQuoteModal: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();

  const reviewPlatforms = [
    { platform: 'Clutch.co', rating: '5.0 / 5.0', reviews: 'Verified CTO & Founder Reviews' },
    { platform: 'Google Reviews', rating: '5.0 / 5.0', reviews: '100% Client Satisfaction Score' },
    { platform: 'Enterprise Net Promoter Score', rating: 'NPS +94', reviews: 'World-Class Client Advocacy' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="testimonials" subtitle="Client Reviews, Video Endorsements & Founder Feedback" />

      {/* SEO Dedicated Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Verified Client Endorsements</span>
            </div>

            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Client Testimonials & Verified Success Stories
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed">
              Read how our technical precision, rapid execution, and business-first engineering standards have transformed the online presence and revenue of our partners.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {reviewPlatforms.map((r, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-1 text-[#D98E3A] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D98E3A] text-[#D98E3A]" />
                    ))}
                    <span className="text-xs font-bold text-[#111622] ml-1.5">{r.rating}</span>
                  </div>
                  <div className="text-xs font-bold text-[#111622]">{r.platform}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{r.reviews}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Testimonials Slider / Grid */}
      <Testimonials />

      {/* Trust Value Strip */}
      <TrustValueStrip />

      {/* Strategic CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
