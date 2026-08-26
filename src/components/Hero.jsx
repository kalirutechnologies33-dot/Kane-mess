import React from 'react';
import { Sparkles, CalendarDays, BookOpen, CheckCircle2, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { STATS } from '../data/content';

export default function Hero({ onOpenBooking, onOpenMenu }) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white">
      {/* Background Soft Glow Orbs (Subtle Antigravity ambiance) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-50/70 rounded-full blur-2xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-forest-50/80 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Floating Top Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-forest-900 shadow-sm shadow-emerald-100/50 mb-8 animate-float-slow">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-xs font-bold tracking-wide uppercase text-emerald-800 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Premier Hotel Mess & Bespoke Event Catering
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black text-forest-900 tracking-tight leading-[1.15] mb-6">
          Authentic Taste, <br className="hidden sm:block" />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-forest-900 via-emerald-800 to-emerald-600">
            Uncompromising Quality.
            {/* Subtle organic underline decoration */}
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-400/40 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="6" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-forest-800/85 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Experience the finest hotel mess catering, delivered fresh and on time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
          {/* Outline Green CTA */}
          <button
            onClick={onOpenMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-forest-900 bg-white border-2 border-emerald-600 hover:bg-emerald-50/70 hover:border-emerald-700 transition-all duration-300 shadow-md shadow-emerald-500/10 hover:-translate-y-1 active:translate-y-0"
          >
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span>Explore Menu</span>
          </button>

          {/* Solid Green CTA */}
          <button
            onClick={() => onOpenBooking('catering')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1 active:translate-y-0"
          >
            <CalendarDays className="w-5 h-5 text-emerald-100" />
            <span>Book a Function</span>
          </button>
        </div>

        {/* Antigravity Floating Showcase Badges */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4">
            
            <div className="floating-card bg-white p-5 rounded-3xl border border-emerald-100/80 flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-forest-900">100% Pure Spices</h4>
                <p className="text-xs text-forest-700/80 mt-0.5">Cold-pressed oils & fresh farm produce</p>
              </div>
            </div>

            <div className="floating-card bg-white p-5 rounded-3xl border border-emerald-100/80 flex items-center gap-4 text-left sm:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-forest-900 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-forest-900">Master Recipes</h4>
                <p className="text-xs text-forest-700/80 mt-0.5">Time-tested authentic culinary secrets</p>
              </div>
            </div>

            <div className="floating-card bg-white p-5 rounded-3xl border border-emerald-100/80 flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-forest-900">Guaranteed Timely</h4>
                <p className="text-xs text-forest-700/80 mt-0.5">Arrives piping hot right on the clock</p>
              </div>
            </div>

          </div>
        </div>

        {/* Heritage Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-emerald-100/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="group">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-forest-900 group-hover:text-emerald-600 transition-colors">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-forest-700/80 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
