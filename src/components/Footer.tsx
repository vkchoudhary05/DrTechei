import React, { useState } from 'react';
import { Logo } from './Logo';
import { useRouter } from '../context/RouterContext';
import { PageRoute } from '../types/router';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  FileText, 
  X,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Github,
  Youtube
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent, route: PageRoute) => {
    e.preventDefault();
    navigate(route);
  };

  return (
    <>
      <footer className="bg-[#0D121B] text-slate-400 pt-16 pb-12 border-t border-[#1E2638] relative">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-[#1E2638]">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 space-y-4">
              <button
                type="button"
                onClick={(e) => handleNavClick(e, 'home')}
                className="inline-block focus:outline-none cursor-pointer text-left"
                aria-label="DrTechei Home"
              >
                <Logo variant="dark" iconSize={36} />
              </button>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Building modern digital experiences for growing businesses. High-performance Next.js architectures, headless CMS implementations, and custom web applications that scale effortlessly.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D98E3A] animate-pulse" />
                <span className="text-slate-300 font-medium">Accepting New Client Projects for Q3/Q4</span>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Follow & Connect With Us
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow DrTechei on Instagram"
                    className="w-9 h-9 rounded-xl bg-[#141B28] hover:bg-[#D98E3A] text-slate-400 hover:text-white border border-[#232C3D] hover:border-[#D98E3A] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 group"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow DrTechei on Facebook"
                    className="w-9 h-9 rounded-xl bg-[#141B28] hover:bg-[#1877F2] text-slate-400 hover:text-white border border-[#232C3D] hover:border-[#1877F2] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 group"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with DrTechei on LinkedIn"
                    className="w-9 h-9 rounded-xl bg-[#141B28] hover:bg-[#0A66C2] text-slate-400 hover:text-white border border-[#232C3D] hover:border-[#0A66C2] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 group"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow DrTechei on X / Twitter"
                    className="w-9 h-9 rounded-xl bg-[#141B28] hover:bg-white text-slate-400 hover:text-black border border-[#232C3D] hover:border-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 group"
                    title="Twitter / X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View DrTechei Open Source on GitHub"
                    className="w-9 h-9 rounded-xl bg-[#141B28] hover:bg-[#24292F] text-slate-400 hover:text-white border border-[#232C3D] hover:border-slate-500 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 group"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch DrTechei Architecture Breakdowns on YouTube"
                    className="w-9 h-9 rounded-xl bg-[#141B28] hover:bg-[#FF0000] text-slate-400 hover:text-white border border-[#232C3D] hover:border-[#FF0000] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 group"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Company Column */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'portfolio')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'why-us')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'process')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Our Process
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'testimonials')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'faq')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    FAQ & Specs
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Next.js 15 Apps
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    React UI Frontends
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Node.js & APIs
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Headless CMS
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Core Web Vitals SEO
                  </button>
                </li>
              </ul>
            </div>

            {/* Technologies Column */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Technologies
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'technologies')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Next.js 15
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'technologies')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    React 19
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'technologies')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Node.js
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'technologies')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    TypeScript
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'technologies')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Tailwind CSS
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'technologies')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    GraphQL & REST
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact & Offices Column */}
            <div className="col-span-2 md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Global Offices
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#D98E3A] shrink-0 mt-0.5" />
                  <a href="mailto:wearedrtechie@gmail.com" className="hover:text-white transition-colors truncate font-semibold text-slate-200">
                    wearedrtechie@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#D98E3A] shrink-0 mt-0.5" />
                  <a href="tel:+18005408324" className="hover:text-white transition-colors">
                    +919690941439
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D98E3A] shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                      <span>🇮🇳</span>
                      <span>India (Delhi NCR)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                      <span>🇫🇮</span>
                      <span>Finland (Helsinki)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                      <span>🇮🇪</span>
                      <span>Ireland (Dublin)</span>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full py-2 px-3 rounded-lg text-xs font-bold text-center text-white bg-[#2D2575] hover:bg-[#3D3395] transition-colors cursor-pointer block"
                >
                  Schedule Discovery Call
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>© {new Date().getFullYear()} DrTechei IT Solutions. All Rights Reserved. 100% Client IP Ownership.</span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll to top of page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy / Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto text-slate-800">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#2D2575]" />
                <h3 className="text-lg font-bold text-[#111622]">
                  {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                </h3>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p><strong>Effective Date:</strong> January 1, 2026</p>
                  <p>DrTechei IT Solutions ("DrTechei", "we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or engage our engineering services.</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">1. Information We Collect</h4>
                  <p>We collect information you voluntarily provide to us when submitting project estimates, contact requests, or scheduling consultations (such as your name, business email, company name, website URL, and project requirements).</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">2. How We Use Your Information</h4>
                  <p>We use your information solely to respond to inquiries, prepare technical proposals, manage client contracts, and deliver custom software engineering projects. We never sell, rent, or trade client information to third parties.</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">3. Confidentiality & IP Protection</h4>
                  <p>All client communications, code repositories, and project specifications are treated under strict confidentiality. We execute mutual Non-Disclosure Agreements (NDAs) prior to architectural reviews upon request.</p>
                </>
              ) : (
                <>
                  <p><strong>Effective Date:</strong> January 1, 2026</p>
                  <p>Welcome to DrTechei IT Solutions. By accessing this website or engaging our development services, you agree to comply with and be bound by the following terms and conditions.</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">1. Intellectual Property Ownership</h4>
                  <p>Upon final milestone payment, 100% ownership of custom source code, documentation, and digital assets developed specifically for your project is transferred to your company without recurring licensing fees.</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">2. Scope & Delivery Framework</h4>
                  <p>Project scopes, timelines, and deliverables are documented in individual Statements of Work (SOW) executed between DrTechei and the client. Development proceeds in sprint milestones with staged approval gates.</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">3. Performance & Warranty</h4>
                  <p>We provide a 30-day post-launch warranty period to resolve any functional defects or performance regressions within the approved project specifications.</p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#2D2575] hover:bg-[#201955] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
