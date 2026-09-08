import React from 'react';
import { Hero } from '../components/Hero';
import { ContinuousSlider } from '../components/ContinuousSlider';
import { TrustValueStrip } from '../components/TrustValueStrip';
import { Services } from '../components/Services';
import { CaseStudyResults } from '../components/CaseStudyResults';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { ServiceItem, PortfolioProject } from '../types';

interface HomePageProps {
  onOpenQuoteModal: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectProject: (project: PortfolioProject) => void;
  preselectedService: string;
  onSelectServiceForContact: (serviceName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuoteModal,
  onSelectService,
  onSelectProject,
  preselectedService,
  onSelectServiceForContact,
}) => {
  const { navigate } = useRouter();

  const handleStartProject = () => {
    navigate('contact');
  };

  const handleViewWork = () => {
    navigate('portfolio');
  };

  return (
    <div className="space-y-0">
      {/* 1. High-Impact Hero Section with Live Diagnostic Dial */}
      <Hero onStartProject={handleStartProject} onViewWork={handleViewWork} />

      {/* 2. Continuous Running Marquee Slider (Edge Stack & Guarantees) */}
      <ContinuousSlider onLearnMore={() => navigate('technologies')} />

      {/* 3. Authoritative Proof & Scale Metric Strip */}
      <TrustValueStrip />

      {/* 4. Core Solutions (Scrollable Grid Left-to-Right with all 8 Specialized Services) */}
      <Services
        onSelectService={onSelectService}
        onOpenQuoteWithService={(serviceName) => {
          onSelectServiceForContact(serviceName);
          navigate('contact');
        }}
        onViewAll={() => navigate('services')}
      />

      {/* 5. Measurable Impact & Before/After Speed Benchmarks */}
      <CaseStudyResults />

      {/* 6. Why Industry Leaders Choose DrTechei (The Senior Engineering Advantage) */}
      <WhyChooseUs onStartProject={handleStartProject} />

      {/* 7. Verified Client Feedback & Reviews */}
      <Testimonials onStartProject={handleStartProject} />

      {/* 8. High-Converting Strategic CTA (Direct Quote Modal & Discovery Call) */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
