import React from 'react'
import '../css/Navbar.css'

function Navbar({ theme, toggleTheme, scrollToSection, themes, activeSection }) {
  const isMobile = window.innerWidth < 500
  const iconSrc = theme === 'light' ? './dark.png' : './light.png'
  const iconColor = themes[theme].navbarText

  return (
    <nav className="navbar custom-navbar">
      <ul>
        <li
          className={activeSection === 'inicio' ? 'active' : ''}
          onClick={() => scrollToSection('inicio')}
        >
          Inicio
        </li>
        <li
          className={activeSection === 'proyectos' ? 'active' : ''}
          onClick={() => scrollToSection('proyectos')}
        >
          Proyectos
        </li>
        <li
          className={activeSection === 'experiencia' ? 'active' : ''}
          onClick={() => scrollToSection('experiencia')}
        >
          {isMobile ? 'Exp.' : 'Experiencia'}
        </li>
        <li
          className={activeSection === 'sobreMi' ? 'active' : ''}
          onClick={() => scrollToSection('sobreMi')}
        >
          Sobre Mí
        </li>
        <li
          className={activeSection === 'contacto' ? 'active' : ''}
          onClick={() => scrollToSection('contacto')}
        >
          Contacto
        </li>
        <li>
          <button className="theme-btn" onClick={toggleTheme}>
            <img
              src={iconSrc}
              alt={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
              style={{
                width: '1.2rem',
                height: '1.2rem',
              }}
            />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
