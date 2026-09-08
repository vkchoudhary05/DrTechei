import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteEstimatorModal } from './components/QuoteEstimatorModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { TechnologiesPage } from './pages/TechnologiesPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceItem, PortfolioProject } from './types';

function AppContent() {
  const { currentPage, navigate } = useRouter();

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [preselectedContactService, setPreselectedContactService] = useState<string>('Website Development');

  const handleOpenQuoteWithService = (serviceName: string) => {
    setPreselectedContactService(serviceName);
    navigate('contact');
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <ServicesPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            onSelectService={(service) => setSelectedService(service)}
            onSelectServiceForContact={handleOpenQuoteWithService}
          />
        );
      case 'portfolio':
        return (
          <PortfolioPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        );
      case 'technologies':
        return (
          <TechnologiesPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'why-us':
        return (
          <WhyUsPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'process':
        return (
          <ProcessPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'testimonials':
        return (
          <TestimonialsPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'faq':
        return (
          <FAQPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            preselectedService={preselectedContactService}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            onSelectService={(service) => setSelectedService(service)}
            onSelectProject={(project) => setSelectedProject(project)}
            preselectedService={preselectedContactService}
            onSelectServiceForContact={handleOpenQuoteWithService}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-900 font-sans selection:bg-[#D98E3A]/20 selection:text-[#2D2575]">
      {/* 1. Global Responsive & Accessible Sticky Navbar */}
      <Navbar
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* 2. Main Page Render Zone (sitting flush at top on home for seamless hero blend) */}
      <main className={`flex-grow ${currentPage === 'home' ? 'pt-0' : 'pt-[56px] sm:pt-[64px]'}`}>
        <div key={currentPage} className="animate-in fade-in duration-200">
          {renderActivePage()}
        </div>
      </main>

      {/* 3. Global Footer with Internal Router Links */}
      <Footer />

      {/* 4. Global Interactive Modals */}
      <QuoteEstimatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onSelectServiceAndScroll={(service) => {
          setPreselectedContactService(service);
          navigate('contact');
        }}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuoteWithService={handleOpenQuoteWithService}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilarProject={(projectTitle) => {
          setPreselectedContactService(`Similar to ${projectTitle}`);
          navigate('contact');
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
