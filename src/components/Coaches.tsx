import React from 'react';
import { Star, ShieldCheck, Calendar, Dumbbell, Award, ArrowRight } from 'lucide-react';
import { Trainer } from '../types';

interface CoachesProps {
  trainers: Trainer[];
  onBookTrainer: (trainerId: string) => void;
}

export const Coaches: React.FC<CoachesProps> = ({ trainers, onBookTrainer }) => {
  return (
    <section id="coaches-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#222] text-[#FFC700] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Award className="w-3.5 h-3.5" />
            World-Class Mentorship
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase">
            Meet Our <span className="text-[#FFC700]">Master Coaches</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-xl">
            Led by Founder & Head Coach Raveel Khan, our certified trainers bring decades of elite competitive experience to engineer your transformation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">100% CSCS & National Pro Certified</span>
        </div>
      </div>

      {/* Founder & Head Coach Spotlight Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFC700]/15 via-[#141414] to-[#111] border border-[#FFC700]/40 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-[#FFC700]/5">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full bg-[#FFC700] text-black font-black flex items-center justify-center shrink-0 shadow-md text-sm italic">
            RK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-black uppercase text-white tracking-tight">
                Founder & Head Coach: <span className="text-[#FFC700]">Raveel Khan</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-[#FFC700] text-black text-[9px] font-black uppercase tracking-wider hidden sm:inline-block">
                Founder
              </span>
            </div>
            <div className="text-xs text-gray-400 mt-0.5">
              14+ years pioneering heavy progressive overload, barbell mechanics, and athlete conditioning at Robust Muscle Karachi.
            </div>
          </div>
        </div>
        <button
          onClick={() => onBookTrainer('t-founder')}
          className="px-5 py-2.5 bg-[#FFC700] hover:bg-white text-black font-black text-xs uppercase tracking-tighter rounded-full transition-colors shrink-0 cursor-pointer shadow-md shadow-[#FFC700]/20"
        >
          Train With Raveel Khan
        </button>
      </div>

      {/* Coaches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {trainers.map((coach) => {
          const isFounder = coach.id === 't-founder';
          return (
            <div
              key={coach.id}
              id={`coach-card-${coach.id}`}
              className={`group relative rounded-2xl bg-[#111] border transition-all duration-300 flex flex-col overflow-hidden shadow-xl ${
                isFounder
                  ? 'border-[#FFC700] ring-1 ring-[#FFC700]/30 shadow-[#FFC700]/10'
                  : 'border-[#222] hover:border-[#FFC700]'
              }`}
            >
              {/* Coach Photo Container with Vignette */}
              <div className="relative h-72 w-full overflow-hidden bg-neutral-900">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-black/30" />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-full backdrop-blur-md font-black text-[9px] uppercase tracking-[0.2em] border ${
                      isFounder
                        ? 'bg-[#FFC700] text-black border-[#FFC700]'
                        : 'bg-black/90 text-[#FFC700] border-[#FFC700]/40'
                    }`}
                  >
                    {coach.tag}
                  </span>
                </div>

                {/* Hourly Rate */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-[#FFC700] text-black font-black text-xs shadow-md shadow-[#FFC700]/30">
                    ${coach.hourlyRate}<span className="text-[10px] font-bold">/hr</span>
                  </span>
                </div>

                {/* Rating pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/90 backdrop-blur-md border border-[#222] text-xs">
                  <Star className="w-3.5 h-3.5 fill-[#FFC700] text-[#FFC700]" />
                  <span className="font-bold text-white">{coach.rating}</span>
                  <span className="text-gray-400 text-[10px]">({coach.reviewCount})</span>
                </div>
              </div>

              {/* Coach Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black italic tracking-tight text-white group-hover:text-[#FFC700] transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider font-bold text-[#FFC700] mt-0.5">{coach.role}</p>

                  <p className="text-xs text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                    {coach.bio}
                  </p>

                  {/* Specialties tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {coach.badges.map((b, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-[#222] text-[10px] font-medium text-gray-300"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <div className="pt-5 mt-4 border-t border-[#222]">
                  <button
                    id={`book-coach-btn-${coach.id}`}
                    onClick={() => onBookTrainer(coach.id)}
                    className={`w-full py-3 border text-xs font-black uppercase tracking-tighter rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      isFounder
                        ? 'bg-[#FFC700] hover:bg-white text-black border-[#FFC700]'
                        : 'bg-[#1A1A1A] hover:bg-[#FFC700] hover:text-black border-[#222] hover:border-[#FFC700] text-gray-200'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
