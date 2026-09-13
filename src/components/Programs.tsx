import React from 'react';
import { Dumbbell, Flame, Zap, HeartPulse, Activity, ArrowRight, Check } from 'lucide-react';

interface ProgramsProps {
  onSelectProgram: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const programs = [
    {
      id: 'prog-1',
      title: 'Heavy Strength & Hypertrophy',
      subtitle: 'Build raw kinetic strength & dense functional muscle',
      icon: <Dumbbell className="w-6 h-6 text-[#FFC700]" />,
      stats: '4 Days / Week • 60 min sessions',
      highlights: ['Periodized Barbell Blocks', 'CSCS Form Audits', 'Volume Progression Tracking'],
      accent: 'from-[#FFC700]/10 to-transparent',
      borderColor: 'border-[#222]'
    },
    {
      id: 'prog-2',
      title: 'High-Velocity Boxing & Combat',
      subtitle: 'Unleash explosive hand speed & warrior conditioning',
      icon: <Flame className="w-6 h-6 text-[#FFC700]" />,
      stats: '3-5 Days / Week • 50 min rounds',
      highlights: ['Championship Mitt Work', 'Rotational Torso Power', '10-Round Cardio Burn'],
      accent: 'from-[#FFC700]/10 to-transparent',
      borderColor: 'border-[#222]'
    },
    {
      id: 'prog-3',
      title: 'Metabolic Fat Burn & HIIT',
      subtitle: 'Torch calories and build an unstoppable engine',
      icon: <Zap className="w-6 h-6 text-[#FFC700]" />,
      stats: '4 Days / Week • 45 min intervals',
      highlights: ['Kettlebell Complexes', 'Zone 4/5 Heart Optimization', 'Afterburn EPOC Boost'],
      accent: 'from-[#FFC700]/10 to-transparent',
      borderColor: 'border-[#222]'
    },
    {
      id: 'prog-4',
      title: 'Athletic Mobility & Fascia Flow',
      subtitle: 'Bulletproof your joints and erase chronic stiffness',
      icon: <HeartPulse className="w-6 h-6 text-[#FFC700]" />,
      stats: '2-3 Days / Week • 40 min flow',
      highlights: ['Deep Hip & Shoulder Decompression', 'Rotational Spine Resilience', 'Active Recovery Protocol'],
      accent: 'from-[#FFC700]/10 to-transparent',
      borderColor: 'border-[#222]'
    }
  ];

  return (
    <section id="programs-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#222] text-[#FFC700] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
          <Activity className="w-3.5 h-3.5" />
          Engineered For Transformation
        </div>
        <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase">
          Find The Right Program <span className="text-[#FFC700]">Built For You</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-2">
          Whether you want to shatter powerlifting PRs, step into the boxing ring, or burn stubborn fat, our programs combine elite coaching with data-driven progress tracking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p) => (
          <div
            key={p.id}
            className="p-6 rounded-2xl bg-[#111] border border-[#222] hover:border-[#FFC700] transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#222] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>

              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FFC700] block mb-1">
                {p.stats}
              </span>

              <h3 className="text-xl font-black italic tracking-tight text-white group-hover:text-[#FFC700] transition-colors">
                {p.title}
              </h3>

              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                {p.subtitle}
              </p>

              <div className="mt-5 space-y-2 pt-4 border-t border-[#222]">
                {p.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-[#FFC700] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#222]">
              <button
                onClick={onSelectProgram}
                className="w-full py-3 bg-[#1A1A1A] group-hover:bg-[#FFC700] group-hover:text-black border border-[#222] group-hover:border-[#FFC700] text-gray-300 text-xs font-black uppercase tracking-tighter rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Coach For Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
