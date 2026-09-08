import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Calculator, Send } from 'lucide-react';
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

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail.trim()) return;
    setSubmitted(true);
    try {
      confetti({ particleCount: 70, spread: 50, origin: { y: 0.6 } });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-9 h-9 rounded-xl bg-[#EEEDFA] border border-[#D1CDF4] flex items-center justify-center text-[#2D2575]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#111622]">
              Interactive Project Cost Estimator
            </h3>
            <p className="text-xs text-slate-500">
              Instant transparent ballpark estimation based on DrTechei engineering standards.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-14 h-14 rounded-2xl bg-[#FDF7EF] text-[#D98E3A] flex items-center justify-center mx-auto mb-4 border border-[#F2BC7B]/50">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-[#111622]">Scope & Estimate Dispatched</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mt-2">
              We've sent a customized breakdown for <strong>{projectType}</strong> (approx. ${totalEstimate.toLocaleString()}) to <strong>{clientEmail}</strong>.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-xl bg-[#2D2575] text-white text-xs font-bold hover:bg-[#231C5C] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            {/* Step 1: Select Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Digital Solution
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type.label}
                    type="button"
                    onClick={() => setProjectType(type.label)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                      projectType === type.label
                        ? 'border-[#D98E3A] bg-[#FDF7EF] text-[#A8631B] shadow-2xs ring-1 ring-[#D98E3A]/40'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 text-slate-700'
                    }`}
                  >
                    <div className="font-bold">{type.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">from ${type.base.toLocaleString()}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-on Capabilities */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. Key Capabilities & Add-ons
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.name);
                  return (
                    <div
                      key={feat.name}
                      onClick={() => toggleFeature(feat.name)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#EEEDFA]/80 border-[#2D2575]/50 text-[#2D2575] font-semibold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked ? 'bg-[#2D2575] border-[#2D2575] text-white' : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span>{feat.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {feat.cost === 0 ? 'Included' : `+$${feat.cost}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Calculation Result Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#111622] via-[#2D2575] to-[#111622] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#2B3548]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#F2BC7B]">
                  Estimated Investment
                </span>
                <div className="text-3xl font-black text-white tracking-tight">
                  ${totalEstimate.toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal ml-1">ballpark</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  Typical delivery: 3–6 weeks depending on final asset readiness.
                </div>
              </div>

              <button
                onClick={handleApplyToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 transition-all active:scale-95 cursor-pointer"
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
                placeholder="Or email this estimate to your inbox..."
                className="flex-grow px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#2D2575]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#2D2575] hover:bg-[#231C5C] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 text-[#F2BC7B]" />
                <span>Send PDF Estimate</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
