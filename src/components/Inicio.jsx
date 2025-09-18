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
            aria-disabled="true"
            tabIndex={-1}
            style={{ pointerEvents: 'none', opacity: 0.6 }}
          >
            Inscríbete al evento pulsando aquí
          </a>
        </div>
        <div className="inicio-info-main">
          <img
            src={isDark ? '/faviconblaco2.png' : '/favicon.png'}
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
      <section className="talavera-section">
        <h2 className="talavera-title">Talavera de la Reina</h2>
        <div className="talavera-content">
          <img
            src="/talavera.jpg"
            alt="Talavera de la Reina"
            className="talavera-img"
          />
          <div className="talavera-text">
            <p>
              CLM Digital está organizado por Eboratic, una junior empresa con sede en la Universidad de Castilla la Mancha. Las jornadas del evento se van a celebrar en Talavera de la Reina (Toledo), concretamente en la Facultad de Ciencias Sociales y Tecnologías de la Información.
            </p>
            <p>
              Talavera de la Reina, aquella que fue llamada Elbora en la antigüedad, destaca por su tradición alfarera de más de 2000 años.<br />
              Su cerámica se extendió a muchos de los grandes monumentos de nuestro país. Destaca también por sus iglesias de estilo mudéjar, su riqueza ornitológica a orillas del río Tajo, sus fiestas de Las Mondas (una de las más antiguas de toda Europa) y su riqueza gastronómica. Conservando su esencia ha evolucionado a una ciudad moderna, bien comunicada con el puente vertical más alto de toda España, convirtiéndose en el foco de atención de multitud de empresas del ámbito tecnológico, que ayudan a forjar futuros talentos en la ingeniería y colaborar en la investigación.
            </p>
            <p>
              <b>¡Esperemos que disfrutéis de la estancia!</b>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
