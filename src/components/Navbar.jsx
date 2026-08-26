import React, { useState, useEffect } from 'react';
import { Utensils, Menu as MenuIcon, X, PhoneCall, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Navbar({ onOpenBooking, onOpenMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu', onClick: (e) => { e.preventDefault(); onOpenMenu(); } },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-sm py-3.5' 
          : 'bg-white/95 backdrop-blur-md py-5 border-b border-emerald-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Antigravity floating animation */}
          <a 
            href="#" 
            className="group flex items-center gap-3 text-forest-900 font-bold focus:outline-none"
            aria-label="Kane Mess Home"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-forest-900 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/20 group-hover:bg-forest-800 transition-all duration-300 animate-float">
                <Utensils className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-extrabold tracking-tight text-forest-900 group-hover:text-emerald-700 transition-colors">
                Kane Mess
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600 -mt-1">
                Hotel Mess & Catering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="text-sm font-semibold text-forest-900 hover:text-emerald-600 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-forest-900 bg-emerald-50 hover:bg-emerald-100/80 transition-all duration-200 border border-emerald-200/60"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking('general')}
              className="relative group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-white bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Order Now"
            >
              <Sparkles className="w-4 h-4 text-emerald-200 animate-pulse" />
              <span>Order Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking('general')}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20"
            >
              Order
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-forest-900 hover:bg-emerald-50 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 px-6 py-5 space-y-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.onClick) link.onClick(e);
                }}
                className="text-base font-semibold text-forest-900 hover:text-emerald-600 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-emerald-100 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-forest-900 bg-emerald-50 border border-emerald-200"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Call Us: {COMPANY_INFO.phone}</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('general');
              }}
              className="w-full py-3 rounded-xl font-bold text-white bg-emerald-500 hover:bg-emerald-600 text-center shadow-lg shadow-emerald-500/30"
            >
              Order Now / Book Function
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
