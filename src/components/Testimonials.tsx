import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Trophy, MapPin } from 'lucide-react';
import { MemberTestimonial } from '../types';

interface TestimonialsProps {
  testimonials: MemberTestimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'strength' | 'fatloss' | 'combat'>('all');

  const filteredStories = testimonials.filter((t) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'strength') return t.program.toLowerCase().includes('strength') || t.program.toLowerCase().includes('barbell');
    if (selectedFilter === 'fatloss') return t.program.toLowerCase().includes('fat') || t.program.toLowerCase().includes('metabolic') || t.program.toLowerCase().includes('mobility');
    if (selectedFilter === 'combat') return t.program.toLowerCase().includes('boxing') || t.program.toLowerCase().includes('combat');
    return true;
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredStories.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  return (
    <section id="testimonials-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#222] text-[#FFC700] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#FFC700]" />
            Pakistani Athletes &amp; Everyday Members
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase">
            SUCCESS STORIES FROM <span className="text-[#FFC700]">OUR KARACHI MEMBERS</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl">
            Real Pakistani men and women training at Robust Muscle in Gulshan-e-Iqbal. From powerlifting state records to desk-worker body transformations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Stories' },
            { id: 'strength', label: 'Strength & PRs' },
            { id: 'fatloss', label: 'Fat Loss & Tone' },
            { id: 'combat', label: 'Boxing & Combat' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => {
                setSelectedFilter(btn.id as typeof selectedFilter);
                setCurrentIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === btn.id
                  ? 'bg-[#FFC700] text-black shadow-md shadow-[#FFC700]/20'
                  : 'bg-[#111] text-gray-400 hover:text-white border border-[#222]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories.map((t, idx) => (
          <div
            key={t.id}
            className={`p-6 sm:p-7 rounded-3xl bg-[#111] border transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-[#FFC700]/60 ${
              idx === currentIndex
                ? 'border-[#FFC700] ring-1 ring-[#FFC700]/40 bg-[#141414]'
                : 'border-[#222]'
            }`}
          >
            <div className="relative z-10">
              {/* Header with Rating & Program Tag */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFC700] text-[#FFC700]" />
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#1A1A1A] border border-[#333] text-gray-300">
                  {t.program}
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-200 leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#222] relative z-10">
              {/* Highlight Metric Pill */}
              <div className="inline-block px-3 py-1 rounded-full bg-[#161616] border border-[#FFC700]/40 text-[#FFC700] text-[11px] font-black uppercase tracking-tight mb-4">
                {t.stats}
              </div>

              {/* Member Author Info */}
              <div className="flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-2xl object-cover border border-[#333] shrink-0 group-hover:border-[#FFC700] transition-colors"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-black italic tracking-tight text-white truncate">{t.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC700] shrink-0" />
                  </div>
                  <p className="text-xs text-gray-400 truncate">{t.role}</p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-0.5">
                    <span className="text-[#FFC700] font-semibold">{t.timeframe}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5">
                      <MapPin className="w-2.5 h-2.5 text-gray-500" />
                      Karachi, PK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
