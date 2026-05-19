import { useState, useEffect, useCallback, useMemo } from 'react'
import { loadState, saveState } from '../utils/localStorage'
import './UserTests.css'

interface TestResult {
  name: string
  value: number | string
  category: string
  timestamp: string
}

interface TestDef {
  name: string
  type: 'timer' | 'count' | 'measurement' | 'scale' | 'yesno'
  unit: string
  benchmarks?: { poor: number; fair: number; good: number; excellent: number; lowerIsBetter?: boolean }
}

interface TestCategory {
  category: string
  tests: TestDef[]
}

const STORAGE_KEY = 'yoga.user.tests.v1'
const TEST_XP_KEY = 'yoga.test.xp.v1'

const TEST_CATEGORIES: TestCategory[] = [
  {
    category: 'Breath & Lung Efficiency',
    tests: [
      { name: 'Breath-Holding Test', type: 'timer', unit: 'seconds', benchmarks: { poor: 20, fair: 40, good: 60, excellent: 90 } },
      { name: 'Controlled Breathing Test', type: 'yesno', unit: '' },
      { name: 'Pranayama Duration', type: 'timer', unit: 'seconds', benchmarks: { poor: 30, fair: 60, good: 120, excellent: 300 } },
      { name: 'Exhale Length Test', type: 'timer', unit: 'seconds', benchmarks: { poor: 10, fair: 20, good: 30, excellent: 45 } },
    ],
  },
  {
    category: 'Balance & Coordination',
    tests: [
      { name: 'Single-Leg Stand', type: 'timer', unit: 'seconds', benchmarks: { poor: 10, fair: 25, good: 45, excellent: 60 } },
      { name: 'Closed-Eyes Balance', type: 'timer', unit: 'seconds', benchmarks: { poor: 5, fair: 15, good: 30, excellent: 60 } },
      { name: 'Dynamic Balance', type: 'count', unit: 'transitions', benchmarks: { poor: 3, fair: 6, good: 10, excellent: 15 } },
      { name: 'Tree Pose Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 10, fair: 20, good: 40, excellent: 90 } },
    ],
  },
  {
    category: 'Flexibility & Mobility',
    tests: [
      { name: 'Forward Bend Test', type: 'measurement', unit: 'cm from floor', benchmarks: { poor: 30, fair: 15, good: 5, excellent: 0, lowerIsBetter: true } },
      { name: 'Side Stretch Test', type: 'measurement', unit: 'cm', benchmarks: { poor: 30, fair: 20, good: 10, excellent: 5, lowerIsBetter: true } },
      { name: 'Spinal Twist Test', type: 'scale', unit: '/10', benchmarks: { poor: 3, fair: 5, good: 7, excellent: 10 } },
      { name: 'Backbend Test', type: 'scale', unit: '/10', benchmarks: { poor: 3, fair: 5, good: 7, excellent: 10 } },
    ],
  },
  {
    category: 'Posture Endurance & Strength',
    tests: [
      { name: 'Plank Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 20, fair: 45, good: 90, excellent: 180 } },
      { name: 'Chair Pose Endurance', type: 'timer', unit: 'seconds', benchmarks: { poor: 15, fair: 30, good: 60, excellent: 120 } },
      { name: 'Warrior II Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 20, fair: 40, good: 75, excellent: 150 } },
      { name: 'Boat Pose Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 10, fair: 25, good: 45, excellent: 90 } },
    ],
  },
  {
    category: 'Yoga Flow & Endurance',
    tests: [
      { name: 'Sun Salutation Reps', type: 'count', unit: 'cycles', benchmarks: { poor: 3, fair: 6, good: 12, excellent: 25 } },
      { name: 'Flow Continuity', type: 'count', unit: 'poses', benchmarks: { poor: 3, fair: 6, good: 10, excellent: 15 } },
      { name: 'Recovery Rate', type: 'scale', unit: '/10', benchmarks: { poor: 3, fair: 5, good: 7, excellent: 9 } },
      { name: 'Active Flow Duration', type: 'timer', unit: 'minutes', benchmarks: { poor: 5, fair: 15, good: 30, excellent: 60 } },
    ],
  },
  {
    category: 'Relaxation & Mindfulness',
    tests: [
      { name: 'Savasana Duration', type: 'timer', unit: 'seconds', benchmarks: { poor: 60, fair: 180, good: 300, excellent: 600 } },
      { name: 'Guided Breathing Focus', type: 'scale', unit: '/10', benchmarks: { poor: 3, fair: 5, good: 7, excellent: 10 } },
      { name: 'Body Scan Awareness', type: 'scale', unit: '/10', benchmarks: { poor: 3, fair: 5, good: 7, excellent: 10 } },
      { name: 'Meditation Duration', type: 'timer', unit: 'minutes', benchmarks: { poor: 2, fair: 5, good: 10, excellent: 20 } },
    ],
  },
  {
    category: 'Hip & Lower Body',
    tests: [
      { name: 'Pigeon Pose Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 15, fair: 30, good: 60, excellent: 120 } },
      { name: 'Frog Pose Depth', type: 'scale', unit: '/10', benchmarks: { poor: 3, fair: 5, good: 7, excellent: 10 } },
      { name: 'Squat Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 20, fair: 45, good: 90, excellent: 180 } },
    ],
  },
  {
    category: 'Core Strength',
    tests: [
      { name: 'Dolphin Plank Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 15, fair: 30, good: 60, excellent: 120 } },
      { name: 'Side Plank Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 10, fair: 20, good: 40, excellent: 90 } },
      { name: 'Boat Pose Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 10, fair: 25, good: 45, excellent: 90 } },
    ],
  },
  {
    category: 'Upper Body & Shoulders',
    tests: [
      { name: 'Crow Pose Attempt', type: 'scale', unit: '/10', benchmarks: { poor: 2, fair: 4, good: 6, excellent: 9 } },
      { name: 'Shoulder Flexibility', type: 'scale', unit: '/10', benchmarks: { poor: 3, fair: 5, good: 7, excellent: 10 } },
      { name: 'Wrist Mobility Test', type: 'scale', unit: '/10', benchmarks: { poor: 3, fair: 5, good: 7, excellent: 10 } },
    ],
  },
  {
    category: 'Advanced Poses',
    tests: [
      { name: 'Headstand Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 5, fair: 15, good: 30, excellent: 60 } },
      { name: 'Handstand Kick-Up', type: 'scale', unit: '/10', benchmarks: { poor: 2, fair: 4, good: 6, excellent: 9 } },
      { name: 'Wheel Pose Hold', type: 'timer', unit: 'seconds', benchmarks: { poor: 10, fair: 20, good: 40, excellent: 90 } },
    ],
  },
]

function getBenchmark(benchmarks: TestDef['benchmarks'], value: number): { level: string; color: string } {
  if (!benchmarks) return { level: 'Completed', color: '#b38b59' }
  const b = benchmarks
  if (b.lowerIsBetter) {
    if (value <= b.excellent) return { level: 'Excellent!', color: '#27ae60' }
    if (value <= b.good) return { level: 'Good job', color: '#2ecc71' }
    if (value <= b.fair) return { level: 'Keep practicing', color: '#f39c12' }
    return { level: 'Need effort', color: '#e74c3c' }
  }
  if (value >= b.excellent) return { level: 'Excellent!', color: '#27ae60' }
  if (value >= b.good) return { level: 'Good job', color: '#2ecc71' }
  if (value >= b.fair) return { level: 'Keep practicing', color: '#f39c12' }
  return { level: 'Need effort', color: '#e74c3c' }
}

function getTrend(history: TestResult[]): 'up' | 'down' | 'stable' | null {
  if (history.length < 2) return null
  const recent = history.slice(0, 3)
  if (recent.length < 2) return null
  const vals = recent.map(r => typeof r.value === 'number' ? r.value : 0)
  const firstHalf = vals.slice(0, Math.floor(vals.length / 2)).reduce((a, b) => a + b, 0) / Math.floor(vals.length / 2)
  const secondHalf = vals.slice(Math.floor(vals.length / 2)).reduce((a, b) => a + b, 0) / (vals.length - Math.floor(vals.length / 2))
  const diff = secondHalf - firstHalf
  if (Math.abs(diff) < 0.5) return 'stable'
  return diff > 0 ? 'up' : 'down'
}

function aggregateResults(results: TestResult[]): Record<string, TestResult[]> {
  const map: Record<string, TestResult[]> = {}
  for (const r of results) {
    if (!map[r.name]) map[r.name] = []
    map[r.name].push(r)
  }
  for (const key of Object.keys(map)) {
    map[key].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  }
  return map
}

function TestSparkline({ history }: { history: TestResult[] }) {
  if (history.length < 2) return null
  const vals = history.slice(0, 5).map(r => (typeof r.value === 'number' ? r.value : 0)).reverse()
  const max = Math.max(...vals, 1)
  const w = 48
  const h = 20
  const pts = vals.map((v, i) => `${(i / (vals.length - 1)) * w},${h - (v / max) * h}`).join(' ')
  return (
    <svg className="test-sparkline" width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline fill="none" stroke="#b38b59" strokeWidth="1.5" points={pts} />
    </svg>
  )
}

export default function UserTests() {
  const [results, setResults] = useState<TestResult[]>(() => loadState(STORAGE_KEY) || [])
  const [testXP, setTestXP] = useState<number>(() => loadState(TEST_XP_KEY) || 0)
  const [activeCategory, setActiveCategory] = useState(TEST_CATEGORIES[0].category)
  const [timers, setTimers] = useState<Map<string, { startTime: number | null; interval: number | null }>>(new Map())
  const [runningTests, setRunningTests] = useState<Set<string>>(new Set())
  const [inputValues, setInputValues] = useState<Record<string, string>>({})

  useEffect(() => {
    saveState(STORAGE_KEY, results)
  }, [results])

  useEffect(() => {
    saveState(TEST_XP_KEY, testXP)
  }, [testXP])

  const grouped = useMemo(() => aggregateResults(results), [results])

  const categoryStats = useMemo(() => {
    const map: Record<string, { completed: number; improving: number; total: number; xp: number }> = {}
    for (const tc of TEST_CATEGORIES) {
      const catResults = results.filter(r => r.category === tc.category)
      const completed = new Set(catResults.map(r => r.name)).size
      const improving = tc.tests.filter(t => {
        const hist = grouped[t.name]
        return hist && getTrend(hist) === 'up'
      }).length
      map[tc.category] = { completed, improving, total: tc.tests.length, xp: 0 }
    }
    return map
  }, [results, grouped])

  const totalTestsCompleted = useMemo(() => new Set(results.map(r => r.name)).size, [results])
  const totalPossible = useMemo(() => TEST_CATEGORIES.reduce((s, c) => s + c.tests.length, 0), [])
  const totalImproving = useMemo(() => Object.values(categoryStats).reduce((s, c) => s + c.improving, 0), [categoryStats])

  const startTimer = useCallback((testName: string) => {
    setRunningTests(prev => new Set(prev).add(testName))
    const interval = window.setInterval(() => {
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

  const awardTestXP = useCallback(() => {
    setTestXP(prev => prev + 10)
  }, [])

  const saveResult = useCallback((testName: string, value: number | string, category: string) => {
    const newResult: TestResult = {
      name: testName,
      value,
      category,
      timestamp: new Date().toISOString(),
    }
    setResults(prev => [newResult, ...prev])
    awardTestXP()
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
  }, [timers, awardTestXP])

  const getLatestResult = useCallback((testName: string): TestResult | null => {
    return results.find(result => result.name === testName) || null
  }, [results])

  const deleteResult = useCallback((index: number) => {
    setResults(prev => prev.filter((_, i) => i !== index))
  }, [])

  const clearAllResults = useCallback(() => {
    if (window.confirm('Are you sure you want to delete all test results?')) {
      setResults([])
      setTestXP(0)
    }
  }, [])

  const activeCategoryDef = TEST_CATEGORIES.find(c => c.category === activeCategory)

  return (
    <section id="user-tests" className="user-tests-section">
      <h2>Yoga Self-Assessment Tests</h2>
      <p>Test your capabilities and track progress over time. Each test earns 10 XP!</p>

      <div className="tests-summary-bar">
        <div className="summary-stat">
          <span className="summary-stat-num">{totalTestsCompleted}/{totalPossible}</span>
          <span className="summary-stat-desc">Tests Completed</span>
        </div>
        <div className="summary-stat">
          <span className="summary-stat-num">{testXP}</span>
          <span className="summary-stat-desc">Test XP</span>
        </div>
        <div className="summary-stat">
          <span className="summary-stat-num">{totalImproving}</span>
          <span className="summary-stat-desc">Improving</span>
        </div>
      </div>

      <div className="tests-category-tabs">
        {TEST_CATEGORIES.map(tc => (
          <button
            key={tc.category}
            className={`test-cat-tab ${tc.category === activeCategory ? 'active' : ''}`}
            onClick={() => setActiveCategory(tc.category)}
          >
            {tc.category}
            <span className="test-cat-count">{categoryStats[tc.category].completed}/{tc.tests.length}</span>
          </button>
        ))}
      </div>

      <div className="tests-container">
        {activeCategoryDef && (
          <div key={activeCategoryDef.category} className="test-category">
            <h3>{activeCategoryDef.category}</h3>
            <div className="test-list">
              {activeCategoryDef.tests.map(test => {
                const latestResult = getLatestResult(test.name)
                const history = grouped[test.name] || []
                const trend = getTrend(history)
                const trendIcon = trend === 'up' ? '📈' : trend === 'down' ? '📉' : trend === 'stable' ? '➡️' : ''
                const inputKey = test.name

                return (
                  <div key={test.name} className="test-item">
                    <div className="test-item-header">
                      <h4>{test.name}</h4>
                      <div className="test-trend">
                        <TestSparkline history={history} />
                        {trendIcon && <span className="trend-icon">{trendIcon}</span>}
                      </div>
                    </div>
                    <p className="test-unit">{test.unit}</p>
                    {latestResult && (
                      <div className="latest-result">
                        <small>
                          Latest: {latestResult.value} {test.unit}
                          {typeof latestResult.value === 'number' && test.benchmarks && (
                            <span
                              className="benchmark-level"
                              style={{ color: getBenchmark(test.benchmarks, latestResult.value).color }}
                            >
                              {' '}— {getBenchmark(test.benchmarks, latestResult.value).level}
                            </span>
                          )}
                          <span className="result-date"> ({new Date(latestResult.timestamp).toLocaleDateString()})</span>
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
                              saveResult(test.name, time, activeCategoryDef.category)
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
                      <div className="input-row">
                        <input
                          type="number"
                          placeholder="Enter count"
                          value={inputValues[inputKey] ?? ''}
                          onChange={e => setInputValues(prev => ({ ...prev, [inputKey]: e.target.value }))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              const value = parseInt((e.target as HTMLInputElement).value)
                              if (!isNaN(value)) {
                                saveResult(test.name, value, activeCategoryDef.category)
                                setInputValues(prev => ({ ...prev, [inputKey]: '' }))
                              }
                            }
                          }}
                        />
                        <button onClick={() => {
                          const value = parseInt(inputValues[inputKey])
                          if (!isNaN(value)) {
                            saveResult(test.name, value, activeCategoryDef.category)
                            setInputValues(prev => ({ ...prev, [inputKey]: '' }))
                          }
                        }}>Save</button>
                      </div>
                    )}

                    {test.type === 'measurement' && (
                      <div className="input-row">
                        <input
                          type="number"
                          step="0.5"
                          placeholder="Enter measurement"
                          value={inputValues[inputKey] ?? ''}
                          onChange={e => setInputValues(prev => ({ ...prev, [inputKey]: e.target.value }))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              const value = parseFloat((e.target as HTMLInputElement).value)
                              if (!isNaN(value)) {
                                saveResult(test.name, value, activeCategoryDef.category)
                                setInputValues(prev => ({ ...prev, [inputKey]: '' }))
                              }
                            }
                          }}
                        />
                        <button onClick={() => {
                          const value = parseFloat(inputValues[inputKey])
                          if (!isNaN(value)) {
                            saveResult(test.name, value, activeCategoryDef.category)
                            setInputValues(prev => ({ ...prev, [inputKey]: '' }))
                          }
                        }}>Save</button>
                      </div>
                    )}

                    {test.type === 'scale' && (
                      <div className="input-row">
                        <input
                          type="number"
                          min="1"
                          max="10"
                          placeholder="1-10"
                          value={inputValues[inputKey] ?? ''}
                          onChange={e => setInputValues(prev => ({ ...prev, [inputKey]: e.target.value }))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              const value = parseInt((e.target as HTMLInputElement).value)
                              if (value >= 1 && value <= 10) {
                                saveResult(test.name, value, activeCategoryDef.category)
                                setInputValues(prev => ({ ...prev, [inputKey]: '' }))
                              }
                            }
                          }}
                        />
                        <button onClick={() => {
                          const value = parseInt(inputValues[inputKey])
                          if (value >= 1 && value <= 10) {
                            saveResult(test.name, value, activeCategoryDef.category)
                            setInputValues(prev => ({ ...prev, [inputKey]: '' }))
                          }
                        }}>Save</button>
                      </div>
                    )}

                    {test.type === 'yesno' && (
                      <div className="yesno-buttons">
                        <button onClick={() => saveResult(test.name, 'Yes', activeCategoryDef.category)}>Yes</button>
                        <button onClick={() => saveResult(test.name, 'No', activeCategoryDef.category)}>No</button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      <div className="results-section">
        <div className="results-header">
          <h3>Your Test Results ({results.length})</h3>
          {results.length > 0 && (
            <button className="clear-all-btn" onClick={clearAllResults}>
              Clear All
            </button>
          )}
        </div>
        {results.length === 0 ? (
          <p>No tests completed yet. Select a category above and start testing!</p>
        ) : (
          <div className="results-list">
            {results.slice(0, 50).map((result, index) => (
              <div key={index} className="result-item">
                <div className="result-content">
                  <div className="result-header-row">
                    <strong>{result.name}</strong>
                    <span className="category">{result.category}</span>
                  </div>
                  <div className="result-value">
                    {result.value} {result.value !== 'Yes' && result.value !== 'No' ? activeCategoryDef?.tests.find(t => t.name === result.name)?.unit || '' : ''}
                    {typeof result.value === 'number' && (
                      <span className="benchmark-level" style={{
                        color: getBenchmark(
                          activeCategoryDef?.tests.find(t => t.name === result.name)?.benchmarks,
                          result.value
                        ).color
                      }}>
                        {' '}— {getBenchmark(
                          activeCategoryDef?.tests.find(t => t.name === result.name)?.benchmarks,
                          result.value
                        ).level}
                      </span>
                    )}
                  </div>
                  <div className="result-time">{new Date(result.timestamp).toLocaleString()}</div>
                </div>
                <button className="delete-result-btn" onClick={() => deleteResult(index)} title="Delete this result">×</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
