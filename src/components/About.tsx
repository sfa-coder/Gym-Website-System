import React from 'react';
import { ShieldCheck, Dumbbell, Flame, Target, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onExplorePrograms: () => void;
  onMeetCoaches: () => void;
}

export const About: React.FC<AboutProps> = ({ onExplorePrograms, onMeetCoaches }) => {
  return (
    <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1F1F1F]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#222] text-[#FFC700] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legacy & Iron Culture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
            About <span className="text-[#FFC700]">Robust Muscle</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl leading-relaxed">
            Karachi’s uncompromising destination for authentic barbell power, physique sculpting, and high-intensity combat conditioning.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onMeetCoaches}
            className="px-5 py-2.5 rounded-full bg-[#141414] hover:bg-[#FFC700] hover:text-black border border-[#222] hover:border-[#FFC700] text-gray-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Meet Coaches
          </button>
          <button
            onClick={onExplorePrograms}
            className="px-5 py-2.5 rounded-full bg-[#FFC700] hover:bg-white text-black text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-[#FFC700]/15"
          >
            Our Programs
          </button>
        </div>
      </div>

      {/* Main Grid: Founder Story + Gym Values */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Founder Story Feature */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-[#222] flex flex-col justify-between space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC700]/5 blur-[120px] pointer-events-none rounded-full" />

          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#FFC700]/30 text-xs font-bold text-gray-300">
              <Award className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>Founded by <strong className="text-[#FFC700]">Raveel Khan</strong></span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight text-white leading-tight">
              &ldquo;We don’t sell gym access. We forge unbreakable physical discipline.&rdquo;
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              Established in the heart of Gulshan-e-Iqbal, <strong className="text-white">Robust Muscle</strong> was built out of pure passion for raw iron, mechanical leverage, and real physical grit. Tired of commercial gyms filled with gimmicks, Founder & Head Coach Raveel Khan designed a facility where athletes and everyday individuals could train with genuine intent.
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              Every barbell, rack, and cable pulley at Robust Muscle has been chosen to respect human biomechanics. From heavy deadlift platforms and thick rubber dumbbells to boxing bags and high-grade turf, every square foot is optimized to push you past perceived limitations.
            </p>
          </div>

          {/* Quick Pillars Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#1C1C1C] relative z-10">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white">Heavy Barbell Stations</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Calibrated Olympic bars, bumper plates, & power cages.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white">Biomechanical Machines</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Converging and diverging resistance curves for maximum hypertrophy.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white">Combat & Heavy Bag Corner</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Striking stamina, agility footwork, & explosive core power.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white">1-on-1 Personalized Coaching</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Direct mentorship on progressive overload, nutrition, & form.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Philosophy Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#222] hover:border-[#FFC700]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#222] text-[#FFC700] flex items-center justify-center mb-3">
              <Dumbbell className="w-5 h-5" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-white italic">
              1. The Iron Truth
            </h4>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              No shortcuts. Muscle tissue and structural bone density respond to progressive tension and consistent effort. We provide the calibrated tools to make every rep count.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#222] hover:border-[#FFC700]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#222] text-[#FFC700] flex items-center justify-center mb-3">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-white italic">
              2. Scientific Conditioning
            </h4>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              Cardiovascular resilience built through sled drags, boxing intervals, and functional turf drills rather than mind-numbing hours on stationary bikes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#222] hover:border-[#FFC700]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#222] text-[#FFC700] flex items-center justify-center mb-3">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-white italic">
              3. Unrivaled Atmosphere
            </h4>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              Surrounded by motivational gym quotes, focused lifters, clean numbered lockers, and energizing sound. When you enter, your only option is to level up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
