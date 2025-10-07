import './Navigation.css'

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="nav-logo">Project Evolving Yoga</h1>
        <ul className="nav-menu">
          <li><button onClick={() => scrollToSection('intro')}>Introduction</button></li>
          <li><button onClick={() => scrollToSection('benefits')}>Benefits</button></li>
          <li><button onClick={() => scrollToSection('branches')}>Branches</button></li>
          <li><button onClick={() => scrollToSection('postures')}>Postures</button></li>
          <li><button onClick={() => scrollToSection('user-tests')}>Tests</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  )
}
