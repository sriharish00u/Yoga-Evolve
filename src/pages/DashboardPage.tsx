import { useState } from 'react'
import { appreciationManager, appreciationUIUtils } from '../utils/appreciationUtils'
import { gamification } from '../utils/gamification'
import type { UserStats } from '../utils/appreciationUtils'
import type { GamificationState } from '../utils/gamification'
import './DashboardPage.css'

interface BadgeDef {
  id: string
  name: string
  icon: string
  desc: string
  earned: boolean
}

function getWeeklyActivity(stats: UserStats): number[] {
  const result = [0, 0, 0, 0, 0, 0, 0]
  if (stats.totalSessions > 0) {
    const today = new Date().getDay()
    const dayIdx = today === 0 ? 6 : today - 1
    result[dayIdx] = Math.min(stats.totalPracticeTime, 60)
    if (stats.currentStreak > 1) {
      for (let i = 1; i < Math.min(stats.currentStreak, 7); i++) {
        const idx = (dayIdx - i + 7) % 7
        result[idx] = Math.max(result[idx], 10 + Math.floor(Math.random() * 20))
      }
    }
  }
  return result
}

export default function DashboardPage() {
  const [stats] = useState<UserStats>(() => appreciationManager.getStats())
  const [gstate] = useState<GamificationState>(() => gamification.getState())
  const [milestones] = useState(() => appreciationManager.getProgressMilestones())
  const [message, setMessage] = useState(() => appreciationManager.generateMotivationalMessage())
  const [activity] = useState(() => getWeeklyActivity(stats))

  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const maxActivity = Math.max(...activity, 1)

  const allBadges: BadgeDef[] = [
    { id: 'first_session', name: 'First Step', icon: '🌱', desc: 'Complete your first session', earned: stats.totalSessions >= 1 },
    { id: 'streak_3', name: 'Consistent Yogi', icon: '🔥', desc: '3-day streak', earned: stats.currentStreak >= 3 },
    { id: 'streak_7', name: 'Devoted Seeker', icon: '⚡', desc: '7-day streak', earned: stats.currentStreak >= 7 },
    { id: 'xp_500', name: 'Sapling', icon: '🌿', desc: 'Earn 500 XP', earned: gstate.totalXP >= 500 },
    { id: 'xp_2000', name: 'Banyan Tree', icon: '🌳', desc: 'Earn 2000 XP', earned: gstate.totalXP >= 2000 },
    { id: 'sessions_10', name: 'Steady Practice', icon: '📿', desc: 'Complete 10 sessions', earned: stats.totalSessions >= 10 },
    { id: 'perfect_hold', name: 'Pure Form', icon: '✨', desc: 'Land a perfect hold (match ≥ 88%)', earned: gstate.perfectHolds >= 1 },
    { id: 'combo_5', name: 'Flow State', icon: '🌊', desc: '5× combo in a session', earned: gstate.bestCombo >= 5 },
  ]

  return (
    <div className="page-wrapper dashboard-page">
      <div className="dashboard-hero">
        <div className="level-pill">
          {gstate.levelName} — Level {gstate.level + 1}
        </div>
        <div className="xp-bar-wrapper">
          <div className="xp-bar-label">{gstate.totalXP} / {(gstate.level + 1) * 500} XP</div>
          <div className="xp-bar">
            <div
              className="xp-bar-fill"
              style={{ width: `${(gstate.totalXP % 500) / 500 * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="dashboard-stats-grid">
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">📊</span>
          <div>
            <span className="dash-stat-value">{stats.totalSessions}</span>
            <span className="dash-stat-label">Total Sessions</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">⏱️</span>
          <div>
            <span className="dash-stat-value">{appreciationUIUtils.formatDuration(stats.totalPracticeTime)}</span>
            <span className="dash-stat-label">Practice Time</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">🔥</span>
          <div>
            <span className="dash-stat-value">{stats.currentStreak}</span>
            <span className="dash-stat-label">Day Streak</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">✨</span>
          <div>
            <span className="dash-stat-value">{gstate.totalXP}</span>
            <span className="dash-stat-label">Total XP</span>
          </div>
        </div>
      </div>

      <section className="dashboard-section">
        <h2>This Week</h2>
        <div className="weekly-chart">
          {activity.map((val, i) => (
            <div key={i} className="weekly-bar-col">
              <div
                className="weekly-bar"
                style={{
                  height: `${(val / maxActivity) * 100}%`,
                  opacity: val > 0 ? 1 : 0.3,
                }}
              />
              <span className="weekly-label">{DAYS[i]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Your Badges</h2>
        <div className="badge-grid">
          {allBadges.map(b => (
            <div key={b.id} className={`badge-card ${b.earned ? 'earned' : 'locked'}`}>
              <span className="badge-icon">{b.earned ? b.icon : '🔒'}</span>
              <div className="badge-info">
                <strong>{b.earned ? b.name : '???'}</strong>
                <p>{b.earned ? b.desc : 'Keep practicing to unlock'}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {stats.badges && stats.badges.length > 0 && (
        <section className="dashboard-section">
          <h2>Milestones Earned</h2>
          <div className="milestone-list">
            {stats.badges.map(b => (
              <div key={b.id} className="milestone-item">
                <span className="milestone-icon">{b.icon}</span>
                <div>
                  <strong>{b.name}</strong>
                  <p>{b.description}</p>
                  <small>{new Date(b.earnedDate).toLocaleDateString()}</small>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="dashboard-section">
        <h2>Progress Goals</h2>
        <div className="milestones-grid">
          {milestones.map(m => {
            const progress = appreciationUIUtils.calculateProgress(m.current, m.target)
            return (
              <div key={m.id} className="milestone-card">
                <div className="milestone-card-header">
                  <h3>{m.title}</h3>
                  <span className="milestone-pct">{Math.round(progress)}%</span>
                </div>
                <p>{m.description}</p>
                <div className="milestone-bar">
                  <div className="milestone-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <span className="milestone-count">{m.current} / {m.target} {m.unit}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="dashboard-section motivational-section">
        <p className="motivational-text">"{message}"</p>
        <button className="btn-new-message" onClick={() => setMessage(appreciationManager.generateMotivationalMessage())}>
          ✨ New Message
        </button>
      </section>

      <div className="dashboard-actions">
        <button className="btn-share" onClick={() => {
          const summary = appreciationManager.getAchievementSummary()
          if (navigator.share) {
            navigator.share({ title: 'My Yoga Journey', text: summary })
          } else {
            navigator.clipboard.writeText(summary).then(() => alert('Copied to clipboard!'))
          }
        }}>
          📤 Share Achievements
        </button>
        <button className="btn-reset" onClick={() => {
          if (window.confirm('Reset all progress? This cannot be undone.')) {
            appreciationManager.resetStats()
            window.location.reload()
          }
        }}>
          🔄 Reset Progress
        </button>
      </div>
    </div>
  )
}
