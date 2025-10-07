import './IntroSection.css'

export default function IntroSection() {
  const handleStartJourney = () => {
    const nextSection = document.getElementById('postures')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">
        <div className="intro-content">
          <h1>Transform Your Practice with Evolving Yoga</h1>
          <p className="intro-subtitle">
            Embark on a personalized yoga journey that adapts to your body, mind, and spirit.
            Discover ancient wisdom meets modern technology for holistic wellness.
          </p>
          <div className="intro-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🧘‍♀️</div>
              <h3>Adaptive Training</h3>
              <p>AI-powered routines that evolve with your progress and preferences</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🌅</div>
              <h3>Traditional Wisdom</h3>
              <p>Authentic sequences like Sun Salutation with modern accessibility</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🏠</div>
              <h3>Anywhere, Anytime</h3>
              <p>Practice in your space, on your schedule - no equipment required</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📚</div>
              <h3>Comprehensive Library</h3>
              <p>Extensive pose database with benefits, steps, and modifications</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your journey with built-in assessment tools</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🔒</div>
              <h3>Privacy First</h3>
              <p>Offline functionality ensures your practice remains personal</p>
            </div>
          </div>
          <div className="intro-cta">
            <p className="cta-text">Ready to begin your yoga journey?</p>
            <button className="cta-button" onClick={handleStartJourney}>Start Your Yoga Journey</button>
          </div>
        </div>
        <div className="intro-visual">
          <div className="visual-wrapper">
            <img src="/postures/sooriya-namaskar.png" alt="Sun Salutation sequence illustration" />
            <div className="floating-elements">
              <div className="floating-element">✨</div>
              <div className="floating-element">🌿</div>
              <div className="floating-element">🕉️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
