import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Hover/Pulsing Tooltip Bubble */}
      <div 
        className={`hidden sm:flex items-center gap-2 bg-forest-900 text-white text-xs font-bold py-2 px-3.5 rounded-2xl shadow-xl border border-emerald-500/30 transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-90 translate-x-1'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Order on WhatsApp: +91 63749 31454</span>
      </div>

      {/* Floating Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat on WhatsApp (+91 63749 31454)"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        
        {/* Official WhatsApp SVG Icon */}
        <svg 
          className="w-7 h-7 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-12" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.288 0-7.777 3.489-7.777 7.777 0 1.37.357 2.658.98 3.778l-1.042 3.81 3.899-1.023c1.085.592 2.33 0.932 3.659.932 4.288 0 7.778-3.489 7.778-7.777 0-4.287-3.49-7.777-7.778-7.777zm0 17.554c-1.185 0-2.316-.312-3.303-.861l-.237-.132-2.453.643.655-2.393-.146-.233c-.604-.962-.924-2.078-.924-3.224 0-3.397 2.764-6.162 6.162-6.162 3.397 0 6.162 2.765 6.162 6.162 0 3.397-2.765 6.162-6.162 6.162z" />
        </svg>
      </a>
    </div>
  );
}
