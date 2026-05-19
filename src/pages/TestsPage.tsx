import UserTests from '../components/UserTests'

export default function TestsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Self-Assessment Tests</h1>
        <p>Track your progress across 10 categories with 32 tests. Complete tests to earn XP and monitor your trends.</p>
      </div>
      <UserTests />
    </div>
  )
}
