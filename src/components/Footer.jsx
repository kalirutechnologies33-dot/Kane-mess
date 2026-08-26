import React from 'react';
import { Utensils, Heart, ShieldCheck, Phone, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Footer({ onOpenMenu, onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-50 border-t border-emerald-100/80 pt-16 pb-12 text-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-900 flex items-center justify-center text-emerald-400 shadow-sm animate-float">
                <Utensils className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-2xl font-display font-extrabold text-forest-900 tracking-tight">
                Kane Mess
              </span>
            </div>

            <p className="text-sm text-forest-800/85 max-w-md leading-relaxed font-normal">
              Authentic taste, uncompromising quality. Providing hotel mess catering and daily doorstep meals prepared with pure ingredients and master craftsmanship.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-white/70 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-emerald-200/60 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified Hygiene & Daily Food Safety Audits</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">Quick Links</h4>
            <ul className="space-y-2 text-sm font-medium text-forest-900">
              <li>
                <a href="#about" className="hover:text-emerald-600 transition-colors">The Kane Promise</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-600 transition-colors">Our Catering Services</a>
              </li>
              <li>
                <button onClick={onOpenMenu} className="hover:text-emerald-600 transition-colors text-left">
                  Explore Menu & Thalis
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('catering')} className="hover:text-emerald-600 transition-colors text-left">
                  Book a Function
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">Direct Contact</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-forest-900">
              <a 
                href={COMPANY_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-[#128C7E] font-bold hover:text-[#075E54] transition-colors"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>WhatsApp: {COMPANY_INFO.phone}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="flex items-center gap-2 hover:text-emerald-700 transition-colors">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>
              <div className="flex items-start gap-2 text-forest-800/90">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <p className="text-xs text-forest-700/80 pt-1">
                Kitchen Open: {COMPANY_INFO.operatingHours}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-emerald-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-forest-800">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 Kane Mess. All rights reserved.</p>
            <span className="hidden sm:inline text-emerald-300">•</span>
            <p className="text-emerald-800 font-semibold flex items-center gap-1.5">
              <span>Crafted with quality and care.</span>
              <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500 inline" />
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-100 text-forest-900 border border-emerald-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-600" />
          </button>

        </div>

      </div>
    </footer>
  );
}
