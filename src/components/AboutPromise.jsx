import React from 'react';
import { ShieldCheck, Clock, Check, Sparkles, ChefHat, Flame } from 'lucide-react';
import { PROMISES } from '../data/content';

export default function AboutPromise() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Soft floating background ambient lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-forest-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Quality & Timely Service
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-forest-900 tracking-tight">
            The Kane Mess Promise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-forest-800/80 leading-relaxed">
            Our dual pillars of culinary excellence and dependable execution ensure every dining experience exceeds expectations.
          </p>
        </div>

        {/* Two Side-by-Side Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Premium Quality */}
          <div className="floating-card bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100/90 relative group flex flex-col justify-between overflow-hidden">
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-forest-700 opacity-90" />
            
            <div>
              {/* Badge & Icon Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-forest-900 border border-emerald-300/60 shadow-sm">
                  Hygiene Certified A+
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Farm-Fresh & Pure</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-900 mt-1">
                  Premium Quality
                </h3>
              </div>

              {/* Description */}
              <p className="text-forest-800/85 leading-relaxed text-sm sm:text-base mb-6">
                We believe exceptional meals start with uncompromising purity. We hand-select high-grade whole spices, cold-pressed oils, and harvest-fresh produce daily. Every recipe is cooked with traditional techniques, zero artificial additives, and in an immaculately sanitized commercial kitchen.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2 mb-8">
                {[
                  "100% natural, unadulterated spices & fresh produce",
                  "Strict food safety and multi-level kitchen sanitization",
                  "Time-honored slow-cooking methods for authentic deep aromas"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-medium text-forest-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Card Footer Highlight */}
            <div className="pt-6 border-t border-emerald-100/70 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span className="flex items-center gap-1.5">
                <ChefHat className="w-4 h-4 text-emerald-600" />
                Master Chef Supervised
              </span>
              <span className="text-forest-700/70">No Reused Oils</span>
            </div>
          </div>

          {/* Card 2: Timely Service */}
          <div className="floating-card bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100/90 relative group flex flex-col justify-between overflow-hidden">
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-forest-700 via-emerald-600 to-emerald-400 opacity-90" />
            
            <div>
              {/* Badge & Icon Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-forest-900 text-emerald-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Clock className="w-8 h-8" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-forest-100 text-forest-900 border border-forest-300/60 shadow-sm">
                  100% On-Time Guarantee
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Precision Hot Delivery</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-900 mt-1">
                  Timely Service
                </h3>
              </div>

              {/* Description */}
              <p className="text-forest-800/85 leading-relaxed text-sm sm:text-base mb-6">
                Punctuality is as vital as taste. Our kitchen logistics and meal dispatch systems operate with stopwatch precision. Whether delivering a daily corporate lunch box or serving a 1,000-guest wedding banquet, your food arrives steaming hot and ready exactly on schedule.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2 mb-8">
                {[
                  "Insulated thermal pods ensuring food stays piping hot (65°C+)",
                  "Synchronized kitchen dispatch for multi-tier wedding buffets",
                  "Dedicated logistics captains for live timing oversight"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-medium text-forest-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Card Footer Highlight */}
            <div className="pt-6 border-t border-emerald-100/70 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-emerald-600" />
                Thermal Hot-Locked Transit
              </span>
              <span className="text-forest-700/70">Real-Time Coordination</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
