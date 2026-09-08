import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactFormProps {
  preselectedService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    websiteUrl: '',
    serviceRequired: preselectedService || 'Website Development',
    budgetRange: '$5k - $10k',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const servicesList = [
    'Website Development',
    'Next.js Development',
    'React.js Development',
    'Node.js Development',
    'E-Commerce',
    'WordPress',
    'Shopify',
    'Wix',
    'Squarespace',
    'HubSpot',
    'SEO',
    'Other'
  ];

  const budgetOptions = [
    '< $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.serviceRequired) errs.serviceRequired = 'Please select a service';
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please provide a brief project description';
    } else if (formData.projectDetails.trim().length < 10) {
      errs.projectDetails = 'Project description must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedRef = 'DRT-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback gracefully
      }
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      websiteUrl: '',
      serviceRequired: 'Website Development',
      budgetRange: '$5k - $10k',
      projectDetails: '',
    });
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#FAFBFD] relative overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D1CDF4]/70">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
            <span>Direct Project Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111622] tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tell us about your objectives, timeline, and vision. Our senior technical leads respond within 24 business hours with a clear roadmap.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 2xl:gap-16 items-start">
          {/* Left Column: Contact Details & Office Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#111622] text-white p-6 sm:p-8 border border-[#2B3548] shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#2D2575]/40 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-2">
                Consultation & Offices
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                Ready to accelerate your business with cutting-edge web architecture? Reach our client team directly.
              </p>

              {/* Direct Info List */}
              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2D2575]/60 border border-[#D98E3A]/40 flex items-center justify-center shrink-0 text-[#F2BC7B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Direct Inquiries & RFPs</p>
                    <a href="mailto:wearedrtechie@gmail.com" className="text-sm font-bold text-white hover:text-[#F2BC7B] transition-colors">
                      wearedrtechie@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2D2575]/60 border border-[#D98E3A]/40 flex items-center justify-center shrink-0 text-[#F2BC7B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Toll-Free Client Line</p>
                    <a href="tel:+18005408324" className="text-sm font-bold text-white hover:text-[#F2BC7B] transition-colors">
                      +919690941439
                    </a>
                    <span className="block text-[11px] text-slate-400">+1 (555) 378-3243 (Intl)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2D2575]/60 border border-[#D98E3A]/40 flex items-center justify-center shrink-0 text-[#F2BC7B]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Headquarters</p>
                    <p className="text-sm font-bold text-white">
                      San Francisco, California
                    </p>
                    <span className="block text-[11px] text-slate-400">Distributed Global Digital Offices</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2D2575]/60 border border-[#D98E3A]/40 flex items-center justify-center shrink-0 text-[#F2BC7B]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Business Hours</p>
                    <p className="text-sm font-bold text-white">
                      Monday – Friday: 8:00 AM – 6:00 PM (EST)
                    </p>
                    <span className="block text-[11px] text-emerald-400">24/7 Client Emergency On-Call SLA</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="mt-8 pt-6 border-t border-[#242C3D]">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Connect on Social
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/company/drtechei"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1B2332] hover:bg-[#2D2575] text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/drtechei"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1B2332] hover:bg-[#2D2575] text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://instagram.com/drtechei"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1B2332] hover:bg-[#D98E3A] text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/drtechei"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#1B2332] hover:bg-[#2D2575] text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Reassurance Guarantee Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FDF7EF] border border-[#F2BC7B]/50 text-[#D98E3A] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#111622]">Non-Disclosure & Privacy Standard</p>
                <p className="text-[11px] text-slate-500">
                  All shared concepts, wireframes, and proprietary business metrics are protected under our mutual NDA protocol.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200/90 shadow-xl relative">
              {isSubmitted ? (
                /* Submission Confirmation View */
                <div className="text-center py-8 px-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    Inquiry Received Successfully
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-3">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    We've registered your project inquiry for <span className="font-semibold text-slate-900">{formData.serviceRequired}</span>. A senior solutions architect will review your requirements and reach out via <span className="font-semibold text-[#2D2575]">{formData.email}</span> within 24 hours.
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-[#FAFBFD] border border-slate-200 max-w-xs mx-auto text-center">
                    <p className="text-xs text-slate-400 uppercase font-mono">Reference Tracking ID</p>
                    <p className="text-lg font-mono font-extrabold text-[#2D2575] tracking-wider mt-0.5">
                      {referenceId}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-[#FDF7EF] hover:text-[#A8631B] transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* The Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-fullName" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-slate-50/50 focus:bg-white transition-all outline-none ${
                          errors.fullName
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-slate-50/50 focus:bg-white transition-all outline-none ${
                          errors.email
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA] transition-all outline-none"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Acme Corporation"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA] transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Website URL */}
                    <div>
                      <label htmlFor="contact-website" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Current Website URL (if any)
                      </label>
                      <input
                        id="contact-website"
                        type="url"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="https://example.com"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA] transition-all outline-none"
                      />
                    </div>

                    {/* Service Required */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Service Required <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-service"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA] transition-all outline-none cursor-pointer"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Range Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Estimated Investment Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {budgetOptions.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: budget })}
                          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            formData.budgetRange === budget
                              ? 'bg-[#2D2575] text-white shadow-xs'
                              : 'bg-slate-100 text-slate-600 hover:bg-[#FDF7EF] hover:text-[#A8631B]'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="contact-details" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Project Details & Objectives <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Please outline what your business is looking to build, your current technical setup, key deadlines, and goals..."
                      className={`w-full p-4 rounded-xl text-sm border bg-slate-50/50 focus:bg-white transition-all outline-none resize-y ${
                        errors.projectDetails
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-[#2D2575] focus:ring-2 focus:ring-[#EEEDFA]'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
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
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-lg shadow-[#D98E3A]/25 transition-all duration-200 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
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
                    <p className="text-[11px] text-slate-400 text-center mt-3">
                      ✓ Guaranteed privacy. We never share your contact details.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
