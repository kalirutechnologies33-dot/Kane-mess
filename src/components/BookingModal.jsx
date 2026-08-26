import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Phone, User, CheckCircle2, Sparkles, UtensilsCrossed } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function BookingModal({ isOpen, onClose, initialType = 'catering', initialItemName = '', onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'wedding',
    guestCount: '100-250',
    eventDate: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialItemName) {
      setFormData(prev => ({
        ...prev,
        notes: `Interested in: ${initialItemName}`
      }));
    }
  }, [initialItemName, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setIsSuccess(true);
      if (onShowToast) {
        onShowToast('Booking Request Received!', `Thank you ${formData.name || 'valued customer'}. Our catering director will contact you within 30 minutes.`);
      }
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2500);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-forest-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest-900 text-white px-6 sm:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white">Book a Function / Catering</h3>
              <p className="text-xs text-emerald-300">Customized multi-course menus & on-time service</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-forest-800 hover:bg-forest-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-display font-bold text-forest-900">Request Confirmed!</h4>
              <p className="text-sm text-forest-800/80 max-w-sm mx-auto">
                We have registered your catering request. Our executive planner will reach you at{' '}
                <strong className="text-emerald-700">{formData.phone || 'your phone number'}</strong> to schedule menu tastings and provide an itemized quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-forest-900 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-600" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Varma"
                    className="w-full px-4 py-3 rounded-xl border border-emerald-100 bg-forest-50/30 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-900 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 63749 31454"
                    className="w-full px-4 py-3 rounded-xl border border-emerald-100 bg-forest-50/30 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-forest-900 mb-1.5">Occasion / Function Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-emerald-100 bg-forest-50/30 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  >
                    <option value="wedding">Wedding / Reception (Grand Buffet)</option>
                    <option value="birthday">Birthday / Private Family Feast</option>
                    <option value="corporate">Corporate Gala / Office Lunch</option>
                    <option value="housewarming">Housewarming / Traditional Puja</option>
                    <option value="mess-sub">Daily Mess Subscription</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-900 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                    Estimated Guest Count
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-emerald-100 bg-forest-50/30 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  >
                    <option value="25-50">25 - 50 Guests</option>
                    <option value="50-100">50 - 100 Guests</option>
                    <option value="100-250">100 - 250 Guests</option>
                    <option value="250-500">250 - 500 Guests</option>
                    <option value="500+">500+ Large Scale Banquet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-forest-900 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  Target Function Date
                </label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-100 bg-forest-50/30 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-forest-900 mb-1.5">Custom Requests / Dietary Notes</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Vegetarian only, live dessert counter, mild spices, specific timings..."
                  className="w-full px-4 py-3 rounded-xl border border-emerald-100 bg-forest-50/30 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-2xl font-bold text-sm text-white bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 transition-all duration-300 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span>Confirming your reservation...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-emerald-100" />
                      <span>Submit Catering Request</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-forest-700/70 pt-1">
                Zero booking cancellation fee up to 48 hours prior to the event.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
