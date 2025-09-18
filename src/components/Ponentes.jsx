import '../css/Ponentes.css'
import { useEffect, useState } from 'react'

const ponentes = [
  {
    foto: '/juan.jpeg',
    nombre: 'Juan de Dios Llamas',
    descripcion:
      'Juan de Dios ha construido su carrera en la intersección entre datos, tecnología y estrategia. Actualmente es Chief Data Officer en el Grupo Omnicom, donde lidera la integración de data, con el usuario en sectores como turismo, banca, seguros o automoción, siempre con un foco: transformar la complejidad en valor tangible.\n\nCon más de 20 años de experiencia en compañías como Jakala, The Cocktail, Coca-Cola, Tribal o Carrefour, ha impulsado proyectos de data, inteligencia y marketing de precisión, combinando visión estratégica con conocimiento técnico en diferentes tecnologías de explotación y captación de datos de usuario.\n\nEn paralelo, ha desarrollado una intensa trayectoria académica como profesor y ponente en escuelas de negocio y universidades como ISDI, IE Business School, The Valley o la Universitat Internacional de Catalunya. Sus cursos y conferencias giran en torno a la orquestación de procesos, la analítica avanzada y el valor del dato como motor de innovación.\n\nReconocido por su capacidad para conectar disciplinas diversas, une la mirada humanista por su orígenes como filólogo con la rigurosidad del dato, buscando siempre un mismo objetivo: que la tecnología solo cobre sentido cuando se traduce en valor real, útil y significativo.'
  },
  {
    foto: '/pablo.jpg',
    nombre: 'Pablo Morillo González',
    descripcion:
      `Pablo Morillo González es Ingeniero Técnico Industrial en Electrónica y Automática, con más de 20 años de experiencia en el sector aeroespacial y de defensa. Inició su trayectoria profesional en Tecnobit (2006–2013) como Jefe de Proyecto, liderando procesos de validación y certificación de sistemas tecnológicos de alta criticidad.\n\nEntre 2013 y 2021, trabajó en Elecnor Deimos como Responsable Técnico en actividades de integración y pruebas de sistemas espaciales. Durante este periodo, dirigió campañas de ensayos, validaciones ambientales, operaciones de lanzamiento y el desarrollo de equipos de apoyo en tierra para misiones como Deimos-2, un satélite de observación de la Tierra, y AURIGA, una misión tecnológica. También participó como Ingeniero Jefe de Diseño y Gestor de Proyecto en misiones satelitales como SCH, Redshift y Neptuno, y colaboró en el desarrollo de una sonda espacial de la Agencia Espacial Europea en cooperación con socios internacionales.\n\nDesde finales de 2021, es Director de la Unidad de Negocio de Sistemas Espaciales en Deimos, donde lidera el diseño y ejecución de misiones completas de pequeños satélites, como CASSINI y DRACO, orientadas a aplicaciones científicas y comerciales. En 2024 fue nombrado Director del Segmento de Vuelo, y desde 2025 ocupa el cargo de Director de Industrialización Espacial en Indra Deimos, donde impulsa la transición hacia una fabricación de satélites más eficiente, escalable y estandarizada.`
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

  // Función para renderizar saltos de línea dobles como <br /><br /> y simples como <br />
  function renderDescripcion(descripcion) {
    // Primero, separar por doble salto de línea para detectar párrafos
    return descripcion.split('\n\n').map((parrafo, pIdx, arr) => (
      <span key={pIdx}>
        {parrafo.split('\n').map((line, lIdx, linesArr) => (
          <span key={lIdx}>
            {line}
            {lIdx !== linesArr.length - 1 && <br />}
          </span>
        ))}
        {pIdx !== arr.length - 1 && <><br /><br /></>}
      </span>
    ))
  }

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
              <div className="ponente-descripcion">
                {renderDescripcion(ponente.descripcion)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
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
    </div>
  )
}
