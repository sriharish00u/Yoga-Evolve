import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import POSTURES from '../data/postures.json'
import { CATEGORY_DIFFICULTY } from '../types/yoga'
import type { PoseData, DifficultyLevel } from '../types/yoga'
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
    if (search) {
      const s = search.toLowerCase()
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(s) ||
          p.benefits.some(b => b.toLowerCase().includes(s)) ||
          p.category.toLowerCase().includes(s)
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
  }, [poses, category, level, search, sort])

  const diffDots = (d: DifficultyLevel) => {
    const idx = LEVELS.indexOf(d) + 1
    return '●'.repeat(idx) + '○'.repeat(3 - idx)
  }

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
        </div>
        <p className="postures-count">{filtered.length} pose{filtered.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="postures-grid">
        {filtered.map(p => {
          const diff = getDifficulty(p)
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
              <div className="pose-benefit-tags">
                {p.benefits.slice(0, 3).map(b => (
                  <span key={b} className="benefit-tag">{b.split(' ').slice(0, 3).join(' ')}</span>
                ))}
              </div>
              <div className="pose-card-actions">
                <button className="btn-add" onClick={(e) => {
                  e.stopPropagation()
                  addPendingPose(p)
                  navigate('/practice')
                }}>
                  + Add to Routine
                </button>
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

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content pose-detail-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
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
        </div>
      )}
    </div>
  )
}
