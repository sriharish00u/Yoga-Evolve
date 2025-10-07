import './BranchesSection.css'

const branches = [
  {
    name: 'Hatha Yoga',
    focus: 'Physical Body',
    description: 'Emphasizes asanas (postures) and pranayama (breathing) to prepare the body and mind for meditation.'
  },
  {
    name: 'Raja Yoga',
    focus: 'Mind Control',
    description: 'Known as the "Royal Path," based on Patanjali\'s Ashtanga Yoga (Eight Limbs) — emphasizes meditation and discipline.'
  },
  {
    name: 'Karma Yoga',
    focus: 'Selfless Action',
    description: 'Path of service — doing one\'s duty without attachment to results.'
  },
  {
    name: 'Bhakti Yoga',
    focus: 'Devotion',
    description: 'Path of love and devotion toward the Divine through prayer, chanting, and surrender.'
  },
  {
    name: 'Jnana Yoga',
    focus: 'Knowledge',
    description: 'Path of wisdom — realizing the true Self through study and contemplation.'
  },
  {
    name: 'Kundalini Yoga',
    focus: 'Energy Awakening',
    description: 'Awakens spiritual energy (Kundalini) through postures, breath, and chanting.'
  }
]

export default function BranchesSection() {
  return (
    <section id="branches" className="branches-section">
      <div className="container">
        <h2>The Six Main Branches of Yoga</h2>
        <p className="section-description">
          Yoga is traditionally divided into six classical branches, each focusing on a different path to self-realization.
        </p>
        <div className="branches-grid">
          {branches.map((branch, index) => (
            <div key={branch.name} className="branch-card">
              <div className="branch-number">{index + 1}</div>
              <h3>{branch.name}</h3>
              <p className="branch-focus">{branch.focus}</p>
              <p className="branch-description">{branch.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
