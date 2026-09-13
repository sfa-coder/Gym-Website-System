import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronRight, CheckCircle2, Dumbbell, ShieldCheck } from 'lucide-react';

// Enhanced facility images representing the uploaded interior photography
import cardioImg from '../assets/images/gym_cardio_zone_1788460246250.jpg';
import weightsImg from '../assets/images/gym_weights_zone_1788460272512.jpg';
import boxingImg from '../assets/images/gym_boxing_zone_1788460294949.jpg';
import lockersImg from '../assets/images/gym_lockers_zone_1788460342419.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'weights' | 'cardio' | 'boxing' | 'facility';
  categoryLabel: string;
  image: string;
  tagline: string;
  description: string;
  equipment: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Cardio & Sprint Turf Floor',
    category: 'cardio',
    categoryLabel: 'Cardio & Turf',
    image: cardioImg,
    tagline: '"GO HARD OR GO HOME" & "NO PAIN NO GAIN"',
    description: 'High-performance commercial treadmills, elliptical cross trainers, and shock-absorbent green turf for sled pushes, walking lunges, and metabolic interval sprints.',
    equipment: ['Commercial Reebok & FitFlex Treadmills', 'High-Incline Ellipticals', 'Sprint Turf Track', 'Full-Length Mirrors with Wall Quotes']
  },
  {
    id: 'g-2',
    title: 'Free Weights & Dumbbell Citadel',
    category: 'weights',
    categoryLabel: 'Free Weights',
    image: weightsImg,
    tagline: '"WINNERS FIND A WAY, LOSERS FIND AN EXCUSE"',
    description: 'Multi-tier dumbbell stations ranging from 5kg to 32kg+ paired with heavy-duty Olympic barbell benches. Backed by our signature superhero wall with illuminated emblems.',
    equipment: ['Urethane Round Dumbbells (5kg - 32kg+)', 'Olympic Flat & Incline Benches', 'Heavy Calibrated Cast Iron Plates', 'Bicep Preacher Station']
  },
  {
    id: 'g-3',
    title: 'Combat & Striking Station',
    category: 'boxing',
    categoryLabel: 'Boxing & Combat',
    image: boxingImg,
    tagline: '"FALL IN LOVE WITH YOUR BODY"',
    description: 'Heavy bag suspension station rigged with Everlast combat gloves and focus pads for rotational hip power, anaerobic boxing stamina, and core conditioning.',
    equipment: ['Heavy Punching Bags', 'Red Everlast Combat Gloves', 'Rotational Strike Target Pads', 'Speed Work Conditioning Station']
  },
  {
    id: 'g-4',
    title: 'Plate-Loaded Stations & Numbered Lockers',
    category: 'facility',
    categoryLabel: 'Facility & Lockers',
    image: lockersImg,
    tagline: '"STRONGER THAN YESTERDAY"',
    description: 'Matte-black personalized athlete lockers (numbered 1 through 30) with adjacent plate-loaded leg presses, hack squats, and cable crossover towers in signature black and yellow.',
    equipment: ['Secure Numbered Lockers (1-30)', 'Plate-Loaded Leg Press & Hack Squat', 'Dual Adjustable Cable Pulley Towers', 'Fully Air-Conditioned Changing Suites']
  }
];

interface GymGalleryProps {
  onBookClick?: () => void;
}

export const GymGallery: React.FC<GymGalleryProps> = ({ onBookClick }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'weights' | 'cardio' | 'boxing' | 'facility'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1F1F1F]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#222] text-[#FFC700] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Official Facility Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
            Gym <span className="text-[#FFC700]">Gallery</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-xl">
            Tour the authentic iron sanctuary at Robust Muscle Karachi. High-grade turf, calibrated weights, combat stations, and premium athlete amenities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-[#101010] p-1.5 rounded-2xl border border-[#222]">
          {[
            { id: 'all', label: 'All Areas' },
            { id: 'weights', label: 'Free Weights' },
            { id: 'cardio', label: 'Cardio Turf' },
            { id: 'boxing', label: 'Boxing' },
            { id: 'facility', label: 'Lockers & Rigs' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#FFC700] text-black shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-[#181818]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="group relative rounded-3xl overflow-hidden bg-[#111] border border-[#222] hover:border-[#FFC700] transition-all duration-300 cursor-pointer shadow-xl flex flex-col"
          >
            {/* Image Box */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/30 to-transparent" />

              {/* Tag Overlays */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#FFC700] text-[10px] font-black uppercase tracking-wider border border-[#FFC700]/30">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-9 h-9 rounded-full bg-[#FFC700] text-black flex items-center justify-center shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Tagline Banner */}
              <div className="absolute bottom-3 left-4 right-4">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#FFC700] italic drop-shadow-sm">
                  {item.tagline}
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-[#FFC700] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] text-gray-400">
                  <Dumbbell className="w-3.5 h-3.5 text-[#FFC700]" />
                  <span>{item.equipment.length} Specialized Equipment Items</span>
                </div>
                <span className="text-xs font-bold text-[#FFC700] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox / Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl bg-[#0F0F0F] border border-[#2B2B2B] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-black">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover filter contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/40" />

              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/80 hover:bg-[#FFC700] hover:text-black text-white transition-colors cursor-pointer border border-[#333]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-[#FFC700] text-black text-[10px] font-black uppercase tracking-wider">
                  {activeModalItem.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-2">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#FFC700] mt-0.5 italic">
                  {activeModalItem.tagline}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-gray-300 leading-relaxed">
                {activeModalItem.description}
              </p>

              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">
                  Zone Specs & Equipment Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalItem.equipment.map((eq, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#161616] border border-[#222]">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC700] shrink-0" />
                      <span className="text-xs text-gray-200 font-medium">{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-gray-400">
                  Available for all Robust Muscle members during standard floor hours.
                </div>
                {onBookClick && (
                  <button
                    onClick={() => {
                      setActiveModalItem(null);
                      onBookClick();
                    }}
                    className="px-6 py-2.5 bg-[#FFC700] hover:bg-white text-black font-black uppercase text-xs tracking-wider rounded-full transition-colors cursor-pointer"
                  >
                    Book Appointment For This Zone
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
