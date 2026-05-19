export interface PoseData {
  name: string
  image: string
  category: string
  benefits: string[]
  steps: string[]
  holdSeconds?: number
  bodyParts?: string[]
  tags?: string[]
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
  poseScores: number[]
  categoriesPracticed: string[]
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

export interface BodyPartMeta {
  id: string
  label: string
  icon: string
  color: string
}

export const BODY_PARTS: BodyPartMeta[] = [
  { id: 'arms',        label: 'Arms',         icon: '💪', color: '#b38b59' },
  { id: 'shoulders',   label: 'Shoulders',    icon: '🤸', color: '#9a7040' },
  { id: 'chest',       label: 'Chest',        icon: '🫀', color: '#c49a65' },
  { id: 'core',        label: 'Core',         icon: '⚡', color: '#b38b59' },
  { id: 'back',        label: 'Back',         icon: '🦴', color: '#a07840' },
  { id: 'hips',        label: 'Hips',         icon: '🌀', color: '#b38b59' },
  { id: 'legs',        label: 'Legs',         icon: '🦵', color: '#9a7040' },
  { id: 'hamstrings',  label: 'Hamstrings',   icon: '🔗', color: '#c49a65' },
  { id: 'glutes',      label: 'Glutes',       icon: '🍑', color: '#b38b59' },
  { id: 'ankles',      label: 'Ankles',       icon: '🦶', color: '#a07840' },
  { id: 'spine',       label: 'Spine',        icon: '🧬', color: '#b38b59' },
  { id: 'neck',        label: 'Neck',         icon: '🧣', color: '#9a7040' },
  { id: 'wrists',      label: 'Wrists',       icon: '⌚', color: '#c49a65' },
  { id: 'full-body',   label: 'Full Body',    icon: '🧘', color: '#654321' },
]

export const POSE_TAGS: { id: string; label: string }[] = [
  { id: 'standing',        label: 'Standing' },
  { id: 'seated',          label: 'Seated' },
  { id: 'supine',          label: 'Supine' },
  { id: 'prone',           label: 'Prone' },
  { id: 'inversion',       label: 'Inversion' },
  { id: 'balance',         label: 'Balance' },
  { id: 'twist',           label: 'Twist' },
  { id: 'forward-bend',    label: 'Forward Bend' },
  { id: 'backbend',        label: 'Backbend' },
  { id: 'strength',        label: 'Strength' },
  { id: 'flexibility',     label: 'Flexibility' },
  { id: 'restorative',     label: 'Restorative' },
  { id: 'hip-opener',      label: 'Hip Opener' },
  { id: 'shoulder-opener', label: 'Shoulder Opener' },
  { id: 'beginner',        label: 'Beginner' },
  { id: 'intermediate',    label: 'Intermediate' },
  { id: 'advanced',        label: 'Advanced' },
]
