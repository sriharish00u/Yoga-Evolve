import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import XPToastStack from './components/XPToast'
import HomePage from './pages/HomePage'
import PosturesPage from './pages/PosturesPage'
import PracticePage from './pages/PracticePage'
import SessionPage from './pages/SessionPage'
import DashboardPage from './pages/DashboardPage'
import BenefitsPage from './pages/BenefitsPage'
import TestsPage from './pages/TestsPage'

export default function App() {
  return (
    <>
      <Navigation />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/postures" element={<PosturesPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/session" element={<SessionPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/tests" element={<TestsPage />} />
        </Routes>
      </main>
      <Footer />
      <XPToastStack />
    </>
  )
}
