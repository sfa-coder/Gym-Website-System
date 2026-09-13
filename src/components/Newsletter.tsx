import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Gift, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState('Strength & Muscle');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#FFC700', '#C4E600', '#FFFFFF', '#050505']
      });
    } catch {}
  };

  return (
    <section id="newsletter-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222]">
      <div className="relative rounded-3xl bg-[#111] border border-[#222] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
        {/* Background glow graphics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC700]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFC700]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#222] text-[#FFC700] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Gift className="w-3.5 h-3.5" />
            Special New Member Incentive
          </div>

          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase">
            Stay Ahead Of The Pack. <br className="hidden sm:inline" />
            <span className="text-[#FFC700]">Get Your Free 7-Day Pass.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed max-w-2xl mx-auto">
            Join 45,000+ athletes receiving our weekly Sunday split drops, science-based macro protocols, recovery hacks, and exclusive coach Q&A sessions.
          </p>

          {submitted ? (
            <div className="mt-8 p-6 rounded-2xl bg-[#1A1A1A] border border-[#FFC700]/40 max-w-lg mx-auto text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#111] text-[#FFC700] border border-[#FFC700]/40 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black italic tracking-tight text-white uppercase">Pass & Split Sent!</h3>
              <p className="text-xs text-gray-300">
                Check <strong className="text-white">{email}</strong> for your voucher bar-code and your custom <strong className="text-[#FFC700]">{goal}</strong> protocol.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#FFC700] hover:underline font-bold pt-1 inline-block cursor-pointer"
              >
                Sign up another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto space-y-4">
              {/* Goal Pills */}
              <div className="flex flex-wrap justify-center gap-2">
                {(['Strength & Muscle', 'Boxing Stamina', 'Rapid Fat Loss', 'Athletic Mobility'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    className={`px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter transition-all cursor-pointer ${
                      goal === g
                        ? 'bg-[#FFC700] text-black shadow-md shadow-[#FFC700]/25'
                        : 'bg-[#1A1A1A] border border-[#222] text-gray-400 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              {/* Email Form Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-2 bg-[#0A0A0A] p-2 rounded-full border border-[#333] focus-within:border-[#FFC700] transition-colors shadow-inner">
                <div className="flex items-center gap-2 pl-4 w-full sm:w-auto flex-1">
                  <Mail className="w-4 h-4 text-gray-500 shrink-0" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-gray-600 py-1"
                  />
                </div>
                <button
                  type="submit"
                  id="newsletter-submit-btn"
                  className="w-full sm:w-auto px-6 py-3 bg-[#FFC700] hover:bg-white text-black font-black uppercase tracking-tighter rounded-full text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FFC700]/20 shrink-0 cursor-pointer"
                >
                  <span>Claim 7-Day Pass</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-gray-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFC700]" />
                  No spam guarantee
                </span>
                <span>•</span>
                <span>One-click unsubscribe anytime</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
