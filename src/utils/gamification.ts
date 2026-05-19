const STORAGE_KEY = 'yoga.gamification.v1'

const LEVELS = [
  'Seed', 'Sprout', 'Sapling', 'Branch', 'Tree',
  'Banyan', 'Yogi', 'Sage', 'Guru', 'Enlightened',
]

export const XP_REWARDS = {
  poseComplete: 50,
  perfectHold: 100,
  combo3: 75,
  combo5: 150,
  firstSession: 200,
  allInCategory: 300,
}

export const COMBO_MULTIPLIERS = [1.0, 1.25, 1.5, 2.0, 3.0]

export interface GamificationState {
  totalXP: number
  level: number
  levelName: string
  combo: number
  comboMultiplier: number
  sessionXP: number
  perfectHolds: number
  bestCombo: number
  morningSessions: number
  categoriesPracticed: string[]
  totalPosesCompleted: number
}

function loadState(): GamificationState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed.categoriesPracticed === undefined) parsed.categoriesPracticed = []
    if (parsed.morningSessions === undefined) parsed.morningSessions = 0
    if (parsed.totalPosesCompleted === undefined) parsed.totalPosesCompleted = 0
    return parsed
  } catch {
    return null
  }
}

function saveState(state: GamificationState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // localStorage unavailable
  }
}

function defaultState(): GamificationState {
  return {
    totalXP: 0,
    level: 0,
    levelName: LEVELS[0],
    combo: 0,
    comboMultiplier: 1.0,
    sessionXP: 0,
    perfectHolds: 0,
    bestCombo: 0,
    morningSessions: 0,
    categoriesPracticed: [],
    totalPosesCompleted: 0,
  }
}

function calcLevel(xp: number): { level: number; levelName: string } {
  const lvl = Math.min(9, Math.floor(xp / 500))
  return { level: lvl, levelName: LEVELS[lvl] }
}

class GamificationManager {
  private state: GamificationState

  constructor() {
    this.state = loadState() ?? defaultState()
  }

  awardXP(base: number, reason: string): { earned: number; toast: string } {
    const earned = Math.round(base * this.state.comboMultiplier)
    this.state.totalXP += earned
    this.state.sessionXP += earned
    const { level, levelName } = calcLevel(this.state.totalXP)
    this.state.level = level
    this.state.levelName = levelName
    this.save()
    return { earned, toast: `+${earned} XP — ${reason}` }
  }

  incrementCombo(): void {
    this.state.combo++
    const idx = Math.min(this.state.combo, COMBO_MULTIPLIERS.length - 1)
    this.state.comboMultiplier = COMBO_MULTIPLIERS[idx]
    if (this.state.combo > this.state.bestCombo) {
      this.state.bestCombo = this.state.combo
    }
    this.save()
  }

  breakCombo(): void {
    this.state.combo = 0
    this.state.comboMultiplier = 1.0
    this.save()
  }

  recordPerfectHold(): void {
    this.state.perfectHolds++
    this.save()
  }

  recordSession(result: {
    durationSeconds: number
    categoriesPracticed: string[]
    hour: number
    posesCompleted: number
  }): void {
    if (result.hour < 8) {
      this.state.morningSessions++
    }
    for (const cat of result.categoriesPracticed) {
      if (!this.state.categoriesPracticed.includes(cat)) {
        this.state.categoriesPracticed.push(cat)
      }
    }
    this.state.totalPosesCompleted += result.posesCompleted
    this.save()
  }

  resetSession(): void {
    this.state.sessionXP = 0
    this.state.combo = 0
    this.state.comboMultiplier = 1.0
    this.save()
  }

  getState(): GamificationState {
    return { ...this.state, categoriesPracticed: [...this.state.categoriesPracticed] }
  }

  getXPProgress(): { current: number; needed: number; pct: number } {
    const current = this.state.totalXP % 500
    const needed = 500
    const pct = needed > 0 ? (current / needed) * 100 : 0
    return { current, needed, pct: Math.min(100, pct) }
  }

  private save(): void {
    saveState(this.state)
  }
}

export const gamification = new GamificationManager()
