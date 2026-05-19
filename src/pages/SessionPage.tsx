import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import type { PoseData, SessionPhase } from '../types/yoga'
import { sessionStore } from '../store/sessionStore'
import { useWebcam } from '../hooks/useWebcam'
import { usePoseDetection } from '../hooks/usePoseDetection'
import { generateFeedback } from '../utils/feedbackEngine'
import { gamification, XP_REWARDS } from '../utils/gamification'
import { launchConfetti } from '../utils/confetti'
import { showToast } from '../components/XPToast'
import CountdownRing from '../components/CountdownRing'
import { appreciationManager } from '../utils/appreciationUtils'
import './SessionPage.css'

export default function SessionPage() {
  const navigate = useNavigate()
  const config = sessionStore.getConfig()
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState<SessionPhase>('prepare')
  const [poseIdx, setPoseIdx] = useState(0)
  const [prepareCount, setPrepareCount] = useState(3)
  const [holdRemaining, setHoldRemaining] = useState(0)
  const [sessionStartTime] = useState(Date.now())
  const [sessionXP, setSessionXP] = useState(0)
  const [combo, setCombo] = useState(0)
  const [completedPoses, setCompletedPoses] = useState(0)
  const [scores, setScores] = useState<number[]>([])
  const [showSkip, setShowSkip] = useState(false)
  const holdScoresRef = useRef<number[]>([])

  const holdTotal = config?.holdSeconds ?? 30
  const poses = useMemo(() => config?.poses ?? [], [config])
  const currentPose: PoseData | undefined = poses[poseIdx]

  const { isReady: webcamReady, error: webcamError } = useWebcam(videoRef)
  const { matchScore, landmarks } = usePoseDetection(
    videoRef,
    canvasRef,
    phase === 'hold' && !webcamError
  )

  const feedback = currentPose
    ? generateFeedback(landmarks, currentPose.name, matchScore)
    : null

  const redirectToPractice = useCallback(() => {
    navigate('/practice', { replace: true })
  }, [navigate])

  useEffect(() => {
    if (!config || poses.length === 0) {
      redirectToPractice()
      return
    }
    gamification.resetSession()
    holdScoresRef.current = []
  }, [config, poses.length, redirectToPractice])

  useEffect(() => {
    if (phase !== 'prepare') return
    if (prepareCount <= 0) {
      setPhase('hold')
      setHoldRemaining(holdTotal)
      setShowSkip(false)
      holdScoresRef.current = []
      return
    }
    const t = setTimeout(() => setPrepareCount(p => p - 1), 1000)
    return () => clearTimeout(t)
  }, [phase, prepareCount, holdTotal])

  useEffect(() => {
    if (phase !== 'hold') return
    if (matchScore < 30) return

    holdScoresRef.current.push(matchScore)

    const t = setTimeout(() => {
      setHoldRemaining(prev => {
        if (prev <= 1) {
          handlePoseComplete()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearTimeout(t)
  }, [phase, holdRemaining, matchScore])

  useEffect(() => {
    if (phase !== 'hold') return
    const t = setTimeout(() => setShowSkip(true), holdTotal * 2 * 1000)
    return () => clearTimeout(t)
  }, [phase, holdTotal])

  const handlePoseComplete = useCallback(() => {
    const holdScores = holdScoresRef.current
    const avgHoldScore = holdScores.length > 0
      ? Math.round(holdScores.reduce((a, b) => a + b, 0) / holdScores.length)
      : matchScore
    const score = Math.max(avgHoldScore, matchScore)

    const baseXP = XP_REWARDS.poseComplete
    const isPerfect = score >= 88
    const earned = gamification.awardXP(baseXP, isPerfect ? 'Perfect Hold' : 'Pose Complete')
    setSessionXP(prev => prev + earned.earned)
    setScores(prev => [...prev, score])
    setCompletedPoses(prev => prev + 1)
    showToast(earned.toast)

    if (isPerfect) {
      gamification.incrementCombo()
      gamification.recordPerfectHold()
      const state = gamification.getState()
      setCombo(state.combo)
    } else if (score >= 65) {
      gamification.incrementCombo()
      const state = gamification.getState()
      setCombo(state.combo)
    } else {
      gamification.breakCombo()
      setCombo(0)
    }

    setPhase('complete')
  }, [matchScore])

  const handleNext = useCallback(() => {
    if (poseIdx + 1 < poses.length) {
      setPoseIdx(prev => prev + 1)
      setPhase('prepare')
      setPrepareCount(3)
      setShowSkip(false)
      holdScoresRef.current = []
    } else {
      finishSession()
    }
  }, [poseIdx, poses.length])

  const handleSkip = useCallback(() => {
    gamification.breakCombo()
    setCombo(0)
    setScores(prev => [...prev, 0])
    setCompletedPoses(prev => prev + 1)
    handleNext()
  }, [handleNext])

  const finishSession = useCallback(() => {
    const duration = Math.round((Date.now() - sessionStartTime) / 1000)
    const state = gamification.getState()
    const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0

    const categories = new Set<string>()
    for (const p of poses) {
      if (p.category) categories.add(p.category)
    }

    gamification.recordSession({
      durationSeconds: duration,
      categoriesPracticed: [...categories],
      hour: new Date().getHours(),
      posesCompleted: completedPoses,
    })

    const result = {
      completedPoses,
      totalXP: state.sessionXP,
      avgMatchScore: avg,
      bestCombo: state.bestCombo,
      durationSeconds: duration,
      badgesUnlocked: [] as string[],
      poseScores: scores,
      categoriesPracticed: [...categories],
    }

    sessionStore.setResult(result)

    const newBadgeIds = appreciationManager.recordSessionFromResult(
      {
        durationSeconds: duration,
        avgMatchScore: avg,
        posesCompleted: completedPoses,
        categoriesPracticed: [...categories],
        xpEarned: state.sessionXP,
      },
      gamification.getState()
    )
    result.badgesUnlocked = newBadgeIds

    setPhase('summary')

    if (confettiCanvasRef.current) {
      confettiCanvasRef.current.width = window.innerWidth
      confettiCanvasRef.current.height = window.innerHeight
      launchConfetti(confettiCanvasRef.current)
    }

    if (newBadgeIds.length > 0) {
      const badgeNames = newBadgeIds.map(id => {
        const def = appreciationManager.getStats().badges.find(b => b.id === id)
        return def ? `${def.icon} ${def.name}` : id
      })
      showToast(`🏆 Badges unlocked: ${badgeNames.join(', ')}`)
    }

    if (state.totalXP === state.sessionXP && state.sessionXP > 0) {
      showToast(`🎁 First session bonus! +${XP_REWARDS.firstSession} XP`)
    }

    gamification.resetSession()
  }, [sessionStartTime, scores, completedPoses, poses])

  const handlePracticeAgain = useCallback(() => {
    sessionStore.clear()
    navigate('/practice')
  }, [navigate])

  const handleGoHome = useCallback(() => {
    sessionStore.clear()
    navigate('/')
  }, [navigate])

  if (!config || poses.length === 0) {
    return null
  }

  if (phase === 'summary') {
    const state = gamification.getState()
    const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0
    const duration = Math.round((Date.now() - sessionStartTime) / 1000)
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60

    return (
      <div className="session-page summary-screen">
        <canvas ref={confettiCanvasRef} className="confetti-canvas" />
        <div className="summary-card">
          <h1 className="summary-title">Session Complete!</h1>

          <div className="summary-stat">
            <span className="summary-stat-label">Poses completed</span>
            <span className="summary-stat-value">{completedPoses}/{poses.length}</span>
          </div>
          <div className="summary-stat">
            <span className="summary-stat-label">Total XP earned</span>
            <span className="summary-stat-value">+{sessionXP}</span>
          </div>
          <div className="summary-stat">
            <span className="summary-stat-label">Best combo</span>
            <span className="summary-stat-value">×{state.bestCombo > 0 ? state.bestCombo.toFixed(1) : '1.0'}</span>
          </div>
          <div className="summary-stat">
            <span className="summary-stat-label">Avg match score</span>
            <span className="summary-stat-value">{avg}%</span>
          </div>
          <div className="summary-stat">
            <span className="summary-stat-label">Duration</span>
            <span className="summary-stat-value">{minutes}m {seconds}s</span>
          </div>

          <div className="summary-level">
            Level {state.level + 1}: {state.levelName} — {state.totalXP} total XP
          </div>

          <div className="summary-actions">
            <button className="btn-primary" onClick={handlePracticeAgain}>Practice Again</button>
            <button className="btn-secondary" onClick={handleGoHome}>Go Home</button>
          </div>
        </div>
      </div>
    )
  }

  if (!currentPose) return null

  return (
    <div className="session-page">
      <div className="session-topbar">
        <button className="session-quit" onClick={handleGoHome}>← Quit</button>
        <span className="session-progress">
          Pose {poseIdx + 1} of {poses.length}
          <span className="session-progress-bar">
            <span style={{ width: `${((poseIdx + (phase === 'complete' ? 1 : 0)) / poses.length) * 100}%` }} />
          </span>
        </span>
        {combo > 1 && <span className="session-combo">🔥 ×{combo}</span>}
        <span className="session-xp">XP: {sessionXP}</span>
      </div>

      <div className="session-body">
        <div className="session-reference">
          <img
            src={`/${currentPose.image}`}
            alt={currentPose.name}
            className="pose-img reference-img"
          />
          <h2 className="session-pose-name">{currentPose.name}</h2>
          {phase === 'hold' && (
            <p className="session-step-text">
              {currentPose.steps && currentPose.steps[0]
                ? currentPose.steps[0]
                : 'Follow the reference image'}
            </p>
          )}
        </div>

        <div className="session-webcam-area">
          {(webcamError || !webcamReady) && phase === 'hold' ? (
            <div className="webcam-fallback">
              <p>Webcam unavailable — practicing in timer mode</p>
              {webcamError && <p className="webcam-error-text">{webcamError}</p>}
            </div>
          ) : (
            <>
              <video ref={videoRef} className="webcam-video" playsInline muted />
              <canvas ref={canvasRef} className="webcam-canvas" />
            </>
          )}

          {phase === 'prepare' && (
            <div className="prepare-overlay">
              <span className="prepare-count">{prepareCount}</span>
              <p className="prepare-label">Get ready…</p>
            </div>
          )}

          {phase === 'hold' && (
            <>
              <div className="session-match-score">
                Match: {matchScore}%
                <div className="match-bar">
                  <div
                    className={`match-fill ${matchScore >= 85 ? 'high' : matchScore >= 65 ? 'mid' : 'low'}`}
                    style={{ width: `${Math.min(matchScore, 100)}%` }}
                  />
                </div>
              </div>
              <CountdownRing
                total={holdTotal}
                remaining={holdRemaining}
                matchScore={matchScore}
              />
              <div className="session-skip">
                {showSkip && (
                  <button className="btn-skip" onClick={handleSkip}>
                    Skip anyway?
                  </button>
                )}
              </div>
            </>
          )}

          {phase === 'complete' && (
            <div className="complete-overlay">
              <svg className="complete-check" viewBox="0 0 60 60" width="80" height="80">
                <circle cx="30" cy="30" r="26" fill="none" stroke="#27ae60" strokeWidth="4" />
                <path d="M18 30 L26 38 L42 22" fill="none" stroke="#27ae60" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <button className="btn-next" onClick={handleNext}>
                {poseIdx + 1 < poses.length ? 'Next →' : 'See Summary →'}
              </button>
            </div>
          )}
        </div>
      </div>

      {phase === 'hold' && feedback && (
        <div className={`session-feedback feedback-banner ${feedback.severity}`}>
          {feedback.text}
        </div>
      )}

      <div className="session-manual-next">
        {phase === 'hold' && (
          <button className="btn-next" onClick={handlePoseComplete}>
            Next →
          </button>
        )}
      </div>
    </div>
  )
}
