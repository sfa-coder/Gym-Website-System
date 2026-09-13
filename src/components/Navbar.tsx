import React, { useState } from 'react';
import { Calendar, Menu, X, MapPin, Phone } from 'lucide-react';
import { RobustMuscleLogo } from './RobustMuscleLogo';

interface NavbarProps {
  onOpenBooking: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onScrollTo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', id: 'about-section' },
    { label: 'Programs', id: 'programs-section' },
    { label: 'Coaches', id: 'coaches-section' },
    { label: 'Gallery', id: 'gallery-section' },
    { label: 'Hours', id: 'location-section' },
    { label: 'BMI Calc', id: 'bmi-calculator-section' },
    { label: 'FAQ', id: 'faq-section' },
    { label: 'Contact', id: 'contact-section' },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-md border-b border-[#1A1A1A] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand - Just write Robust Muscle in yellow */}
          <button
            onClick={() => handleNavClick('root')}
            className="flex items-center gap-2 cursor-pointer group text-left"
          >
            <RobustMuscleLogo size="md" />
          </button>

          {/* Clean, spacious desktop menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] lg:text-xs font-bold uppercase tracking-wider text-gray-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-[#FFC700] transition-colors py-1 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action: Clean & Smaller Book Session Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+923332219988"
              className="px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-[#111] border border-transparent hover:border-[#222] transition-colors text-xs flex items-center gap-1.5"
              title="Call Robust Muscle Front Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC700]" />
              <span className="text-[11px] font-medium hidden lg:inline">Gulshan</span>
            </a>

            <button
              id="navbar-book-appointment-btn"
              onClick={onOpenBooking}
              className="bg-[#FFC700] text-black px-4 py-1.5 rounded-full font-black text-[11px] uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shadow-md shadow-[#FFC700]/15 flex items-center gap-1.5"
            >
              <Calendar className="w-3 h-3 text-black" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#FFC700] text-black px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-wider hover:bg-white transition-colors"
            >
              Appointment
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-[#111] border border-[#222] text-gray-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-5 bg-[#0A0A0A] border-b border-[#222] space-y-1 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-gray-300 hover:text-[#FFC700] hover:bg-[#141414] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-[#FFC700] text-black font-black uppercase text-xs tracking-wider rounded-full flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-black" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
