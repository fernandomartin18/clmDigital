import '../css/Programa.css'

const actividades = [
  {
    hora: ' 09:00 - 09:30',
    titulo: 'Inauguración',
    descripcion: (
      <>
        La jornada arranca con la inauguración oficial de <span className="marca-clm">CLM-Digital: IA, naturalmente artificial</span>, un espacio creado para reflexionar y compartir cómo la inteligencia artificial está moldeando nuestra vida diaria. Más allá de la tecnología, se abre un diálogo sobre el presente y futuro de una sociedad que aprende a convivir con lo digital en lo personal, lo profesional y lo colectivo. Una bienvenida que no solo abre el evento, sino también la puerta a nuevas formas de entender la innovación.
      </>
    )
  },
  {
    hora: ' 09:30 - 10:00',
    titulo: 'Desayuno',
    descripcion: 'Tras la inauguración llega el momento de compartir mesa y café. El desayuno de CLM-Digital no es solo una pausa, sino la primera oportunidad de conocerse, intercambiar ideas y empezar a tejer conexiones que continuarán durante toda la jornada. Entre sorbo y sorbo, la inteligencia artificial se cuela en las conversaciones y convierte este encuentro en el arranque perfecto para un día de inspiración colectiva.'
  },
  {
    hora: ' 10:00 - 11:00',
    titulo: 'Charla 1 – La IA que se avecina: cuando el algoritmo manda, ¿quién piensa?',
    descripcion: (
      <>
        ¿Puede ChatGPT hacerte los deberes? ¿Te quitará un algoritmo el trabajo antes de acabar la carrera? ¿La IA solo sirve para generar deepfakes y dibujos raros? Este espacio dado por el Vicerrectorado de Universidad Digital, aterriza las dudas más comunes sobre la inteligencia artificial en un lenguaje cercano y directo. Más que un repaso técnico, es una invitación a reflexionar sobre cómo los algoritmos influyen en nuestra vida diaria, qué beneficios aportan y qué riesgos debemos tener en cuenta. Una sesión pensada para abrir los ojos a estudiantes y profesionales sobre el presente de la IA y su impacto en nuestra sociedad.
        <br />
        <a
          href="https://www.uclm.es/toledo/fcsociales/ultimasnovedades/charla-introductoria-sobre-ia"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '0.7em',
            fontWeight: 'bold',
            color: 'var(--primary, #e79608)',
            textDecoration: 'none',
          }}
        >
          Saber Más &gt;
        </a>
      </>
    )
  },
  {
    hora: ' 11:00 - 12:00',
    titulo: 'Charla 2 – Juan de Dios Llamas',
    descripcion: (
      <>
        Chief Data Oficer en BBDO & Proximity, profesor en escuelas de negocio y auténtico evangelista del poder del dato, Juan de Dios Llamas lleva más de una década ayudando a empresas y equipos a entender que la información no sirve de nada si no se convierte en conocimiento. Su charla en <span className="marca-clm">CLM-Digital: IA, naturalmente artificial</span> explorará cómo los datos, bien gestionados, son la gasolina de la inteligencia artificial: desde la publicidad hasta la estrategia empresarial, pasando por la forma en que cada clic y cada búsqueda dibujan nuestro presente digital. Una sesión pensada para descubrir cómo la IA transforma industrias, marcas y personas, y por qué el futuro será de quienes sepan leer entre los números.
      </>
    )
  },
  {
    hora: ' 12:00 - 13:00',
    titulo: 'Charla 3 – Pablo Morillo González',
    descripcion: (
      <>
        Director del Segmento de Vuelo en Deimos y pionero en proyectos aeroespaciales desde Puertollano, Pablo Morillo vive entre satélites, innovación y futuro. Bajo su liderazgo se han desarrollado misiones como <span className="marca-clm">Comet Interceptor</span> con la Agencia Espacial Europea, el nanosatélite <span className="marca-clm">Neptuno</span> con estructura 3D y sistemas de inteligencia artificial para vigilancia marítima, o <span className="marca-clm">DRACO</span>, un proyecto que estudia cómo reducir la basura espacial. Su charla en <span className="marca-clm">CLM-Digital: IA, naturalmente artificial</span> mostrará cómo la inteligencia artificial no solo revoluciona la Tierra, sino también el espacio. Una visión inspiradora sobre cómo los algoritmos ya nos acompañan más allá de la atmósfera y qué significa para la exploración y la vida en nuestro planeta.
      </>
    )
  },
  {
    hora: ' 13:00 - 14:00',
    titulo: 'Mesa Redonda – Celonis & Madrija',
    descripcion: (
      <>
        Dos visiones, un mismo reto: entender cómo la inteligencia artificial y el análisis de datos están transformando la manera en que trabajamos y tomamos decisiones. <span className="marca-clm">Celonis</span>, líder mundial en process mining, mostrará cómo descubrir y optimizar procesos ocultos en las organizaciones gracias a la IA. <span className="marca-clm">Madrija</span>, con su experiencia en soluciones digitales y de negocio, aportará la perspectiva cercana de cómo estas tecnologías aterrizan en las empresas de nuestro entorno. Una conversación abierta que pondrá frente a frente la escala global y la realidad local, para demostrar que la inteligencia artificial no es un concepto lejano, sino una herramienta ya imprescindible.
      </>
    )
  },
  {
    hora: ' 14:00 - 14:30',
    titulo: 'Clausura',
    descripcion: (
      <>
        La jornada se despide, pero las ideas siguen su curso. En la clausura de <span className="marca-clm">CLM-Digital: IA, naturalmente artificial</span>, recapitularemos lo aprendido y vivido: desde los retos que nos plantea la inteligencia artificial hasta las oportunidades que abre en nuestras empresas, instituciones y vidas cotidianas. Más que un final, es una invitación a seguir explorando, investigando y aplicando lo descubierto hoy. Porque la innovación no termina con el cierre del evento: empieza cada vez que decidimos llevarla a la práctica.
      </>
    )
  },
  {
    hora: ' 14:30 - 16:00',
    titulo: 'Comida - Vino Español',
    descripcion: (
      <>
        Tras la intensidad de las charlas y debates, llega el momento de brindar juntos. El vino español de <span className="marca-clm">CLM-Digital</span> será el espacio perfecto para relajarse, comentar lo aprendido y seguir generando conexiones en un ambiente más cercano. Entre copas y conversación distendida, la inteligencia artificial cede protagonismo a lo humano: la comunidad que hace posible que la innovación se convierta en realidad.
      </>
    )
  }
]

export default function Programa() {
  return (
    <div className="programa-container">
      <h1 className="programa-title">Programa</h1>
      <div className="programa-list">
        {actividades.map((act, idx) => (
          <div className="programa-item" key={idx}>
            <div className="programa-hora">{act.hora}</div>
            <div className="programa-info">
              <div className="programa-titulo">{act.titulo}</div>
              <div className="programa-descripcion">{act.descripcion}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
