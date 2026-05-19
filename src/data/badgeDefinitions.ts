export interface BadgeDefinition {
  id: string
  name: string
  icon: string
  description: string
  category: 'practice' | 'streak' | 'achievement' | 'pose' | 'test' | 'gamification'
  howToEarn: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  { id: 'first_session',  name: 'First Step',       icon: '🌱', category: 'practice',     rarity: 'common',    description: 'Completed your first session',            howToEarn: 'Complete any yoga session' },
  { id: 'sessions_5',     name: 'Regular Visitor',  icon: '📅', category: 'practice',     rarity: 'common',    description: '5 sessions completed',                    howToEarn: 'Complete 5 sessions' },
  { id: 'sessions_10',    name: 'Steady Practice',  icon: '📿', category: 'practice',     rarity: 'common',    description: '10 sessions completed',                   howToEarn: 'Complete 10 sessions' },
  { id: 'sessions_50',    name: 'Yoga Warrior',     icon: '⚔️', category: 'practice',     rarity: 'rare',      description: '50 sessions completed',                   howToEarn: 'Complete 50 sessions' },
  { id: 'streak_3',       name: 'Consistent Yogi',  icon: '🔥', category: 'streak',       rarity: 'common',    description: '3-day practice streak',                   howToEarn: 'Practice 3 days in a row' },
  { id: 'streak_7',       name: 'Devoted Seeker',   icon: '⚡', category: 'streak',       rarity: 'rare',      description: '7-day practice streak',                   howToEarn: 'Practice 7 days in a row' },
  { id: 'streak_30',      name: 'Iron Will',        icon: '👑', category: 'streak',       rarity: 'legendary', description: '30-day practice streak',                  howToEarn: 'Practice 30 days in a row' },
  { id: 'xp_500',         name: 'Sapling',          icon: '🌿', category: 'gamification', rarity: 'common',    description: 'Earned 500 XP',                           howToEarn: 'Earn 500 total XP' },
  { id: 'xp_2000',        name: 'Banyan Tree',      icon: '🌳', category: 'gamification', rarity: 'rare',      description: 'Earned 2000 XP',                          howToEarn: 'Earn 2000 total XP' },
  { id: 'xp_5000',        name: 'Ancient Grove',    icon: '🏔️', category: 'gamification', rarity: 'epic',      description: 'Earned 5000 XP',                          howToEarn: 'Earn 5000 total XP' },
  { id: 'perfect_hold',   name: 'Pure Form',        icon: '✨', category: 'achievement',  rarity: 'rare',      description: 'Perfect hold on a pose',                  howToEarn: 'Average ≥88% match score on a hold' },
  { id: 'perfect_5',      name: 'Form Master',      icon: '💎', category: 'achievement',  rarity: 'epic',      description: '5 perfect holds across sessions',         howToEarn: 'Achieve 5 perfect holds' },
  { id: 'combo_3',        name: 'On Fire',          icon: '🌶️', category: 'gamification', rarity: 'common',    description: '3× pose combo',                           howToEarn: '3 poses in a row with ≥65% match' },
  { id: 'combo_5',        name: 'Flow State',       icon: '🌊', category: 'gamification', rarity: 'rare',      description: '5× pose combo',                           howToEarn: '5 poses in a row with ≥65% match' },
  { id: 'morning_5',      name: 'Dawn Warrior',     icon: '☀️', category: 'achievement',  rarity: 'rare',      description: '5 morning sessions (before 8 AM)',        howToEarn: 'Complete 5 sessions before 8:00 AM' },
  { id: 'all_categories', name: 'Explorer',         icon: '🗺️', category: 'achievement',  rarity: 'epic',      description: 'Practiced all pose categories',           howToEarn: 'Practice poses from 7+ categories' },
  { id: 'time_60min',     name: 'Hour Hero',        icon: '⏰', category: 'achievement',  rarity: 'common',    description: 'Total practice time: 1 hour',             howToEarn: 'Accumulate 60 minutes of practice' },
  { id: 'time_600min',    name: 'Zen Master',       icon: '🧘', category: 'achievement',  rarity: 'epic',      description: 'Total practice time: 10 hours',           howToEarn: 'Accumulate 600 minutes of practice' },
  { id: 'poses_100',      name: 'Pose Collector',   icon: '📖', category: 'pose',         rarity: 'rare',      description: 'Completed 100 poses across all sessions', howToEarn: 'Complete 100 poses total' },
]

export function getBadgeDef(id: string): BadgeDefinition | undefined {
  return BADGE_DEFINITIONS.find(b => b.id === id)
}

export const RARITY_COLORS: Record<string, string> = {
  common:    '#b38b59',
  rare:      '#4a90d9',
  epic:      '#9b59b6',
  legendary: '#f39c12',
}
