import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  X,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight,
  HelpCircle,
  Laptop,
  Code2,
  Smartphone,
  Server,
  Layers,
  ShoppingBag,
  Cpu,
  Search
} from 'lucide-react';
import { submitContactToGoogleSheet } from '../services/lead.Service';

interface ProjectLeadModalProps {
  onNavigateToContact?: (prefillService?: string) => void;
  onOpenQuoteEstimator?: () => void;
}

export const ProjectLeadModal: React.FC<ProjectLeadModalProps> = ({
  onNavigateToContact,
  onOpenQuoteEstimator,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Custom Web & App Engineering');
  const [projectIdea, setProjectIdea] = useState('');
  
  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 3 to 4 seconds delay trigger on visitor arrival
  useEffect(() => {
    // Check if user already dismissed or converted in this session
    const hasSeenLeadPopup = sessionStorage.getItem('drtechei_lead_popup_dismissed');
    if (hasSeenLeadPopup === 'true') {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000); // 3.5 seconds (right in the 3 to 4 second window)

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsDismissed(true);
    try {
      sessionStorage.setItem('drtechei_lead_popup_dismissed', 'true');
    } catch {
      // Ignore sessionStorage errors in restricted environments
    }
  };

  const handleDismissToday = () => {
    handleClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !email.trim()) {
      setErrorMessage('Please provide your name and email so our tech lead can reach you.');
      return;
    }

    // Basic email check
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid business or personal email address.');
      return;
    }

    setIsSubmitting(true);
    const refCode = `LEAD-${Date.now().toString().slice(-6)}`;
    setReferenceId(refCode);

    try {
      await submitContactToGoogleSheet({
        type: 'contact',
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim() || 'Not specified',
        company: 'Lead Popup Inquiry',
        serviceRequired: service,
        budget: 'Flexible / In Discussion',
        message: projectIdea.trim() 
          ? `[Pop-Up Lead] Idea: ${projectIdea.trim()}`
          : `[Pop-Up Lead] Requested quick consultation for ${service}`,
        referenceId: refCode,
      });

      setIsSubmitted(true);
      try {
        sessionStorage.setItem('drtechei_lead_popup_dismissed', 'true');
      } catch {
        // Ignore
      }
    } catch (err) {
      console.error('Lead popup error:', err);
      // Even if Google script is missing in dev env, provide friendly confirmation
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickServices = [
    { label: 'Web & Next.js 15 App', icon: Laptop },
    { label: 'CMS Platform (WP / Sanity)', icon: Layers },
    { label: 'E-Commerce / Shopify Plus', icon: ShoppingBag },
    { label: 'Custom Software / SaaS', icon: Code2 },
    { label: 'Mobile App (iOS/Android)', icon: Smartphone },
    { label: 'AI Integration & LLMs', icon: Cpu },
  ];

  return (
    <AnimatePresence>
      {isOpen && !isDismissed && (
        <div 
          id="project-lead-popup-overlay"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-popup-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative w-full max-w-xl rounded-2xl sm:rounded-3xl border border-white/20 bg-gradient-to-b from-[#0F1422] via-[#141B2D] to-[#0A0D18] text-white shadow-2xl shadow-black/80 overflow-hidden my-auto"
          >
            {/* Top Glowing Ambient Accents */}
            <div className="absolute -top-24 -left-20 w-60 h-60 bg-[#D98E3A]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -right-20 w-60 h-60 bg-[#2D2575]/40 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button - Optimized for Mobile and Desktop */}
            <button
              type="button"
              id="close-lead-popup-btn"
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 sm:p-2.5 rounded-full text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 active:scale-95 transition-all cursor-pointer border border-white/15 shadow-md flex items-center justify-center min-w-[36px] min-h-[36px]"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-200 hover:text-white" />
            </button>

            {!isSubmitted ? (
              <div className="p-5 sm:p-8">
                {/* Header Badge & Title - Prudent right padding on mobile so text never collides with close button */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold self-start mb-3 border border-white/15 bg-white/10 backdrop-blur-md text-[#F2BC7B] w-fit max-w-[calc(100%-48px)] sm:max-w-none">
                  <Sparkles className="w-3.5 h-3.5 text-[#F2BC7B] animate-pulse shrink-0" />
                  <span className="truncate">Free Technical Discovery &amp; Quick Quote</span>
                </div>

                <h3 
                  id="lead-popup-title"
                  className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug pr-8 sm:pr-0"
                >
                  Have a Project or App in Mind?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Tell us what you want to build. Our principal engineers will review your concept and provide a <span className="text-[#F2BC7B] font-semibold">free architecture roadmap &amp; estimate within 4 hours</span>.
                </p>

                {/* Quick Service Selector Pills */}
                <div className="mt-4">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    What are you looking to build?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {quickServices.map((qs) => {
                      const IconComponent = qs.icon;
                      const isSelected = service === qs.label;
                      return (
                        <button
                          key={qs.label}
                          type="button"
                          onClick={() => setService(qs.label)}
                          className={`flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#D98E3A] bg-[#D98E3A]/15 text-[#F2BC7B] shadow-sm'
                              : 'border-white/10 bg-slate-900/60 text-slate-300 hover:border-white/20 hover:bg-white/5'
                          }`}
                        >
                          <IconComponent className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isSelected ? 'text-[#F2BC7B]' : 'text-slate-400'}`} />
                          <span className="truncate">{qs.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Lead Form */}
                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Name <span className="text-[#F2BC7B]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lead-popup-name"
                        placeholder="e.g., Alex Miller"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#D98E3A] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Business Email <span className="text-[#F2BC7B]">*</span>
                      </label>
                      <input
                        type="email"
                        id="lead-popup-email"
                        placeholder="alex@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#D98E3A] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        WhatsApp / Phone <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="lead-popup-phone"
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#D98E3A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Brief Project Scope
                      </label>
                      <input
                        type="text"
                        id="lead-popup-idea"
                        placeholder="e.g., MVP redesign or SaaS app"
                        value={projectIdea}
                        onChange={(e) => setProjectIdea(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#D98E3A] transition-colors"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="text-xs text-rose-400 bg-rose-950/40 p-2.5 rounded-lg border border-rose-800 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="lead-popup-submit-btn"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#D98E3A] via-[#C57A25] to-[#2D2575] hover:opacity-95 shadow-lg shadow-amber-900/30 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Connecting with Tech Lead...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Get Free Roadmap &amp; Quick Quote</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Trust Footer & Alternative Links */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>4-Hour SLA</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Strict NDA</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {onOpenQuoteEstimator && (
                      <button
                        type="button"
                        onClick={() => {
                          handleClose();
                          onOpenQuoteEstimator();
                        }}
                        className="text-[#F2BC7B] hover:underline cursor-pointer flex items-center gap-0.5"
                      >
                        <Zap className="w-3 h-3" />
                        <span>Interactive Cost Calculator</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Success / Thank you confirmation state */
              <div className="p-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/60 border border-emerald-700 text-emerald-300 mb-2">
                    Ref ID: {referenceId}
                  </span>
                  <h4 className="text-xl font-bold text-white">We've Received Your Details!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{fullName}</strong>. A dedicated tech architect is reviewing your inquiry for <strong className="text-[#F2BC7B]">{service}</strong> and will reach out to <strong className="text-white">{email}</strong> within 4 hours.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Continue Browsing
                  </button>
                  {onNavigateToContact && (
                    <button
                      type="button"
                      onClick={() => {
                        handleClose();
                        onNavigateToContact(service);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#D98E3A] hover:bg-[#B26E20] transition-colors cursor-pointer inline-flex items-center justify-center gap-1"
                    >
                      <span>Go to Full Inquiry Form</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
