import { useState } from 'react'
import './BenefitsPage.css'

const LIMBS = [
  { sanskrit: 'Yama', english: 'Ethical Standards', desc: 'Moral disciplines — non-violence, truthfulness, non-stealing, celibacy, non-possessiveness.' },
  { sanskrit: 'Niyama', english: 'Self-Discipline', desc: 'Personal observances — purity, contentment, discipline, self-study, surrender.' },
  { sanskrit: 'Asana', english: 'Posture', desc: 'Physical postures to prepare the body for meditation.' },
  { sanskrit: 'Pranayama', english: 'Breath Control', desc: 'Regulation of breath to control the life force energy.' },
  { sanskrit: 'Pratyahara', english: 'Sense Withdrawal', desc: 'Turning inward, withdrawing from external stimuli.' },
  { sanskrit: 'Dharana', english: 'Concentration', desc: 'Focused attention on a single point.' },
  { sanskrit: 'Dhyana', english: 'Meditation', desc: 'Sustained, effortless concentration — a flow state.' },
  { sanskrit: 'Samadhi', english: 'Union', desc: 'Blissful absorption — the ultimate goal of yoga.' },
]

const BRANCHES = [
  { name: 'Hatha Yoga', suited: 'beginner', practices: 'Asanas, Pranayama, Mudras' },
  { name: 'Vinyasa Yoga', suited: 'intermediate', practices: 'Flow sequences, breath-synchronized movement' },
  { name: 'Ashtanga Yoga', suited: 'intermediate', practices: 'Fixed sequence of poses, Ujjayi breath' },
  { name: 'Iyengar Yoga', suited: 'beginner', practices: 'Alignment-focused, props, long holds' },
  { name: 'Kundalini Yoga', suited: 'intermediate', practices: 'Kriyas, mantra, meditation, breathwork' },
  { name: 'Yin Yoga', suited: 'beginner', practices: 'Long-held passive poses, deep tissue stretch' },
]

const PRANAYAMA = [
  { technique: 'Ujjayi', pattern: '5-count inhale, 5-count exhale through nose', effect: 'Calms nervous system, warms body', duration: '5–10 min' },
  { technique: 'Nadi Shodhana', pattern: 'Alternate nostril: inhale L, exhale R, inhale R, exhale L', effect: 'Balances hemispheres, reduces anxiety', duration: '5–10 min' },
  { technique: 'Kapalabhati', pattern: 'Short forceful exhales, passive inhales (1/sec)', effect: 'Energizes, cleanses lungs', duration: '1–3 min' },
  { technique: 'Bhastrika', pattern: 'Rapid full breaths (inhale + exhale, 1/sec)', effect: 'Increases oxygen, builds heat', duration: '1–3 min' },
  { technique: 'Bhramari', pattern: 'Inhale, exhale with humming bee sound', effect: 'Instantly calming, relieves stress', duration: '3–5 min' },
  { technique: 'Sitali', pattern: 'Inhale through curled tongue, exhale through nose', effect: 'Cools body and mind', duration: '3–5 min' },
  { technique: 'Dirga', pattern: '3-part breath: belly → ribs → chest', effect: 'Complete oxygenation, mindfulness', duration: '5–10 min' },
]

const physicalBenefits = [
  { icon: '💪', title: 'Strength', desc: 'Builds functional body strength through weight-bearing poses.' },
  { icon: '🧘', title: 'Flexibility', desc: 'Increases range of motion in joints and muscles.' },
  { icon: '❤️', title: 'Cardiovascular', desc: 'Gentle cardiac conditioning that improves circulation.' },
  { icon: '🦴', title: 'Posture', desc: 'Realigns spine and corrects imbalances from daily life.' },
  { icon: '🫁', title: 'Breathing', desc: 'Expands lung capacity and improves respiratory efficiency.' },
  { icon: '⚡', title: 'Energy', desc: 'Reduces fatigue and boosts vitality through pranayama.' },
]

const mentalBenefits = [
  { icon: '🧠', title: 'Clarity', desc: 'Sharpens focus and concentration through meditation.' },
  { icon: '😌', title: 'Stress Relief', desc: 'Activates the parasympathetic nervous system for deep rest.' },
  { icon: '🛌', title: 'Sleep Quality', desc: 'Improves sleep onset and depth with restorative practices.' },
]

export default function BenefitsPage() {
  const [openLimb, setOpenLimb] = useState<number | null>(null)

  return (
    <div className="page-wrapper benefits-page">
      <section className="benefits-hero">
        <h1>Why Yoga?</h1>
        <p className="benefits-hero-sub">
          Discover the transformative power of an ancient practice for modern well-being.
        </p>
      </section>

      <section className="benefits-section-inner">
        <h2>Physical Benefits</h2>
        <div className="benefits-grid-3">
          {physicalBenefits.map(b => (
            <div key={b.title} className="benefit-card">
              <span className="benefit-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section-inner">
        <h2>Mental & Emotional Benefits</h2>
        <div className="benefits-grid-3">
          {mentalBenefits.map(b => (
            <div key={b.title} className="benefit-card">
              <span className="benefit-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section-inner">
        <h2>The 8 Limbs of Yoga</h2>
        <div className="limbs-accordion">
          {LIMBS.map((limb, i) => (
            <div
              key={limb.sanskrit}
              className={`limb-card ${openLimb === i ? 'open' : ''}`}
              onClick={() => setOpenLimb(openLimb === i ? null : i)}
            >
              <div className="limb-header">
                <span className="limb-number">{(i + 1).toString().padStart(2, '0')}</span>
                <div>
                  <strong>{limb.sanskrit}</strong> — {limb.english}
                </div>
                <span className={`limb-chevron ${openLimb === i ? 'rotated' : ''}`}>▼</span>
              </div>
              {openLimb === i && (
                <div className="limb-body">
                  <p>{limb.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section-inner">
        <h2>Branches of Yoga</h2>
        <div className="branches-grid">
          {BRANCHES.map(b => (
            <div key={b.name} className="branch-card">
              <h3>{b.name}</h3>
              <span className={`branch-level ${b.suited}`}>{b.suited}</span>
              <p><strong>Practices:</strong> {b.practices}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section-inner">
        <h2>Pranayama Guide</h2>
        <div className="pranayama-table-wrapper">
          <table className="pranayama-table">
            <thead>
              <tr>
                <th>Technique</th>
                <th>Breath Pattern</th>
                <th>Effect</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {PRANAYAMA.map(p => (
                <tr key={p.technique}>
                  <td><strong>{p.technique}</strong></td>
                  <td>{p.pattern}</td>
                  <td>{p.effect}</td>
                  <td>{p.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="benefits-cta">
        <h2>Ready to experience these benefits?</h2>
        <a href="/practice" className="cta-button-large">Start Your Practice →</a>
      </section>
    </div>
  )
}
