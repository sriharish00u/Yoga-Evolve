import { useState, useEffect, useCallback } from 'react'
import { DashboardSEO } from '../components/JSONLD'
import { appreciationManager, appreciationUIUtils } from '../utils/appreciationUtils'
import { gamification } from '../utils/gamification'
import type { UserStats, RecentSession } from '../utils/appreciationUtils'
import type { GamificationState } from '../utils/gamification'
import { BADGE_DEFINITIONS, RARITY_COLORS } from '../data/badgeDefinitions'
import type { BadgeDefinition } from '../data/badgeDefinitions'
import BadgeModal from '../components/BadgeModal'
import './DashboardPage.css'

export default function DashboardPage() {
  const [stats, setStats] = useState<UserStats>(() => appreciationManager.getStats())
  const [gstate, setGstate] = useState<GamificationState>(() => gamification.getState())
  const [milestones] = useState(() => appreciationManager.getProgressMilestones())
  const [message, setMessage] = useState(() => appreciationManager.generateMotivationalMessage())
  const [focusBadge, setFocusBadge] = useState<BadgeDefinition | null>(null)
  const [focusBadgeDate, setFocusBadgeDate] = useState<string | undefined>()

  const refresh = useCallback(() => {
    setStats(appreciationManager.getStats())
    setGstate(gamification.getState())
    setMessage(appreciationManager.generateMotivationalMessage())
  }, [])

  useEffect(() => {
    refresh()
    const onFocus = () => refresh()
    window.addEventListener('focus', onFocus)
    return () => window.removeEventListener('focus', onFocus)
  }, [refresh])

  const weeklyActivity = appreciationManager.getWeeklyActivityData()

  const xpProgress = gamification.getXPProgress()

  const showBadge = useCallback((badge: BadgeDefinition) => {
    const earned = stats.badges.find(b => b.id === badge.id)
    setFocusBadge(badge)
    setFocusBadgeDate(earned?.earnedDate)
  }, [stats.badges])

  const earnedBadgeIds = new Set(stats.badges.map(b => b.id))

  const recentSessions: RecentSession[] = stats.recentSessions.slice(-10).reverse()

  return (
    <div className="page-wrapper dashboard-page">
      <DashboardSEO />
      <div className="dashboard-hero">
        <div className="level-pill">
          {gstate.levelName} — Level {gstate.level + 1}
        </div>
        <div className="xp-bar-wrapper">
          <div className="xp-bar-label">
            {gstate.totalXP} XP
            <span className="xp-bar-level-progress">
              {xpProgress.current} / {xpProgress.needed} to next level
            </span>
          </div>
          <div className="xp-bar">
            <div
              className="xp-bar-fill"
              style={{ width: `${xpProgress.pct}%` }}
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
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">🧘</span>
          <div>
            <span className="dash-stat-value">{gstate.totalPosesCompleted}</span>
            <span className="dash-stat-label">Poses Completed</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">🏆</span>
          <div>
            <span className="dash-stat-value">{stats.badges.length}</span>
            <span className="dash-stat-label">Badges Earned</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">🌅</span>
          <div>
            <span className="dash-stat-value">{gstate.morningSessions}</span>
            <span className="dash-stat-label">Morning Sessions</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">💎</span>
          <div>
            <span className="dash-stat-value">{gstate.perfectHolds}</span>
            <span className="dash-stat-label">Perfect Holds</span>
          </div>
        </div>
      </div>

      <section className="dashboard-section">
        <h2>This Week</h2>
        <div className="weekly-chart">
          {weeklyActivity.map((d, i) => {
            const maxMin = Math.max(...weeklyActivity.map(w => w.minutes), 1)
            return (
              <div key={i} className="weekly-bar-col">
                <div
                  className="weekly-bar"
                  style={{
                    height: `${(d.minutes / maxMin) * 100}%`,
                    opacity: d.minutes > 0 ? 1 : 0.3,
                  }}
                />
                <span className="weekly-label">{d.day}</span>
                <span className="weekly-value">{d.minutes}m</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="dashboard-section">
        <h2>All Badges ({stats.badges.length}/{BADGE_DEFINITIONS.length})</h2>
        <div className="badge-grid">
          {BADGE_DEFINITIONS.map(b => {
            const earned = earnedBadgeIds.has(b.id)
            const rarityColor = RARITY_COLORS[b.rarity] || '#b38b59'
            return (
              <div
                key={b.id}
                className={`badge-card ${earned ? 'earned' : 'locked'}`}
                style={{ borderColor: earned ? rarityColor : undefined }}
                onClick={() => showBadge(b)}
              >
                <span className="badge-icon">{earned ? b.icon : '🔒'}</span>
                <div className="badge-info">
                  <strong>{earned ? b.name : '???'}</strong>
                  <span className="badge-rarity" style={{ color: rarityColor }}>
                    {b.rarity}
                  </span>
                  <p>{earned ? b.description : 'Keep practicing to unlock'}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {stats.badges.length > 0 && (
        <section className="dashboard-section">
          <h2>Recently Earned</h2>
          <div className="milestone-list">
            {stats.badges.slice(-5).reverse().map(b => (
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
        <h2>Categories Practiced ({gstate.categoriesPracticed.length})</h2>
        <div className="category-pills">
          {gstate.categoriesPracticed.length === 0 ? (
            <p className="text-muted">No categories yet. Complete a session!</p>
          ) : (
            gstate.categoriesPracticed.map(c => (
              <span key={c} className="category-pill" style={{ borderColor: 'var(--primary-color)' }}>
                {c}
              </span>
            ))
          )}
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Recent Sessions</h2>
        {recentSessions.length === 0 ? (
          <p className="text-muted">No sessions yet. Start your first practice!</p>
        ) : (
          <div className="session-history-list">
            {recentSessions.map((s, i) => (
              <div key={i} className="session-history-item">
                <span className="session-history-date">
                  {new Date(s.date).toLocaleDateString()}
                </span>
                <span className="session-history-duration">
                  {appreciationUIUtils.formatDuration(s.durationMinutes)}
                </span>
                <span className="session-history-xp">+{s.xp} XP</span>
                <span className="session-history-poses">{s.posesCompleted} poses</span>
                <div className="session-history-categories">
                  {s.categories.slice(0, 3).map(c => (
                    <span key={c} className="mini-cat-tag">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

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

      <BadgeModal badge={focusBadge} earnedDate={focusBadgeDate} onClose={() => setFocusBadge(null)} />
    </div>
  )
}
