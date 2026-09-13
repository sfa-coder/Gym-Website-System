import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Award, CheckCircle2, Dumbbell, MapPin, User, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Trainer, BookingSession } from '../types';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  trainers: Trainer[];
  selectedTrainerId?: string;
  onBookingConfirmed: (booking: BookingSession) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  trainers,
  selectedTrainerId,
  onBookingConfirmed
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [trainerId, setTrainerId] = useState<string>(selectedTrainerId || trainers[0]?.id || 't-founder');
  const [sessionType, setSessionType] = useState<BookingSession['sessionType']>('Strength & Conditioning');
  const [location, setLocation] = useState<BookingSession['location']>('Main Gym Floor');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, Sep 4');
  const [selectedTime, setSelectedTime] = useState<string>('09:00 AM');
  const [clientName, setClientName] = useState('Jordan Cole');
  const [clientEmail, setClientEmail] = useState('jordan.cole@athlete.com');
  const [goals, setGoals] = useState('Focus on heavy barbell deadlift form and hip rotational power.');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedTrainerId) {
      setTrainerId(selectedTrainerId);
    } else if (trainers.length > 0 && !trainerId) {
      setTrainerId(trainers[0].id);
    }
  }, [selectedTrainerId, trainers]);

  if (!isOpen) return null;

  const currentTrainer = trainers.find((t) => t.id === trainerId) || trainers[0];

  const availableDates = [
    { label: 'Today (Sep 3)', value: 'Today, Sep 3' },
    { label: 'Tomorrow (Sep 4)', value: 'Tomorrow, Sep 4' },
    { label: 'Friday (Sep 5)', value: 'Friday, Sep 5' },
    { label: 'Saturday (Sep 6)', value: 'Saturday, Sep 6' },
    { label: 'Monday (Sep 8)', value: 'Monday, Sep 8' }
  ];

  const sessionTypes: { title: BookingSession['sessionType']; desc: string; icon: string }[] = [
    { title: 'Strength & Conditioning', desc: 'Progressive overload, powerlifting, barbell mechanics', icon: '🏋️' },
    { title: 'Boxing & Combat', desc: 'Mitt work, footwork combos, explosive cardio stamina', icon: '🥊' },
    { title: 'Fat Loss & HIIT', desc: 'Metabolic burn, kettlebells, heart-rate zones', icon: '🔥' },
    { title: 'Yoga & Mobility', desc: 'Fascia decompression, athletic recovery, joint longevity', icon: '🧘' },
    { title: 'Personal Assessment', desc: 'Body composition scan, functional movement test & roadmap', icon: '📊' }
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    const newBooking: BookingSession = {
      id: `book-${Date.now()}`,
      trainerId: currentTrainer.id,
      trainerName: currentTrainer.name,
      trainerImage: currentTrainer.image,
      clientName,
      clientEmail,
      date: selectedDate,
      time: selectedTime,
      sessionType,
      location,
      goals: goals || 'General progressive performance coaching',
      status: 'confirmed',
      price: currentTrainer.hourlyRate,
      createdAt: new Date().toISOString()
    };

    onBookingConfirmed(newBooking);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFC700', '#C4E600', '#FFFFFF', '#050505']
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        id="booking-modal-container"
        className="relative w-full max-w-2xl bg-[#111] border border-[#222] rounded-2xl shadow-2xl overflow-hidden my-8"
      >
        {/* Top Accent Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222] bg-[#1A1A1A]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center text-[#FFC700]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black italic tracking-tight text-white uppercase">Book Your Gym Appointment</h3>
              <p className="text-xs text-gray-400">1-on-1 Personal Training • Free Assessment • Facility Tour with Coach</p>
            </div>
          </div>
          <button
            id="close-booking-modal-btn"
            onClick={handleResetAndClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#222] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#111] border-2 border-[#FFC700] flex items-center justify-center text-[#FFC700] animate-bounce shadow-xl shadow-[#FFC700]/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.2em] text-[#FFC700] uppercase bg-[#1A1A1A] border border-[#FFC700]/40 rounded-full mb-2">
                Appointment Confirmed
              </span>
              <h2 className="text-2xl font-black italic tracking-tighter text-white uppercase">You're Locked In!</h2>
              <p className="text-sm text-gray-300 mt-2 max-w-md mx-auto">
                Appointment confirmed with <strong className="text-white">{currentTrainer.name}</strong> on <strong className="text-[#FFC700]">{selectedDate} at {selectedTime}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#222] text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-gray-400">
                <span>Appointment Type:</span>
                <span className="text-white font-medium">{sessionType}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Location:</span>
                <span className="text-white font-medium">{location}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Rate:</span>
                <span className="text-[#FFC700] font-black">${currentTrainer.hourlyRate} / hr</span>
              </div>
              <div className="flex justify-between text-gray-400 pt-1 border-t border-[#222]">
                <span>Push Reminder:</span>
                <span className="text-[#FFC700] font-medium">Scheduled (1 hr prior)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                id="booking-view-dashboard-btn"
                onClick={handleResetAndClose}
                className="px-6 py-3 bg-[#FFC700] hover:bg-white text-black font-black uppercase tracking-tighter rounded-full transition-all shadow-lg shadow-[#FFC700]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View In Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Step Progress Indicators */}
            <div className="flex items-center px-6 py-3 bg-[#0A0A0A] border-b border-[#222] text-xs">
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`flex items-center gap-2 font-bold cursor-pointer ${step === 1 ? 'text-[#FFC700]' : 'text-gray-400 hover:text-white'}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 1 ? 'bg-[#FFC700] text-black font-black' : 'bg-[#1A1A1A] text-gray-400'}`}>1</span>
                Trainer & Program
              </button>
              <div className="w-8 h-[1px] bg-[#222] mx-2" />
              <button
                type="button"
                onClick={() => setStep(2)}
                className={`flex items-center gap-2 font-bold cursor-pointer ${step === 2 ? 'text-[#FFC700]' : 'text-gray-400 hover:text-white'}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 2 ? 'bg-[#FFC700] text-black font-black' : 'bg-[#1A1A1A] text-gray-400'}`}>2</span>
                Schedule Time
              </button>
              <div className="w-8 h-[1px] bg-[#222] mx-2" />
              <button
                type="button"
                onClick={() => setStep(3)}
                className={`flex items-center gap-2 font-bold cursor-pointer ${step === 3 ? 'text-[#FFC700]' : 'text-gray-400 hover:text-white'}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? 'bg-[#FFC700] text-black font-black' : 'bg-[#1A1A1A] text-gray-400'}`}>3</span>
                Confirmation
              </button>
            </div>

            <div className="p-6">
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">
                      Choose Your Coach
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {trainers.map((t) => (
                        <div
                          key={t.id}
                          id={`trainer-select-${t.id}`}
                          onClick={() => setTrainerId(t.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                            trainerId === t.id
                              ? 'bg-[#1A1A1A] border-[#FFC700] ring-1 ring-[#FFC700]'
                              : 'bg-[#1A1A1A]/60 border-[#222] hover:border-gray-600 hover:bg-[#1A1A1A]'
                          }`}
                        >
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-14 h-14 rounded-lg object-cover border border-[#222] shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-black italic tracking-tight text-white truncate">{t.name}</h4>
                              <span className="text-xs font-black text-[#FFC700]">${t.hourlyRate}/h</span>
                            </div>
                            <p className="text-xs text-gray-400 truncate">{t.role}</p>
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#111] text-[#FFC700] border border-[#FFC700]/30 font-bold">
                                ★ {t.rating}
                              </span>
                              {t.id === 't-founder' ? (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#FFC700] text-black font-black uppercase tracking-wider">
                                  Founder
                                </span>
                              ) : (
                                <span className="text-[10px] text-gray-500 truncate">{t.tag}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">
                      Appointment Focus &amp; Goals
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sessionTypes.map((st) => (
                        <div
                          key={st.title}
                          onClick={() => setSessionType(st.title)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all text-left ${
                            sessionType === st.title
                              ? 'bg-[#1A1A1A] border-[#FFC700] text-white'
                              : 'bg-[#1A1A1A]/60 border-[#222] text-gray-300 hover:border-gray-600'
                          }`}
                        >
                          <div className="flex items-center gap-2 font-black italic text-sm">
                            <span>{st.icon}</span>
                            <span>{st.title}</span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1 line-clamp-1">{st.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      id="booking-step1-next"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 bg-[#FFC700] hover:bg-white text-black font-black uppercase tracking-tighter rounded-full transition-all flex items-center gap-2 text-xs sm:text-sm shadow-md shadow-[#FFC700]/20 cursor-pointer"
                    >
                      <span>Continue To Schedule</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">
                      Select Date
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableDates.map((d) => (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => setSelectedDate(d.value)}
                          className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                            selectedDate === d.value
                              ? 'bg-[#FFC700] text-black border-[#FFC700] shadow-md shadow-[#FFC700]/30 font-black'
                              : 'bg-[#1A1A1A] border-[#222] text-gray-300 hover:border-gray-600'
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">
                      Available Time Slots ({currentTrainer.name})
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {currentTrainer.availability.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                            selectedTime === t
                              ? 'bg-[#FFC700] text-black border-[#FFC700] font-black'
                              : 'bg-[#1A1A1A] border-[#222] text-gray-300 hover:border-gray-600'
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          <span>{t}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">
                      Training Location
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['Main Gym Floor', 'Combat Ring', 'Private Studio', 'Virtual / Online'] as const).map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => setLocation(loc)}
                          className={`p-2.5 rounded-lg border text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                            location === loc
                              ? 'bg-[#FFC700] border-[#FFC700] text-black font-black'
                              : 'bg-[#1A1A1A] border-[#222] text-gray-400 hover:text-white'
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="truncate">{loc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 border border-[#333] text-gray-300 hover:bg-[#222] rounded-full text-xs font-bold cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      id="booking-step2-next"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 bg-[#FFC700] hover:bg-white text-black font-black uppercase tracking-tighter rounded-full transition-all flex items-center gap-2 text-xs sm:text-sm shadow-md shadow-[#FFC700]/20 cursor-pointer"
                    >
                      <span>Final Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleConfirm} className="space-y-4">
                  {/* Summary Card */}
                  <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#222] flex items-center gap-4">
                    <img
                      src={currentTrainer.image}
                      alt={currentTrainer.name}
                      className="w-14 h-14 rounded-xl object-cover border border-[#222]"
                    />
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-black italic tracking-tight text-base truncate">{currentTrainer.name}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#111] text-[#FFC700] border border-[#FFC700]/30 font-black">
                          ${currentTrainer.hourlyRate}/hr
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{sessionType} • {location}</p>
                      <p className="text-xs text-[#FFC700] font-bold mt-0.5">{selectedDate} @ {selectedTime}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#333] rounded-xl text-white text-sm focus:outline-none focus:border-[#FFC700]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1">Email For Calendar Invite</label>
                      <input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#333] rounded-xl text-white text-sm focus:outline-none focus:border-[#FFC700]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Workout Goals / Notes For Coach</label>
                    <textarea
                      rows={2}
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      placeholder="e.g. Focus on deadlift technique, high volume boxing rounds, lower back recovery..."
                      className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#333] rounded-xl text-white text-sm focus:outline-none focus:border-[#FFC700]"
                    />
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1A1A1A] border border-[#FFC700]/20 text-gray-300 text-xs">
                    <Sparkles className="w-4 h-4 text-[#FFC700] shrink-0" />
                    <span>Free push reminder and session itinerary will be delivered to your device dashboard.</span>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 border border-[#333] text-gray-300 hover:bg-[#222] rounded-full text-xs font-bold cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      id="confirm-booking-btn"
                      className="px-6 py-2.5 bg-[#FFC700] hover:bg-white text-black font-black uppercase tracking-tighter rounded-full transition-all flex items-center gap-2 text-xs sm:text-sm shadow-lg shadow-[#FFC700]/20 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm & Lock In Appointment</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
