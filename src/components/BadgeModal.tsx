import type { BadgeDefinition } from '../data/badgeDefinitions'
import { RARITY_COLORS } from '../data/badgeDefinitions'
import './BadgeModal.css'

interface BadgeModalProps {
  badge: BadgeDefinition | null
  earnedDate?: string
  onClose: () => void
}

export default function BadgeModal({ badge, earnedDate, onClose }: BadgeModalProps) {
  if (!badge) return null

  const rarityColor = RARITY_COLORS[badge.rarity] || '#b38b59'

  return (
    <div className="badge-modal-overlay" onClick={onClose}>
      <div className="badge-modal-content" onClick={e => e.stopPropagation()} style={{ borderColor: rarityColor }}>
        <button className="badge-modal-close" onClick={onClose}>✕</button>

        <div className="badge-modal-icon-wrapper" style={{ backgroundColor: rarityColor + '20' }}>
          <span className="badge-modal-icon" style={{ color: rarityColor }}>{badge.icon}</span>
        </div>

        <h2 className="badge-modal-name">{badge.name}</h2>

        <span
          className="badge-modal-rarity"
          style={{ backgroundColor: rarityColor, color: '#fff' }}
        >
          {badge.rarity.toUpperCase()}
        </span>

        <p className="badge-modal-desc">{badge.description}</p>

        <div className="badge-modal-howto">
          <strong>How to earn:</strong>
          <p>{badge.howToEarn}</p>
        </div>

        {earnedDate && (
          <p className="badge-modal-earned">
            Earned on {new Date(earnedDate).toLocaleDateString()}
          </p>
        )}

        <button className="badge-modal-gotit" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  )
}
