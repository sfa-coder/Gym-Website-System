import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  ChevronDown,
  CreditCard,
  Clock,
  Dumbbell,
  ShieldCheck,
  Search,
  MessageSquare,
  Sparkles,
  Phone,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  id: string;
  category: 'pricing' | 'protocols' | 'trial' | 'coaching';
  categoryLabel: string;
  question: string;
  answer: string;
  keyPoints?: string[];
  badge?: string;
}

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('faq-pricing');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqs: FAQItem[] = [
    {
      id: 'faq-pricing',
      category: 'pricing',
      categoryLabel: 'Pricing & Plans',
      badge: 'Popular',
      question: 'What are the membership pricing plans and package options at Robust Muscle?',
      answer:
        'We offer transparent, accessible pricing tailored for serious gym-goers and beginners alike in Karachi. Our standard monthly general floor membership ranges between PKR 4,500 and PKR 6,000 per month depending on commitment length (Monthly, Quarterly, or Annual packages with up to 25% savings). All memberships grant full access to both Morning and Evening split shifts, free weight barbell zones, pin-loaded resistance equipment, cardio zone, and locker facilities. Specialized 1-on-1 Personal Training packages with Coach Raveel Khan and senior coaches are available as bespoke add-ons.',
      keyPoints: [
        'Monthly Standard: PKR 4,500 – 6,000 / month',
        'Quarterly & Bi-Annual Discounted Bundles available',
        'No hidden annual maintenance surcharges',
        'Payment accepted via Cash, Raast, Online Bank Transfer, and JazzCash/EasyPaisa'
      ]
    },
    {
      id: 'faq-protocols',
      category: 'protocols',
      categoryLabel: 'Gym Protocols',
      badge: 'Important',
      question: 'What are the gym access protocols, timings, and shift policies?',
      answer:
        'Robust Muscle operates on a high-efficiency dual-shift schedule from Monday to Saturday, allowing you to train before work or late into the night: Morning Shift runs from 6:00 AM to 9:00 AM, and Evening Shift runs from 4:00 PM to 12:00 AM midnight. Sundays are dedicated to facility sanitization and muscular recovery. Members check in at the front desk with their digital membership ID or biometric log. To maintain our professional training environment, we enforce strict floor protocols: indoor training shoes only, towels mandatory on equipment, and always re-racking plates and dumbbells after use.',
      keyPoints: [
        'Morning Shift: 6:00 AM – 9:00 AM (Mon – Sat)',
        'Evening Shift: 4:00 PM – 12:00 AM Midnight (Mon – Sat)',
        'Sunday: Closed for deep sanitization and rest',
        'Mandatory re-rack policy and clean shoe rule enforced'
      ]
    },
    {
      id: 'faq-trial',
      category: 'trial',
      categoryLabel: 'First Visit',
      badge: 'For New Comers',
      question: 'What should I bring for my trial session or first day at the gym?',
      answer:
        'For your first visit or booked appointment, you will need clean indoor training footwear (please bring running or flat-soled lifting shoes to change into, keeping outdoor street dust off the turf and lifting platforms), a workout sweat towel, a hydration bottle or shaker, and athletic workout clothing (breathable t-shirt, track pants or shorts). If you are registering for the first time, please keep your original CNIC or Student ID handy for front desk verification. Our coaches will walk you through a brief physical movement screen before starting your workout.',
      keyPoints: [
        'Clean athletic indoor shoes (no dusty outdoor footwear on turf/platforms)',
        'Personal gym towel & water bottle',
        'CNIC or Student ID card for one-time registration',
        'Any prior medical history or joint notes for your coach'
      ]
    },
    {
      id: 'faq-coaching',
      category: 'coaching',
      categoryLabel: 'Personal Training',
      question: 'How do 1-on-1 Personal Training appointments with Coach Raveel Khan work?',
      answer:
        '1-on-1 Personal Training gives you individualized, dedicated guidance with Founder & Head Coach Raveel Khan or certified master coaches. Each session includes progressive overload periodization, movement screening, barbell technique refinement, and customized nutritional targets matched to Pakistani culinary staples. You can book an introductory appointment through our online scheduler or WhatsApp desk to evaluate your current mobility, strength baselines, and body composition goals.',
      keyPoints: [
        'Direct 1-on-1 coaching with individualized focus',
        'Posture and biomechanics alignment for safe lifting',
        'Customized nutrition blueprint (high-protein Desi diet guides)',
        'Flexible scheduling around your business or university commitments'
      ]
    },
    {
      id: 'faq-beginners',
      category: 'trial',
      categoryLabel: 'First Visit',
      question: 'I have never worked out in a gym before. Is Robust Muscle beginner-friendly?',
      answer:
        'Yes, absolutely! Over 40% of our members started with zero gym experience. When you join, on-duty floor trainers guide you through foundational machine adjustments, proper posture, breathing patterns, and safe dumbbell selection. We foster an encouraging, zero-ego community where every member—from national powerlifters to first-time students—respects the hard work of others.',
      keyPoints: [
        'Dedicated floor trainers always available for spotting and machine guidance',
        'Structured beginner orientation program',
        'Encouraging, supportive gym culture with zero intimidation'
      ]
    },
    {
      id: 'faq-facilities',
      category: 'protocols',
      categoryLabel: 'Gym Protocols',
      question: 'Are secure lockers, changing areas, and vehicle parking available?',
      answer:
        'Yes. We provide secure day lockers in our dedicated locker area for your gym bag and valuables, clean private changing booths, and sanitized washrooms. For parking, ample free motorcycle and car parking is available right in front of our facility on Plot No. G.P.C 123, conveniently located directly opposite KFC in Block 4 Gulshan-e-Iqbal.',
      keyPoints: [
        'Complimentary secure day lockers for all active members',
        'Spacious changing booths and clean washrooms',
        'Ample front parking for bikes and cars right opposite KFC Gulshan'
      ]
    },
    {
      id: 'faq-trial-booking',
      category: 'pricing',
      categoryLabel: 'Pricing & Plans',
      question: 'Can I get a trial day or facility tour before committing to a full membership?',
      answer:
        'Yes! We encourage prospective members to visit our facility, inspect the equipment, and meet Coach Raveel Khan in person. You can book a free appointment or facility walkthrough using the "Book Appointment" button on this website, or drop a message on our official WhatsApp desk (0336 2848450) to reserve your trial slot.',
      keyPoints: [
        'Complimentary walk-in facility walkthroughs during shift hours',
        'Online appointment booking with immediate confirmation',
        'Instant WhatsApp coordination with the front desk'
      ]
    }
  ];

  // Filtered list
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.keyPoints &&
          faq.keyPoints.some((kp) =>
            kp.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const categories = [
    { id: 'all', label: 'All Inquiries' },
    { id: 'pricing', label: 'Membership & Pricing' },
    { id: 'protocols', label: 'Access Protocols' },
    { id: 'trial', label: 'First Visit & What to Bring' },
    { id: 'coaching', label: 'Personal Coaching' },
  ];

  return (
    <section
      id="faq-section"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222] relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#FFC700]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#222] text-[#FFC700] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions? We Have Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase">
            FREQUENTLY ASKED <span className="text-[#FFC700]">QUESTIONS</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl">
            Everything you need to know about joining Robust Muscle: transparent membership plans, gym shift protocols, equipment rules, and trial appointment preparation.
          </p>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (openId) {
                setOpenId(null);
              } else if (filteredFaqs.length > 0) {
                setOpenId(filteredFaqs[0].id);
              }
            }}
            className="px-4 py-2 rounded-full bg-[#161616] hover:bg-[#222] border border-[#333] text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            {openId ? 'Collapse View' : 'Open Sample'}
          </button>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2 bg-[#FFC700] hover:bg-white text-black font-black uppercase text-xs tracking-wider rounded-full transition-all duration-200 shadow-md shadow-[#FFC700]/20 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-black shrink-0" />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-[#111] p-3 rounded-2xl border border-[#222]">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#FFC700] text-black shadow-md shadow-[#FFC700]/20'
                  : 'bg-[#181818] text-gray-400 hover:text-white hover:bg-[#222]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Real-time Search Box */}
        <div className="relative min-w-[240px] sm:w-72 shrink-0">
          <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pricing, shoes, shift..."
            className="w-full bg-[#181818] border border-[#262626] focus:border-[#FFC700] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white text-xs cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center bg-[#111] rounded-3xl border border-[#222]">
            <HelpCircle className="w-10 h-10 text-gray-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">
              No matching questions found
            </h4>
            <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
              We couldn't find an answer matching "{searchQuery}". You can ask us directly via WhatsApp or Phone call.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <a
                href="https://wa.me/923362848450?text=Hello%20Robust%20Muscle%2C%20I%20have%20a%20question%20regarding..."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#25D366] text-black font-black uppercase text-xs rounded-full inline-flex items-center gap-2 hover:bg-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-5 py-2 bg-[#222] text-white font-bold uppercase text-xs rounded-full hover:bg-[#333] transition-colors cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141414] border-[#FFC700]/70 shadow-xl shadow-[#FFC700]/5'
                    : 'bg-[#101010] border-[#222] hover:border-[#333]'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#FFC700] text-black shadow-md shadow-[#FFC700]/20'
                          : 'bg-[#1A1A1A] text-[#FFC700] group-hover:bg-[#222]'
                      }`}
                    >
                      {faq.category === 'pricing' ? (
                        <CreditCard className="w-4 h-4" />
                      ) : faq.category === 'protocols' ? (
                        <Clock className="w-4 h-4" />
                      ) : faq.category === 'coaching' ? (
                        <Dumbbell className="w-4 h-4" />
                      ) : (
                        <ShieldCheck className="w-4 h-4" />
                      )}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[9px] font-black uppercase tracking-wider text-gray-400 bg-[#1A1A1A] px-2 py-0.5 rounded-full border border-[#2a2a2a]">
                          {faq.categoryLabel}
                        </span>
                        {faq.badge && (
                          <span className="text-[9px] font-black uppercase tracking-wider text-[#FFC700] bg-[#FFC700]/10 border border-[#FFC700]/30 px-2 py-0.5 rounded-full">
                            {faq.badge}
                          </span>
                        )}
                      </div>
                      <h3
                        className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                          isOpen ? 'text-[#FFC700]' : 'text-white group-hover:text-[#FFC700]'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#FFC700] text-black border-[#FFC700] rotate-180'
                        : 'bg-[#1A1A1A] text-gray-400 border-[#333] group-hover:text-white group-hover:border-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#1F1F1F] text-sm text-gray-300 leading-relaxed">
                        <p className="text-gray-300">{faq.answer}</p>

                        {faq.keyPoints && faq.keyPoints.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-[#1C1C1C] grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {faq.keyPoints.map((point, pIdx) => (
                              <div
                                key={pIdx}
                                className="flex items-start gap-2 text-xs text-gray-300 bg-[#161616] p-2.5 rounded-xl border border-[#222]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC700] shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Still Have Questions Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#111] border border-[#222] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-2xl bg-[#FFC700]/10 border border-[#FFC700]/30 text-[#FFC700] flex items-center justify-center shrink-0 mx-auto md:mx-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-black italic tracking-tight text-white uppercase">
              Still Have Questions or Specific Medical Inquiries?
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
              Talk directly to Coach Raveel Khan’s desk on WhatsApp or drop by our gym opposite KFC in Gulshan-e-Iqbal.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <a
            href="https://wa.me/923362848450?text=Hello%20Robust%20Muscle%2C%20I%20have%20a%20question%20before%20joining."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#25D366] hover:bg-white text-black font-black uppercase text-xs tracking-wider rounded-full transition-colors flex items-center gap-2 shadow-lg shadow-[#25D366]/20"
          >
            <MessageSquare className="w-4 h-4 text-black" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="tel:03362848450"
            className="px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#222] border border-[#333] hover:border-[#FFC700] text-white font-bold uppercase text-xs tracking-wider rounded-full transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#FFC700]" />
            <span>0336 2848450</span>
          </a>
        </div>
      </div>
    </section>
  );
};
