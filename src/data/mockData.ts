import { Trainer, LeaderboardMember, SocialPost, MemberTestimonial, UserFitnessProfile, PushNotification } from '../types';
import raveelHeroImg from '../assets/images/raveel_khan_hero_real_1788461312474.jpg';

export const INITIAL_TRAINERS: Trainer[] = [
  {
    id: 't-founder',
    name: 'Raveel Khan',
    role: 'Founder & Head Coach',
    specialty: 'Elite Strength & Conditioning, Hypertrophy & Athlete Transformation',
    experienceYears: 14,
    rating: 5.0,
    reviewCount: 340,
    image: raveelHeroImg,
    bio: 'Founder and Head Coach at Robust Muscle Gym Karachi. Spearheading champion physique transformations, Olympic barbell lifting, and disciplined mental conditioning in Gulshan-e-Iqbal.',
    hourlyRate: 100,
    tag: 'Founder & Head Coach',
    badges: ['Founder', 'Head Coach', 'Elite Strength', 'Gulshan-e-Iqbal'],
    availability: ['06:00 AM', '08:00 AM', '04:30 PM', '06:30 PM', '08:30 PM', '10:00 PM']
  },
  {
    id: 't-1',
    name: 'Alex Joly',
    role: 'Head Boxing & Conditioning Coach',
    specialty: 'High-Velocity Boxing, Explosive Power & Conditioning',
    experienceYears: 12,
    rating: 4.98,
    reviewCount: 184,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    bio: 'Former National Golden Gloves Contender with 12+ years preparing fighters and corporate athletes for supreme stamina and mental grit.',
    hourlyRate: 85,
    tag: 'National Champion',
    badges: ['Boxing Pro', 'HIIT Specialist', 'Fight Camp'],
    availability: ['07:00 AM', '09:00 AM', '11:00 AM', '04:00 PM', '06:00 PM']
  },
  {
    id: 't-2',
    name: 'Marcus Vance',
    role: 'Senior Strength & Hypertrophy Coach',
    specialty: 'Powerlifting Mechanics, Muscle Hypertrophy & Olympic Lifts',
    experienceYears: 10,
    rating: 4.95,
    reviewCount: 230,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    bio: 'CSCS certified bio-mechanics coach focused on sustainable, injury-free progressive overload and explosive kinetic strength.',
    hourlyRate: 90,
    tag: 'CSCS Certified',
    badges: ['Powerlifting', 'Strength Bio-Mechanics', 'Body Recomp'],
    availability: ['06:30 AM', '08:30 AM', '10:30 AM', '03:00 PM', '05:30 PM']
  },
  {
    id: 't-3',
    name: 'Sarah Chen',
    role: 'Athletic Mobility & Functional Movement',
    specialty: 'Yoga for Athletes, Hip Mobility & Core Stability',
    experienceYears: 8,
    rating: 4.97,
    reviewCount: 162,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    bio: 'Bridging the gap between heavy resistance training and functional longevity through rotational power and fascia decompression.',
    hourlyRate: 75,
    tag: 'Mobility Master',
    badges: ['Athletic Yoga', 'Joint Recovery', 'Postural Restoration'],
    availability: ['08:00 AM', '10:00 AM', '01:00 PM', '05:00 PM', '07:00 PM']
  },
  {
    id: 't-4',
    name: 'Elena Rostova',
    role: 'Metabolic Conditioning & Fat Burn Lead',
    specialty: 'High Intensity Intervals, Kettlebell Complexes & Endurance',
    experienceYears: 9,
    rating: 4.93,
    reviewCount: 145,
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    bio: 'Ultra-marathoner and master kettlebell trainer dedicated to shredding body fat while building an iron cardiovascular engine.',
    hourlyRate: 80,
    tag: 'Metabolic Specialist',
    badges: ['Kettlebell Master', 'Fat Shred', 'Cardio Engine'],
    availability: ['06:00 AM', '07:30 AM', '12:00 PM', '04:30 PM', '06:30 PM']
  }
];

