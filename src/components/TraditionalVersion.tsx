import './TraditionalVersion.css'

export default function TraditionalVersion() {
  return (
    <div className="traditional-version">
      <header className="traditional-header">
        <h1>Project Evolving Yoga - Traditional Version</h1>
      </header>
      <main>
        <section className="traditional-intro">
          <h2>Introduction</h2>
          <p>This is a simplified, static version of the yoga website designed for broad compatibility and minimal dependencies.</p>
        </section>
        <section className="traditional-branches">
          <h2>Branches of Yoga</h2>
          <ul>
            <li>Hatha Yoga - Physical Body</li>
            <li>Raja Yoga - Mind Control</li>
            <li>Karma Yoga - Selfless Action</li>
            <li>Bhakti Yoga - Devotion</li>
            <li>Jnana Yoga - Knowledge</li>
            <li>Kundalini Yoga - Energy Awakening</li>
          </ul>
        </section>
        <section className="traditional-postures">
          <h2>Yoga Postures</h2>
          <p>Explore basic yoga postures with descriptions and benefits.</p>
          {/* Could add static images and text here */}
        </section>
        <footer className="traditional-footer">
          <p>Contact: info@evolvingyoga.com</p>
        </footer>
      </main>
    </div>
  )
}
