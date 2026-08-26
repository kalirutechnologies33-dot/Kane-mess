import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPromise from './components/AboutPromise';
import Services from './components/Services';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import MenuPreviewModal from './components/MenuPreviewModal';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState('catering');
  const [selectedItemName, setSelectedItemName] = useState('');
  const [toast, setToast] = useState(null);

  const handleOpenBooking = (type = 'catering', itemName = '') => {
    setBookingType(type);
    setSelectedItemName(itemName);
    setIsBookingOpen(true);
  };

  const showToast = (title, message) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white text-forest-900 flex flex-col selection:bg-emerald-100 selection:text-forest-900">
      {/* Sticky Top Header Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking('general')} 
        onOpenMenu={() => setIsMenuOpen(true)} 
      />

      {/* Main Page Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenBooking={handleOpenBooking} 
          onOpenMenu={() => setIsMenuOpen(true)} 
        />

        {/* 2. The Kane Mess Promise (About Us - Quality & Timely Service) */}
        <AboutPromise />

        {/* 3. Our Services (Function Catering & Home Delivery) */}
        <Services 
          onOpenBooking={handleOpenBooking} 
          onOpenMenu={() => setIsMenuOpen(true)} 
        />

        {/* 4. Contact & Location (3-Column Floating Cards & Map) */}
        <ContactLocation onShowToast={showToast} />
      </main>

      {/* 5. Footer */}
      <Footer 
        onOpenMenu={() => setIsMenuOpen(true)} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Interactive Modals */}
      <MenuPreviewModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialType={bookingType}
        initialItemName={selectedItemName}
        onShowToast={showToast}
      />

      {/* Floating Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
