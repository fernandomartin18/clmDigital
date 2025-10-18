import '../css/EdicionesAnteriores.css'
import { useEffect, useState } from 'react'

const ediciones = [
  {
    titulo: 'CLM Digital III - Mayo 2024',
    descripcion: 'La revolución tecnológica en el conflicto permanente de oriente medio',
    imagen: '/edicion1.png',
    enlace: 'https://sites.google.com/view/clmdigital2024/inicio?authuser=0'
  },
  {
    titulo: 'CLM Digital II - Octubre 2023',
    descripcion: 'Periodismo de datos e investigación sobre fuentes abiertas en Internet',
    imagen: '/edicion2.png',
    enlace: 'https://sites.google.com/view/clmdigital2023'
  },
  {
    titulo: 'CLM Digital I - Febrero 2023',
    descripcion: 'Un año desde el inicio de la guerra en Ucrania. Como la tecnología ha revolucionado el conflicto',
    imagen: '/edicion3.png',
    enlace: 'https://sites.google.com/view/clmdigital2022/inicio'
  }
]

export default function EdicionesAnteriores() {
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
    <div className="ediciones-container">
      <h1 className="ediciones-title">Ediciones anteriores</h1>
      <div className="ediciones-list">
        {ediciones.map((ed, idx) => (
          <a
            className="edicion-card"
            href={ed.enlace}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            style={{
              background: isDark ? '#12142c' : 'rgba(184, 187, 216, 0.55)',
              color: isDark ? 'var(--text, #f6f8fa)' : 'var(--text, #222)',
              border: isDark ? '1px solid rgba(80,80,80,0.18)' : '1px solid rgba(200,200,200,0.13)'
            }}
          >
            <div className="edicion-img-wrap">
              <img src={ed.imagen} alt={ed.titulo} className="edicion-img" />
            </div>
            <div className="edicion-info">
              <div className="edicion-titulo">{ed.titulo}</div>
              <div className="edicion-descripcion">{ed.descripcion}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
