import type { GamificationState } from './gamification'

export interface RecentSession {
  date: string
  durationMinutes: number
  energy: number
  xp: number
  categories: string[]
  posesCompleted: number
}

export interface UserStats {
  totalSessions: number
  totalPracticeTime: number
  currentStreak: number
  longestStreak: number
  favoritePose: string
  averageSessionLength: number
  badges: Badge[]
  lastPracticeDate: string
  weeklyGoal: number
  monthlyGoal: number
  recentSessions: RecentSession[]
  totalPosesCompleted: number
  categoriesPracticed: string[]
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  earnedDate: string
  category: 'practice' | 'streak' | 'achievement' | 'pose' | 'test' | 'gamification'
}

export interface ProgressMilestone {
  id: string
  title: string
  description: string
  target: number
  current: number
  unit: string
  reward: string
}

interface BadgeCheckInput {
  id: string
  check: (stats: UserStats, gstate: GamificationState) => boolean
  name: string
  icon: string
  description: string
  category: Badge['category']
}

const BADGE_CHECKS: BadgeCheckInput[] = [
  { id: 'first_session',  check: (s) => s.totalSessions >= 1,        name: 'First Step',       icon: '🌱', description: 'Completed your first session',            category: 'practice' },
  { id: 'sessions_5',     check: (s) => s.totalSessions >= 5,        name: 'Regular Visitor',  icon: '📅', description: '5 sessions completed',                    category: 'practice' },
  { id: 'sessions_10',    check: (s) => s.totalSessions >= 10,       name: 'Steady Practice',  icon: '📿', description: '10 sessions completed',                   category: 'practice' },
  { id: 'sessions_50',    check: (s) => s.totalSessions >= 50,       name: 'Yoga Warrior',     icon: '⚔️', description: '50 sessions completed',                   category: 'practice' },
  { id: 'streak_3',       check: (s) => s.currentStreak >= 3,        name: 'Consistent Yogi',  icon: '🔥', description: '3-day practice streak',                   category: 'streak' },
  { id: 'streak_7',       check: (s) => s.currentStreak >= 7,        name: 'Devoted Seeker',   icon: '⚡', description: '7-day practice streak',                   category: 'streak' },
  { id: 'streak_30',      check: (s) => s.longestStreak >= 30,       name: 'Iron Will',        icon: '👑', description: '30-day practice streak',                  category: 'streak' },
  { id: 'xp_500',         check: (_, g) => g.totalXP >= 500,         name: 'Sapling',          icon: '🌿', description: 'Earned 500 XP',                           category: 'gamification' },
  { id: 'xp_2000',        check: (_, g) => g.totalXP >= 2000,        name: 'Banyan Tree',      icon: '🌳', description: 'Earned 2000 XP',                          category: 'gamification' },
  { id: 'xp_5000',        check: (_, g) => g.totalXP >= 5000,        name: 'Ancient Grove',    icon: '🏔️', description: 'Earned 5000 XP',                          category: 'gamification' },
  { id: 'perfect_hold',   check: (_, g) => g.perfectHolds >= 1,      name: 'Pure Form',        icon: '✨', description: 'Perfect hold on a pose',                  category: 'achievement' },
  { id: 'perfect_5',      check: (_, g) => g.perfectHolds >= 5,      name: 'Form Master',      icon: '💎', description: '5 perfect holds across sessions',         category: 'achievement' },
  { id: 'combo_3',        check: (_, g) => g.bestCombo >= 3,         name: 'On Fire',          icon: '🌶️', description: '3× pose combo',                           category: 'gamification' },
  { id: 'combo_5',        check: (_, g) => g.bestCombo >= 5,         name: 'Flow State',       icon: '🌊', description: '5× pose combo',                           category: 'gamification' },
  { id: 'morning_5',      check: (_, g) => g.morningSessions >= 5,   name: 'Dawn Warrior',     icon: '☀️', description: '5 morning sessions (before 8 AM)',          category: 'achievement' },
  { id: 'all_categories', check: (s) => s.categoriesPracticed.length >= 7, name: 'Explorer',  icon: '🗺️', description: 'Practiced all pose categories',           category: 'achievement' },
  { id: 'time_60min',     check: (s) => s.totalPracticeTime >= 60,   name: 'Hour Hero',        icon: '⏰', description: 'Total practice time: 1 hour',              category: 'achievement' },
  { id: 'time_600min',    check: (s) => s.totalPracticeTime >= 600,  name: 'Zen Master',       icon: '🧘', description: 'Total practice time: 10 hours',            category: 'achievement' },
  { id: 'poses_100',      check: (_, g) => g.totalPosesCompleted >= 100, name: 'Pose Collector', icon: '📖', description: 'Completed 100 poses across all sessions', category: 'pose' },
]

