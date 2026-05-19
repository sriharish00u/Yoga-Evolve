import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import BranchesSection from '../components/BranchesSection'
import './HomePage.css'

const QUOTES = [
  { text: 'Yoga is the journey of the self, through the self, to the self.', author: 'Bhagavad Gita' },
  { text: 'The pose begins when you want to leave it.', author: 'Baron Baptiste' },
  { text: 'Yoga is not about touching your toes, it is what you learn on the way down.', author: 'Jigar Gor' },
]

export default function HomePage() {
  const navigate = useNavigate()
  const [quoteIdx, setQuoteIdx] = useState(0)
  const [counts, setCounts] = useState({ postures: 0, branches: 0, potential: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx(prev => (prev + 1) % QUOTES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const targets = { postures: 100, branches: 6, potential: 999 }
          const duration = 1500
          const start = performance.now()

          function animate(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            setCounts({
              postures: Math.round(progress * targets.postures),
              branches: Math.round(progress * targets.branches),
              potential: progress >= 1 ? 999 : Math.round(progress * 999),
            })
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-wrapper home-page">
      <section className="hero-section">
        <div className="hero-bg-om">ॐ</div>
        <div className="hero-content">
          <h1 className="hero-title">Begin Your Journey</h1>
          <p className="hero-subtitle">Adaptive yoga, guided by tradition</p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => navigate('/practice')}>
              Start Practice →
            </button>
            <button className="btn-secondary" onClick={() => navigate('/postures')}>
              Explore Postures
            </button>
          </div>
        </div>
        <div className="scroll-chevron">⌄</div>
      </section>

      <section className="stats-banner" ref={statsRef}>
        <div className="stat-item">
          <span className="stat-number">{counts.postures}+</span>
          <span className="stat-label">Postures</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{counts.branches}</span>
          <span className="stat-label">Yoga Branches</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{counts.potential >= 999 ? '∞' : `${counts.potential}`}</span>
          <span className="stat-label">Your Potential</span>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card" onClick={() => navigate('/postures')}>
          <span className="feature-icon">🧘</span>
          <h3>Smart Postures</h3>
          <p>100+ poses with categories, steps, and benefits</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/practice')}>
          <span className="feature-icon">📸</span>
          <h3>Webcam Tracking</h3>
          <p>Real-time pose matching using your camera</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/dashboard')}>
          <span className="feature-icon">🏆</span>
          <h3>Gamification</h3>
          <p>XP, levels, badges, and streak tracking</p>
        </div>
      </section>

      <BranchesSection />

      <section className="quotes-section">
        <div className="quote-card" key={quoteIdx}>
          <p className="quote-text">"{QUOTES[quoteIdx].text}"</p>
          <p className="quote-author">— {QUOTES[quoteIdx].author}</p>
        </div>
        <div className="quote-dots">
          {QUOTES.map((_, i) => (
            <span key={i} className={`quote-dot ${i === quoteIdx ? 'active' : ''}`} onClick={() => setQuoteIdx(i)} />
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <h2>Ready to practice?</h2>
        <button className="btn-primary btn-large" onClick={() => navigate('/practice')}>
          Build Your Routine →
        </button>
      </section>
    </div>
  )
}
