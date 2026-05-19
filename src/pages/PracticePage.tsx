import { useState, useMemo, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import POSTURES from '../data/postures.json'
import type { PoseData } from '../types/yoga'
import { sessionStore } from '../store/sessionStore'
import { getPendingPoses, clearPendingPoses, removePendingPose } from '../store/routineStore'
import './PracticePage.css'

const PRESET_ROUTINES: Record<string, string[]> = {
  'Morning Flow': [
    'Tadasana/Mountain Pose', 'Virabhadrasana I/Warrior I', 'Virabhadrasana II/Warrior II',
    'Uttanasana/Standing Forward Bend', 'Adho Mukha Svanasana/Downward-Facing Dog',
    "Balasana/Child's Pose",
  ],
  Relaxation: [
    "Balasana/Child's Pose", 'Supta Baddha Konasana/Reclining Bound Angle Pose',
    'Jathara Parivartanasana/Reclining Spinal Twist', 'Savasana/Corpse Pose',
  ],
  Strength: [
    'Utkatasana/Chair Pose', 'Virabhadrasana I/Warrior I', 'Virabhadrasana II/Warrior II',
    'Vasisthasana/Side Plank Pose', 'Chaturanga Dandasana/Four-Limbed Staff Pose',
  ],
  Balance: [
    'Vrksasana/Tree Pose', 'Garudasana/Eagle Pose', 'Ardha Chandrasana/Half Moon Pose',
    'Virabhadrasana III/Warrior III',
  ],
}

const CATEGORIES = ['All', ...new Set((POSTURES as PoseData[]).map(p => p.category))]

export default function PracticePage() {
  const navigate = useNavigate()
  const allPoses = POSTURES as PoseData[]
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedPoses, setSelectedPoses] = useState<PoseData[]>([])
  const [holdSeconds, setHoldSeconds] = useState(30)
  const [dragIdx, setDragIdx] = useState<number | null>(null)

  useEffect(() => {
    const pending = getPendingPoses()
    if (pending.length > 0) {
      setSelectedPoses(pending)
      clearPendingPoses()
    }
  }, [])

  const filtered = useMemo(() => {
    let result = allPoses
    if (category !== 'All') {
      result = result.filter(p => p.category === category)
    }
    if (search) {
      const s = search.toLowerCase()
      result = result.filter(
        p => p.name.toLowerCase().includes(s) || p.benefits.some(b => b.toLowerCase().includes(s))
      )
    }
    return result
  }, [allPoses, category, search])

  const togglePose = useCallback((pose: PoseData) => {
    setSelectedPoses(prev =>
      prev.find(p => p.name === pose.name)
        ? prev.filter(p => p.name !== pose.name)
        : [...prev, pose]
    )
  }, [])

  const removePose = useCallback((name: string) => {
    setSelectedPoses(prev => prev.filter(p => p.name !== name))
    removePendingPose(name)
  }, [])

  const applyPreset = useCallback((name: string) => {
    const names = PRESET_ROUTINES[name]
    if (!names) return
    const matched = names.map(n => allPoses.find(p => p.name === n)).filter(Boolean) as PoseData[]
    setSelectedPoses(matched)
  }, [allPoses])

  const handleDragStart = useCallback((idx: number) => {
    setDragIdx(idx)
  }, [])

  const handleDrop = useCallback((idx: number) => {
    if (dragIdx === null || dragIdx === idx) return
    setSelectedPoses(prev => {
      const updated = [...prev]
      const [moved] = updated.splice(dragIdx, 1)
      updated.splice(idx, 0, moved)
      return updated
    })
    setDragIdx(null)
  }, [dragIdx])

  const startSession = useCallback(() => {
    sessionStore.setConfig({ poses: selectedPoses, holdSeconds })
    navigate('/session')
  }, [selectedPoses, holdSeconds, navigate])

  return (
    <div className="page-wrapper practice-page">
      <div className="practice-layout">
        <div className="practice-selector">
          <h1>Build Your Routine</h1>
          <input
            className="practice-search"
            type="search"
            placeholder="Search poses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search poses"
          />
          <div className="practice-categories">
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`practice-cat-btn ${category === c ? 'active' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="practice-pose-grid">
            {filtered.map(p => {
              const isSelected = selectedPoses.some(sp => sp.name === p.name)
              return (
                <div
                  key={p.name}
                  className={`practice-pose-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => togglePose(p)}
                >
                  <img src={`/${p.image}`} alt={p.name} className="pose-img" loading="lazy" />
                  <div className="practice-pose-info">
                    <span className="practice-pose-name">{p.name}</span>
                    <span className="practice-pose-cat">{p.category}</span>
                  </div>
                  <div className={`practice-checkbox ${isSelected ? 'checked' : ''}`}>
                    {isSelected ? '✓' : ''}
                  </div>
                </div>
              )
            })}
          </div>
          {filtered.length === 0 && (
            <p className="practice-empty">No poses match your search.</p>
          )}
        </div>

        <div className="practice-tray">
          <h2>Your Routine ({selectedPoses.length})</h2>

          <div className="preset-row">
            {Object.keys(PRESET_ROUTINES).map(name => (
              <button key={name} className="preset-btn" onClick={() => applyPreset(name)}>
                {name}
              </button>
            ))}
          </div>

          <div className="tray-list">
            {selectedPoses.length === 0 && (
              <p className="tray-empty">Select poses from the left panel to build your routine.</p>
            )}
            {selectedPoses.map((p, i) => (
              <div
                key={p.name}
                className={`tray-item ${dragIdx === i ? 'dragging' : ''}`}
                draggable
                onDragStart={() => handleDragStart(i)}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleDrop(i)}
              >
                <span className="tray-drag-handle">⠿</span>
                <span className="tray-pose-name">{p.name}</span>
                <button className="tray-remove" onClick={() => removePose(p.name)} aria-label={`Remove ${p.name}`}>
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="tray-settings">
            <label>
              Hold time:
              <select
                value={holdSeconds}
                onChange={e => setHoldSeconds(Number(e.target.value))}
              >
                <option value={15}>15s</option>
                <option value={30}>30s</option>
                <option value={45}>45s</option>
                <option value={60}>60s</option>
                <option value={90}>90s</option>
              </select>
            </label>
          </div>

          <div className="tray-actions">
            <button
              className="btn-primary btn-start"
              disabled={selectedPoses.length === 0}
              onClick={startSession}
            >
              {selectedPoses.length === 0
                ? 'Start Session'
                : `Start Session (${selectedPoses.length} pose${selectedPoses.length !== 1 ? 's' : ''})`
              }
            </button>
            <button
              className="btn-secondary btn-clear"
              onClick={() => setSelectedPoses([])}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
