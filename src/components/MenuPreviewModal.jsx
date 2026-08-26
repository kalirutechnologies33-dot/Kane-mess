import React, { useState } from 'react';
import { X, Sparkles, Utensils, Check, ArrowRight, Star } from 'lucide-react';
import { MENU_ITEMS, COMPANY_INFO } from '../data/content';

export default function MenuPreviewModal({ isOpen, onClose, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  if (!isOpen) return null;

  const categories = ['All', 'Signature Thali', 'Daily Mess', 'Event Catering'];
  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-forest-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-forest-900 text-white px-6 sm:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">Kane Mess Authentic Menu</h3>
              <p className="text-xs text-emerald-300">Fresh daily preparations & bespoke catering menus</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-forest-800 hover:bg-forest-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-6 sm:px-8 pt-6 pb-2 flex flex-wrap items-center gap-2 border-b border-emerald-50 bg-emerald-50/30">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/30'
                  : 'bg-white text-forest-900 border border-emerald-100 hover:bg-emerald-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {item.tag}
                    </span>
                    <span className="text-sm font-bold text-forest-900 bg-forest-50 px-2.5 py-0.5 rounded-md border border-forest-100">
                      {item.price}
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-forest-900 mb-1.5 flex items-center gap-1.5">
                    {item.name}
                  </h4>

                  <p className="text-xs text-forest-800/80 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-emerald-50 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Authentic Recipe
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBooking('item', item.name);
                    }}
                    className="text-xs font-bold text-forest-900 hover:text-emerald-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Inquire / Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Call to Action */}
        <div className="px-6 sm:px-8 py-4 bg-emerald-50/70 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-forest-800 text-center sm:text-left">
            Need a custom menu for 50+ guests? We formulate bespoke menus with complimentary tasting.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenBooking('catering');
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm transition-colors shrink-0"
          >
            Request Custom Menu
          </button>
        </div>
      </div>
    </div>
  );
}
