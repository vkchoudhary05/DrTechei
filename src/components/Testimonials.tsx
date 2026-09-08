import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D1CDF4]/70">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Client Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111622] tracking-tight">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Real feedback from founders, CTOs, and marketing leaders whose digital presence was transformed by DrTechei.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-[#FDF7EF] text-slate-700 hover:text-[#D98E3A] hover:border-[#D98E3A]/40 shadow-2xs transition-all active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-[#FDF7EF] text-slate-700 hover:text-[#D98E3A] hover:border-[#D98E3A]/40 shadow-2xs transition-all active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Grid (3 Visible) / Mobile Carousel Single View */}
        <div className="hidden lg:grid grid-cols-3 gap-7">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-[#D98E3A]/40 hover:bg-white hover:shadow-xl hover:shadow-[#D98E3A]/10 transition-all duration-300"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#D98E3A] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D98E3A] text-[#D98E3A]" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-800">5.0</span>
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={`${item.name}, ${item.role} at ${item.company}`}
                  width="44"
                  height="44"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-[#111622]">{item.name}</h4>
                    {item.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-[#2D2575]" title="Verified Client" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.role}, <span className="font-semibold text-slate-700">{item.company}</span>
                  </p>
                  <p className="text-[10px] text-[#2D2575] font-mono font-medium mt-0.5">{item.projectType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Slider Card */}
        <div className="lg:hidden">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm relative">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-[#EEEDFA] pointer-events-none" />

            {/* Rating */}
            <div className="flex items-center gap-1 text-[#D98E3A] mb-4">
              {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D98E3A] text-[#D98E3A]" />
              ))}
              <span className="ml-2 text-xs font-bold text-slate-800">5.0 Verified Review</span>
            </div>

            {/* Testimonial Quote */}
            <p className="text-sm text-slate-800 leading-relaxed italic mb-6">
              "{testimonialsData[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
              <img
                src={testimonialsData[currentIndex].avatar}
                alt={`${testimonialsData[currentIndex].name}, ${testimonialsData[currentIndex].role} at ${testimonialsData[currentIndex].company}`}
                width="48"
                height="48"
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-[#111622]">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <CheckCircle className="w-4 h-4 text-[#2D2575]" />
                </div>
                <p className="text-xs text-slate-500">
                  {testimonialsData[currentIndex].role}, {testimonialsData[currentIndex].company}
                </p>
                <p className="text-[11px] text-[#2D2575] font-mono font-medium mt-0.5">
                  {testimonialsData[currentIndex].projectType}
                </p>
              </div>
            </div>

            {/* Dots navigation indicator */}
            <div className="flex items-center justify-center gap-2 mt-6 pt-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-[#2D2575]' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
