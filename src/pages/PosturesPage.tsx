import { useState, useMemo, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'
import POSTURES from '../data/postures.json'
import { CATEGORY_DIFFICULTY } from '../types/yoga'
import type { PoseData, DifficultyLevel } from '../types/yoga'
import { BODY_PARTS } from '../types/yoga'
import BodyPartFilter from '../components/BodyPartFilter'
import { addPendingPose } from '../store/routineStore'
import './PosturesPage.css'

type SortMode = 'name' | 'category' | 'level'

const LEVELS: DifficultyLevel[] = ['beginner', 'intermediate', 'advanced']

function getDifficulty(pose: PoseData): DifficultyLevel {
  return CATEGORY_DIFFICULTY[pose.category] || 'beginner'
}

export default function PosturesPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [level, setLevel] = useState<DifficultyLevel | 'All'>('All')
  const [sort, setSort] = useState<SortMode>('name')
  const [selected, setSelected] = useState<PoseData | null>(null)
  const [bodyParts, setBodyParts] = useState<string[]>([])
  const [addedSet, setAddedSet] = useState<Set<string>>(new Set())

  const poses = POSTURES as PoseData[]

  const categories = useMemo(() => {
    const cats = new Set(poses.map(p => p.category))
    return ['All', ...cats]
  }, [poses])

  const filtered = useMemo(() => {
    let result = [...poses]

    if (category !== 'All') {
      result = result.filter(p => p.category === category)
    }
    if (level !== 'All') {
      result = result.filter(p => getDifficulty(p) === level)
    }
    if (bodyParts.length > 0) {
      result = result.filter(p => {
        const pb = p.bodyParts ?? []
        return bodyParts.some(bp => pb.includes(bp))
      })
    }
    if (search) {
      const s = search.toLowerCase()
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(s) ||
          p.benefits.some(b => b.toLowerCase().includes(s)) ||
          p.category.toLowerCase().includes(s) ||
          (p.tags ?? []).some(t => t.toLowerCase().includes(s))
      )
    }

    switch (sort) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'category':
        result.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
        break
      case 'level':
        result.sort((a, b) => {
          const lA = LEVELS.indexOf(getDifficulty(a))
          const lB = LEVELS.indexOf(getDifficulty(b))
          return lA - lB || a.name.localeCompare(b.name)
        })
        break
    }

    return result
  }, [poses, category, level, search, sort, bodyParts])

  const diffDots = (d: DifficultyLevel) => {
    const idx = LEVELS.indexOf(d) + 1
    return '●'.repeat(idx) + '○'.repeat(3 - idx)
  }

  const handleAdd = useCallback((pose: PoseData) => {
    addPendingPose(pose)
    setAddedSet(prev => new Set(prev).add(pose.name))
    setTimeout(() => {
      setAddedSet(prev => {
        const next = new Set(prev)
        next.delete(pose.name)
        return next
      })
    }, 2000)
  }, [])

  const closeModal = useCallback(() => setSelected(null), [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal()
    }
    if (selected) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, closeModal])

  return (
    <div className="page-wrapper postures-page">
      <div className="postures-header">
        <h1>Pose Library</h1>
        <div className="postures-controls">
          <input
            className="postures-search"
            type="search"
            placeholder="Search poses (name, benefit, category)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search poses"
          />
          <div className="postures-filters">
            <div className="filter-group">
              <label>Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)}>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label>Level</label>
              <select value={level} onChange={e => setLevel(e.target.value as DifficultyLevel | 'All')}>
                <option value="All">All Levels</option>
                {LEVELS.map(l => <option key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label>Sort</label>
              <select value={sort} onChange={e => setSort(e.target.value as SortMode)}>
                <option value="name">A–Z</option>
                <option value="category">Category</option>
                <option value="level">Level</option>
              </select>
            </div>
          </div>
          <BodyPartFilter poses={poses} selected={bodyParts} onChange={setBodyParts} />
        </div>
        <p className="postures-count">{filtered.length} pose{filtered.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="postures-grid">
        {filtered.map(p => {
          const diff = getDifficulty(p)
          const added = addedSet.has(p.name)
          return (
            <article
              key={p.name}
              className="pose-card"
              onClick={() => setSelected(p)}
            >
              <img
                src={`/${p.image}`}
                alt={p.name}
                className="pose-img"
                loading="lazy"
              />
              <span className="pose-category-tag">{p.category}</span>
              <h3 className="pose-card-name">{p.name}</h3>
              <span className="pose-difficulty">{diffDots(diff)}</span>
              {p.bodyParts && p.bodyParts.length > 0 && (
                <div className="pose-bodypart-mini">
                  {p.bodyParts.slice(0, 3).map(bp => {
                    const meta = BODY_PARTS.find(m => m.id === bp)
                    return meta ? (
                      <span key={bp} className="bodypart-mini-chip" title={meta.label}>
                        {meta.icon}
                      </span>
                    ) : null
                  })}
                </div>
              )}
              <div className="pose-benefit-tags">
                {p.benefits.slice(0, 3).map(b => (
                  <span key={b} className="benefit-tag">{b.split(' ').slice(0, 3).join(' ')}</span>
                ))}
              </div>
              <div className="pose-card-actions">
                {added ? (
                  <span className="btn-added">✓ Added</span>
                ) : (
                  <button className="btn-add" onClick={(e) => {
                    e.stopPropagation()
                    handleAdd(p)
                  }}>
                    + Add to Routine
                  </button>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="postures-empty">
          <p>No poses match your filters. Try adjusting your search criteria.</p>
        </div>
      )}

      {selected && createPortal(
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content pose-detail-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">✕</button>
            <div className="pose-detail-layout">
              <img
                src={`/${selected.image}`}
                alt={selected.name}
                className="pose-img pose-detail-img"
              />
              <div className="pose-detail-info">
                <span className="pose-category-tag">{selected.category}</span>
                <h2>{selected.name}</h2>
                <span className="pose-difficulty">{diffDots(getDifficulty(selected))}</span>

                {selected.bodyParts && selected.bodyParts.length > 0 && (
                  <>
                    <h4>Target Areas</h4>
                    <div className="pose-detail-bodyparts">
                      {selected.bodyParts.map(bp => {
                        const meta = BODY_PARTS.find(m => m.id === bp)
                        return meta ? (
                          <span key={bp} className="bodypart-chip-static" style={{ borderColor: meta.color }}>
                            {meta.icon} {meta.label}
                          </span>
                        ) : null
                      })}
                    </div>
                  </>
                )}

                {selected.tags && selected.tags.length > 0 && (
                  <>
                    <h4>Tags</h4>
                    <div className="pose-detail-tags">
                      {selected.tags.map(t => (
                        <span key={t} className="pose-tag">{t}</span>
                      ))}
                    </div>
                  </>
                )}

                <h4>Benefits</h4>
                <ul className="benefits-list">
                  {selected.benefits.map(b => <li key={b}>{b}</li>)}
                </ul>

                <h4>Steps</h4>
                <ol className="steps-list">
                  {selected.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ol>

                <div className="detail-actions">
                  <button className="btn-primary" onClick={() => {
                    addPendingPose(selected)
                    navigate('/practice')
                  }}>
                    + Add to Routine
                  </button>
                  <button className="btn-secondary" onClick={() => {
                    addPendingPose(selected)
                    navigate('/practice')
                  }}>
                    Start Solo Practice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
