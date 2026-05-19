import UserTests from '../components/UserTests'

export default function TestsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Self-Assessment Tests</h1>
        <p>Track your progress with these simple no-sensor tests.</p>
      </div>
      <UserTests />
    </div>
  )
}
