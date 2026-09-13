export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  image: string;
  bio: string;
  hourlyRate: number;
  tag: string;
  badges: string[];
  availability: string[];
}

export interface BookingSession {
  id: string;
  trainerId: string;
  trainerName: string;
  trainerImage: string;
  clientName: string;
  clientEmail: string;
  date: string;
  time: string;
  sessionType: 'Strength & Conditioning' | 'Boxing & Combat' | 'Fat Loss & HIIT' | 'Yoga & Mobility' | 'Personal Assessment';
  location: 'Main Gym Floor' | 'Combat Ring' | 'Private Studio' | 'Virtual / Online';
  goals: string;
  status: 'confirmed' | 'completed' | 'cancelled';
  price: number;
  createdAt: string;
}

export interface LeaderboardMember {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  points: number;
  workoutsThisMonth: number;
  caloriesBurned: number;
  streakDays: number;
  tier: 'Diamond' | 'Titanium' | 'Gold' | 'Silver';
  isCurrentUser?: boolean;
  change: 'up' | 'down' | 'same';
}

export interface SocialPost {
  id: string;
  authorName: string;
  authorAvatar: string;
  authorTier: string;
  timestamp: string;
  content: string;
  image?: string;
  achievementBadge?: string;
  likes: number;
  isLiked?: boolean;
  cheers: number;
  isCheered?: boolean;
  comments: {
    id: string;
    author: string;
    avatar: string;
    text: string;
    time: string;
  }[];
  workoutDetails?: {
    type: string;
    duration: string;
    calories: number;
    pr?: string;
  };
}

export interface MemberTestimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  stats: string;
  program: string;
  timeframe: string;
}

export interface UserFitnessProfile {
  name: string;
  avatar: string;
  tier: string;
  streakDays: number;
  weeklyGoal: number;
  completedWorkoutsThisWeek: number;
  weeklyCalories: number;
  weeklyCaloriesGoal: number;
  volumeLiftedKg: number;
  activeMinutes: number;
  weightHistory: { date: string; weight: number }[];
  recentWorkouts: {
    id: string;
    title: string;
    date: string;
    durationMinutes: number;
    calories: number;
    category: string;
    completed: boolean;
  }[];
  personalRecords: {
    exercise: string;
    record: string;
    date: string;
  }[];
}

export interface PushNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'reminder' | 'social' | 'leaderboard' | 'booking';
  read: boolean;
  actionText?: string;
  actionPayload?: string;
}

export interface NotificationSettings {
  enabled: boolean;
  dailyWorkoutReminder: boolean;
  reminderTime: string;
  hydrationAlerts: boolean;
  leaderboardRankChange: boolean;
  communityCheerAlerts: boolean;
  streakSaverReminder: boolean;
}
