import { useRef, useState, useEffect } from 'react'
import themes from '../styles/themes'
import Navbar from '../components/Navbar'
import Inicio from '../components/Inicio'
import Programa from '../components/Programa'
import Ponentes from '../components/Ponentes'
import EdicionesAnteriores from '../components/EdicionesAnteriores'
import Patrocinadores from '../components/Patrocinadores'

export default function Home({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('inicio')
  const sections = {
    inicio: useRef(null),
    programa: useRef(null),
    ponentes: useRef(null),
    ediciones: useRef(null),
    patrocinadores: useRef(null),
  }

  const scrollToSection = (key) => {
    const offset = 80 // altura aproximada de la navbar en px
    const element = sections[key].current
    if (element) {
      const rect = element.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const top = rect.top + scrollTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
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
      const offset = 80 // mismo offset que en scrollToSection
      let current = sectionKeys[0]
      let closest = -Infinity
      for (let key of sectionKeys) {
        const ref = sections[key].current
        if (ref) {
          const rect = ref.getBoundingClientRect()
          if (rect.top <= offset && rect.top > closest) {
            closest = rect.top
            current = key
          }
        }
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
    document.body.style.transition = 'background 0.5s, color 0.5s'
    document.body.style.overscrollBehaviorY = 'contain'
    document.body.style.overflowY = 'auto'
    document.body.style.backgroundColor = themes[theme].background
    document.documentElement.style.overscrollBehaviorY = 'contain'
    document.documentElement.style.overflowY = 'auto'
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
        <section ref={sections.inicio} style={{ padding: 0 }}>
          <Inicio />
        </section>
        <section ref={sections.programa} style={{ padding: 0 }}>
          <Programa />
        </section>
        <section ref={sections.ponentes} style={{ padding: 0 }}>
          <Ponentes />
        </section>
        <section ref={sections.ediciones} style={{ padding: 0 }}>
          <EdicionesAnteriores />
        </section>
        <section ref={sections.patrocinadores} style={{ padding: 0 }}>
          <Patrocinadores />
        </section>
      </main>
    </>
  )
}