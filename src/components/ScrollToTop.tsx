import React, { useState, useEffect } from 'react';
import { ArrowUp, ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollTop > 260) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      id="toggle-top-container"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-5 pointer-events-none'
      }`}
    >
      <button
        id="toggle-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title="Scroll to Top"
        className="relative group flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FFC700] hover:bg-white text-black shadow-2xl shadow-[#FFC700]/30 hover:shadow-[#FFC700]/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-[#FFC700]/50"
      >
        {/* Subtle SVG Circular Scroll Indicator */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
          <circle
            cx="50%"
            cy="50%"
            r="44%"
            className="stroke-black/20 fill-none"
            strokeWidth="2.5"
          />
          <circle
            cx="50%"
            cy="50%"
            r="44%"
            className="stroke-black fill-none transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={100}
            strokeDashoffset={100 - scrollProgress}
            strokeLinecap="round"
          />
        </svg>

        <div className="flex flex-col items-center justify-center z-10">
          <ChevronUp className="w-5 h-5 text-black stroke-[3] group-hover:-translate-y-0.5 transition-transform duration-200" />
          <span className="text-[9px] font-black uppercase tracking-tighter text-black leading-none -mt-0.5">
            TOP
          </span>
        </div>
      </button>
    </div>
  );
};
