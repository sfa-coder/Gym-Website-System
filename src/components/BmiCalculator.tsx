import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Scale,
  Activity,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Info,
  Dumbbell,
  Target,
  MessageSquare,
  Flame,
  Calendar
} from 'lucide-react';

interface BmiCalculatorProps {
  onOpenBooking: () => void;
}

type UnitSystem = 'metric' | 'imperial';
type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'very_active';

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onOpenBooking }) => {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState<number>(25);

  // Metric states
  const [weightKg, setWeightKg] = useState<number>(75);
  const [heightCm, setHeightCm] = useState<number>(175);

  // Imperial states
  const [weightLbs, setWeightLbs] = useState<number>(165);
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(9);

  const [activity, setActivity] = useState<ActivityLevel>('moderate');

  // Handle switching units with approximate conversions
  const handleUnitChange = (newUnit: UnitSystem) => {
    if (newUnit === unit) return;
    if (newUnit === 'imperial') {
      const lbs = Math.round(weightKg * 2.20462);
      const totalInches = heightCm / 2.54;
      const ft = Math.floor(totalInches / 12);
      const inc = Math.round(totalInches % 12);
      setWeightLbs(lbs);
      setHeightFt(ft);
      setHeightIn(inc);
    } else {
      const kg = Math.round(weightLbs / 2.20462);
      const cm = Math.round((heightFt * 12 + heightIn) * 2.54);
      setWeightKg(kg);
      setHeightCm(cm);
    }
    setUnit(newUnit);
  };

  // Compute BMI & Normalized Values
  const { bmi, category, healthyWeightRange, tdee, recommendation, badgeColor, gaugePercentage } =
    useMemo(() => {
      let weightInKg = weightKg;
      let heightInMeters = heightCm / 100;

      if (unit === 'imperial') {
        weightInKg = weightLbs / 2.20462;
        const totalInches = heightFt * 12 + heightIn;
        heightInMeters = (totalInches * 2.54) / 100;
      }

      const calculatedBmi =
        heightInMeters > 0 ? weightInKg / (heightInMeters * heightInMeters) : 0;
      const roundedBmi = parseFloat(calculatedBmi.toFixed(1));

      // Healthy Weight Range for height (BMI 18.5 to 24.9)
      const minHealthyKg = 18.5 * (heightInMeters * heightInMeters);
      const maxHealthyKg = 24.9 * (heightInMeters * heightInMeters);

      let healthyRangeString = '';
      if (unit === 'metric') {
        healthyRangeString = `${Math.round(minHealthyKg)} kg – ${Math.round(maxHealthyKg)} kg`;
      } else {
        healthyRangeString = `${Math.round(minHealthyKg * 2.20462)} lbs – ${Math.round(
          maxHealthyKg * 2.20462
        )} lbs`;
      }

      // Basic BMR & TDEE calculation (Mifflin-St Jeor equation)
      let bmr = 10 * weightInKg + 6.25 * (heightInMeters * 100) - 5 * age;
      bmr += gender === 'male' ? 5 : -161;

      const activityMultipliers: Record<ActivityLevel, number> = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        very_active: 1.725,
      };

      const calculatedTdee = Math.round(bmr * activityMultipliers[activity]);

      // Category & Guidance
      let cat = 'Normal Weight';
      let rec = '';
      let color = '#22C55E'; // emerald
      let gaugePct = 50;

      if (roundedBmi < 18.5) {
        cat = 'Underweight';
        rec =
          'Focus on progressive resistance hypertrophy with a nutrient-dense caloric surplus (+300 to 500 kcal). Prioritize compound lifts at Robust Muscle to build lean muscle mass safely.';
        color = '#38BDF8'; // light sky blue
        gaugePct = Math.min(25, Math.max(5, (roundedBmi / 18.5) * 25));
      } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
        cat = 'Normal / Athletic Range';
        rec =
          'You are in the optimal physical health bracket! Maintain your physique with periodized hypertrophy, athletic conditioning, and progressive overload on our calibrated barbell platforms.';
        color = '#22C55E'; // green
        gaugePct = 25 + ((roundedBmi - 18.5) / (24.9 - 18.5)) * 25;
      } else if (roundedBmi >= 25.0 && roundedBmi <= 29.9) {
        cat = 'Overweight / Muscle Mass';
        rec =
          'Target body recomposition: keep protein high (1.8-2.2g/kg), engage in heavy resistance training paired with high-intensity boxing bag work, and maintain a slight caloric deficit.';
        color = '#FFC700'; // yellow
        gaugePct = 50 + ((roundedBmi - 25.0) / (29.9 - 25.0)) * 25;
      } else {
        cat = 'Obese / High Adiposity';
        rec =
          'Recommended structured fat loss protocol: low-impact metabolic conditioning, steady-state cardio, and joint-friendly resistance machine training supervised by our certified trainers.';
        color = '#EF4444'; // red
        gaugePct = Math.min(100, 75 + ((roundedBmi - 30.0) / 15) * 25);
      }

      return {
        bmi: roundedBmi,
        category: cat,
        healthyWeightRange: healthyRangeString,
        tdee: calculatedTdee,
        recommendation: rec,
        badgeColor: color,
        gaugePercentage: Math.min(100, Math.max(0, gaugePct)),
      };
    }, [unit, weightKg, heightCm, weightLbs, heightFt, heightIn, age, gender, activity]);

  const handleReset = () => {
    setUnit('metric');
    setGender('male');
    setAge(25);
    setWeightKg(75);
    setHeightCm(175);
    setWeightLbs(165);
    setHeightFt(5);
    setHeightIn(9);
    setActivity('moderate');
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Coach Raveel Khan! I calculated my BMI on the Robust Muscle website: BMI ${bmi} (${category}), Weight: ${
      unit === 'metric' ? `${weightKg} kg` : `${weightLbs} lbs`
    }. I would like to consult about a personalized training program.`
  );

  return (
    <section
      id="bmi-calculator-section"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222] relative"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFC700]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#222] text-[#FFC700] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Body Composition &amp; Health Metrics
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase">
            CALCULATE YOUR <span className="text-[#FFC700]">BMI &amp; FITNESS TARGET</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl">
            Evaluate your Body Mass Index, discover your healthy weight range, estimate your daily maintenance calories, and receive targeted coaching recommendations.
          </p>
        </div>

        {/* Unit Toggle & Reset */}
        <div className="flex items-center gap-3">
          <div className="bg-[#111] p-1 rounded-full border border-[#222] flex items-center">
            <button
              onClick={() => handleUnitChange('metric')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                unit === 'metric'
                  ? 'bg-[#FFC700] text-black shadow-md shadow-[#FFC700]/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Metric (kg/cm)
            </button>
            <button
              onClick={() => handleUnitChange('imperial')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                unit === 'imperial'
                  ? 'bg-[#FFC700] text-black shadow-md shadow-[#FFC700]/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Imperial (lbs/ft)
            </button>
          </div>

          <button
            onClick={handleReset}
            title="Reset values"
            className="p-2.5 rounded-full bg-[#111] hover:bg-[#1A1A1A] border border-[#222] text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs Left, Live Results Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Column: Interactive Inputs */}
        <div className="lg:col-span-7 bg-[#111] border border-[#222] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#222]">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#FFC700]" />
              <h3 className="text-lg font-black italic tracking-tight text-white uppercase">
                Your Measurements
              </h3>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-[#1A1A1A] px-2.5 py-1 rounded-full border border-[#333]">
              Real-Time Calculation
            </span>
          </div>

          {/* Gender & Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-2">
                Biological Sex
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer flex items-center justify-center gap-1.5 ${
                    gender === 'male'
                      ? 'bg-[#FFC700] text-black border-[#FFC700] shadow-md shadow-[#FFC700]/20'
                      : 'bg-[#161616] text-gray-400 border-[#222] hover:text-white'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer flex items-center justify-center gap-1.5 ${
                    gender === 'female'
                      ? 'bg-[#FFC700] text-black border-[#FFC700] shadow-md shadow-[#FFC700]/20'
                      : 'bg-[#161616] text-gray-400 border-[#222] hover:text-white'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold">
                  Age (Years)
                </label>
                <span className="text-xs font-mono font-bold text-[#FFC700]">{age} yrs</span>
              </div>
              <input
                type="range"
                min={14}
                max={85}
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
                className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-[#FFC700]"
              />
              <div className="flex justify-between text-[9px] text-gray-500 mt-1 font-mono">
                <span>14</span>
                <span>40</span>
                <span>85</span>
              </div>
            </div>
          </div>

          {/* Height Input */}
          <div className="space-y-2 pt-2 border-t border-[#1C1C1C]">
            {unit === 'metric' ? (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold">
                    Height (Centimeters)
                  </label>
                  <span className="text-sm font-mono font-black text-white">
                    {heightCm} <span className="text-[#FFC700] text-xs font-normal">cm</span>{' '}
                    <span className="text-gray-500 text-[11px]">
                      ({Math.floor(heightCm / 30.48)}' {Math.round((heightCm % 30.48) / 2.54)}")
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min={120}
                  max={225}
                  value={heightCm}
                  onChange={(e) => setHeightCm(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-[#FFC700]"
                />
                <div className="flex justify-between text-[9px] text-gray-500 mt-1 font-mono">
                  <span>120 cm (3'11")</span>
                  <span>175 cm (5'9")</span>
                  <span>225 cm (7'5")</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold">
                    Height (Feet &amp; Inches)
                  </label>
                  <span className="text-sm font-mono font-black text-white">
                    {heightFt} <span className="text-[#FFC700] text-xs font-normal">ft</span> {heightIn}{' '}
                    <span className="text-[#FFC700] text-xs font-normal">in</span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] text-gray-500 mb-1 block">Feet</span>
                    <input
                      type="range"
                      min={4}
                      max={7}
                      value={heightFt}
                      onChange={(e) => setHeightFt(parseInt(e.target.value))}
                      className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-[#FFC700]"
                    />
                    <div className="flex justify-between text-[9px] text-gray-500 mt-1 font-mono">
                      <span>4 ft</span>
                      <span>7 ft</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 mb-1 block">Inches</span>
                    <input
                      type="range"
                      min={0}
                      max={11}
                      value={heightIn}
                      onChange={(e) => setHeightIn(parseInt(e.target.value))}
                      className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-[#FFC700]"
                    />
                    <div className="flex justify-between text-[9px] text-gray-500 mt-1 font-mono">
                      <span>0 in</span>
                      <span>11 in</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Weight Input */}
          <div className="space-y-2 pt-2 border-t border-[#1C1C1C]">
            {unit === 'metric' ? (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold">
                    Weight (Kilograms)
                  </label>
                  <span className="text-sm font-mono font-black text-white">
                    {weightKg} <span className="text-[#FFC700] text-xs font-normal">kg</span>{' '}
                    <span className="text-gray-500 text-[11px]">
                      ({Math.round(weightKg * 2.20462)} lbs)
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min={35}
                  max={180}
                  value={weightKg}
                  onChange={(e) => setWeightKg(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-[#FFC700]"
                />
                <div className="flex justify-between text-[9px] text-gray-500 mt-1 font-mono">
                  <span>35 kg</span>
                  <span>80 kg</span>
                  <span>180 kg</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold">
                    Weight (Pounds)
                  </label>
                  <span className="text-sm font-mono font-black text-white">
                    {weightLbs} <span className="text-[#FFC700] text-xs font-normal">lbs</span>{' '}
                    <span className="text-gray-500 text-[11px]">
                      ({Math.round(weightLbs / 2.20462)} kg)
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min={80}
                  max={390}
                  value={weightLbs}
                  onChange={(e) => setWeightLbs(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-[#FFC700]"
                />
                <div className="flex justify-between text-[9px] text-gray-500 mt-1 font-mono">
                  <span>80 lbs</span>
                  <span>180 lbs</span>
                  <span>390 lbs</span>
                </div>
              </div>
            )}
          </div>

          {/* Activity Level Selector */}
          <div className="pt-2 border-t border-[#1C1C1C]">
            <label className="block text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-2">
              Daily Activity &amp; Training Routine
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'sedentary', label: 'Sedentary', desc: 'Desk job, low movement' },
                { id: 'light', label: 'Light', desc: '1–2 gym days/week' },
                { id: 'moderate', label: 'Moderate', desc: '3–5 gym sessions' },
                { id: 'very_active', label: 'Athletic', desc: '6+ hard sessions' },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setActivity(lvl.id as ActivityLevel)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    activity === lvl.id
                      ? 'bg-[#181818] border-[#FFC700] ring-1 ring-[#FFC700]/30'
                      : 'bg-[#141414] border-[#222] hover:border-[#333]'
                  }`}
                >
                  <div
                    className={`text-xs font-bold uppercase tracking-wider ${
                      activity === lvl.id ? 'text-[#FFC700]' : 'text-white'
                    }`}
                  >
                    {lvl.label}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">{lvl.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Results & Coach Recommendation */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Scorecard Card */}
          <div className="bg-[#111] border border-[#222] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-15"
              style={{ backgroundColor: badgeColor }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-3 border-b border-[#222] mb-6">
                <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                  Calculated BMI Result
                </span>
                <span
                  className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border"
                  style={{
                    backgroundColor: `${badgeColor}15`,
                    borderColor: `${badgeColor}60`,
                    color: badgeColor,
                  }}
                >
                  {category}
                </span>
              </div>

              {/* Big BMI Number */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-6xl sm:text-7xl font-black italic tracking-tighter text-white font-mono">
                  {bmi}
                </span>
                <div className="text-xs text-gray-400">
                  <div className="font-bold text-white uppercase">kg/m²</div>
                  <div>Index Score</div>
                </div>
              </div>

              {/* Spectrum Gauge Bar */}
              <div className="space-y-2 mb-6">
                <div className="relative h-3 bg-[#1A1A1A] rounded-full overflow-hidden flex border border-[#2A2A2A]">
                  <div className="h-full w-1/4 bg-sky-500/80" title="Underweight (<18.5)" />
                  <div className="h-full w-1/4 bg-emerald-500/80" title="Normal (18.5 - 24.9)" />
                  <div className="h-full w-1/4 bg-[#FFC700]/90" title="Overweight (25 - 29.9)" />
                  <div className="h-full w-1/4 bg-red-500/80" title="Obese (30+)" />
                </div>

                {/* Cursor Needle Indicator */}
                <div className="relative h-4">
                  <div
                    className="absolute top-0 -translate-x-1/2 flex flex-col items-center transition-all duration-300"
                    style={{ left: `${gaugePercentage}%` }}
                  >
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-[#FFC700]" />
                    <span className="text-[9px] font-black font-mono text-[#FFC700] -mt-0.5">
                      ▲
                    </span>
                  </div>
                </div>

                <div className="flex justify-between text-[9px] font-bold text-gray-500 uppercase tracking-tighter">
                  <span className="text-sky-400">&lt; 18.5 Under</span>
                  <span className="text-emerald-400">18.5–24.9 Normal</span>
                  <span className="text-amber-400">25–29.9 Over</span>
                  <span className="text-red-400">30+ Obese</span>
                </div>
              </div>

              {/* Key Vital Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1C1C1C] mb-6">
                <div className="p-3.5 rounded-2xl bg-[#141414] border border-[#222]">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-gray-400 mb-1">
                    <Target className="w-3.5 h-3.5 text-[#FFC700]" />
                    <span>Healthy Weight</span>
                  </div>
                  <div className="text-sm font-mono font-black text-white">
                    {healthyWeightRange}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#141414] border border-[#222]">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-gray-400 mb-1">
                    <Flame className="w-3.5 h-3.5 text-[#FFC700]" />
                    <span>Est. Maintenance</span>
                  </div>
                  <div className="text-sm font-mono font-black text-white">
                    ~{tdee}{' '}
                    <span className="text-[10px] font-normal text-gray-400">kcal/day</span>
                  </div>
                </div>
              </div>

              {/* Coaching Guidance Box */}
              <div className="p-4 rounded-2xl bg-[#161616] border border-[#222] mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  <Dumbbell className="w-3.5 h-3.5 text-[#FFC700]" />
                  <span>Coach Raveel Khan's Protocol:</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{recommendation}</p>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-gray-400 pt-2 border-t border-[#222]">
                  <Info className="w-3 h-3 text-[#FFC700] shrink-0" />
                  <span>
                    Note: BMI does not distinguish lean muscle mass from fat in muscular athletes.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-3 bg-[#FFC700] hover:bg-white text-black font-black uppercase text-xs tracking-wider rounded-full transition-all duration-200 shadow-lg shadow-[#FFC700]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Book 1-on-1 Assessment for this Goal</span>
                </button>

                <a
                  href={`https://wa.me/923362848450?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#161616] hover:bg-[#222] border border-[#2A2A2A] hover:border-[#25D366] text-gray-200 font-bold uppercase text-xs tracking-wider rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Send BMI to Coach via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
