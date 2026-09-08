import React from 'react';
import { Hero } from '../components/Hero';
import { TrustValueStrip } from '../components/TrustValueStrip';
import { Services } from '../components/Services';
import { Technologies } from '../components/Technologies';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Process } from '../components/Process';
import { Portfolio } from '../components/Portfolio';
import { CaseStudyResults } from '../components/CaseStudyResults';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';
import { CTA } from '../components/CTA';
import { ContactForm } from '../components/ContactForm';
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
      {/* 1. Hero Section */}
      <Hero onStartProject={handleStartProject} onViewWork={handleViewWork} />

      {/* 2. Trust / Value Metric Strip */}
      <TrustValueStrip />

      {/* 3. Services Section */}
      <Services
        onSelectService={onSelectService}
        onOpenQuoteWithService={(serviceName) => {
          onSelectServiceForContact(serviceName);
          navigate('contact');
        }}
      />

      {/* 4. Technologies Section */}
      <Technologies />

      {/* 5. Why Choose DrTechei */}
      <WhyChooseUs onStartProject={handleStartProject} />

      {/* 6. Process Section (How We Work) */}
      <Process onStartProject={handleStartProject} />

      {/* 7. Portfolio Section */}
      <Portfolio onSelectProject={onSelectProject} />

      {/* 8. Case Study / Before-After Benchmarks */}
      <CaseStudyResults />

      {/* 9. About Section */}
      <About />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* 11. FAQ & Architecture */}
      <FAQSection />

      {/* 12. Strategic High-Impact CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />

      {/* 13. Direct Project Inquiry Form */}
      <ContactForm preselectedService={preselectedService} />
    </div>
  );
};
