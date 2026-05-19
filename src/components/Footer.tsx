import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Project Evolving Yoga</h3>
            <p>Offline, adaptive yoga trainer — privacy-first</p>
            <p>Enhance your physical and mental well-being through personalized yoga practice.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/postures">Postures</Link></li>
              <li><Link to="/practice">Practice</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/benefits">Benefits</Link></li>
              <li><Link to="/tests">Self-Tests</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@evolvingyoga.com</p>
            <p>Phone: +1 (555) 123-YOGA</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Project Evolving Yoga. All rights reserved.</p>
          <p>Built with ❤️ for wellness and mindfulness.</p>
        </div>
      </div>
    </footer>
  )
}
