export interface PoseData {
  name: string
  image: string
  category: string
  benefits: string[]
  steps: string[]
  holdSeconds?: number
}

export type SessionPhase = 'prepare' | 'hold' | 'complete' | 'summary'

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced'

export interface SessionResult {
  completedPoses: number
  totalXP: number
  avgMatchScore: number
  bestCombo: number
  durationSeconds: number
  badgesUnlocked: string[]
  posesAttempted: number
}

export interface FeedbackMessage {
  severity: 'success' | 'warn' | 'error'
  text: string
}

export const CATEGORY_DIFFICULTY: Record<string, DifficultyLevel> = {
  'Standing Poses':    'beginner',
  'Seated Poses':      'beginner',
  'Supine Poses':      'beginner',
  'Prone Poses':       'beginner',
  'Balancing Poses':   'intermediate',
  'Inversions':        'advanced',
  'Backbends':         'intermediate',
  'Twists':            'intermediate',
  'Restorative Poses': 'beginner',
}
