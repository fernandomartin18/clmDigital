import React, { useEffect, useRef } from 'react'
import '../css/Navbar.css'

function Navbar({ theme, toggleTheme, scrollToSection, themes, activeSection }) {
  const isMobile = window.innerWidth < 500
  const iconSrc = theme === 'light' ? './dark.png' : './light.png'
  const iconColor = themes[theme].navbarText

  const ulRef = useRef(null)
  const liRefs = {
    inicio: useRef(null),
    programa: useRef(null),
    ponentes: useRef(null),
    ediciones: useRef(null),
    patrocinadores: useRef(null),
  }

  // Scroll horizontal al elemento activo en móvil
  useEffect(() => {
    if (!isMobile) return
    const activeLi = liRefs[activeSection]?.current
    const ul = ulRef.current
    if (activeLi && ul) {
      const liRect = activeLi.getBoundingClientRect()
      const ulRect = ul.getBoundingClientRect()
      // Solo scroll si el li está fuera de la vista
      if (liRect.left < ulRect.left || liRect.right > ulRect.right) {
        activeLi.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }, [activeSection, isMobile])

  return (
    <nav className="navbar custom-navbar">
      <ul ref={ulRef}>
        <li
          ref={liRefs.inicio}
          className={activeSection === 'inicio' ? 'active' : ''}
          onClick={() => scrollToSection('inicio')}
        >
          Inicio
        </li>
        <li
          ref={liRefs.programa}
          className={activeSection === 'programa' ? 'active' : ''}
          onClick={() => scrollToSection('programa')}
        >
          Programa
        </li>
        <li
          ref={liRefs.ponentes}
          className={activeSection === 'ponentes' ? 'active' : ''}
          onClick={() => scrollToSection('ponentes')}
        >
          Ponentes
        </li>
        <li
          ref={liRefs.ediciones}
          className={activeSection === 'ediciones' ? 'active' : ''}
          onClick={() => scrollToSection('ediciones')}
        >
          Ediciones anteriores
        </li>
        <li
          ref={liRefs.patrocinadores}
          className={activeSection === 'patrocinadores' ? 'active' : ''}
          onClick={() => scrollToSection('patrocinadores')}
        >
          Patrocinadores
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
