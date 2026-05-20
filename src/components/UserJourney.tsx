import { useState, useEffect } from 'react';
import './UserJourney.css';
import { appreciationManager, appreciationUIUtils } from '../utils/appreciationUtils';

interface ProgressGoal {
  title: string;
  description: string;
  progressPercent: number;
  current: number;
  target: number;
  encouragement: string;
  reward: string;
}

interface DailyPractice {
  date: string; // ISO date string
  duration: number; // minutes practiced on that day
}

const LOCAL_STORAGE_KEY = 'yogaPracticeData';

export default function UserJourney() {
  const [totalSessions, setTotalSessions] = useState(0);
  const [totalPracticeTime, setTotalPracticeTime] = useState(0); // in minutes
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [progressGoals, setProgressGoals] = useState<ProgressGoal[]>([]);
  const [currentMotivationalMessage, setCurrentMotivationalMessage] = useState('');
  const [showShareConfirm, setShowShareConfirm] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [dailyPracticeData, setDailyPracticeData] = useState<DailyPractice[]>([]);

  // Load data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const parsedData: DailyPractice[] = JSON.parse(storedData);
      setDailyPracticeData(parsedData);
      updateStatsFromData(parsedData);
    } else {
      // Initialize with empty data or default
      setDailyPracticeData([]);
      updateStatsFromData([]);
    }
  }, []);

  // Update stats based on daily practice data
  const updateStatsFromData = (data: DailyPractice[]) => {
    const sessions = data.length;
    const totalTime = data.reduce((sum, day) => sum + day.duration, 0);

    // Calculate streaks
    let currentStreakCount = 0;
    let longestStreakCount = 0;
    let streakTemp = 0;
    let lastDate: Date | null = null;

    const sortedData = [...data].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    for (const day of sortedData) {
      const dayDate = new Date(day.date);
      if (lastDate) {
        const diffDays = (dayDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24);
        if (diffDays === 1) {
          streakTemp++;
        } else if (diffDays > 1) {
          if (streakTemp > longestStreakCount) longestStreakCount = streakTemp;
          streakTemp = 1;
        }
      } else {
        streakTemp = 1;
      }
      lastDate = dayDate;
    }
    if (streakTemp > longestStreakCount) longestStreakCount = streakTemp;

    // For current streak, check if last day is yesterday or today
    if (lastDate) {
      const today = new Date();
      const diffDays = (today.getTime() - lastDate.getTime()) / (1000 * 3600 * 24);
      if (diffDays <= 1) {
        currentStreakCount = streakTemp;
      } else {
        currentStreakCount = 0;
      }
    }

    setTotalSessions(sessions);
    setTotalPracticeTime(totalTime);
    setCurrentStreak(currentStreakCount);
    setLongestStreak(longestStreakCount);

    // Update progress goals based on totalTime or other metrics
    const milestones = appreciationManager.getProgressMilestones().map((m) => ({
      title: m.title,
      description: m.description,
      current: m.current,
      target: m.target,
      progressPercent: appreciationUIUtils.calculateProgress(m.current, m.target),
      encouragement: appreciationUIUtils.getEncouragementMessage(
        appreciationUIUtils.calculateProgress(m.current, m.target)
      ),
      reward: m.reward,
    }));
    setProgressGoals(milestones);
  };

  // Save daily practice data to localStorage
  const saveDailyPracticeData = (data: DailyPractice[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  };

  // Example function to add a practice session (for demo/testing)
  const addPracticeSession = (duration: number) => {
    const todayStr = new Date().toISOString().split('T')[0];
    const updatedData = [...dailyPracticeData];
    const existingIndex = updatedData.findIndex(d => d.date === todayStr);
    if (existingIndex >= 0) {
      updatedData[existingIndex].duration += duration;
    } else {
      updatedData.push({ date: todayStr, duration });
    }
    setDailyPracticeData(updatedData);
    saveDailyPracticeData(updatedData);
    updateStatsFromData(updatedData);
  };

  const handleNewMessage = () => {
    setCurrentMotivationalMessage(appreciationManager.generateMotivationalMessage());
  };

  const handleShareClick = () => {
    setShowShareConfirm(true);
  };

  const handleResetClick = () => {
    setShowResetConfirm(true);
  };

  const confirmShare = () => {
    alert('Achievements shared! (This is a placeholder)');
    setShowShareConfirm(false);
  };

  const confirmReset = () => {
    setDailyPracticeData([]);
    saveDailyPracticeData([]);
    setShowShareConfirm(false);
    setShowResetConfirm(false);
    updateStatsFromData([]);
  };

  const cancelShare = () => {
    setShowShareConfirm(false);
  };

  const cancelReset = () => {
    setShowResetConfirm(false);
  };

  return (
    <div className="container user-journey">
      <h2>Your Yoga Journey</h2>
      <div className="motivational-card">
        <div className="motivation-icon">💫</div>
        <p className="motivation-text">{currentMotivationalMessage}</p>
        <button className="new-message-btn" aria-label="Get new motivational message" onClick={handleNewMessage}>
          ✨ New Message
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>{totalSessions}</h3>
            <p>Total Sessions</p>
          </div>
          <div className="info-icon" title="Total number of yoga sessions you've completed">ℹ️</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <h3>{totalPracticeTime}m</h3>
            <p>Total Practice Time</p>
          </div>
          <div className="info-icon" title="Total time spent practicing yoga in minutes">ℹ️</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <div className="stat-content">
            <h3>{currentStreak}</h3>
            <p>Current Streak</p>
          </div>
          <div className="info-icon" title="Number of consecutive days you've practiced yoga">ℹ️</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <h3>{longestStreak}</h3>
            <p>Longest Streak</p>
          </div>
          <div className="info-icon" title="Your longest consecutive practice streak">ℹ️</div>
        </div>
      </div>

      <div className="milestones-section">
        <h3>Progress Goals</h3>
        <div className="milestones-grid">
          {progressGoals.map((goal, index) => (
            <div key={index} className="milestone-card">
              <div className="milestone-header">
                <h4>{goal.title}</h4>
                <span className="milestone-progress" style={{ color: goal.progressPercent >= 100 ? 'green' : 'inherit' }}>
                  {goal.progressPercent}%
                </span>
                <div className="info-icon" title={`Goal: ${goal.description}. Reward: ${goal.reward}`}>ℹ️</div>
              </div>
              <p className="milestone-description">{goal.description}</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${goal.progressPercent}%` }}></div>
              </div>
              <div className="milestone-details">
                <span>{goal.current} / {goal.target} minutes</span>
                <span className="encouragement">{goal.encouragement}</span>
              </div>
              <p className="milestone-reward">Reward: {goal.reward}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="badges-section">
        <h3>Your Achievements</h3>
        {progressGoals.filter(goal => goal.progressPercent >= 100).length > 0 ? (
          <div className="badges-grid">
            {progressGoals.filter(goal => goal.progressPercent >= 100).map((goal, index) => (
              <div key={index} className="badge-card">
                <div className="badge-icon">🏆</div>
                <h4>{goal.title}</h4>
                <p>{goal.reward}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-badges">
            <p>No badges earned yet. Keep practicing to unlock achievements! 🌱</p>
          </div>
        )}
      </div>

      <div className="progress-chart-section">
        <h3>Progress Overview</h3>
        <div className="progress-chart">
          {dailyPracticeData.length > 0 ? (
            dailyPracticeData.map((day) => (
              <div key={day.date} className="chart-bar">
                <div className="chart-label">{day.date}</div>
                <div className="chart-fill" style={{ width: `${Math.min(day.duration / 60 * 100, 100)}%` }}></div>
                <div className="chart-value">{day.duration}m</div>
              </div>
            ))
          ) : (
            <p>No practice data available.</p>
          )}
        </div>
      </div>

      <div className="dashboard-actions">
        <button className="share-btn" onClick={handleShareClick}>📤 Share Achievements</button>
        <button className="reset-btn" onClick={handleResetClick}>🔄 Reset Progress</button>
      </div>

      {showShareConfirm && (
        <div className="confirm-dialog-overlay">
          <div className="confirm-dialog">
            <h3>Share Achievements</h3>
            <p>Are you sure you want to share your yoga achievements?</p>
            <div className="confirm-buttons">
              <button className="confirm-yes" onClick={confirmShare}>Yes, Share</button>
              <button className="confirm-no" onClick={cancelShare}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showResetConfirm && (
        <div className="confirm-dialog-overlay">
          <div className="confirm-dialog">
            <h3>Reset Progress</h3>
            <p>Are you sure you want to reset all your progress? This action cannot be undone.</p>
            <div className="confirm-buttons">
              <button className="confirm-yes reset" onClick={confirmReset}>Yes, Reset</button>
              <button className="confirm-no" onClick={cancelReset}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* For testing/demo: Add practice session button */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => addPracticeSession(15)}>Add 15 min Practice Session (Today)</button>
      </div>
    </div>
  );
}
