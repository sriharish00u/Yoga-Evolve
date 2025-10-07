import './App.css'
import Navigation from './components/Navigation'
import IntroSection from './components/IntroSection'
import BranchesSection from './components/BranchesSection'
import PostureCategories from './components/PostureCategories'
import UserTests from './components/UserTests'
import AppreciationDashboard from './components/AppreciationDashboard'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <IntroSection />
        <section id="benefits" className="benefits-section">
          <div className="container">
            <h2>Benefits of Yoga</h2>
            <ul>
              <li>Improves flexibility, strength, and balance</li>
              <li>Reduces stress and promotes relaxation</li>
              <li>Enhances mental clarity and focus</li>
              <li>Supports cardiovascular and respiratory health</li>
              <li>Encourages mindfulness and spiritual growth</li>
            </ul>
          </div>
        </section>
        <BranchesSection />
        <PostureCategories />
        <UserTests />
        <AppreciationDashboard />
        <Footer />
      </main>
    </>
  )
}

export default App