class AppreciationManager {
  private stats: UserStats
  private readonly STORAGE_KEY = 'yoga.appreciation.v1'

  constructor() {
    this.stats = this.loadStats()
  }

  private loadStats(): UserStats {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (!parsed.recentSessions) parsed.recentSessions = []
        if (!parsed.totalPosesCompleted) parsed.totalPosesCompleted = 0
        if (!parsed.categoriesPracticed) parsed.categoriesPracticed = []
        return parsed
      }
    } catch {
      // ignore
    }
    return this.defaultStats()
  }

  private defaultStats(): UserStats {
    return {
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
      recentSessions: [],
      totalPosesCompleted: 0,
      categoriesPracticed: [],
    }
  }

  private saveStats(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.stats))
    } catch {
      // ignore
    }
  }

  recordSessionFromResult(
    result: {
      durationSeconds: number
      avgMatchScore: number
      posesCompleted: number
      categoriesPracticed: string[]
      xpEarned: number
    },
    gstate: GamificationState
  ): string[] {
    const durationMinutes = Math.round(result.durationSeconds / 60)
    const today = new Date().toISOString().split('T')[0]
    const lastPractice = this.stats.lastPracticeDate

    this.stats.totalSessions++
    this.stats.totalPracticeTime += durationMinutes
    this.stats.averageSessionLength = this.stats.totalPracticeTime / this.stats.totalSessions

    if (lastPractice === today) {
      // same day, no streak change
    } else if (this.isConsecutiveDay(lastPractice, today)) {
      this.stats.currentStreak++
    } else {
      this.stats.currentStreak = 1
    }

    this.stats.longestStreak = Math.max(this.stats.longestStreak, this.stats.currentStreak)
    this.stats.lastPracticeDate = today

    if (result.posesCompleted > 0) {
      this.stats.totalPosesCompleted += result.posesCompleted
    }

    for (const cat of result.categoriesPracticed) {
      if (!this.stats.categoriesPracticed.includes(cat)) {
        this.stats.categoriesPracticed.push(cat)
      }
    }

    this.stats.recentSessions.push({
      date: new Date().toISOString(),
      durationMinutes,
      energy: result.avgMatchScore,
      xp: result.xpEarned,
      categories: [...result.categoriesPracticed],
      posesCompleted: result.posesCompleted,
    })
    if (this.stats.recentSessions.length > 60) {
      this.stats.recentSessions = this.stats.recentSessions.slice(-60)
    }

    const newBadges = this.checkForBadges(gstate)
    this.saveStats()
    return newBadges
  }

  private isConsecutiveDay(date1: string, date2: string): boolean {
    if (!date1) return false
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    const diffTime = Math.abs(d2.getTime() - d1.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays === 1
  }

  private checkForBadges(gstate: GamificationState): string[] {
    const newIds: string[] = []
    for (const bc of BADGE_CHECKS) {
      if (this.hasBadge(bc.id)) continue
      if (bc.check(this.stats, gstate)) {
        this.stats.badges.push({
          id: bc.id,
          name: bc.name,
          description: bc.description,
          icon: bc.icon,
          earnedDate: new Date().toISOString(),
          category: bc.category,
        })
        newIds.push(bc.id)
      }
    }
    return newIds
  }

  private hasBadge(badgeId: string): boolean {
    return this.stats.badges.some(b => b.id === badgeId)
  }

  getStats(): UserStats {
    return { ...this.stats, recentSessions: [...this.stats.recentSessions], categoriesPracticed: [...this.stats.categoriesPracticed] }
  }

  getWeeklyActivityData(): { day: string; minutes: number }[] {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const result: { day: string; minutes: number }[] = []
    const now = new Date()

    for (let i = 6; i >= 0; i--) {
      const d = new Date(now)
      d.setDate(d.getDate() - i)
      const dateStr = d.toISOString().split('T')[0]
      const dayLabel = days[d.getDay()]

      const totalMin = this.stats.recentSessions
        .filter(s => s.date.startsWith(dateStr))
        .reduce((sum, s) => sum + s.durationMinutes, 0)

      result.push({ day: dayLabel, minutes: totalMin })
    }

    return result
  }

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
    ]
  }

  private getWeeklyPracticeTime(): number {
    const now = new Date()
    const weekStart = new Date(now)
    weekStart.setDate(now.getDate() - now.getDay())
    const startStr = weekStart.toISOString().split('T')[0]
    return this.stats.recentSessions
      .filter(s => s.date >= startStr)
      .reduce((sum, s) => sum + s.durationMinutes, 0)
  }

  private getMonthlyPracticeTime(): number {
    const now = new Date()
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
    const startStr = monthStart.toISOString().split('T')[0]
    return this.stats.recentSessions
      .filter(s => s.date >= startStr)
      .reduce((sum, s) => sum + s.durationMinutes, 0)
  }

  generateMotivationalMessage(): string {
    const messages = [
      "Every pose is a step toward inner peace. Keep flowing! 🌊",
      "Your dedication to yoga is inspiring. You're doing amazing! ✨",
      "Remember: yoga is not about perfection, it's about progress. 🌱",
      "Each breath brings you closer to harmony. Breathe on! 💨",
      "Your practice is a gift to yourself. Cherish it! 🎁",
      "Strength and flexibility grow with each session. Stay strong! 💪",
      "Mindfulness begins with awareness. You're cultivating it beautifully! 🧘",
    ]
    if (this.stats.currentStreak >= 7) {
      messages.push("Your consistency is remarkable! Keep the streak alive! 🔥")
    }
    if (this.stats.totalSessions >= 25) {
      messages.push("You're building a beautiful yoga journey. Proud of you! 🌟")
    }
    return messages[Math.floor(Math.random() * messages.length)]
  }

  getAchievementSummary(): string {
    return `I've completed ${this.stats.totalSessions} yoga sessions with a ${this.stats.currentStreak}-day streak! 🧘 #YogaJourney #ProjectEvolvingYoga`
  }

  resetStats(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY)
      localStorage.removeItem('yoga.gamification.v1')
    } catch {
      // ignore
    }
    this.stats = this.defaultStats()
    this.saveStats()
  }
}

export const appreciationManager = new AppreciationManager()

export const appreciationUIUtils = {
  formatDuration(minutes: number): string {
    if (minutes < 60) return `${Math.round(minutes)}m`
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = Math.round(minutes % 60)
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`
  },

  getBadgeColor(category: Badge['category']): string {
    const colors: Record<string, string> = {
      practice: '#b38b59',
      streak: '#9a7040',
      achievement: '#27ae60',
      pose: '#f39c12',
      test: '#4a90d9',
      gamification: '#9b59b6',
    }
    return colors[category] || '#95a5a6'
  },

  calculateProgress(current: number, target: number): number {
    return target > 0 ? Math.min((current / target) * 100, 100) : 0
  },

  getEncouragementMessage(progress: number): string {
    if (progress >= 100) return "Congratulations! Goal achieved! 🎉"
    if (progress >= 75) return "You're so close! Keep going! 🚀"
    if (progress >= 50) return "Halfway there! You're doing great! 💪"
    if (progress >= 25) return "Great start! Keep the momentum! 🌟"
    return "Every session counts! You've got this! 🌱"
  },
}
