import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, AlertCircle, Calendar, MessageSquare, ShieldCheck } from 'lucide-react';
import { RobustMuscleLogo } from './RobustMuscleLogo';

interface ContactLocationProps {
  onBookClick?: () => void;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ onBookClick }) => {
  const schedule = [
    { day: 'Monday', hours: '6:00 AM – 9:00 AM, 4:00 PM – 12:00 AM', status: 'Open' },
    { day: 'Tuesday', hours: '6:00 AM – 9:00 AM, 4:00 PM – 12:00 AM', status: 'Open' },
    { day: 'Wednesday', hours: '6:00 AM – 9:00 AM, 4:00 PM – 12:00 AM', status: 'Open' },
    { day: 'Thursday', hours: '6:00 AM – 9:00 AM, 4:00 PM – 12:00 AM', status: 'Open' },
    { day: 'Friday', hours: '6:00 AM – 9:00 AM, 4:00 PM – 12:00 AM', status: 'Open' },
    { day: 'Saturday', hours: '6:00 AM – 9:00 AM, 4:00 PM – 12:00 AM', status: 'Open' },
    { day: 'Sunday', hours: 'Closed (Recovery & Facility Maintenance)', status: 'Closed' },
  ];

  const currentDayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[currentDayIndex];

  return (
    <section id="location-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222]">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#222] text-[#FFC700] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Headquarters & Facility Hours
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase">
            VISIT <span className="text-[#FFC700]">ROBUST MUSCLE</span> GYM
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl">
            State-of-the-art strength training, free weights zone, boxing ring, and Olympic platforms in the heart of Gulshan-e-Iqbal, Karachi.
          </p>
        </div>

        {/* Quick Contact Action Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:03362848450"
            className="px-5 py-2.5 bg-[#FFC700] hover:bg-white text-black font-black uppercase text-xs tracking-tighter rounded-full transition-colors flex items-center gap-2 shadow-lg shadow-[#FFC700]/20"
          >
            <Phone className="w-4 h-4" />
            <span>Call: 0336 2848450</span>
          </a>
          <a
            href="https://maps.google.com/?q=PLOT+NO.G.P.C+123+opposite+KFC+KARACHI+Block+4+Gulshan-e-Iqbal+Karachi+75300"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#111] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#FFC700] text-white font-bold uppercase text-xs tracking-wider rounded-full transition-colors flex items-center gap-2"
          >
            <Navigation className="w-4 h-4 text-[#FFC700]" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Address & Contact Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Info Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111] border border-[#222] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC700]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Gym Name & Tag */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#222]">
                <RobustMuscleLogo size="lg" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#FFC700]/30 text-[10px] font-bold text-gray-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFC700]" />
                  <span>Founder: <strong className="text-[#FFC700]">Raveel Khan</strong></span>
                </div>
              </div>

              {/* Exact Address */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#FFC700]">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Address</span>
                </div>
                <p className="text-base font-bold text-white leading-snug">
                  PLOT NO.G.P.C, 123, opposite KFC, Block 4 Gulshan-e-Iqbal, Karachi, 75300
                </p>
                <p className="text-xs text-gray-400">
                  Landmark: Directly opposite KFC, Main Commercial Hub
                </p>
              </div>

              {/* Direct Phone */}
              <div className="space-y-1.5 pt-4 border-t border-[#222]">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#FFC700]">
                  <Phone className="w-4 h-4" />
                  <span>Phone & WhatsApp Desk</span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="tel:03362848450"
                    className="text-2xl font-black tracking-tight text-white hover:text-[#FFC700] transition-colors"
                  >
                    0336 2848450
                  </a>
                  <span className="px-2.5 py-1 rounded-full bg-[#1A1A1A] border border-[#333] text-[10px] font-bold text-gray-300">
                    Call / WhatsApp
                  </span>
                </div>
              </div>

              {/* Today's Status Banner */}
              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#222] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${todayName === 'Sunday' ? 'bg-red-400' : 'bg-[#FFC700]'}`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${todayName === 'Sunday' ? 'bg-red-500' : 'bg-[#FFC700]'}`}></span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Today ({todayName}): {todayName === 'Sunday' ? 'Closed' : 'Open (Split Hours)'}
                    </div>
                    <div className="text-[11px] text-gray-400">
                      {todayName === 'Sunday' ? 'Reopens Monday 6:00 AM' : '6–9 AM • 4 PM–12 AM'}
                    </div>
                  </div>
                </div>
                {onBookClick && (
                  <button
                    onClick={onBookClick}
                    className="px-3.5 py-1.5 bg-[#FFC700] hover:bg-white text-black font-black uppercase text-[10px] tracking-tight rounded-full transition-colors cursor-pointer"
                  >
                    Book Tour
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Weekly Schedule Table */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111] border border-[#222] shadow-xl">
            <div className="flex items-center justify-between pb-5 border-b border-[#222] mb-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#FFC700]" />
                <h3 className="text-lg font-black italic tracking-tight text-white uppercase">
                  Weekly Operating Schedule
                </h3>
              </div>
              <span className="text-xs font-bold text-[#FFC700] uppercase tracking-wider bg-[#1A1A1A] px-3 py-1 rounded-full border border-[#FFC700]/30">
                Split Shift Schedule
              </span>
            </div>

            <div className="divide-y divide-[#222]">
              {schedule.map((item) => {
                const isToday = item.day === todayName;
                const isClosed = item.status === 'Closed';

                return (
                  <div
                    key={item.day}
                    className={`py-3.5 px-3 rounded-xl transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                      isToday
                        ? 'bg-[#1A1A1A] border border-[#FFC700]/40 shadow-sm'
                        : 'hover:bg-[#161616]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${isClosed ? 'bg-red-500' : isToday ? 'bg-[#FFC700]' : 'bg-gray-600'}`} />
                      <span className={`text-sm font-bold ${isToday ? 'text-[#FFC700] font-black' : 'text-white'}`}>
                        {item.day}
                        {isToday && (
                          <span className="ml-2 text-[10px] uppercase font-black tracking-widest text-black bg-[#FFC700] px-2 py-0.5 rounded-full">
                            TODAY
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
                      <span className={isClosed ? 'text-red-400 font-semibold' : 'text-gray-300 font-medium'}>
                        {item.hours}
                      </span>
                      <span
                        className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                          isClosed
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : 'bg-[#FFC700]/15 text-[#FFC700] border border-[#FFC700]/30'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFC700]" />
                <span>Morning Session (6 AM - 9 AM) & Evening Power Session (4 PM - 12 AM)</span>
              </div>
              <span className="text-gray-500 font-medium">Sunday reserved for deep sanitary clean</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
