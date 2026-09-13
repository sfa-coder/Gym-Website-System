import React, { useState } from 'react';
import { 
  INITIAL_TRAINERS, 
  INITIAL_TESTIMONIALS, 
  INITIAL_NOTIFICATIONS 
} from './data/mockData';
import { 
  Trainer, 
  BookingSession, 
  PushNotification, 
  NotificationSettings 
} from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Coaches } from './components/Coaches';
import { GymGallery } from './components/GymGallery';
import { Testimonials } from './components/Testimonials';
import { BmiCalculator } from './components/BmiCalculator';
import { ContactLocation } from './components/ContactLocation';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { BookingModal } from './components/BookingModal';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  // Application Data States
  const [trainers] = useState<Trainer[]>(INITIAL_TRAINERS);
  const [testimonials] = useState(INITIAL_TESTIMONIALS);
  const [bookings, setBookings] = useState<BookingSession[]>([
    {
      id: 'book-init-1',
      trainerId: 't-founder',
      trainerName: 'Raveel Khan',
      trainerImage: '',
      clientName: 'Hamza Tariq',
      clientEmail: 'hamza.athlete@karachi.pk',
      date: 'Tomorrow',
      time: '04:30 PM',
      sessionType: 'Strength & Hypertrophy',
      location: 'Main Barbell Floor',
      goals: 'Barbell deadlift biomechanics and progressive overload structure',
      status: 'confirmed',
      price: 100,
      createdAt: new Date().toISOString()
    }
  ]);

  // UI Modal & Active States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTrainerId, setSelectedTrainerId] = useState<string | undefined>();
  const [activeToast, setActiveToast] = useState<string | null>(null);

  // Sound Chime for Push Notifications using Web Audio API
  const playPushNotificationSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch {
      // Audio context might be restricted
    }
  };

  const handleOpenBooking = (trainerId?: string) => {
    setSelectedTrainerId(trainerId);
    setIsBookingOpen(true);
  };

  const handleBookingConfirmed = (booking: BookingSession) => {
    setBookings((prev) => [booking, ...prev]);
    setActiveToast(`Appointment Locked In! 1-on-1 ${booking.sessionType} confirmed with Coach ${booking.trainerName} for ${booking.date} at ${booking.time}.`);
    playPushNotificationSound();

    setTimeout(() => {
      setActiveToast(null);
    }, 5000);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="root" className="min-h-screen bg-[#050505] text-white selection:bg-[#FFC700] selection:text-black font-sans">
      {/* Toast Notification Alert */}
      {activeToast && (
        <div className="fixed top-20 right-4 z-50 max-w-sm p-4 rounded-2xl bg-[#111] border border-[#FFC700] shadow-2xl text-xs text-white animate-in slide-in-from-right duration-300">
          <div className="flex items-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC700] shrink-0 mt-1 animate-pulse" />
            <div>
              <div className="font-black text-[#FFC700] uppercase text-[10px] tracking-wider">Appointment Confirmed</div>
              <p className="mt-1 text-gray-200">{activeToast}</p>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Navigation Header - Uncongested, Clean & Spacious */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onScrollTo={handleScrollTo}
      />

      <main>
        {/* Hero Section with Treated Raveel Khan Photo, Overlay Switcher, and Bold Typography */}
        <Hero
          onBookClick={() => handleOpenBooking()}
          onExplorePrograms={() => handleScrollTo('programs-section')}
          onExploreAbout={() => handleScrollTo('about-section')}
        />

        {/* About Section - Founder Raveel Khan & Robust Muscle Iron Philosophy */}
        <About
          onExplorePrograms={() => handleScrollTo('programs-section')}
          onMeetCoaches={() => handleScrollTo('coaches-section')}
        />

        {/* Elite Training Programs */}
        <Programs onSelectProgram={() => handleOpenBooking()} />

        {/* Certified Master Coaches with Founder Spotlight */}
        <Coaches
          trainers={trainers}
          onBookTrainer={(trainerId) => handleOpenBooking(trainerId)}
        />

        {/* Gym Gallery - Using Enhanced Interior Photography */}
        <GymGallery onBookClick={() => handleOpenBooking()} />

        {/* Member Testimonials & Transformation Stories */}
        <Testimonials testimonials={testimonials} />

        {/* Interactive BMI & Body Composition Target Calculator */}
        <BmiCalculator onOpenBooking={() => handleOpenBooking()} />

        {/* Physical Address, Split Hours & Contact Desk */}
        <ContactLocation onBookClick={() => handleOpenBooking()} />

        {/* Frequently Asked Questions Accordion */}
        <FAQ onOpenBooking={() => handleOpenBooking()} />

        {/* Dedicated Contact Section with Interactive Google Map & Direct Inquiry Form */}
        <Contact onOpenBooking={() => handleOpenBooking()} />

        {/* Free Pass Newsletter Sign-Up */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Toggle Top Button on the Right */}
      <ScrollToTop />

      {/* Seamless Personal Training Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        trainers={trainers}
        selectedTrainerId={selectedTrainerId}
        onBookingConfirmed={handleBookingConfirmed}
      />
    </div>
  );
}
