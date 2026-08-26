import React from 'react';
import { UtensilsCrossed, Truck, Sparkles, ArrowRight, CheckCircle2, Users, Calendar, Clock4, ChefHat } from 'lucide-react';

export default function Services({ onOpenBooking, onOpenMenu }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-emerald-50/30 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-forest-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200 shadow-sm font-display">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Comprehensive Hospitality
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-forest-900 tracking-tight">
            What We Offer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-forest-800/80 leading-relaxed">
            Tailored catering solutions designed for both grandeur milestone events and dependable daily homestyle nourishment.
          </p>
        </div>

        {/* Two Large Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Service 1: Function & Event Catering */}
          <div className="floating-card bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100/90 flex flex-col justify-between relative group">
            <div>
              {/* Badge & Icon */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-forest-900 text-emerald-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <UtensilsCrossed className="w-8 h-8" />
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 font-display">
                  Weddings • Birthdays • Corporate
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-forest-900 mb-3">
                Function & Event Catering
              </h3>

              {/* Description */}
              <p className="text-forest-800/85 text-base leading-relaxed mb-6">
                Turn your special celebrations into unforgettable culinary feasts. We specialize in managing large-scale catering for grand weddings, intimate birthday parties, anniversary dinners, and executive corporate banquets with complete menu customization.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm font-medium text-forest-900">50 to 2,500+ guest scale handling</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm font-medium text-forest-900">Custom multi-course menu design</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm font-medium text-forest-900">Live live-counters & dessert carts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm font-medium text-forest-900">Full banquet setup & waitstaff</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <Users className="w-4 h-4" />
                <span>Dedicated Event Manager</span>
              </div>

              <button
                onClick={() => onOpenBooking('catering')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm text-white bg-forest-900 hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-emerald-600/30 group-hover:translate-x-1 font-display"
              >
                <span>Book a Function</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Service 2: Home Delivery */}
          <div className="floating-card bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100/90 flex flex-col justify-between relative group">
            <div>
              {/* Badge & Icon */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300">
                  <Truck className="w-8 h-8" />
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-forest-50 text-forest-900 border border-forest-200 font-display">
                  Daily Homestyle & Office Meals
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-forest-900 mb-3">
                Home Delivery & Mess Service
              </h3>

              {/* Description */}
              <p className="text-forest-800/85 text-base leading-relaxed mb-6">
                Savor wholesome, comforting, and nutrition-balanced daily meals without lifting a pan. Our swift and reliable delivery brings piping-hot, restaurant-quality dishes right to your doorstep on fixed schedules or flexible on-demand orders.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm font-medium text-forest-900">Leak-proof thermal meal packaging</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm font-medium text-forest-900">Weekly rotating variety menus</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm font-medium text-forest-900">Easy pause/resume subscription</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm font-medium text-forest-900">Express delivery in 30-45 mins</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <Clock4 className="w-4 h-4" />
                <span>Punctual Daily Schedules</span>
              </div>

              <button
                onClick={onOpenMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm text-forest-900 bg-emerald-100 hover:bg-emerald-200 transition-all duration-300 shadow-sm group-hover:translate-x-1 font-display"
              >
                <span>View Menu & Thalis</span>
                <ArrowRight className="w-4 h-4 text-emerald-700" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
