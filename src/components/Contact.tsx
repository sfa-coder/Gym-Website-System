import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Navigation,
  MessageSquare,
  ShieldCheck,
  User,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { RobustMuscleLogo } from './RobustMuscleLogo';

interface ContactProps {
  onOpenBooking?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: '1-on-1 Personal Training with Raveel Khan',
    preferredShift: 'Evening Shift (4:00 PM – 12:00 AM)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const inquiryOptions = [
    '1-on-1 Personal Training with Raveel Khan',
    'General Gym Membership & Split Shift Access',
    'Complimentary Facility Tour & Assessment',
    'Combat Conditioning & Boxing Zone Access',
    'Weight Loss & Muscle Hypertrophy Protocol',
    'Other Inquiries',
  ];

  const shiftOptions = [
    'Morning Shift (6:00 AM – 9:00 AM)',
    'Evening Shift (4:00 PM – 12:00 AM)',
    'Flexible / Either Shift',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone or WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      inquiryType: '1-on-1 Personal Training with Raveel Khan',
      preferredShift: 'Evening Shift (4:00 PM – 12:00 AM)',
      message: '',
    });
    setIsSubmitted(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Robust Muscle! My name is ${formData.name || 'Member'}. I am inquiring about ${formData.inquiryType}.`
  );

  return (
    <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#222] text-[#FFC700] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Communications &amp; Inquiries
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase">
            GET IN TOUCH WITH <span className="text-[#FFC700]">ROBUST MUSCLE</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl">
            Connect directly with Head Coach Raveel Khan and our coaching staff. Send an inquiry for memberships, 1-on-1 coaching, or visit us directly in Gulshan-e-Iqbal.
          </p>
        </div>

        {/* Action Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/923362848450?text=Hello%20Robust%20Muscle%20Gym%2C%20I%20would%20like%20to%20inquire%20about%20memberships%20and%20training."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#25D366] hover:bg-white text-black font-black uppercase text-xs tracking-wider rounded-full transition-colors flex items-center gap-2 shadow-lg shadow-[#25D366]/20"
          >
            <MessageSquare className="w-4 h-4 text-black" />
            <span>WhatsApp Coach</span>
          </a>
          <a
            href="tel:03362848450"
            className="px-5 py-2.5 bg-[#111] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#FFC700] text-white font-bold uppercase text-xs tracking-wider rounded-full transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#FFC700]" />
            <span>Call: 0336 2848450</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111] border border-[#222] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC700]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-5 border-b border-[#222] mb-6">
                <div className="flex items-center gap-2.5">
                  <Send className="w-5 h-5 text-[#FFC700]" />
                  <h3 className="text-xl font-black italic tracking-tight text-white uppercase">
                    Send Us A Message
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-[#1A1A1A] px-3 py-1 rounded-full border border-[#333]">
                  Prompt Response Guaranteed
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#FFC700]/20 border border-[#FFC700] text-[#FFC700] flex items-center justify-center mx-auto shadow-lg shadow-[#FFC700]/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black italic tracking-tight text-white uppercase">
                      Inquiry Received!
                    </h4>
                    <p className="text-sm text-gray-300 mt-2 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Our front desk and Coach Raveel Khan's team have received your message regarding <strong className="text-[#FFC700]">{formData.inquiryType}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161616] border border-[#222] max-w-md mx-auto text-left text-xs space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Contact Number:</span>
                      <span className="text-white font-mono">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Preferred Shift:</span>
                      <span className="text-[#FFC700] font-semibold">{formData.preferredShift}</span>
                    </div>
                    <div className="text-[11px] text-gray-400 pt-2 border-t border-[#222]">
                      We typically reach back via phone call or WhatsApp within a few hours during active gym sessions.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={`https://wa.me/923362848450?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#25D366] hover:bg-white text-black font-black uppercase text-xs tracking-wider rounded-full transition-colors flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-[#222] hover:bg-[#333] text-white font-bold uppercase text-xs tracking-wider rounded-full transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-1.5">
                        Full Name <span className="text-[#FFC700]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Hamza Tariq"
                          className="w-full bg-[#161616] border border-[#222] focus:border-[#FFC700] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-1.5">
                        Phone / WhatsApp <span className="text-[#FFC700]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g., 0336 1234567"
                        className="w-full bg-[#161616] border border-[#222] focus:border-[#FFC700] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Preferred Shift */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-1.5">
                        Email Address <span className="text-gray-600">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g., hamza@gmail.com"
                        className="w-full bg-[#161616] border border-[#222] focus:border-[#FFC700] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-1.5">
                        Preferred Training Shift
                      </label>
                      <select
                        value={formData.preferredShift}
                        onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value })}
                        className="w-full bg-[#161616] border border-[#222] focus:border-[#FFC700] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors cursor-pointer"
                      >
                        {shiftOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#111] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-1.5">
                      I'm Interested In
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#161616] border border-[#222] focus:border-[#FFC700] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors cursor-pointer"
                    >
                      {inquiryOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-1.5">
                      Your Message or Fitness Goal
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you want to achieve (e.g. build muscle, fat loss, Olympic lifting, PT rates, or scheduling a visit)..."
                      className="w-full bg-[#161616] border border-[#222] focus:border-[#FFC700] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <p className="text-[11px] text-gray-500">
                      🔒 No spam. We reply directly by WhatsApp or Phone call.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3 bg-[#FFC700] hover:bg-white text-black font-black uppercase tracking-wider text-xs rounded-full transition-all duration-200 shadow-lg shadow-[#FFC700]/20 cursor-pointer flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Map & Direct Physical Location Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Interactive Google Map Embed */}
          <div className="rounded-3xl bg-[#111] border border-[#222] overflow-hidden shadow-2xl relative">
            <div className="p-4 border-b border-[#222] bg-[#141414] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFC700]" />
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  Gym Location Map
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=PLOT+NO.G.P.C+123+opposite+KFC+KARACHI+Block+4+Gulshan-e-Iqbal+Karachi+75300"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-[#FFC700] hover:text-white uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="relative w-full h-[280px] sm:h-[320px] bg-[#0A0A0A]">
              <iframe
                title="Robust Muscle Gym Location Map Karachi"
                src="https://maps.google.com/maps?q=PLOT+NO.G.P.C+123+opposite+KFC+Block+4+Gulshan-e-Iqbal+Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md border border-[#333] px-3 py-1.5 rounded-xl shadow-lg pointer-events-none">
                <div className="text-[11px] font-black text-[#FFC700] uppercase">
                  Robust Muscle Gym
                </div>
                <div className="text-[9px] text-gray-300">
                  Opp. KFC • Block 4 Gulshan-e-Iqbal
                </div>
              </div>
            </div>

            {/* Map Footer Bar */}
            <div className="p-4 bg-[#141414] border-t border-[#222] flex items-center justify-between gap-2 text-xs">
              <span className="text-gray-400 text-[11px]">
                Opposite KFC, Block 4 Commercial Hub
              </span>
              <a
                href="https://maps.google.com/?q=PLOT+NO.G.P.C+123+opposite+KFC+KARACHI+Block+4+Gulshan-e-Iqbal+Karachi+75300"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#FFC700] hover:bg-white text-black font-black uppercase text-[10px] tracking-wider rounded-full transition-colors flex items-center gap-1.5 shrink-0 shadow-md shadow-[#FFC700]/20"
              >
                <Navigation className="w-3 h-3 text-black" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Direct Address & Facility Desk Details */}
          <div className="p-6 rounded-3xl bg-[#111] border border-[#222] shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#222]">
              <div className="flex items-center gap-2">
                <RobustMuscleLogo size="sm" />
              </div>
              <span className="text-[10px] uppercase font-bold text-gray-400 bg-[#1A1A1A] px-2.5 py-0.5 rounded-full border border-[#333]">
                Karachi HQ
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Physical Address:</div>
                  <div className="text-gray-300">PLOT NO.G.P.C, 123, opposite KFC, Block 4 Gulshan-e-Iqbal, Karachi, 75300</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Direct Desk &amp; WhatsApp:</div>
                  <a href="tel:03362848450" className="text-gray-300 hover:text-[#FFC700] font-mono">
                    0336 2848450
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Operating Hours:</div>
                  <div className="text-gray-300">Mon – Sat: 6:00 AM – 9:00 AM &amp; 4:00 PM – 12:00 AM</div>
                  <div className="text-red-400 font-semibold">Sunday: Closed for recovery</div>
                </div>
              </div>
            </div>

            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-[#1A1A1A] hover:bg-[#FFC700] text-gray-200 hover:text-black font-black uppercase text-xs tracking-wider rounded-full transition-colors border border-[#333] hover:border-[#FFC700] cursor-pointer mt-2"
              >
                Or Book An Appointment Online
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
