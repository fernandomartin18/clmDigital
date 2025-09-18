import '../css/Patrocinadores.css'
import { useEffect, useState } from 'react'

const patrocinadores = [
  {
    logo: '/eboratic.JPG',
    nombre: 'Eboratic',
    descripcion: `Fundada en 2020 en la UCLM (Campus de Talavera), Eboratic es una Junior Empresa formada por estudiantes de Ingeniería Informática y ADE. Con más de 60 socios, es pionera en abarcar varios ámbitos de conocimiento y ofrece servicios de consultoría y asesoramiento web.`
  },
  {
    logo: '/uclm.webp',
    nombre: 'Universidad de Castilla-La Mancha',
    descripcion: `La UCLM es una institución pública de educación superior e investigación que impulsa la formación de calidad, la innovación y el desarrollo en Castilla-La Mancha, con una firme vocación de servicio a la sociedad y proyección internacional.`
  },
  {
    logo: '/fcsti.jpeg',
    nombre: 'Facultad de Ciencias Sociales y Tecnologías de la Información',
    descripcion: `Centro de la UCLM comprometido con la formación universitaria de excelencia en el ámbito de las ciencias sociales y las tecnologías de la información, impulsando la innovación, la investigación y el desarrollo del talento en la región.`
  },
  {
    logo: '/orange.png',
    nombre: 'Orange España',
    descripcion: `Ahora integrada en el grupo MásOrange, la compañía es uno de los líderes en telecomunicaciones en España. Con más de 30 millones de líneas móviles, destaca en telefonía, internet y televisión, y ha ampliado su actividad a sectores como la energía verde, seguros y salud digital, reforzando su papel como socio tecnológico clave.`
  },
  {
    logo: '/telefonica.png',
    nombre: 'Telefónica',
    descripcion: `Compañía líder en telecomunicaciones y tecnología digital a nivel mundial. A través de sus servicios de conectividad, innovación y transformación digital, impulsa la comunicación entre personas, empresas y sociedades enteras.`
  },
  {
    logo: '/catedrastele.png',
    nombre: 'Cátedras Telefónica UCLM',
    descripcion: `Iniciativa conjunta entre Telefónica y la Universidad de Castilla-La Mancha que fomenta la investigación, la innovación y la formación en competencias digitales. Su objetivo es acercar a los estudiantes y a la comunidad universitaria a los retos de la sociedad digital.`
  },
  {
    logo: '/coleing.png',
    nombre: 'Colegio Oficial de Ingenieros en Informática de Castilla-La Mancha (COIICLM)',
    descripcion: `Entidad que agrupa, representa y defiende a los profesionales de la ingeniería informática en la región. Promueve la calidad, la ética y la visibilidad de la profesión, además de impulsar la formación continua y la innovación tecnológica.`
  },
  {
    logo: '/JCCM.png',
    nombre: 'Junta de Comunidades de Castilla-La Mancha (JCCM)',
    descripcion: `El gobierno autonómico de Castilla-La Mancha, encargado de diseñar y ejecutar políticas públicas en la región. A través de su Agencia de Transformación Digital, impulsa proyectos que acercan la tecnología y la innovación a la ciudadanía y a las empresas.`
  }
]

export default function Patrocinadores() {
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

  function renderDescripcion(descripcion) {
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
    <div className="patrocinadores-container">
      <h1 className="patrocinadores-title">Patrocinadores</h1>
      <div className="patrocinadores-list">
        {patrocinadores.map((patro, idx) => (
          <div
            className="patrocinador-card"
            key={idx}
            style={{
              background: isDark ? '#12142c' : 'rgba(184, 187, 216, 0.55)',
              color: isDark ? 'var(--text, #f6f8fa)' : 'var(--text, #222)',
              border: isDark ? '1px solid rgba(80,80,80,0.18)' : '1px solid rgba(200,200,200,0.13)'
            }}
          >
            <div className="patro-logo-wrap">
              <img src={patro.logo} alt={patro.nombre} className="patro-logo-img" />
            </div>
            <div className="patro-info">
              <div className="patro-nombre">{patro.nombre}</div>
              <div className="patro-descripcion">
                {renderDescripcion(patro.descripcion)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
