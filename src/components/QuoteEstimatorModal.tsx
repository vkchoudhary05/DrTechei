import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Calculator, 
  Send, 
  Printer, 
  Copy, 
  ExternalLink,
  FileText,
  MailCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceAndScroll: (serviceName: string, budget: string) => void;
}

export const QuoteEstimatorModal: React.FC<QuoteEstimatorModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceAndScroll,
}) => {
  const [projectType, setProjectType] = useState('Website Development');
  const [timeline, setTimeline] = useState('4-6 Weeks');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Responsive Mobile Design',
    'Technical SEO Setup'
  ]);
  const [clientEmail, setClientEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    { label: 'Website Development', base: 3500 },
    { label: 'Next.js 15 Web App', base: 5500 },
    { label: 'E-Commerce Store', base: 4500 },
    { label: 'CMS (WordPress/Shopify)', base: 3000 },
    { label: 'Node.js Backend & API', base: 4000 },
    { label: 'Full Enterprise Redesign', base: 7500 },
  ];

  const availableFeatures = [
    { name: 'Responsive Mobile Design', cost: 0 },
    { name: 'Technical SEO Setup', cost: 500 },
    { name: 'Payment Gateway (Stripe/PayPal)', cost: 800 },
    { name: 'Headless CMS Integration', cost: 1200 },
    { name: 'Custom Dynamic Animations', cost: 700 },
    { name: 'Multi-Language / Localization', cost: 900 },
    { name: 'CRM & Lead Funnel Sync', cost: 600 }
  ];

  const toggleFeature = (featName: string) => {
    if (selectedFeatures.includes(featName)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== featName));
    } else {
      setSelectedFeatures([...selectedFeatures, featName]);
    }
  };

  // Calculate estimated ballpark
  const currentBase = projectTypes.find((p) => p.label === projectType)?.base || 3500;
  const featureCost = selectedFeatures.reduce((acc, featName) => {
    const found = availableFeatures.find((f) => f.name === featName);
    return acc + (found ? found.cost : 0);
  }, 0);
  const totalEstimate = currentBase + featureCost;

  const handleApplyToContact = () => {
    const budgetCategory =
      totalEstimate > 10000
        ? '$10,000 - $25,000'
        : totalEstimate > 5000
        ? '$5,000 - $10,000'
        : '$2,500 - $5,000';

    onSelectServiceAndScroll(projectType, budgetCategory);
    onClose();
  };

  const generateEstimateText = (ref: string) => {
    return `DrTechei IT Solutions - Formal Ballpark Estimate
Reference ID: ${ref}
Date: ${new Date().toLocaleDateString()}
Client Email: ${clientEmail}
----------------------------------------
Selected Digital Solution: ${projectType}
Base Solution Cost: $${currentBase.toLocaleString()} USD
Selected Capabilities:
${selectedFeatures.map((f) => ` • ${f}`).join('\n')}
Features Add-on: $${featureCost.toLocaleString()} USD
----------------------------------------
TOTAL BALLPARK INVESTMENT: $${totalEstimate.toLocaleString()} USD
Estimated Delivery Timeline: ${timeline}
Engineering SLA: 99+ Lighthouse Score Guaranteed, 100% Client Code Ownership
Direct Support: wearedrtechie@gmail.com | +1 (800) 540-TECH`;
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail.trim()) return;

    const generatedRef = 'DRT-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(generatedRef);
    setSubmitted(true);

    // Build comprehensive mailto link so user receives it in their email app & sends copy to DrTechei
    const subject = encodeURIComponent(`DrTechei Project Estimate: ${projectType} ($${totalEstimate.toLocaleString()}) [${generatedRef}]`);
    const body = encodeURIComponent(generateEstimateText(generatedRef));
    const mailtoUrl = `mailto:wearedrtechie@gmail.com?cc=${encodeURIComponent(clientEmail)}&subject=${subject}&body=${body}`;

    try {
      // Trigger user's mail client
      window.open(mailtoUrl, '_blank');
    } catch {}

    try {
      confetti({ particleCount: 75, spread: 55, origin: { y: 0.6 } });
    } catch {}
  };

  const handleCopyEstimate = () => {
    const text = generateEstimateText(referenceId);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-slate-200 max-h-[94vh] overflow-y-auto">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6 pr-8">
          <div className="w-10 h-10 rounded-xl bg-[#EEEDFA] border border-[#D1CDF4] flex items-center justify-center text-[#2D2575] shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#111622] leading-tight">
              Interactive Project Cost Estimator
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Instant transparent ballpark estimation based on DrTechei engineering standards.
            </p>
          </div>
        </div>

        {submitted ? (
          /* Submission Confirmation & Delivery Hub */
          <div className="py-4 sm:py-6 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#FDF7EF] text-[#D98E3A] flex items-center justify-center mx-auto mb-3 border border-[#F2BC7B]/50">
              <MailCheck className="w-7 h-7" />
            </div>
            
            <div className="text-center">
              <h4 className="text-xl sm:text-2xl font-bold text-[#111622]">
                Estimate Dispatched & Generated
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1.5">
                We've prepared your tailored quotation for <strong>{projectType}</strong> (approx. <strong>${totalEstimate.toLocaleString()} USD</strong>) for <strong>{clientEmail}</strong>.
              </p>
            </div>

            {/* Formatted Quotation Voucher Card */}
            <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between pb-2 mb-2 border-b border-slate-200 text-slate-500 text-[11px]">
                <span>REFERENCE: <strong className="text-[#2D2575]">{referenceId}</strong></span>
                <span>STATUS: <strong className="text-emerald-600">CONFIRMED</strong></span>
              </div>
              <div className="space-y-1 text-slate-700 text-xs">
                <div className="flex justify-between">
                  <span>Digital Solution:</span>
                  <span className="font-bold text-slate-900">{projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Capabilities:</span>
                  <span className="font-bold text-slate-900">{selectedFeatures.length} Add-ons</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <span className="font-bold text-slate-900">{timeline}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 font-sans text-base font-extrabold text-[#2D2575]">
                  <span>Total Estimated Ballpark:</span>
                  <span className="text-[#D98E3A]">${totalEstimate.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Direct Delivery Actions */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={handlePrintPDF}
                className="py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-[#111622] hover:bg-slate-50 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Printer className="w-4 h-4 text-[#D98E3A]" />
                <span>Print / Save PDF</span>
              </button>

              <button
                type="button"
                onClick={handleCopyEstimate}
                className="py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-[#111622] hover:bg-slate-50 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#2D2575]" />
                    <span>Copy Quotation</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:wearedrtechie@gmail.com?cc=${encodeURIComponent(clientEmail)}&subject=${encodeURIComponent(`DrTechei Project Estimate: ${projectType} ($${totalEstimate.toLocaleString()}) [${referenceId}]`)}&body=${encodeURIComponent(generateEstimateText(referenceId))}`}
                className="py-2.5 px-3 rounded-xl bg-[#2D2575] hover:bg-[#1F1958] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <ExternalLink className="w-4 h-4 text-[#F2BC7B]" />
                <span>Open in Mail App</span>
              </a>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Step 1: Select Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Digital Solution
              </label>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type.label}
                    type="button"
                    onClick={() => setProjectType(type.label)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer min-h-[58px] ${
                      projectType === type.label
                        ? 'border-[#D98E3A] bg-[#FDF7EF] text-[#A8631B] shadow-2xs ring-1 ring-[#D98E3A]/40'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 text-slate-700'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm leading-snug">{type.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">from ${type.base.toLocaleString()}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-on Capabilities */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. Key Capabilities & Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.name);
                  return (
                    <div
                      key={feat.name}
                      onClick={() => toggleFeature(feat.name)}
                      className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#EEEDFA]/80 border-[#2D2575]/50 text-[#2D2575] font-semibold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <div
                          className={`w-4 h-4 rounded border shrink-0 flex items-center justify-center ${
                            isChecked ? 'bg-[#2D2575] border-[#2D2575] text-white' : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="truncate">{feat.name}</span>
                      </div>
                      <span className="text-[11px] font-mono shrink-0 text-slate-400">
                        {feat.cost === 0 ? 'Included' : `+$${feat.cost}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Calculation Result Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#111622] via-[#2D2575] to-[#111622] text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 border border-[#2B3548]">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#F2BC7B]">
                  Estimated Investment
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  ${totalEstimate.toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal ml-1">ballpark</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  Typical delivery: 3–6 weeks depending on final asset readiness.
                </div>
              </div>

              <button
                onClick={handleApplyToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 transition-all active:scale-95 cursor-pointer shrink-0"
              >
                <span>Continue With This Scope</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Quick Email Capture Option */}
            <form onSubmit={handleQuickSubmit} className="pt-2 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="Enter your email to receive this estimate..."
                className="flex-grow px-4 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-[#2D2575] bg-slate-50/60 focus:bg-white"
              />
              <button
                type="submit"
                className="px-5 py-3 sm:py-2.5 rounded-xl bg-[#2D2575] hover:bg-[#231C5C] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
              >
                <Send className="w-3.5 h-3.5 text-[#F2BC7B]" />
                <span>Send PDF Estimate to Mail</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

