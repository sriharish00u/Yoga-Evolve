import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { gamification } from '../utils/gamification'
import './Navigation.css'

const navLinks = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/postures', label: 'Postures', icon: '🧘' },
  { to: '/practice', label: 'Practice', icon: '▶️' },
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/benefits', label: 'Benefits', icon: '🌿' },
  { to: '/tests', label: 'Self-Tests', icon: '📋' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const gstate = gamification.getState()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          🧘 Project Evolving Yoga
        </NavLink>

        <div className="nav-level-pill">
          {gstate.levelName} — Lv.{gstate.level + 1}
        </div>

        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-link-icon">{link.icon}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
