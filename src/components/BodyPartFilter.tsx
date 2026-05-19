import { useMemo } from 'react'
import type { PoseData } from '../types/yoga'
import { BODY_PARTS } from '../types/yoga'
import './BodyPartFilter.css'

interface BodyPartFilterProps {
  poses: PoseData[]
  selected: string[]
  onChange: (ids: string[]) => void
}

export default function BodyPartFilter({ poses, selected, onChange }: BodyPartFilterProps) {
  const available = useMemo(() => {
    const set = new Set<string>()
    for (const p of poses) {
      for (const bp of p.bodyParts ?? []) {
        set.add(bp)
      }
    }
    return set
  }, [poses])

  const toggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter(s => s !== id))
    } else {
      onChange([...selected, id])
    }
  }

  const clear = () => onChange([])

  return (
    <div className="bodypart-filter">
      <div className="bodypart-filter-header">
        <span className="bodypart-filter-label">Target Areas</span>
        {selected.length > 0 && (
          <button className="bodypart-filter-clear" onClick={clear}>
            Clear ({selected.length})
          </button>
        )}
      </div>
      <div className="bodypart-chips">
        {BODY_PARTS.map(bp => {
          const active = selected.includes(bp.id)
          const disabled = !available.has(bp.id)
          return (
            <button
              key={bp.id}
              className={`bodypart-chip ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
              style={active ? { borderColor: bp.color, backgroundColor: bp.color + '20' } : undefined}
              onClick={() => !disabled && toggle(bp.id)}
              disabled={disabled}
              title={bp.label}
            >
              <span className="bodypart-chip-icon">{bp.icon}</span>
              <span className="bodypart-chip-label">{bp.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
