import React, { useState, useEffect } from 'react';
import {
  Send,
  Mail,
  Phone,
  Clock,
  Shield,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Sparkles,
  Globe2,
  ArrowRight,
  Lock
} from 'lucide-react';
import { GsapScrollText } from './GsapScrollText';
import { submitContactToGoogleSheet } from '../services/lead.Service';

interface ContactFormProps {
  preselectedService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  preselectedService = 'Website Development',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    websiteUrl: '',
    serviceRequired: preselectedService,
    budgetRange: '$5,000 - $10k',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Update form if preselected service changes
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  const servicesList = [
    'Website Development',
    'Custom Software & Web Apps',
    'Headless CMS & WordPress',
    'Shopify & E-Commerce Engineering',
    'API Development & Integration',
    'Cloud Architecture & DevOps',
    'Performance & SEO Optimization',
    'Technical Audit & Security Review',
    'Dedicated Developer Squad',
  ];

  const budgetOptions = [
    '< $2,500',
    '$2,500 - $5k',
    '$5,000 - $10k',
    '$10k - $25k',
    '$25,000+',
    'Flexible / Need Advice',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide a brief outline of your goals and requirements';
    } else if (formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = 'Please provide at least 15 characters describing your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const generatedRef = `DRT-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedRef);

    // Save lead to Google Sheet & send confirmation email to client
    await submitContactToGoogleSheet({
      type: 'contact',
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.companyName.trim(),
      serviceRequired: formData.serviceRequired,
      budget: formData.budgetRange,
      message: `${formData.projectDetails}${formData.websiteUrl ? ` (Website: ${formData.websiteUrl})` : ''}`,
      referenceId: generatedRef,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      websiteUrl: '',
      serviceRequired: preselectedService || 'Website Development',
      budgetRange: '$5,000 - $10k',
      projectDetails: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setReferenceId('');
  };

  return (
    <section id="contact-form-section" className="py-10 sm:py-16 md:py-20 bg-slate-50 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#FAF1E6] text-[#A8631B] border border-[#F2BC7B]/50 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
            <span>Senior Architectural Intake</span>
          </div>

          <GsapScrollText
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111622] tracking-tight"
          >
            Start Your Technical Discovery &amp; Blueprint
          </GsapScrollText>

          <GsapScrollText
            as="p"
            delay={0.1}
            className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed"
          >
            No junior account managers. Your brief is reviewed directly by a lead architect who provides an actionable proposal, technology recommendation, and guaranteed timeline.
          </GsapScrollText>
        </div>

        {/* Master Intake Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full">
          
          {/* Left Column: Direct Senior Desk, Global Hubs & Reassurance */}
          <div className="w-full lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Primary Dark Information Card */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#111622] text-white p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden border border-slate-800 w-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D2575]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D98E3A]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F2BC7B] font-bold">
                    Global Direct Intake
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    Talk With A Principal Engineer
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Have an urgent launch deadline, legacy codebase audit, or multi-market expansion? Contact our senior team directly.
                  </p>
                </div>

                {/* Direct Channel Contact Blocks */}
                <div className="space-y-3 pt-2 border-t border-slate-800">
                  {/* Email Channel */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#F2BC7B]/40 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#2D2575] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#F2BC7B]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Direct RFPs &amp; Project Scopes</div>
                      <a
                        href="mailto:wearedrtechie@gmail.com"
                        className="text-xs sm:text-sm font-bold text-white hover:text-[#F2BC7B] transition-colors break-all block mt-0.5"
                      >
                        wearedrtechie@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone Line */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#F2BC7B]/40 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#D98E3A]/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#F2BC7B]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Global Toll-Free Engineering Line</div>
                      <a
                        href="tel:+18005408324"
                        className="text-xs sm:text-sm font-bold text-white hover:text-[#F2BC7B] transition-colors break-all block mt-0.5"
                      >
                        +1 (800) 540-TECH
                      </a>
                    </div>
                  </div>

                  {/* Global Coverage Hubs */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center shrink-0">
                      <Globe2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Active Delivery Hubs</div>
                      <div className="text-[11px] sm:text-xs font-semibold text-slate-200 mt-0.5 leading-relaxed">
                        🇮🇳 Delhi NCR (HQ) • 🇪🇺 UK &amp; Ireland • 🇦🇺 Australia • 🇨🇦 Canada
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Pillars of Client Trust */}
                <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Lock className="w-3.5 h-3.5 text-[#F2BC7B] shrink-0" />
                    <span className="text-[11px]">Strict NDA executed prior to source code review</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-[#F2BC7B] shrink-0" />
                    <span className="text-[11px]">Guaranteed technical response within 24 business hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Shield className="w-3.5 h-3.5 text-[#F2BC7B] shrink-0" />
                    <span className="text-[11px]">100% IP ownership transferred upon milestone sign-off</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response SLA Guarantee Micro-Card */}
            <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-2xs flex items-center gap-3.5 w-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#111622]">
                  24-Hour Technical Blueprint SLA
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Every inquiry receives an architectural assessment, tech stack evaluation, and ballpark scope.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Intake Form */}
          <div className="w-full lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl p-4 sm:p-6 md:p-8 relative w-full">
              
              {isSubmitted ? (
                /* Submission Confirmation State */
                <div className="py-6 sm:py-10 text-center space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span>✓ Recorded in Database &amp; Confirmation Sent to Email</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111622]">
                    Project Inquiry Successfully Logged!
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#2D2575]">{formData.fullName}</span>. Your inquiry has been securely stored in our system and an automated confirmation email with our company details was sent to <strong className="text-slate-900">{formData.email}</strong>.
                  </p>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAFBFD] border border-slate-200 max-w-sm mx-auto text-left space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Inquiry Tracking Ref:</span>
                      <span className="font-mono font-bold text-[#2D2575]">{referenceId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Target Service:</span>
                      <span className="font-semibold text-slate-800">{formData.serviceRequired}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Budget Range:</span>
                      <span className="font-semibold text-slate-800">{formData.budgetRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Guaranteed Response:</span>
                      <span className="font-semibold text-emerald-600">Within 24 Business Hours</span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <a
                      href={`mailto:wearedrtechie@gmail.com?subject=Project Inquiry Reference: ${referenceId}&body=Hello DrTechei Team,%0D%0A%0D%0AMy inquiry reference is ${referenceId}.%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.serviceRequired}%0D%0A%0D%0ALooking forward to our discovery discussion.`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#2D2575] hover:bg-[#1E1752] transition-colors min-h-[44px]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#F2BC7B]" />
                      <span>Email DrTechei Direct</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-[#FDF7EF] hover:text-[#A8631B] transition-colors cursor-pointer min-h-[44px]"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* The Contact Form */
                <div>
                  <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-4">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-fullName" className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-3.5 py-2.5 sm:py-2 rounded-xl text-base sm:text-sm border bg-slate-50/50 focus:bg-white transition-all outline-none min-h-[44px] ${
                          errors.fullName
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className={`w-full px-3.5 py-2.5 sm:py-2 rounded-xl text-base sm:text-sm border bg-slate-50/50 focus:bg-white transition-all outline-none min-h-[44px] ${
                          errors.email
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 sm:py-2 rounded-xl text-base sm:text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA] transition-all outline-none min-h-[44px]"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Organization
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-3.5 py-2.5 sm:py-2 rounded-xl text-base sm:text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA] transition-all outline-none min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Website & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {/* Current Website URL */}
                    <div>
                      <label htmlFor="contact-website" className="block text-xs font-bold text-slate-700 mb-1">
                        Current Website (if any)
                      </label>
                      <input
                        id="contact-website"
                        type="url"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="https://example.com"
                        className="w-full px-3.5 py-2.5 sm:py-2 rounded-xl text-base sm:text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA] transition-all outline-none min-h-[44px]"
                      />
                    </div>

                    {/* Service Required */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 mb-1">
                        Service Required <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-service"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-2 rounded-xl text-base sm:text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA] transition-all outline-none cursor-pointer min-h-[44px]"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Selection Options (Responsive wrap, no overflow) */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Estimated Investment Budget
                      </label>
                      <span className="text-[11px] text-[#2D2575] font-semibold">
                        Selected: {formData.budgetRange}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                      {budgetOptions.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: budget })}
                          className={`py-2 px-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer min-h-[42px] flex items-center justify-center text-center break-words ${
                            formData.budgetRange === budget
                              ? 'bg-[#2D2575] text-white shadow-xs ring-2 ring-[#2D2575]/20'
                              : 'bg-slate-100 text-slate-600 hover:bg-[#FDF7EF] hover:text-[#A8631B]'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                    <p className="text-[10.5px] text-slate-400 mt-1">
                      Helps our engineering leads recommend the most viable tech stack, cloud architecture, and delivery phases.
                    </p>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="contact-details" className="block text-xs font-bold text-slate-700 mb-1">
                      Project Details &amp; Objectives <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Please outline what your business is looking to build, your current technical setup, key deadlines, and goals..."
                      className={`w-full p-3 sm:p-3.5 rounded-xl text-base sm:text-sm border bg-slate-50/50 focus:bg-white transition-all outline-none resize-y ${
                        errors.projectDetails
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA]'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.projectDetails}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-lg shadow-[#D98E3A]/25 transition-all duration-200 active:scale-[0.99] disabled:opacity-70 cursor-pointer min-h-[48px]"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Project Inquiry</span>
                          <ArrowRight className="w-4 h-4 text-amber-100" />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 text-center mt-2.5">
                      ✓ Guaranteed privacy under NDA. We never share your contact information.
                    </p>
                  </div>
                </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