export const INITIAL_TESTIMONIALS: MemberTestimonial[] = [
  {
    id: 'test-1',
    name: 'Muhammad Bilawal',
    role: 'Software Engineer • Gulshan-e-Iqbal',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'Joining Robust Muscle transformed my desk-bound lifestyle. Coach Raveel Khan rebuilt my posture from scratch and dialed in my deadlift mechanics. Down 14 kg while hitting a 170 kg barbell pull!',
    stats: '-14 kg Fat • 170 kg Deadlift PR',
    program: 'Hypertrophy & Strength Floor',
    timeframe: '8 Months Member'
  },
  {
    id: 'test-2',
    name: 'Zainab Fatima',
    role: 'Medical Student • Karachi',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'With intense medical rotations, finding a gym in Gulshan with respectful coaching and clean morning split shifts was game-changing. The functional training helped eliminate chronic posture strain.',
    stats: '+50% Functional Stamina • Zero Back Pain',
    program: 'Functional Tone & Athletic Mobility',
    timeframe: '6 Months Member'
  },
  {
    id: 'test-3',
    name: 'Usman Siddiqui',
    role: 'Managing Director • PECHS Karachi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'Coach Raveel Khan’s 1-on-1 personal training is the most rigorous in Karachi. Pure discipline, Olympic iron, and boxing pad rounds after a stressful workday. My energy and focus have skyrocketed.',
    stats: '-22 lbs Fat • 28-Day Consistency Streak',
    program: 'Combat Boxing & Executive PT',
    timeframe: '1.2 Years Member'
  },
  {
    id: 'test-4',
    name: 'Daniyal Sheikh',
    role: 'Competitive Powerlifter • Karachi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'Robust Muscle has the stiffest knurled Texas power bars and calibrated steel plates in Gulshan. Coach Raveel knows periodization and biomechanics inside out. Took my total from 460 kg to 540 kg.',
    stats: 'Gold Medal 74kg Total • 220 kg Deadlift',
    program: 'Competitive Barbell Floor',
    timeframe: '2 Years Member'
  },
  {
    id: 'test-5',
    name: 'Ayesha Noor',
    role: 'Chartered Accountant • Gulistan-e-Johar',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'I used to feel intimidated by commercial gyms, but the team at Robust Muscle welcomed me with genuine encouragement. Lost 9 kg and learned proper kettlebell and free weight technique.',
    stats: '-9 kg Fat • 45 kg Clean Front Squat',
    program: 'Metabolic Conditioning & Fat Loss',
    timeframe: '9 Months Member'
  },
  {
    id: 'test-6',
    name: 'Farhan Qureshi',
    role: 'Tech Founder & Marathon Runner • Karachi',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'The 6:00 AM morning shift gives me an unbeatable start to the day. High-caliber equipment, zero overcrowding, and motivating training partners who push each other every rep.',
    stats: '+8 kg Lean Muscle • Karachi 10K PR',
    program: 'Morning Iron Shift & Cardio Lab',
    timeframe: '1 Year Member'
  }
];

export const INITIAL_LEADERBOARD: LeaderboardMember[] = [
  {
    id: 'lb-1',
    rank: 1,
    name: 'Darius Vance',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    points: 4890,
    workoutsThisMonth: 26,
    caloriesBurned: 18450,
    streakDays: 34,
    tier: 'Diamond',
    change: 'same'
  },
  {
    id: 'lb-2',
    rank: 2,
    name: 'Maya Kowalski',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    points: 4620,
    workoutsThisMonth: 24,
    caloriesBurned: 16900,
    streakDays: 28,
    tier: 'Diamond',
    change: 'up'
  },
  {
    id: 'lb-3',
    rank: 3,
    name: 'Viktor Romanov',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    points: 4350,
    workoutsThisMonth: 22,
    caloriesBurned: 15400,
    streakDays: 21,
    tier: 'Titanium',
    change: 'down'
  },
  {
    id: 'lb-4',
    rank: 4,
    name: 'You (Jordan Cole)',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    points: 3980,
    workoutsThisMonth: 19,
    caloriesBurned: 14200,
    streakDays: 14,
    tier: 'Titanium',
    isCurrentUser: true,
    change: 'up'
  },
  {
    id: 'lb-5',
    rank: 5,
    name: 'Liam Sterling',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    points: 3740,
    workoutsThisMonth: 18,
    caloriesBurned: 12900,
    streakDays: 12,
    tier: 'Gold',
    change: 'same'
  },
  {
    id: 'lb-6',
    rank: 6,
    name: 'Zoe Nakamura',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    points: 3510,
    workoutsThisMonth: 17,
    caloriesBurned: 11800,
    streakDays: 16,
    tier: 'Gold',
    change: 'up'
  },
  {
    id: 'lb-7',
    rank: 7,
    name: 'Chris Becker',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    points: 3200,
    workoutsThisMonth: 15,
    caloriesBurned: 10450,
    streakDays: 9,
    tier: 'Silver',
    change: 'down'
  }
];

