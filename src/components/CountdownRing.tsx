import './CountdownRing.css'

interface CountdownRingProps {
  total: number
  remaining: number
  matchScore: number
}

export default function CountdownRing({ total, remaining, matchScore }: CountdownRingProps) {
  const progress = total > 0 ? remaining / total : 0
  const circumference = 339.3
  const offset = circumference * (1 - progress)

  const ringColor =
    matchScore < 30 ? '#e74c3c'
    : matchScore >= 85 ? '#27ae60'
    : matchScore >= 65 ? '#b38b59'
    : '#b38b59'

  const paused = matchScore < 30

  return (
    <div className="countdown-ring-wrapper">
      <svg className="countdown-ring" viewBox="0 0 120 120">
        <circle
          className="ring-bg"
          cx="60" cy="60" r="54"
        />
        <circle
          className="ring-fill"
          cx="60" cy="60" r="54"
          strokeDasharray={circumference}
          strokeDashoffset={paused ? offset : offset}
          style={{
            stroke: ringColor,
            transition: paused ? 'none' : 'stroke-dashoffset 1s linear',
          }}
        />
        <text x="60" y="68" textAnchor="middle" className="ring-text">
          {paused ? '—' : `${Math.ceil(remaining)}s`}
        </text>
      </svg>
      {paused && <div className="ring-pause-label">Resume position…</div>}
    </div>
  )
}
