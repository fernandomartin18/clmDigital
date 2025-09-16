import '../css/Ponentes.css'
import { useEffect, useState } from 'react'

const ponentes = [
  {
    foto: '/juan.jpeg',
    nombre: 'Juan de Dios Llamas',
    descripcion:
      'Chief Data Officer en BBDO & Proximity, Juan de Dios Llamas es especialista en estrategias digitales basadas en datos y analítica avanzada. Con una amplia experiencia en consultoría, marketing digital y business intelligence, ha trabajado con grandes marcas ayudándolas a transformar información en decisiones estratégicas. Compagina su labor profesional con la docencia en escuelas de prestigio, acercando a estudiantes y profesionales al valor del dato en la era de la inteligencia artificial.'
  },
  {
    foto: '/pablo.jpg',
    nombre: 'Pablo Morillo González',
    descripcion:
      'Director del Segmento de Vuelo en Deimos, Pablo Morillo es ingeniero mecatrónico y referente en el ámbito aeroespacial. Desde Puertollano ha liderado proyectos de gran impacto internacional, como el satélite Neptuno o la misión Comet Interceptor junto a la Agencia Espacial Europea. Apasionado por la tecnología, los videojuegos y el espacio, ha demostrado cómo la innovación y la inteligencia artificial pueden aplicarse tanto a la exploración espacial como a los retos del día a día en la Tierra.'
  }
]

export default function Ponentes() {
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
    <div className="ponentes-container">
      <h1 className="ponentes-title">Ponentes</h1>
      <div className="ponentes-list">
        {ponentes.map((ponente, idx) => (
          <div
            className="ponente-card"
            key={idx}
            style={{
              background: isDark ? '#12142c' : 'rgba(184, 187, 216, 0.55)',
              color: isDark ? 'var(--text, #f6f8fa)' : 'var(--text, #222)',
              border: isDark ? '1px solid rgba(80,80,80,0.18)' : '1px solid rgba(200,200,200,0.13)'
            }}
          >
            <div className="ponente-img-wrap">
              <img src={ponente.foto} alt={ponente.nombre} className="ponente-img" />
            </div>
            <div className="ponente-info">
              <div className="ponente-nombre">{ponente.nombre}</div>
              <div className="ponente-descripcion">{ponente.descripcion}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