export const INITIAL_POSTS: SocialPost[] = [
  {
    id: 'post-1',
    authorName: 'Jordan Cole (You)',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    authorTier: 'Titanium Member',
    timestamp: '28 mins ago',
    content: 'Just smashed a new personal record! 335 lbs on the trap-bar deadlift during morning session with @Marcus Vance. Consistency pays off, keep pushing family! 🔥🏋️‍♂️',
    achievementBadge: '🏆 NEW PR: 335 LBS DEADLIFT',
    likes: 34,
    isLiked: false,
    cheers: 19,
    isCheered: false,
    workoutDetails: {
      type: 'Heavy Pull Day',
      duration: '65 mins',
      calories: 580,
      pr: 'Trap Bar Deadlift (335 lbs)'
    },
    comments: [
      {
        id: 'c-1',
        author: 'Marcus Vance (Coach)',
        avatar: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=200&q=80',
        text: 'Crisp lockout, zero lower back rounding. Next stop is 365 lbs! Proud of the discipline.',
        time: '20 mins ago'
      },
      {
        id: 'c-2',
        author: 'Maya Kowalski',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        text: 'Insane power Jordan!! Watching this motivates me for tonight’s HIIT session! 🔥',
        time: '12 mins ago'
      }
    ]
  },
  {
    id: 'post-2',
    authorName: 'Alex Joly (Head Coach)',
    authorAvatar: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=200&q=80',
    authorTier: 'Master Trainer',
    timestamp: '2 hours ago',
    content: 'Saturday Fight Camp was ELECTRIC today! 28 fighters went through 10 rounds of bag work, pivot combos, and ab blast. The floor was soaking wet. Tag your sparring partners below! 🥊⚡',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
    achievementBadge: '🥊 FIGHT CAMP WARRIORS',
    likes: 78,
    isLiked: true,
    cheers: 42,
    isCheered: true,
    comments: [
      {
        id: 'c-3',
        author: 'Viktor Romanov',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
        text: 'Round 8 nearly broke me but Coach pushed us through. Best workout of the week hands down.',
        time: '1 hour ago'
      }
    ]
  },
  {
    id: 'post-3',
    authorName: 'Maya Kowalski',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    authorTier: 'Diamond Member',
    timestamp: '4 hours ago',
    content: '28-Day Consistency Streak milestone unlocked today! No matter how chaotic life gets, 45 minutes in this iron sanctuary resets the mind. Grateful for this community. ✨💪',
    achievementBadge: '🔥 28-DAY STREAK UNLOCKED',
    likes: 56,
    isLiked: false,
    cheers: 31,
    isCheered: false,
    workoutDetails: {
      type: 'Mobility & Athletic Flow',
      duration: '48 mins',
      calories: 390
    },
    comments: []
  }
];

export const INITIAL_USER_PROFILE: UserFitnessProfile = {
  name: 'Jordan Cole',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  tier: 'Titanium Athlete',
  streakDays: 14,
  weeklyGoal: 5,
  completedWorkoutsThisWeek: 4,
  weeklyCalories: 3250,
  weeklyCaloriesGoal: 4000,
  volumeLiftedKg: 38400,
  activeMinutes: 285,
  weightHistory: [
    { date: 'Aug 1', weight: 81.2 },
    { date: 'Aug 8', weight: 80.5 },
    { date: 'Aug 15', weight: 79.8 },
    { date: 'Aug 22', weight: 79.1 },
    { date: 'Aug 29', weight: 78.4 },
    { date: 'Sep 3', weight: 77.9 }
  ],
  recentWorkouts: [
    {
      id: 'w-1',
      title: 'Heavy Pull & Deadlift Focus',
      date: 'Today, 08:30 AM',
      durationMinutes: 65,
      calories: 580,
      category: 'Strength',
      completed: true
    },
    {
      id: 'w-2',
      title: 'Championship Boxing & Footwork',
      date: 'Yesterday, 06:00 PM',
      durationMinutes: 55,
      calories: 620,
      category: 'Combat',
      completed: true
    },
    {
      id: 'w-3',
      title: 'Upper Body Hypertrophy & Chest',
      date: 'Sep 1, 07:15 AM',
      durationMinutes: 60,
      calories: 510,
      category: 'Strength',
      completed: true
    },
    {
      id: 'w-4',
      title: 'HIIT Kettlebell Sprint Intervals',
      date: 'Aug 30, 05:30 PM',
      durationMinutes: 45,
      calories: 490,
      category: 'Conditioning',
      completed: true
    }
  ],
  personalRecords: [
    { exercise: 'Trap Bar Deadlift', record: '335 lbs', date: 'Today' },
    { exercise: 'Barbell Bench Press', record: '245 lbs', date: 'Aug 24' },
    { exercise: 'Front Squat', record: '275 lbs', date: 'Aug 18' },
    { exercise: 'Max Pull-Ups', record: '21 reps', date: 'Aug 12' }
  ]
};

export const INITIAL_NOTIFICATIONS: PushNotification[] = [
  {
    id: 'n-1',
    title: 'Daily Workout Kickoff! ⚡',
    message: 'Time to crush Leg Day! Your trainer Marcus Vance created your workout schedule.',
    time: '07:00 AM Today',
    type: 'reminder',
    read: false,
    actionText: 'Open Dashboard'
  },
  {
    id: 'n-2',
    title: 'Leaderboard Alert 🔥',
    message: 'You jumped into Rank #4! Only 370 points to overtake Viktor Romanov for the podium.',
    time: '1 hour ago',
    type: 'leaderboard',
    read: false,
    actionText: 'View Standings'
  },
  {
    id: 'n-3',
    title: 'Community Cheers 👏',
    message: 'Coach Alex and 18 members cheered your 335 lb deadlift PR post!',
    time: '2 hours ago',
    type: 'social',
    read: true,
    actionText: 'View Feed'
  }
];
