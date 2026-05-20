import UserTests from '../components/UserTests'
import { TestsSEO } from '../components/JSONLD'

export default function TestsPage() {
  return (
    <div className="page-wrapper">
      <TestsSEO />
      <section className="practice-header">
        <h1>Knowledge Tests</h1>
        <p className="hero-subtitle">Test your yoga knowledge — 10 categories, 32 tests</p>
      </section>
      <UserTests />
    </div>
  )
}
