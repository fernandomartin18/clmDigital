import '../css/Inicio.css'
import { useEffect, useState } from 'react'

export default function Inicio() {
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') === 'dark'
      : false
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="inicio-hero">
        <img src="/header.png" alt="Header Castilla-La Mancha Digital" className="inicio-hero-img" />
        <div className="inicio-hero-overlay">
          <p className="inicio-event">CLM Digital</p>
          <h1 className="inicio-title">IA: Naturalmente artificial</h1>
          <p className="inicio-subtitle">"Una mirada a como la IA está presente en la sociedad"</p>
          <div className="inicio-info">
            22 Octubre de 2025 | Talavera de la Reina | Salón de Grados
          </div>
        </div>
      </div>
      <section className="inicio-info-section">
        <div className="inicio-info-top">
          <a
            className="inicio-inscribete-btn"
            href="https://forms.gle/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscríbete al evento pulsando aquí
          </a>
        </div>
        <div className="inicio-info-main">
          <img
            src={isDark ? '/faviconblanco.png' : '/favicon.png'}
            alt="Logo CLM Digital"
            className="inicio-info-img"
          />
          <div className="inicio-info-content">
            <p>
              Se trata de unas jornadas anuales sobre sociedad digital en Castilla-La Mancha. En esta tercera edición la temática indaga en cómo la inteligencia artificial está presente en nuestro día a día.
              <br />
              Tendrá una temática distinta cada año.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
