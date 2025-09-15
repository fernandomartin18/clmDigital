import { useRef, useState, useEffect } from 'react'
import themes from '../styles/themes'
import Navbar from '../components/Navbar'

export default function Home({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('inicio')
  const sections = {
    inicio: useRef(null),
    proyectos: useRef(null),
    experiencia: useRef(null),
    sobreMi: useRef(null),
    contacto: useRef(null),
  }

  const scrollToSection = (key) => {
    sections[key].current.scrollIntoView({ behavior: 'smooth' })
  }

  // Visibilidad animada de cada sección
  const [visibleSections, setVisibleSections] = useState({})

  useEffect(() => {
    const sectionKeys = Object.keys(sections)
    const handleIntersection = (entries) => {
      setVisibleSections((prev) => {
        const updated = { ...prev }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updated[entry.target.dataset.section] = true
          }
        })
        return updated
      })
    }
    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.15,
    })
    sectionKeys.forEach((key) => {
      const ref = sections[key].current
      if (ref) {
        ref.dataset.section = key
        observer.observe(ref)
      }
    })
    return () => observer.disconnect()
  }, [sections])

  useEffect(() => {
    const handleScroll = () => {
      const sectionKeys = Object.keys(sections)
      let current = sectionKeys[0]
      for (let key of sectionKeys) {
        const ref = sections[key].current
        if (ref) {
          const rect = ref.getBoundingClientRect()
          if (rect.top <= 80 && rect.bottom > 80) {
            current = key
            break
          }
        }
      }
      // Cerca del final de la página, navbar activa contacto
      const scrollPosition = window.innerHeight + window.scrollY
      const threshold = 50 // píxeles desde el fondo
      if (document.body.offsetHeight - scrollPosition < threshold) {
        current = 'contacto'
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  // Aplicar tema al body y variables CSS
  useEffect(() => {
    document.body.style.color = themes[theme].text
    document.body.style.backgroundImage = themes[theme].gradientBg
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.overscrollBehavior = 'none'
    document.body.style.transition = 'background 0.5s, color 0.5s'
    document.documentElement.style.transition = 'background 0.5s, color 0.5s'
    document.documentElement.style.setProperty('--navbar-bg', themes[theme].navbar + 'cc')
    document.documentElement.style.setProperty('--navbar-text', themes[theme].navbarText)
    document.documentElement.style.setProperty('--navbar-shadow', themes[theme].navbarShadow)
    document.documentElement.style.setProperty('--primary', themes[theme].primary)
    document.documentElement.style.setProperty('--text', themes[theme].text)
  }, [theme])

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
        themes={themes}
        activeSection={activeSection}
      />
      <main>
        <section ref={sections.inicio} style={{ minHeight: '100vh', padding: '4rem 0' }}>
          <h1>Inicio</h1>
        </section>
        <section ref={sections.proyectos} style={{ minHeight: '100vh', padding: '4rem 0' }}>
          <h1>Proyectos</h1>
        </section>
        <section ref={sections.experiencia} style={{ minHeight: '100vh', padding: '4rem 0' }}>
          <h1>Experiencia</h1>
        </section>
        <section ref={sections.sobreMi} style={{ minHeight: '100vh', padding: '4rem 0' }}>
          <h1>Sobre mí</h1>
        </section>
        <section ref={sections.contacto} style={{ minHeight: '100vh', padding: '4rem 0' }}>
          <h1>Contacto</h1>
        </section>
      </main>
    </>
  )
}