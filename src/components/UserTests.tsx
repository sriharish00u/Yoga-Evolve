import { useState, useEffect, useCallback } from 'react'
import { loadState, saveState } from '../utils/localStorage'
import './UserTests.css'

interface TestResult {
  name: string
  value: number | string
  category: string
  timestamp: string
}

const STORAGE_KEY = 'yoga.user.tests.v1'

export default function UserTests() {
  const [results, setResults] = useState<TestResult[]>(() => loadState(STORAGE_KEY) || [])
  const [timers, setTimers] = useState<Map<string, { startTime: number | null; interval: number | null }>>(new Map())
  const [runningTests, setRunningTests] = useState<Set<string>>(new Set())

  const tests = [
    {
      category: 'Breath & Lung Efficiency',
      tests: [
        { name: 'Breath-Holding Test', type: 'timer', unit: 'seconds' },
        { name: 'Controlled Breathing Test', type: 'yesno' }
      ]
    },
    {
      category: 'Balance & Coordination',
      tests: [
        { name: 'Single-Leg Stand', type: 'timer', unit: 'seconds' },
        { name: 'Closed-Eyes Balance Test', type: 'timer', unit: 'seconds' },
        { name: 'Dynamic Balance Test', type: 'count', unit: 'transitions' }
      ]
    },
    {
      category: 'Flexibility & Mobility',
      tests: [
        { name: 'Forward Bend Test', type: 'measurement', unit: 'cm' },
        { name: 'Side Stretch Test', type: 'measurement', unit: 'cm' },
        { name: 'Spinal Twist Test', type: 'scale', unit: '/10' },
        { name: 'Backbend Test', type: 'scale', unit: '/10' }
      ]
    },
    {
      category: 'Posture Endurance & Strength',
      tests: [
        { name: 'Plank Hold', type: 'timer', unit: 'seconds' },
        { name: 'Chair Pose Endurance', type: 'timer', unit: 'seconds' },
        { name: 'Warrior II Hold', type: 'timer', unit: 'seconds' },
        { name: 'Boat Pose Hold', type: 'timer', unit: 'seconds' }
      ]
    },
    {
      category: 'Relaxation & Mindfulness',
      tests: [
        { name: 'Savasana Duration', type: 'timer', unit: 'seconds' },
        { name: 'Guided Breathing Focus', type: 'scale', unit: '/10' }
      ]
    },
    {
      category: 'Yoga Flow & Endurance',
      tests: [
        { name: 'Sun Salutation Repetitions', type: 'count', unit: 'cycles' },
        { name: 'Yoga Flow Continuity', type: 'count', unit: 'poses' },
        { name: 'Recovery Test', type: 'scale', unit: '/10' }
      ]
    }
  ]

  useEffect(() => {
    saveState(STORAGE_KEY, results)
  }, [results])

  const startTimer = useCallback((testName: string) => {
    setRunningTests(prev => new Set(prev).add(testName))
    const interval = window.setInterval(() => {
      // Force re-render to update display
      setTimers(current => new Map(current))
    }, 100)
    setTimers(prev => {
      const newTimers = new Map(prev)
      newTimers.set(testName, { startTime: Date.now(), interval })
      return newTimers
    })
  }, [])

  const stopTimer = useCallback((testName: string) => {
    setRunningTests(prev => {
      const newSet = new Set(prev)
      newSet.delete(testName)
      return newSet
    })
    const timerData = timers.get(testName)
    if (timerData?.interval) {
      clearInterval(timerData.interval)
    }
    const elapsed = timerData?.startTime ? Math.floor((Date.now() - timerData.startTime) / 1000) : 0
    return elapsed
  }, [timers])

  const getElapsedTime = useCallback((testName: string) => {
    const timerData = timers.get(testName)
    if (!timerData?.startTime) return 0
    return Math.floor((Date.now() - timerData.startTime) / 1000)
  }, [timers])

  const saveResult = useCallback((testName: string, value: number | string, category: string) => {
    const newResult: TestResult = {
      name: testName,
      value,
      category,
      timestamp: new Date().toLocaleString()
    }
    setResults(prev => [newResult, ...prev])

    // Clean up timer for this test
    const timerData = timers.get(testName)
    if (timerData?.interval) {
      clearInterval(timerData.interval)
    }
    setTimers(prev => {
      const newTimers = new Map(prev)
      newTimers.delete(testName)
      return newTimers
    })
    setRunningTests(prev => {
      const newSet = new Set(prev)
      newSet.delete(testName)
      return newSet
    })
  }, [timers])

  const getLatestResult = useCallback((testName: string): TestResult | null => {
    return results.find(result => result.name === testName) || null
  }, [results])

  const deleteResult = useCallback((index: number) => {
    setResults(prev => prev.filter((_, i) => i !== index))
  }, [])

  const clearAllResults = useCallback(() => {
    if (window.confirm('Are you sure you want to delete all test results? This action cannot be undone.')) {
      setResults([])
    }
  }, [])

  const getPerformanceLevel = useCallback((testName: string, value: number | string): string => {
    if (typeof value === 'string') return 'Completed'

    switch (testName) {
      case 'Breath-Holding Test':
        if (value < 20) return 'Need effort'
        if (value < 40) return 'Keep practicing'
        if (value < 60) return 'Good job'
        return 'Excellent!'
      case 'Single-Leg Stand':
        if (value < 15) return 'Need effort'
        if (value < 30) return 'Keep practicing'
        if (value < 60) return 'Good job'
        return 'Excellent!'
      case 'Forward Bend Test':
        if (value > 20) return 'Need effort'
        if (value > 10) return 'Keep practicing'
        if (value > 0) return 'Good job'
        return 'Excellent!'
      default:
        return 'Completed'
    }
  }, [results])

  return (
    <section id="user-tests" className="user-tests-section">
      <h2>Yoga Self-Assessment Tests</h2>
      <p>Test your yoga capabilities and track your progress over time.</p>

      <div className="tests-container">
        {tests.map(category => (
          <div key={category.category} className="test-category">
            <h3>{category.category}</h3>
            <div className="test-list">
              {category.tests.map(test => {
                const latestResult = getLatestResult(test.name)
                return (
                  <div key={test.name} className="test-item">
                    <h4>{test.name}</h4>
                    <p>{test.unit}</p>
                    {latestResult && (
                      <div className="latest-result">
                        <small>
                          Latest: {latestResult.value} {typeof latestResult.value === 'number' ? getPerformanceLevel(test.name, latestResult.value) : ''}
                          <span className="result-date">({new Date(latestResult.timestamp).toLocaleDateString()})</span>
                        </small>
                      </div>
                    )}

                  {test.type === 'timer' && (
                    <div className="timer-controls">
                      <div className="timer-display">{runningTests.has(test.name) ? getElapsedTime(test.name) : 0}s</div>
                      <button
                        onClick={() => {
                          if (runningTests.has(test.name)) {
                            const time = stopTimer(test.name)
                            saveResult(test.name, time, category.category)
                          } else {
                            startTimer(test.name)
                          }
                        }}
                      >
                        {runningTests.has(test.name) ? 'Stop' : 'Start'}
                      </button>
                    </div>
                  )}

                  {test.type === 'count' && (
                    <input
                      type="number"
                      placeholder="Enter count"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const value = parseInt((e.target as HTMLInputElement).value)
                          if (!isNaN(value)) {
                            saveResult(test.name, value, category.category)
                            ;(e.target as HTMLInputElement).value = ''
                          }
                        }
                      }}
                    />
                  )}

                  {test.type === 'measurement' && (
                    <input
                      type="number"
                      placeholder="Enter measurement"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const value = parseFloat((e.target as HTMLInputElement).value)
                          if (!isNaN(value)) {
                            saveResult(test.name, value, category.category)
                            ;(e.target as HTMLInputElement).value = ''
                          }
                        }
                      }}
                    />
                  )}

                  {test.type === 'scale' && (
                    <input
                      type="number"
                      min="1"
                      max="10"
                      placeholder="1-10"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const value = parseInt((e.target as HTMLInputElement).value)
                          if (value >= 1 && value <= 10) {
                            saveResult(test.name, value, category.category)
                            ;(e.target as HTMLInputElement).value = ''
                          }
                        }
                      }}
                    />
                  )}

                  {test.type === 'yesno' && (
                    <div className="yesno-buttons">
                      <button onClick={() => saveResult(test.name, 'Yes', category.category)}>Yes</button>
                      <button onClick={() => saveResult(test.name, 'No', category.category)}>No</button>
                    </div>
                  )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="results-section">
        <div className="results-header">
          <h3>Your Test Results</h3>
          {results.length > 0 && (
            <button className="clear-all-btn" onClick={clearAllResults}>
              Clear All Results
            </button>
          )}
        </div>
        {results.length === 0 ? (
          <p>No tests completed yet. Start testing above!</p>
        ) : (
          <div className="results-list">
            {results.map((result, index) => (
              <div key={index} className="result-item">
                <div className="result-content">
                  <div className="result-header">
                    <strong>{result.name}</strong>
                    <span className="category">{result.category}</span>
                  </div>
                  <div className="result-value">
                    {result.value} {typeof result.value === 'number' ? getPerformanceLevel(result.name, result.value) : ''}
                  </div>
                  <div className="result-time">{result.timestamp}</div>
                </div>
                <button
                  className="delete-result-btn"
                  onClick={() => deleteResult(index)}
                  title="Delete this result"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
