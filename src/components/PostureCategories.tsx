import POSTURES from '../data/postures.json'
import './PostureCategories.css'
import { useState } from 'react'

const updatedPostures = POSTURES.map(posture => ({
  ...posture,
  image: posture.image.replace('.svg', '.png')
}))

type Posture = {
  name: string
  image: string
  category: string
  benefits: string[]
  steps: string[]
}

export default function PostureCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Get unique categories from updatedPostures
  const categoriesSet = new Set(updatedPostures.map((p: Posture) => p.category))
  const categories = Array.from(categoriesSet)
  categories.unshift('All')

  const filteredPostures = selectedCategory === 'All'
    ? updatedPostures
    : updatedPostures.filter((p) => p.category === selectedCategory)

  return (
    <section id="postures" className="posture-categories-section">
      <h2>Yoga Postures by Category</h2>
      <div className="category-buttons" role="tablist" aria-label="Yoga posture categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={cat === selectedCategory}
            className={cat === selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="posture-grid">
        {filteredPostures.map((p) => (
          <article key={p.name} className="posture-card" tabIndex={0}>
            <img src={`/${p.image}`} alt={p.name} loading="lazy" />
            <h3>{p.name}</h3>
            <div className="posture-details">
              <h4>Benefits:</h4>
              <ul>
                {p.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <h4>Steps:</h4>
              <ol>
                {p.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
