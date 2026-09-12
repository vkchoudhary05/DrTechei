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
  MailCheck,
  Loader2,
  Database,
  Clock,
  Coins,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitEstimateToGoogleSheet } from '../services/lead.Service';

interface QuoteEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceAndScroll: (serviceName: string) => void;
}

interface ExperienceTier {
  id: string;
  title: string;
  experience: string;
  rate: number; // between $25 and $50
  rateRange: string;
  description: string;
}

export const QuoteEstimatorModal: React.FC<QuoteEstimatorModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceAndScroll,
}) => {
  // Top-level choice: Fixed Cost vs Dedicated Hourly
  const [billingModel, setBillingModel] = useState<'fixed' | 'hourly'>('fixed');

  // --- Fixed Price State ---
  const [projectType, setProjectType] = useState('Website Development');
  const [fixedTimeline, setFixedTimeline] = useState('1 to 3 Months');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Responsive Mobile Design',
    'Technical SEO Setup'
  ]);

  // --- Dedicated Hourly State ---
  const [selectedExperience, setSelectedExperience] = useState<string>('senior');
  const [weeklyHours, setWeeklyHours] = useState<number>(40); // 20, 40, or 10
  const [hourlyDuration, setHourlyDuration] = useState<string>('1 to 3 Months');

  // Common State
  const [clientEmail, setClientEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // --- Fixed Cost Options ---

const projectTypes = [
  { label: 'Website Development', base: 500 },
  { label: 'Next.js Web Application', base: 1000 },
  { label: 'E-Commerce Store', base: 1200 },
  { label: 'CMS (WordPress/Shopify)', base: 600 },
  { label: 'Node.js Backend & API', base: 900 },
  { label: 'Full Enterprise Redesign', base: 2000 },
];

const availableFeatures = [
  { name: 'Responsive Mobile Design', cost: 0 },
  { name: 'Technical SEO Setup', cost: 150 },
  { name: 'Payment Gateway (Stripe/PayPal/Razorpay)', cost: 200 },
  { name: 'Headless CMS Integration', cost: 300 },
  { name: 'Custom Dynamic Animations', cost: 200 },
  { name: 'Multi-Language / Localization', cost: 250 },
  { name: 'CRM & Lead Funnel Sync', cost: 300 },
];


  const fixedTimelineOptions = [
    { label: '2 to 4 Weeks', desc: 'Fast MVP Sprint' },
    { label: '1 to 3 Months', desc: 'Standard Production Scale' },
    { label: '3 to 6 Months (Enterprise)', desc: 'Enterprise Staged Delivery' }
  ];

  // --- Hourly Options ---
  const experienceTiers: ExperienceTier[] = [
    {
      id: 'mid',
      title: 'Mid-Level Engineer',
      experience: '3–5 Years Experience',
      rate: 28,
      rateRange: '$15–$25/hr',
      description: 'Clean UI, modular frontend/backend components, API integrations & testing.'
    },
    {
      id: 'senior',
      title: 'Senior Full-Stack',
      experience: '5–8 Years Experience',
      rate: 38,
      rateRange: '$25–$35/hr',
      description: 'Next.js 15, cloud architecture, system state, high performance & security.'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Lead Architect',
      experience: '8+ Years Experience',
      rate: 50,
      rateRange: '$35–$50/hr',
      description: 'Enterprise scalability, microservices, cloud DevOps & mission-critical SLA.'
    }
  ];

  const weeklyHoursOptions = [
    { hours: 20, label: 'Part-Time', sub: '20 hrs/week (~80 hrs/mo)' },
    { hours: 40, label: 'Full-Time Dedicated', sub: '40 hrs/week (~160 hrs/mo)' },
    { hours: 10, label: 'Flexible Sprint', sub: '10 hrs/week (~40 hrs/mo)' }
  ];

  const hourlyDurationOptions = [
    { label: '1 Month', desc: 'Sprint / Quick Delivery' },
    { label: '1 to 3 Months', desc: 'Standard Roadmap Phase' },
    { label: '3 to 6 Months (Enterprise)', desc: 'Enterprise Long-Term Squad' }
  ];

  // Feature Toggle
  const toggleFeature = (featName: string) => {
    if (selectedFeatures.includes(featName)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== featName));
    } else {
      setSelectedFeatures([...selectedFeatures, featName]);
    }
  };

  // Fixed calculations
  const currentBase = projectTypes.find((p) => p.label === projectType)?.base || 3500;
  const featureCost = selectedFeatures.reduce((acc, featName) => {
    const found = availableFeatures.find((f) => f.name === featName);
    return acc + (found ? found.cost : 0);
  }, 0);
  const totalFixedEstimate = currentBase + featureCost;

  // Hourly calculations
  const currentTier = experienceTiers.find((t) => t.id === selectedExperience) || experienceTiers[1];
  const hourlyRate = currentTier.rate; // $25 - $50/hr
  const monthlyHours = weeklyHours * 4;
  const durationMonthsCount = hourlyDuration.includes('3 to 6') ? 4 : hourlyDuration.includes('1 to 3') ? 2 : 1;
  const totalHourlyHours = monthlyHours * durationMonthsCount;
  const totalHourlyEstimate = hourlyRate * totalHourlyHours;

  // Active Estimate depending on selected model
  const activeEstimate = billingModel === 'fixed' ? totalFixedEstimate : totalHourlyEstimate;
  const activeTimeline = billingModel === 'fixed' ? fixedTimeline : hourlyDuration;

  // Check if enterprise scope applies (Full Enterprise, 3 to 6 Months, or Lead Architect)
  const isEnterprise = 
    billingModel === 'fixed'
      ? projectType === 'Full Enterprise Redesign' || fixedTimeline.includes('3 to 6')
      : selectedExperience === 'enterprise' || hourlyDuration.includes('3 to 6');

  // Handle selecting "Full Enterprise Redesign" in Fixed mode
  const handleSelectProjectType = (typeLabel: string) => {
    setProjectType(typeLabel);
    if (typeLabel === 'Full Enterprise Redesign') {
      setFixedTimeline('3 to 6 Months (Enterprise)');
    }
  };

  // When user clicks "Continue with this scope"
  const handleApplyToContact = () => {
    const serviceTitle =
      billingModel === 'fixed'
        ? projectType
        : 'Dedicated Developer Squad';

    onSelectServiceAndScroll(serviceTitle);
    onClose();
  };

  // Generate Professional Quotation Document Text
  const generateEstimateText = (ref: string) => {
    const issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const validUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    if (billingModel === 'fixed') {
      return `================================================================================
                           DRTECHEI IT SOLUTIONS
           Enterprise Full-Stack Engineering & Cloud Architecture
          Website: https://wearedrtechie.com | Email: wearedrtechie@gmail.com
              Engineering Desk: +919690941439 | Delhi NCR • London • Toronto
================================================================================
              OFFICIAL FIXED PRICE ENGINEERING QUOTATION & SCOPE
================================================================================
Quotation ID:     ${ref}
Issue Date:       ${issueDate}
Valid Until:      ${validUntil} (30 Calendar Days)
Client Email:     ${clientEmail || 'Client Intake'}
Pricing Model:    FIXED PRICE (Guaranteed Deliverables & Milestone Billing)
Status:           CONFIRMED & RECORDED IN DATABASE
--------------------------------------------------------------------------------
1. SCOPE OF SERVICES & ARCHITECTURE
--------------------------------------------------------------------------------
• Solution Category:       ${projectType}
• Base Architecture:       $${currentBase.toLocaleString()} USD
• Selected Capabilities (${selectedFeatures.length} Add-ons):
${selectedFeatures.map((f) => `   - ${f}`).join('\n')}
• Capabilities Subtotal:   $${featureCost.toLocaleString()} USD
• Delivery Timeline:       ${fixedTimeline}
${isEnterprise ? '• Enterprise Roadmap:     3 to 6 Months Multi-Phase Delivery & SLA Staging' : ''}

--------------------------------------------------------------------------------
2. COMMERCIAL INVESTMENT & MILESTONE SCHEDULE
--------------------------------------------------------------------------------
TOTAL FIXED BALLPARK:     $${totalFixedEstimate.toLocaleString()}.00 USD (Guaranteed Scope)

Milestone Schedule:
• Milestone 1 (Kickoff):   30% ($${Math.round(totalFixedEstimate * 0.3).toLocaleString()} USD) - Architecture & Sprint Discovery
• Milestone 2 (Staging):   40% ($${Math.round(totalFixedEstimate * 0.4).toLocaleString()} USD) - Core Features Beta & Review
• Milestone 3 (Launch):    30% ($${Math.round(totalFixedEstimate * 0.3).toLocaleString()} USD) - Production Deployment & Sign-off

--------------------------------------------------------------------------------
3. ENTERPRISE TERMS & CONDITIONS
--------------------------------------------------------------------------------
[1] 100% IP TRANSFER: Complete intellectual property and full Git repository
    source code ownership transferred to client upon final milestone release.
[2] GUARANTEED SCOPE: All itemized features delivered without cost overruns.
[3] STRICT NDA: Mutual non-disclosure agreement protecting all business logic,
    credentials, and proprietary data.
[4] 30-DAY HYPERCARE: Includes 30 calendar days of post-launch production
    warranty, proactive monitoring, and bug remediation (90 days for Enterprise).
[5] SLA PERFORMANCE: Guaranteed 95+ Google Lighthouse Score and < 0.5s LCP.
${isEnterprise ? '[6] ENTERPRISE ROADMAP (3 to 6 Months): Dedicated senior squad, staging environment, automated CI/CD, and security audits.' : ''}
================================================================================
Corporate Signature: DrTechei IT Solutions | Global Enterprise Engineering Desk`;
    } else {
      return `================================================================================
                           DRTECHEI IT SOLUTIONS
           Enterprise Full-Stack Engineering & Cloud Architecture
          Website: https://wearedrtechie.com | Email: wearedrtechie@gmail.com
              Engineering Desk: +919690941439 | Delhi NCR • London • Toronto
================================================================================
          OFFICIAL DEDICATED HOURLY SQUAD QUOTATION ($25 TO $50 / HR)
================================================================================
Quotation ID:     ${ref}
Issue Date:       ${issueDate}
Valid Until:      ${validUntil} (30 Calendar Days)
Client Email:     ${clientEmail || 'Client Intake'}
Pricing Model:    DEDICATED HOURLY / TIME & MATERIAL ($25 to $50/hr Standard)
Status:           CONFIRMED & RECORDED IN DATABASE
--------------------------------------------------------------------------------
1. DEDICATED RESOURCE & EXPERIENCE TIER
--------------------------------------------------------------------------------
• Engineer Seniority:      ${currentTier.title} (${currentTier.experience})
• Market Standard Rate:    $${hourlyRate}.00 USD / hour (Standard: $25 to $50/hr by experience)
• Weekly Allocation:       ${weeklyHours} Hours / Week (~${monthlyHours} Hours / Month)
• Duration Commitment:     ${hourlyDuration} (${totalHourlyHours} Total Planned Hours)
${isEnterprise ? '• Enterprise Roadmap:     3 to 6 Months Dedicated Squad with SLA & Lead Architect' : ''}

--------------------------------------------------------------------------------
2. ESTIMATED COMMERCIAL INVESTMENT
--------------------------------------------------------------------------------
• Hourly Rate:             $${hourlyRate}.00 USD / hour
• Monthly Run-Rate:        ~$${(hourlyRate * monthlyHours).toLocaleString()}.00 USD / month
TOTAL PROJECT ESTIMATE:    ~$${totalHourlyEstimate.toLocaleString()}.00 USD (~${totalHourlyHours} Engineering Hours)

--------------------------------------------------------------------------------
3. HOURLY CONTRACT & TIME TERMS
--------------------------------------------------------------------------------
[1] 100% IP TRANSFER: All code committed to client Git repositories daily.
[2] TRANSPARENT SPRINT LOGS: Time tracked via Jira/GitHub with detailed task reports.
[3] STRICT NDA: Mutual non-disclosure agreement protecting all business logic.
[4] FLEXIBLE SCALING: Adjust squad size or hours with 14-day notice.
[5] SLA PERFORMANCE: High code quality, automated test coverage & CI/CD.
${isEnterprise ? '[6] ENTERPRISE ROADMAP (3 to 6 Months): Multi-phase architectural leadership, security audits, and dedicated enterprise hypercare.' : ''}
================================================================================
Corporate Signature: DrTechei IT Solutions | Global Enterprise Engineering Desk`;
    }
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail.trim()) return;

    setIsSending(true);
    const generatedRef = 'DRT-QUO-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(generatedRef);

    // Automatically send to Google Sheet and trigger Gmail delivery to client
    await submitEstimateToGoogleSheet({
      type: 'estimate',
      email: clientEmail.trim(),
      projectType: billingModel === 'fixed' ? `${projectType} (Fixed Cost)` : `${currentTier.title} (Hourly Dedicated)`,
      totalEstimate: activeEstimate,
      timeline: activeTimeline,
      featuresSummary: billingModel === 'fixed' ? selectedFeatures.join(', ') : `${weeklyHours} hrs/wk dedicated allocation`,
      referenceId: generatedRef,
      billingModel,
      hourlyRate: billingModel === 'hourly' ? hourlyRate : undefined,
      estimatedHours: billingModel === 'hourly' ? totalHourlyHours : undefined,
      baseCost: billingModel === 'fixed' ? currentBase : undefined,
      featuresCost: billingModel === 'fixed' ? featureCost : undefined,
      experienceLevel: billingModel === 'hourly' ? `${currentTier.title} (${currentTier.experience})` : undefined,
      isEnterprise,
    });

    setIsSending(false);
    setSubmitted(true);

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
        <div className="flex items-center gap-3 mb-4 sm:mb-5 pr-8">
          <div className="w-10 h-10 rounded-xl bg-[#EEEDFA] border border-[#D1CDF4] flex items-center justify-center text-[#2D2575] shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#111622] leading-tight">
              Project Pricing &amp; Scope Estimator
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Choose your preferred model: <strong>Fixed Price</strong> (Guaranteed Scope) or <strong>Dedicated Hourly</strong> ($25–$50/hr).
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
                <Database className="w-3.5 h-3.5 text-emerald-600" />
                <span>✓ Recorded in Database &amp; Dispatched to Inbox</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#111622]">
                Official Quotation Dispatched!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1.5">
                We've prepared your {billingModel === 'fixed' ? 'Fixed Price' : 'Dedicated Hourly'} quotation (approx. <strong>${activeEstimate.toLocaleString()} USD</strong>) along with company credentials and complete Terms &amp; Conditions to <strong>{clientEmail}</strong>.
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Please check your inbox (and spam folder if it's your first time receiving from us).
              </p>
            </div>

            {/* Formatted Quotation Voucher Card */}
            <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between pb-2 mb-2 border-b border-slate-200 text-slate-500 text-[11px]">
                <span>QUOTATION ID: <strong className="text-[#2D2575]">{referenceId}</strong></span>
                <span>STATUS: <strong className="text-emerald-600">RECORDED IN DATABASE</strong></span>
              </div>

              {billingModel === 'fixed' ? (
                /* Fixed Price Summary */
                <div className="space-y-1.5 text-slate-700 text-xs">
                  <div className="flex justify-between">
                    <span>Pricing Model:</span>
                    <span className="font-bold text-emerald-700">FIXED PRICE (Guaranteed Deliverables)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Digital Solution:</span>
                    <span className="font-bold text-slate-900">{projectType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selected Capabilities:</span>
                    <span className="font-bold text-slate-900">{selectedFeatures.length} Add-ons (${featureCost.toLocaleString()} USD)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Timeline:</span>
                    <span className="font-bold text-slate-900">{fixedTimeline}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-200 font-sans text-base font-extrabold text-[#2D2575]">
                    <span>Total Fixed Ballpark:</span>
                    <span className="text-[#D98E3A]">${totalFixedEstimate.toLocaleString()} USD</span>
                  </div>
                  <div className="text-[11px] font-sans text-slate-500 pt-1">
                    Milestones: 30% Kickoff (${Math.round(totalFixedEstimate * 0.3).toLocaleString()}) • 40% Beta (${Math.round(totalFixedEstimate * 0.4).toLocaleString()}) • 30% Launch (${Math.round(totalFixedEstimate * 0.3).toLocaleString()})
                  </div>
                </div>
              ) : (
                /* Hourly Dedicated Summary */
                <div className="space-y-1.5 text-slate-700 text-xs">
                  <div className="flex justify-between">
                    <span>Pricing Model:</span>
                    <span className="font-bold text-[#2D2575]">DEDICATED HOURLY ($25 TO $50/HR)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engineer Seniority:</span>
                    <span className="font-bold text-slate-900">{currentTier.title} ({currentTier.experience})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hourly Rate:</span>
                    <span className="font-bold text-[#2D2575]">${hourlyRate}.00 USD / hr <span className="font-normal text-slate-500">($25–$50/hr standard)</span></span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly Allocation:</span>
                    <span className="font-bold text-slate-900">{weeklyHours} Hours/Week (~{monthlyHours} hrs/mo)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commitment Duration:</span>
                    <span className="font-bold text-slate-900">{hourlyDuration} (~{totalHourlyHours} total hrs)</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-200 font-sans text-base font-extrabold text-[#2D2575]">
                    <span>Estimated Total Investment:</span>
                    <span className="text-[#D98E3A]">~${totalHourlyEstimate.toLocaleString()} USD</span>
                  </div>
                  <div className="text-[11px] font-sans text-slate-500 pt-1">
                    Monthly Run-Rate: ~${(hourlyRate * monthlyHours).toLocaleString()} USD/month
                  </div>
                </div>
              )}

              {/* Corporate Terms & Conditions Box */}
              <div className="mt-3.5 pt-3 border-t border-slate-200 font-sans text-[11px] text-slate-500 space-y-1">
                <div className="font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>Guaranteed Enterprise Terms &amp; Conditions:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10.5px]">
                  <div>✓ <strong>100% IP &amp; Git Code Ownership</strong> transferred upon delivery.</div>
                  <div>✓ <strong>NDA Protected:</strong> Enterprise data &amp; credentials security.</div>
                  <div>✓ <strong>Hypercare Warranty:</strong> 30 Days (90 Days for Enterprise).</div>
                  <div>✓ <strong>{billingModel === 'fixed' ? 'Milestone Payments: 30 / 40 / 30' : 'Detailed Timesheets: Weekly Jira Logs'}</strong></div>
                  {isEnterprise && (
                    <div className="sm:col-span-2 text-[#2D2575] font-semibold">
                      ✓ <strong>Enterprise Scope (3 to 6 Months):</strong> Staged architecture, automated CI/CD &amp; dedicated squad.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Direct Delivery Actions */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* <button
                type="button"
                onClick={handlePrintPDF}
                className="py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-[#111622] hover:bg-slate-50 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Printer className="w-4 h-4 text-[#D98E3A]" />
                <span>Print / Save PDF</span>
              </button> */}

              {/* <button
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
              </button> */}

              {/* <a
                href={`mailto:wearedrtechie@gmail.com?cc=${encodeURIComponent(clientEmail)}&subject=${encodeURIComponent(`DrTechei Project Estimate: ${billingModel === 'fixed' ? projectType : currentTier.title} ($${activeEstimate.toLocaleString()}) [${referenceId}]`)}&body=${encodeURIComponent(generateEstimateText(referenceId))}`}
                className="py-2.5 px-3 rounded-xl bg-[#2D2575] hover:bg-[#1F1958] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <ExternalLink className="w-4 h-4 text-[#F2BC7B]" />
                <span>Open in Mail App</span>
              </a> */}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer min-h-[42px]"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  onClose();
                  handleApplyToContact();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#2D2575] hover:bg-[#1F1958] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 min-h-[42px]"
              >
                <span>Book Technical Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F2BC7B]" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {/* PRICING MODEL SELECTOR TABS: FIXED vs HOURLY */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                Select Your Desired Engagement Model:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 gap-1.5">
                <button
                  type="button"
                  onClick={() => setBillingModel('fixed')}
                  className={`flex items-start gap-3 p-3 rounded-xl text-left transition-all cursor-pointer ${
                    billingModel === 'fixed'
                      ? 'bg-white text-[#2D2575] shadow-sm border border-slate-200/80 ring-2 ring-[#D98E3A]/40'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${billingModel === 'fixed' ? 'bg-[#FDF7EF] text-[#D98E3A]' : 'bg-slate-200 text-slate-500'}`}>
                    <Coins className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-xs sm:text-sm text-[#111622]">Fixed Price Project</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                        Guaranteed
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Fixed scope, clear deliverables &amp; milestone schedule (30 / 40 / 30).
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setBillingModel('hourly')}
                  className={`flex items-start gap-3 p-3 rounded-xl text-left transition-all cursor-pointer ${
                    billingModel === 'hourly'
                      ? 'bg-white text-[#2D2575] shadow-sm border border-slate-200/80 ring-2 ring-[#2D2575]/40'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${billingModel === 'hourly' ? 'bg-[#EEEDFA] text-[#2D2575]' : 'bg-slate-200 text-slate-500'}`}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-xs sm:text-sm text-[#111622]">Dedicated Hourly Team</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#EEEDFA] text-[#2D2575] font-semibold">
                        $25 to $50/hr
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Hire dedicated engineers by experience tier with transparent weekly hours.
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* VIEW A: FIXED PRICE FLOW */}
            {/* ========================================================================= */}
            {billingModel === 'fixed' && (
              <div className="space-y-4 animate-in fade-in duration-200">
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
                        onClick={() => handleSelectProjectType(type.label)}
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
                    2. Key Capabilities &amp; Add-ons
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

                {/* Step 3: Fixed Timeline */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>3. Delivery Timeline</span>
                    {isEnterprise && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        🏢 Enterprise Scope Active
                      </span>
                    )}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {fixedTimelineOptions.map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setFixedTimeline(opt.label)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          fixedTimeline === opt.label
                            ? 'border-[#D98E3A] bg-[#FDF7EF] text-[#A8631B] shadow-2xs ring-1 ring-[#D98E3A]/40'
                            : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 text-slate-700'
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{opt.label}</div>
                        <div className="text-[10.5px] text-slate-500 mt-0.5">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* VIEW B: DEDICATED HOURLY FLOW ($25 to $50/hr) */}
            {/* ========================================================================= */}
            {billingModel === 'hourly' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                {/* Step 1: Select Experience Tier ($25 to $50/hr) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      1. Select Engineer Seniority ($25 to $50/hr)
                    </label>
                    <span className="text-[11px] font-mono text-[#2D2575] font-bold">
                      Standard Market Rates
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {experienceTiers.map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedExperience(tier.id)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          selectedExperience === tier.id
                            ? 'border-[#2D2575] bg-[#EEEDFA] text-[#2D2575] shadow-2xs ring-1 ring-[#2D2575]/30'
                            : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs sm:text-sm">{tier.title}</span>
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-[#2D2575]">
                            ${tier.rate}/hr
                          </span>
                        </div>
                        <div className="text-[11px] font-medium text-slate-500 mt-1">
                          {tier.experience}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-2">
                          {tier.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Weekly Hours */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    2. Dedicated Weekly Allocation
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {weeklyHoursOptions.map((opt) => (
                      <button
                        key={opt.hours}
                        type="button"
                        onClick={() => setWeeklyHours(opt.hours)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          weeklyHours === opt.hours
                            ? 'border-[#2D2575] bg-[#EEEDFA] text-[#2D2575] shadow-2xs ring-1 ring-[#2D2575]/30'
                            : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 text-slate-700'
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{opt.label}</div>
                        <div className="text-[10.5px] text-slate-500 mt-0.5">{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Planned Duration */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>3. Engagement Duration</span>
                    {isEnterprise && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        🏢 Enterprise SLA Active
                      </span>
                    )}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {hourlyDurationOptions.map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setHourlyDuration(opt.label)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          hourlyDuration === opt.label
                            ? 'border-[#D98E3A] bg-[#FDF7EF] text-[#A8631B] shadow-2xs ring-1 ring-[#D98E3A]/40'
                            : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 text-slate-700'
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{opt.label}</div>
                        <div className="text-[10.5px] text-slate-500 mt-0.5">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Enterprise Scope Notice (Triggered in either model for 3 to 6 Months) */}
            {isEnterprise && (
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#2D2575]/10 via-[#FDF7EF] to-[#2D2575]/5 border border-[#2D2575]/20 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#2D2575] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-[#2D2575]">Enterprise Project Scope (3 to 6 Months):</strong> Multi-phase delivery with dedicated senior engineering squads, architectural blueprint, staging environments, automated CI/CD, and 90-day extended hypercare.
                </div>
              </div>
            )}

            {/* Unified Calculation & Instant Email Dispatch Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#111622] via-[#2D2575] to-[#111622] text-white border border-[#2B3548] shadow-lg">
              {/* Summary Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-white/15">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#F2BC7B]">
                      {billingModel === 'fixed' ? 'Guaranteed Fixed Total' : 'Estimated Dedicated Total'}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-200 border border-white/15">
                      {billingModel === 'fixed' ? '30/40/30 Milestones' : `$${hourlyRate}/hr • ${weeklyHours} hrs/wk`}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-baseline gap-2 mt-0.5">
                    <span>${activeEstimate.toLocaleString()} USD</span>
                    <span className="text-xs text-slate-300 font-normal">
                      {billingModel === 'fixed' ? 'guaranteed fixed scope' : `~${totalHourlyHours} engineering hours`}
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs text-slate-300">
                  <div>Timeline: <strong className="text-[#F2BC7B]">{activeTimeline}</strong></div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">✓ Zero surprise costs • 100% IP rights</div>
                </div>
              </div>

              {/* Single Clear Action: Email Submission */}
              <form onSubmit={handleQuickSubmit} className="space-y-2.5">
                <label className="block text-xs font-semibold text-slate-200">
                  Enter your email to receive this official quotation &amp; technical breakdown:
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      required
                      disabled={isSending}
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="Enter your email address (e.g. name@company.com)..."
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-white/20 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#F2BC7B] bg-white disabled:opacity-60 min-h-[44px]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSending || !clientEmail.trim()}
                    className="w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 disabled:opacity-75 min-h-[44px]"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Quotation...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-white" />
                        <span>Send Quotation to My Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Includes formal PDF quote, milestone schedule &amp; terms. No sales pressure.</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleApplyToContact}
                    className="text-[#F2BC7B] hover:text-amber-200 underline cursor-pointer font-medium"
                  >
                    Need a custom consultation instead? Open Contact Form &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
