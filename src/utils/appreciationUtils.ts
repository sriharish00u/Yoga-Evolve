// User appreciation utilities for yoga training
// Handles badges, streaks, progress tracking, and motivational features

export interface UserStats {
  totalSessions: number;
  totalPracticeTime: number; // in minutes
  currentStreak: number;
  longestStreak: number;
  favoritePose: string;
  averageSessionLength: number;
  badges: Badge[];
  lastPracticeDate: string;
  weeklyGoal: number; // minutes per week
  monthlyGoal: number; // minutes per month
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate: string;
  category: 'practice' | 'streak' | 'achievement' | 'pose';
}

export interface ProgressMilestone {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  unit: string;
  reward: string;
}

class AppreciationManager {
  private stats: UserStats;
  private readonly STORAGE_KEY = 'yoga.appreciation.v1';

  constructor() {
    this.stats = this.loadStats();
  }

  // Load user stats from localStorage
  private loadStats(): UserStats {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }

    return {
      totalSessions: 0,
      totalPracticeTime: 0,
      currentStreak: 0,
      longestStreak: 0,
      favoritePose: '',
      averageSessionLength: 0,
      badges: [],
      lastPracticeDate: '',
      weeklyGoal: 150, // 2.5 hours per week
      monthlyGoal: 600, // 10 hours per month
    };
  }

  // Save user stats to localStorage
  private saveStats(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.stats));
  }

  // Record a completed session
  recordSession(sessionLength: number, poseName?: string): void {
    const today = new Date().toISOString().split('T')[0];
    const lastPractice = this.stats.lastPracticeDate;

    // Update basic stats
    this.stats.totalSessions++;
    this.stats.totalPracticeTime += sessionLength;
    this.stats.averageSessionLength = this.stats.totalPracticeTime / this.stats.totalSessions;

    // Update streak
    if (lastPractice === today) {
      // Already practiced today, don't change streak
    } else if (this.isConsecutiveDay(lastPractice, today)) {
      this.stats.currentStreak++;
    } else {
      this.stats.currentStreak = 1;
    }

    this.stats.longestStreak = Math.max(this.stats.longestStreak, this.stats.currentStreak);
    this.stats.lastPracticeDate = today;

    // Update favorite pose
    if (poseName) {
      this.updateFavoritePose(poseName);
    }

    // Check for new badges
    this.checkForBadges();

    this.saveStats();
  }

  // Check if two dates are consecutive
  private isConsecutiveDay(date1: string, date2: string): boolean {
    if (!date1) return false;

    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays === 1;
  }

  // Update favorite pose tracking
  private updateFavoritePose(poseName: string): void {
    // Simple implementation - could be enhanced with pose usage tracking
    this.stats.favoritePose = poseName;
  }

  // Check and award badges
  private checkForBadges(): void {
    const newBadges: Badge[] = [];

    // Practice badges
    if (this.stats.totalSessions >= 1 && !this.hasBadge('first-session')) {
      newBadges.push({
        id: 'first-session',
        name: 'First Steps',
        description: 'Completed your first yoga session',
        icon: '🌱',
        earnedDate: new Date().toISOString(),
        category: 'practice',
      });
    }

    if (this.stats.totalSessions >= 10 && !this.hasBadge('dedicated-practitioner')) {
      newBadges.push({
        id: 'dedicated-practitioner',
        name: 'Dedicated Practitioner',
        description: 'Completed 10 yoga sessions',
        icon: '💪',
        earnedDate: new Date().toISOString(),
        category: 'practice',
      });
    }

    if (this.stats.totalSessions >= 50 && !this.hasBadge('yoga-warrior')) {
      newBadges.push({
        id: 'yoga-warrior',
        name: 'Yoga Warrior',
        description: 'Completed 50 yoga sessions',
        icon: '⚔️',
        earnedDate: new Date().toISOString(),
        category: 'practice',
      });
    }

    // Streak badges
    if (this.stats.currentStreak >= 7 && !this.hasBadge('week-warrior')) {
      newBadges.push({
        id: 'week-warrior',
        name: 'Week Warrior',
        description: 'Maintained a 7-day practice streak',
        icon: '🔥',
        earnedDate: new Date().toISOString(),
        category: 'streak',
      });
    }

    if (this.stats.longestStreak >= 30 && !this.hasBadge('month-master')) {
      newBadges.push({
        id: 'month-master',
        name: 'Month Master',
        description: 'Maintained a 30-day practice streak',
        icon: '👑',
        earnedDate: new Date().toISOString(),
        category: 'streak',
      });
    }

    // Time-based badges
    if (this.stats.totalPracticeTime >= 60 && !this.hasBadge('hour-hero')) {
      newBadges.push({
        id: 'hour-hero',
        name: 'Hour Hero',
        description: 'Practiced for a total of 1 hour',
        icon: '⏰',
        earnedDate: new Date().toISOString(),
        category: 'achievement',
      });
    }

    if (this.stats.totalPracticeTime >= 600 && !this.hasBadge('zen-master')) {
      newBadges.push({
        id: 'zen-master',
        name: 'Zen Master',
        description: 'Practiced for a total of 10 hours',
        icon: '🧘',
        earnedDate: new Date().toISOString(),
        category: 'achievement',
      });
    }

    // Add new badges to stats
    this.stats.badges.push(...newBadges);
  }

  // Check if user has a specific badge
  private hasBadge(badgeId: string): boolean {
    return this.stats.badges.some(badge => badge.id === badgeId);
  }

  // Get current user stats
  getStats(): UserStats {
    return { ...this.stats };
  }

  // Get progress milestones
  getProgressMilestones(): ProgressMilestone[] {
    return [
      {
        id: 'weekly-goal',
        title: 'Weekly Goal',
        description: 'Practice time this week',
        target: this.stats.weeklyGoal,
        current: this.getWeeklyPracticeTime(),
        unit: 'minutes',
        reward: 'Weekly Warrior Badge',
      },
      {
        id: 'monthly-goal',
        title: 'Monthly Goal',
        description: 'Practice time this month',
        target: this.stats.monthlyGoal,
        current: this.getMonthlyPracticeTime(),
        unit: 'minutes',
        reward: 'Monthly Master Badge',
      },
      {
        id: 'streak-goal',
        title: 'Streak Goal',
        description: 'Current practice streak',
        target: 30,
        current: this.stats.currentStreak,
        unit: 'days',
        reward: 'Consistency Champion Badge',
      },
    ];
  }

  // Get practice time for current week
  private getWeeklyPracticeTime(): number {
    // Simplified implementation - would need session history with dates
    // For now, return total practice time (placeholder)
    return this.stats.totalPracticeTime;
  }

  // Get practice time for current month
  private getMonthlyPracticeTime(): number {
    // Simplified implementation - would need session history with dates
    // For now, return total practice time (placeholder)
    return this.stats.totalPracticeTime;
  }

  // Generate motivational message based on stats
  generateMotivationalMessage(): string {
    const messages = [
      "Every pose is a step toward inner peace. Keep flowing! 🌊",
      "Your dedication to yoga is inspiring. You're doing amazing! ✨",
      "Remember: yoga is not about perfection, it's about progress. 🌱",
      "Each breath brings you closer to harmony. Breathe on! 💨",
      "Your practice is a gift to yourself. Cherish it! 🎁",
      "Strength and flexibility grow with each session. Stay strong! 💪",
      "Mindfulness begins with awareness. You're cultivating it beautifully! 🧘",
    ];

    // Personalized messages based on streak
    if (this.stats.currentStreak >= 7) {
      messages.push("Your consistency is remarkable! Keep the streak alive! 🔥");
    }

    if (this.stats.totalSessions >= 25) {
      messages.push("You're building a beautiful yoga journey. Proud of you! 🌟");
    }

    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Get achievement summary for sharing
  getAchievementSummary(): string {
    return `I've completed ${this.stats.totalSessions} yoga sessions with a ${this.stats.currentStreak}-day streak! 🧘 #YogaJourney #ProjectEvolvingYoga`;
  }

  // Reset stats (for testing or user request)
  resetStats(): void {
    this.stats = {
      totalSessions: 0,
      totalPracticeTime: 0,
      currentStreak: 0,
      longestStreak: 0,
      favoritePose: '',
      averageSessionLength: 0,
      badges: [],
      lastPracticeDate: '',
      weeklyGoal: 150,
      monthlyGoal: 600,
    };
    this.saveStats();
  }
}

// Export singleton instance
export const appreciationManager = new AppreciationManager();

// Utility functions for UI display
export const appreciationUIUtils = {
  // Format time duration
  formatDuration(minutes: number): string {
    if (minutes < 60) {
      return `${Math.round(minutes)}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = Math.round(minutes % 60);
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  },

  // Get badge color based on category
  getBadgeColor(category: Badge['category']): string {
    const colors = {
      practice: '#3498db',
      streak: '#e74c3c',
      achievement: '#27ae60',
      pose: '#f39c12',
    };
    return colors[category] || '#95a5a6';
  },

  // Calculate progress percentage
  calculateProgress(current: number, target: number): number {
    return Math.min((current / target) * 100, 100);
  },

  // Get encouragement message based on progress
  getEncouragementMessage(progress: number): string {
    if (progress >= 100) {
      return "Congratulations! Goal achieved! 🎉";
    } else if (progress >= 75) {
      return "You're so close! Keep going! 🚀";
    } else if (progress >= 50) {
      return "Halfway there! You're doing great! 💪";
    } else if (progress >= 25) {
      return "Great start! Keep the momentum! 🌟";
    } else {
      return "Every session counts! You've got this! 🌱";
    }
  },
};
