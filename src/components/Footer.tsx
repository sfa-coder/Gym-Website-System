import React from 'react';
import { MapPin, Phone, Clock, Instagram, Twitter, Youtube, Facebook, ShieldCheck } from 'lucide-react';
import { RobustMuscleLogo } from './RobustMuscleLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-[#222] text-gray-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#222]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <RobustMuscleLogo size="md" />

            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Karachi’s premier destination for heavy barbell lifting, bodybuilding, Olympic platforms, and certified personal coaching led by Founder & Head Coach Raveel Khan.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#instagram" className="w-9 h-9 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-[#FFC700] hover:border-[#FFC700] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-[#FFC700] hover:border-[#FFC700] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-[#FFC700] hover:border-[#FFC700] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-[#FFC700] hover:border-[#FFC700] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-white">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#programs-section" className="hover:text-[#FFC700] transition-colors">Strength & Hypertrophy</a></li>
              <li><a href="#programs-section" className="hover:text-[#FFC700] transition-colors">Boxing & Combat Camp</a></li>
              <li><a href="#programs-section" className="hover:text-[#FFC700] transition-colors">Metabolic Fat Burn</a></li>
              <li><a href="#programs-section" className="hover:text-[#FFC700] transition-colors">Athletic Mobility Flow</a></li>
              <li><a href="#programs-section" className="hover:text-[#FFC700] transition-colors">1-on-1 PT Sessions</a></li>
            </ul>
          </div>

          {/* Explore Gym */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-white">Explore Gym</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about-section" className="hover:text-[#FFC700] transition-colors">About Robust Muscle</a></li>
              <li><a href="#coaches-section" className="hover:text-[#FFC700] transition-colors">Founder & Coaches</a></li>
              <li><a href="#gallery-section" className="hover:text-[#FFC700] transition-colors">Gym Gallery</a></li>
              <li><a href="#testimonials-section" className="hover:text-[#FFC700] transition-colors">Success Stories</a></li>
              <li><a href="#location-section" className="hover:text-[#FFC700] transition-colors">Location & Hours</a></li>
              <li><a href="#bmi-calculator-section" className="hover:text-[#FFC700] transition-colors">BMI Calculator</a></li>
              <li><a href="#faq-section" className="hover:text-[#FFC700] transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#contact-section" className="hover:text-[#FFC700] transition-colors">Contact & Map</a></li>
            </ul>
          </div>

          {/* Location & Hours - EXACT Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-[#FFC700]">
              Gym Contact & Hours
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold">Robust Muscle Gym</p>
                  <p className="text-xs text-gray-400 leading-snug">
                    PLOT NO.G.P.C, 123, opposite KFC, KARACHI, Block 4 Gulshan-e-Iqbal, Karachi, 75300
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFC700] shrink-0" />
                <a
                  href="tel:03362848450"
                  className="text-white font-bold hover:text-[#FFC700] transition-colors"
                >
                  0336 2848450
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="text-white font-bold">Facility Operating Hours:</div>
                  <div className="mt-1 space-y-0.5 text-gray-400">
                    <p><span className="text-gray-300 font-semibold">Mon – Sat:</span> 6:00–9:00 AM, 4:00 PM–12:00 AM</p>
                    <p><span className="text-red-400 font-semibold">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Designer & Developer Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 border-t border-[#1C1C1C]">
          <div>
            © {new Date().getFullYear()} ROBUST MUSCLE Gym. All rights reserved. Block 4 Gulshan-e-Iqbal, Karachi.
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span>Design &amp; Developed by</span>
            <a
              href="https://www.xyrongroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFC700] font-bold hover:text-white transition-colors"
            >
              XyronGroup
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300">Terms of Service</a>
            <a href="#safety" className="hover:text-gray-300">Gym Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
