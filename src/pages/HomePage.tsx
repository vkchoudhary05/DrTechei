import React from 'react';
import { Hero } from '../components/Hero';
import { ContinuousSlider } from '../components/ContinuousSlider';
import { Services } from '../components/Services';
import { CmsTechnologies } from '../components/CmsTechnologies';
import { CaseStudyResults } from '../components/CaseStudyResults';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { ServiceItem, PortfolioProject } from '../types';

interface HomePageProps {
  onOpenQuoteModal: (prefilledContext?: string) => void;
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
      {/* 1. High-Impact Animated Hero with Live Performance Telemetry */}
      <Hero onStartProject={handleStartProject} onViewWork={handleViewWork} />

      {/* 2. Running Continuous Marquee (Edge Stack & Verified Guarantees) */}
      <ContinuousSlider onLearnMore={() => navigate('technologies')} />

      {/* 3. Core Specialized Services (Essential Solutions Only) */}
      <Services
        onSelectService={onSelectService}
        onOpenQuoteWithService={(serviceName) => {
          onSelectServiceForContact(serviceName);
          navigate('contact');
        }}
        onViewAll={() => navigate('services')}
      />

      {/* 4. Complete CMS Platform Technologies (WordPress, Shopify Plus, Sanity, Webflow, etc.) */}
      <CmsTechnologies
        onOpenQuoteModal={onOpenQuoteModal}
        onSelectCms={(cmsName) => {
          onSelectServiceForContact(`CMS Platform: ${cmsName}`);
          navigate('contact');
        }}
      />

      {/* 5. Measurable Impact & Verified Before/After Performance Proof */}
      <CaseStudyResults />

      {/* 6. High-Converting Action Banner (Direct Estimate & Free Consultation) */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};

