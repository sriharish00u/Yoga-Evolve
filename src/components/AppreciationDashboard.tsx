import { useState, useEffect } from 'react'
import { appreciationManager, appreciationUIUtils, type UserStats, type ProgressMilestone } from '../utils/appreciationUtils'
import './AppreciationDashboard.css'

export default function AppreciationDashboard() {
  const [stats, setStats] = useState<UserStats>(appreciationManager.getStats())
  const [milestones, setMilestones] = useState<ProgressMilestone[]>([])
  const [motivationalMessage, setMotivationalMessage] = useState('')

  useEffect(() => {
    // Update stats and milestones on component mount
    setStats(appreciationManager.getStats())
    setMilestones(appreciationManager.getProgressMilestones())
    setMotivationalMessage(appreciationManager.generateMotivationalMessage())
  }, [])

  const handleShareAchievement = () => {
    const summary = appreciationManager.getAchievementSummary()
    if (navigator.share) {
      navigator.share({
        title: 'My Yoga Journey',
        text: summary,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(summary).then(() => {
        alert('Achievement summary copied to clipboard!')
      })
    }
  }

  const handleResetStats = () => {
    if (window.confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
      appreciationManager.resetStats()
      setStats(appreciationManager.getStats())
      setMilestones(appreciationManager.getProgressMilestones())
      setMotivationalMessage(appreciationManager.generateMotivationalMessage())
    }
  }

  return (
    <section id="appreciation" className="appreciation-dashboard">
      <div className="container">
        <h2>Your Yoga Journey</h2>

        {/* Motivational Message */}
        <div className="motivational-card">
          <div className="motivation-icon">💫</div>
          <p className="motivation-text">{motivationalMessage}</p>
          <button
            className="new-message-btn"
            onClick={() => setMotivationalMessage(appreciationManager.generateMotivationalMessage())}
            aria-label="Get new motivational message"
          >
            ✨ New Message
          </button>
        </div>

        {/* Stats Overview */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{stats.totalSessions}</h3>
              <p>Total Sessions</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <h3>{appreciationUIUtils.formatDuration(stats.totalPracticeTime)}</h3>
              <p>Total Practice Time</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-content">
              <h3>{stats.currentStreak}</h3>
              <p>Current Streak</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <h3>{stats.longestStreak}</h3>
              <p>Longest Streak</p>
            </div>
          </div>
        </div>

        {/* Progress Milestones */}
        <div className="milestones-section">
          <h3>Progress Goals</h3>
          <div className="milestones-grid">
            {milestones.map((milestone) => {
              const progress = appreciationUIUtils.calculateProgress(milestone.current, milestone.target)
              const encouragement = appreciationUIUtils.getEncouragementMessage(progress)

              return (
                <div key={milestone.id} className="milestone-card">
                  <div className="milestone-header">
                    <h4>{milestone.title}</h4>
                    <span className="milestone-progress">{Math.round(progress)}%</span>
                  </div>
                  <p className="milestone-description">{milestone.description}</p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="milestone-details">
                    <span>{milestone.current} / {milestone.target} {milestone.unit}</span>
                    <span className="encouragement">{encouragement}</span>
                  </div>
                  <p className="milestone-reward">Reward: {milestone.reward}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Badges Collection */}
        <div className="badges-section">
          <h3>Your Achievements</h3>
          {stats.badges.length === 0 ? (
            <div className="no-badges">
              <p>No badges earned yet. Keep practicing to unlock achievements! 🌱</p>
            </div>
          ) : (
            <div className="badges-grid">
              {stats.badges.map((badge) => (
                <div
                  key={badge.id}
                  className="badge-card"
                  style={{ borderColor: appreciationUIUtils.getBadgeColor(badge.category) }}
                >
                  <div className="badge-icon">{badge.icon}</div>
                  <div className="badge-content">
                    <h4>{badge.name}</h4>
                    <p>{badge.description}</p>
                    <small>Earned: {new Date(badge.earnedDate).toLocaleDateString()}</small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Favorite Pose */}
        {stats.favoritePose && (
          <div className="favorite-pose-card">
            <h3>Your Favorite Pose</h3>
            <div className="favorite-content">
              <div className="pose-icon">🧘</div>
              <div>
                <h4>{stats.favoritePose}</h4>
                <p>This pose has been part of your most recent practice sessions.</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="dashboard-actions">
          <button className="share-btn" onClick={handleShareAchievement}>
            📤 Share Achievements
          </button>
          <button className="reset-btn" onClick={handleResetStats}>
            🔄 Reset Progress
          </button>
        </div>
      </div>
    </section>
  )
}
