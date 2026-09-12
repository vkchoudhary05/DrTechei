import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { HeroThemeProvider } from './context/HeroThemeContext';
import { SEOHead } from './components/SEOHead';
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
import { TechPartnerFinlandPage } from './pages/TechPartnerFinlandPage';
import { TechPartnerIrelandPage } from './pages/TechPartnerIrelandPage';
import { TechPartnerIndiaPage } from './pages/TechPartnerIndiaPage';
import { ServiceItem, PortfolioProject } from './types';
import { initGlobalGsapScroll } from './utils/gsapScroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AppContent() {
  const { currentPage, navigate } = useRouter();

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [preselectedContactService, setPreselectedContactService] = useState<string>('Website Development');

  // Activate GSAP scroll animations smoothly across every page and route transition
  useEffect(() => {
    const cleanup = initGlobalGsapScroll();
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      cleanup();
      clearTimeout(timer);
    };
  }, [currentPage]);

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
      case 'technology-partner-finland':
        return (
          <TechPartnerFinlandPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'technology-partner-ireland':
        return (
          <TechPartnerIrelandPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'technology-partner-india':
        return (
          <TechPartnerIndiaPage
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
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
      {/* Dynamic SEO Meta Tags, Keywords & JSON-LD Structured Data for Every Page */}
      <SEOHead />

      {/* 1. Global Responsive & Accessible Sticky Navbar */}
      <Navbar
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* 2. Main Page Render Zone */}
      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        <div key={currentPage} className="fade-in">
          {renderActivePage()}
        </div>
      </main>

      {/* 3. Global Footer with Internal Router Links */}
      <Footer />

      {/* 4. Global Interactive Modals */}
      <QuoteEstimatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onSelectServiceAndScroll={(serviceName) => {
          setPreselectedContactService(serviceName);
          navigate('contact');
          setTimeout(() => {
            const el = document.getElementById('contact-form-section') || document.getElementById('contact-fullName');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 150);
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
      <HeroThemeProvider>
        <AppContent />
      </HeroThemeProvider>
    </RouterProvider>
  );
}
