import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Dumbbell, MapPin, Award, Phone } from 'lucide-react';
import raveelHeroImg from '../assets/images/raveel_khan_hero_real_1788461312474.jpg';
import heroBgTexture from '../assets/images/hero_dark_texture_1788462462499.jpg';

interface HeroProps {
  onBookClick: () => void;
  onExplorePrograms: () => void;
  onExploreAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookClick,
  onExplorePrograms,
  onExploreAbout,
}) => {
  const [heroImgSrc, setHeroImgSrc] = useState<string>('/image.png');

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Attached Design in Hero Section Background in Low Opacity */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src={heroBgTexture}
          alt="Robust Muscle Gym Dark Athletic Atmosphere"
          className="w-full h-full object-cover opacity-20 filter contrast-125 brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/30 to-[#050505]" />
      </div>

      {/* Atmospheric Ambient Glows */}
      <div className="absolute inset-0 bg-[#050505]/60 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[380px] bg-[#FFC700] blur-[180px] opacity-10 rounded-full" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FFC700] rounded-full blur-[150px] opacity-10" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top Status Bar (Overlay controls removed) */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b border-[#1A1A1A]">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-[#FFC700] animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">
              Founder &amp; Head Coach: <span className="text-[#FFC700]">Raveel Khan</span>
            </span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="text-gray-400 text-[11px] hidden sm:inline">Gulshan-e-Iqbal, Karachi</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-gray-300">Mon – Sat Split Shifts Open</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111] border border-[#222]">
              <MapPin className="w-3.5 h-3.5 text-[#FFC700]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-bold">
                Opposite KFC, Block 4 Gulshan-e-Iqbal
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black italic uppercase tracking-tighter leading-[0.92] text-white">
              NO LIMITS. <br />
              <span className="text-[#FFC700]">TRAIN LIKE A CHAMPION.</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Karachi’s premier high-performance strength, conditioning, and combat facility. Heavy barbell platforms, calibrated iron, and certified 1-on-1 coaching led by Founder Raveel Khan.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                id="hero-book-appointment-btn"
                onClick={onBookClick}
                className="px-6 sm:px-8 py-3.5 bg-[#FFC700] hover:bg-white text-black font-black uppercase tracking-wider text-xs sm:text-sm rounded-full transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-[#FFC700]/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black shrink-0" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-black shrink-0" />
              </button>

              <button
                id="hero-explore-about-btn"
                onClick={onExploreAbout}
                className="px-6 py-3.5 bg-[#111] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#FFC700] text-white font-bold uppercase tracking-wider text-xs rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Dumbbell className="w-4 h-4 text-[#FFC700] shrink-0" />
                <span>About Robust Muscle</span>
              </button>
            </div>

            {/* Quick Highlights */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFC700]" />
                <span className="text-gray-300">Certified Elite Coaching</span>
              </div>
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-[#FFC700]" />
                <span className="text-gray-300">Olympic Barbells & Calibrated Iron</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FFC700]" />
                <span className="text-gray-300">14+ Years Transforming Karachi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Treated Person Image as Hero Photo (Raveel Khan) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              {/* Treated Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden border border-[#FFC700]/40 bg-[#0E0E0E] shadow-2xl shadow-[#FFC700]/15 group">
                <div className="relative h-[460px] sm:h-[520px] w-full overflow-hidden bg-[#0A0A0A]">
                  <img
                    src={heroImgSrc}
                    onError={() => {
                      if (heroImgSrc !== raveelHeroImg) {
                        setHeroImgSrc(raveelHeroImg);
                      }
                    }}
                    alt="Raveel Khan - Founder & Head Coach Robust Muscle Karachi"
                    className="w-full h-full object-cover object-top filter contrast-110 brightness-105 saturate-95 group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Atmospheric Vignette & Contrast Treatment - Preserving Face & Physic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/50 pointer-events-none" />
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-black/85 border border-[#FFC700]/40 backdrop-blur-md shadow-xl flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFC700] animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-white">
                    Founder & Head Coach
                  </span>
                </div>

                {/* Bottom Card Spotlight with direct appointment booking */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/90 backdrop-blur-md border border-[#222]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[9px] uppercase tracking-[0.2em] text-[#FFC700] font-bold">
                        Lead Master Trainer
                      </div>
                      <div className="text-base font-black italic tracking-tight text-white truncate mt-0.5">
                        Raveel Khan
                      </div>
                      <div className="text-[11px] text-gray-400">
                        14+ Yrs Barbell Mechanics & Conditioning
                      </div>
                    </div>
                    <button
                      id="hero-book-appointment-btn-pill"
                      onClick={onBookClick}
                      className="px-4 py-2 bg-[#FFC700] hover:bg-white text-black text-xs font-black uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer shrink-0 shadow-md shadow-[#FFC700]/30 hover:scale-105 flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-black shrink-0" />
                      <span>Book Appointment</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gym Key Stats Banner */}
        <div className="w-full mt-16 pt-10 border-t border-[#1C1C1C] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#222]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tighter text-white">14+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">Years Strength Legacy</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#222]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tighter text-[#FFC700]">100%</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">Raw Iron & Heavy Turf</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#222]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tighter text-white">5,000+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">Karachi Transformations</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#222]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tighter text-[#FFC700]">4.9 ★</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">Gulshan Branch Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};
