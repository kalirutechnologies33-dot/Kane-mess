import React, { useState } from 'react';
import { Phone, MapPin, Navigation, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function ContactLocation({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'catering',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('Message Sent!', 'Thank you for reaching out to Kane Mess. Our catering manager will call you shortly.');
      }
      setFormData({ name: '', phone: '', serviceType: 'catering', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Connect With Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-forest-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-forest-800/80 leading-relaxed">
            Have an upcoming wedding, corporate function, or questions about our daily mess menu? We'd love to hear from you.
          </p>
        </div>

        {/* 3-Column Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Card 1: Phone */}
          <div className="floating-card bg-white rounded-3xl p-8 border border-emerald-100/90 flex flex-col justify-between text-center relative group">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Direct Call Line</span>
              <h3 className="text-xl font-serif font-bold text-forest-900 mb-3">Phone & WhatsApp</h3>
              <p className="text-xs text-forest-700/80 mb-6">
                Available daily from 7:00 AM - 10:30 PM for instant order placement & function consultations.
              </p>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-bold text-base text-forest-900 bg-emerald-50 border border-emerald-200 hover:bg-emerald-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
              aria-label={`Call ${COMPANY_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Card 2: Physical Address */}
          <div className="floating-card bg-white rounded-3xl p-8 border border-emerald-100/90 flex flex-col justify-between text-center relative group">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-forest-900 text-emerald-400 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Visit Our Kitchen</span>
              <h3 className="text-xl font-serif font-bold text-forest-900 mb-3">Kitchen & Dining</h3>
              <p className="text-xs text-forest-700/80 mb-6">
                Step in for a hot meal or schedule a food tasting session with our executive chef.
              </p>
            </div>

            <div className="py-3 px-4 rounded-2xl bg-forest-50 border border-forest-100 text-sm font-semibold text-forest-900">
              {COMPANY_INFO.address}
            </div>
          </div>

          {/* Card 3: Location / Map Link */}
          <div className="floating-card bg-white rounded-3xl p-8 border border-emerald-100/90 flex flex-col justify-between text-center relative group">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/25 group-hover:scale-110 group-hover:bg-forest-900 group-hover:text-emerald-400 transition-all duration-300">
                <Navigation className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Map & Directions</span>
              <h3 className="text-xl font-serif font-bold text-forest-900 mb-3">Google Maps</h3>
              <p className="text-xs text-forest-700/80 mb-6">
                Centrally situated with convenient parking and rapid delivery dispatch access.
              </p>
            </div>

            <a
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-bold text-sm text-white bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 shadow-md shadow-emerald-500/20"
              aria-label="View on Google Maps"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Embedded Map & Quick Inquiry Form Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Google Map Container */}
          <div className="lg:col-span-6 floating-card bg-white rounded-3xl p-4 border border-emerald-100/90 overflow-hidden flex flex-col min-h-[380px]">
            <div className="flex items-center justify-between px-3 py-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-forest-900">Live Kitchen Location</span>
              </div>
              <span className="text-xs text-forest-700/70 font-medium">Food District Central</span>
            </div>

            <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              {/* Stylized Google Map Frame / Fallback Graphic */}
              <iframe
                title="Kane Mess Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985514660706!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-6 floating-card bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4" />
                Fast Response Form
              </div>
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-2">Send an Instant Inquiry</h3>
              <p className="text-xs text-forest-700/80 mb-6">
                Fill in your details below and we will get back to you with custom menu options within 30 minutes.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fadeIn my-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-forest-900">Inquiry Received!</h4>
                  <p className="text-xs text-forest-800 mt-1">
                    Thank you! Our catering coordinator will contact you promptly at your phone number.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-forest-900 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-emerald-100 bg-forest-50/30 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-forest-900 mb-1.5">Phone Number *</label>
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

                  <div>
                    <label className="block text-xs font-bold text-forest-900 mb-1.5">Inquiry Type</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-emerald-100 bg-forest-50/30 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    >
                      <option value="catering">Wedding / Event Catering (50+ Guests)</option>
                      <option value="corporate">Corporate Lunch / Executive Banquets</option>
                      <option value="mess">Daily Mess Subscription (Monthly / Weekly)</option>
                      <option value="other">General Question / Bulk Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest-900 mb-1.5">Event Details / Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention expected date, approximate guest count, or meal preferences..."
                      className="w-full px-4 py-3 rounded-xl border border-emerald-100 bg-forest-50/30 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 transition-all duration-300 shadow-md shadow-emerald-500/25"
                  >
                    {submitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
