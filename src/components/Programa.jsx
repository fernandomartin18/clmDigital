import '../css/Programa.css'
import { useEffect, useState } from 'react'

const actividades = [
	{
		hora: ' 09:00 - 09:30',
		titulo: 'Inauguración',
		descripcion: (
			<>
				La jornada arranca con la inauguración oficial de{' '}
				<span className="marca-clm">CLM-Digital: IA, naturalmente artificial</span>
				, un espacio creado para reflexionar y compartir cómo la inteligencia artificial
				está moldeando nuestra vida diaria. Más allá de la tecnología, se abre un
				dialogado sobre el presente y futuro de una sociedad que aprende a convivir
				con lo digital en lo personal, lo profesional y lo colectivo. Una bienvenida
				que no solo abre el evento, sino también la puerta a nuevas formas de
				entender la innovación.
			</>
		),
	},
	{
		hora: ' 09:30 - 10:00',
		titulo: 'Desayuno',
		descripcion:
			'Tras la inauguración llega el momento de compartir mesa y café. El desayuno de CLM-Digital no es solo una pausa, sino la primera oportunidad de conocerse, intercambiar ideas y empezar a tejer conexiones que continuarán durante toda la jornada. Entre sorbo y sorbo, la inteligencia artificial se cuela en las conversaciones y convierte este encuentro en el arranque perfecto para un día de inspiración colectiva.',
	},
	{
		hora: ' 10:00 - 11:00',
		titulo: 'Charla 1 – La IA que se avecina: cuando el algoritmo manda, ¿quién piensa?',
		descripcion: (
			<>
				¿Puede ChatGPT hacerte los deberes? ¿Te quitará un algoritmo el trabajo antes
				de acabar la carrera? ¿La IA solo sirve para generar deepfakes y dibujos
				raros? Este espacio dado por el Vicerrectorado de Universidad Digital,
				aterriza las dudas más comunes sobre la inteligencia artificial en un
				lenguaje cercano y directo. Más que un repaso técnico, es una invitación a
				reflexionar sobre cómo los algoritmos influyen en nuestra vida diaria, qué
				beneficios aportan y qué riesgos debemos tener en cuenta. Una sesión
				pensada para abrir los ojos a estudiantes y profesionales sobre el presente
				de la IA y su impacto en nuestra sociedad.
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
		),
	},
	{
		hora: ' 11:00 - 12:00',
		titulo: 'Charla 2 – Juan de Dios Llamas - AI: Una historia de Valor, Gritos y Silencios.',
		descripcion: (
			<>
				En esta ponencia hablaremos de cómo la IA no puede sostenerse en la moda ni
				en la especulación: su legitimidad sólo nace cuando genera valor real,
				medible y humano, no cuando se presenta como un truco de feria. Señalaremos
				también el escenario actual donde las grandes corporaciones levantan gritos
				y promesas altisonantes movidas por intereses que muchas veces no son los
				del usuario ni la sociedad, ruido que confunde más de lo que aclara.
				<br />
				<br />
				Y, frente a ese estruendo, la revolución silenciosa: la IA que ya se está
				integrando sin titulares, transformando procesos en turismo, seguros,
				educación, salud, marketing, defensa; la que optimiza infraestructuras,
				tiempos o abre oportunidades creativas que antes no existían. Esa es la IA
				que arraiga, que cambia la vida con hechos aunque con poca pedagogía.
				<br />
				<br />
				La ponencia “AI: Una historia de Valor, Gritos y Silencios” es una invitación
				a leer el presente con ojos críticos y a reconocer dónde está la verdadera
				revolución: no en la espuma de las grandes promesas, sino en el impacto
				tangible que se queda cuando el ruido desaparece.
			</>
		),
	},
	{
		hora: ' 12:00 - 13:00',
		titulo: 'Charla 3 – Pablo Morillo González - La Inteligencia Artificial en el dominio del espacio',
		descripcion: (
			<>
				"Hoy en día la IA es como el color negro, combina con todo". Esta frase
				refleja el sentir común en la sociedad, pero, ¿es realmente cierto? ¿Puede
				la IA aplicarse de manera efectiva para mejorar nuestras capacidades en el
				ámbito espacial? A lo largo de la ponencia, descubriremos como esta
				disruptiva tecnología ofrece enormes ventajas en el presente y nuevas
				perspectivas futuras a la sociedad, en los ámbitos civiles y de defensa.
			</>
		),
	},
	{
		hora: ' 13:00 - 13:45',
		titulo: 'Mesa Redonda – Celonis, Madrija & Telefónica',
		descripcion: (
			<>
				Tres visiones, un mismo reto: entender cómo la inteligencia artificial y el análisis de datos están transformando la manera en que trabajamos y tomamos decisiones. <span className="marca-clm">Celonis</span>, líder mundial en process mining, mostrará cómo descubrir y optimizar procesos ocultos en las organizaciones gracias a la IA. <span className="marca-clm">Madrija</span>, con su experiencia en soluciones digitales y de negocio, aportará la perspectiva cercana de cómo estas tecnologías aterrizan en las empresas de nuestro entorno. <span className="marca-clm">Telefónica</span>, referente en innovación tecnológica y transformación digital, compartirá su visión sobre cómo escalar estas soluciones en grandes organizaciones y generar impacto real. Una conversación abierta que pondrá frente a frente la escala global, la realidad local y la experiencia corporativa, para demostrar que la inteligencia artificial no es un concepto lejano, sino una herramienta ya imprescindible.
			</>
		),
	},
	{
		hora: ' 13:45 - 14:00',
		titulo: 'Clausura',
		descripcion: (
			<>
				La jornada se despide, pero las ideas siguen su curso. En la clausura de{' '}
				<span className="marca-clm">CLM-Digital: IA, naturalmente artificial</span>
				, recapitularemos lo aprendido y vivido: desde los retos que nos plantea la
				inteligencia artificial hasta las oportunidades que abre en nuestras
				empresas, instituciones y vidas cotidianas. Más que un final, es una
				invitación a seguir explorando, investigando y aplicando lo descubierto hoy.
				Porque la innovación no termina con el cierre del evento: empieza cada vez
				que decidimos llevarla a la práctica.
			</>
		),
	},
	{
		hora: ' 14:00 - 15:30',
		titulo: 'Comida - Vino Español',
		descripcion: (
			<>
				Tras la intensidad de las charlas y debates, llega el momento de brindar
				juntos. El vino español de <span className="marca-clm">CLM-Digital</span> será
				el espacio perfecto para relajarse, comentar lo aprendido y seguir
				generando conexiones en un ambiente más cercano. Entre copas y conversación
				distendida, la inteligencia artificial cede protagonismo a lo humano: la
				comunidad que hace posible que la innovación se convierta en realidad.
			</>
		),
	},
]

export default function Programa() {
	const [isDark, setIsDark] = useState(
		typeof window !== 'undefined'
			? document.documentElement.getAttribute('data-theme') === 'dark'
			: false
	)

	useEffect(() => {
		const observer = new MutationObserver(() => {
			setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
		})
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme'],
		})
		return () => observer.disconnect()
	}, [])

	return (
		<div className="programa-container">
			<h1 className="programa-title">Programa</h1>
			<div className="programa-location">
				<a
					href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRhAMggIAhBFGCcYOzITCAMQLhiDARjHARixAxjRAxiABDINCAQQABiDARixAxiABDIMCAUQABgUGIcCGIAEMgYIBhBFGD0yBggHEEUYPdIBCDEzODlqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=es&sa=X&geocode=KasB0V6lHUANMZTY6q0weAux&daddr=Av.+Real+F%C3%A1brica+de+Sedas,+s/n,+45600+Talavera+de+la+Reina,+Toledo"
					target="_blank"
					rel="noopener noreferrer"
					className="location-link"
				>
					<img
						src="/ubicacion.png"
						alt="Ubicación"
						className="location-icon"
						style={
							isDark ? { filter: 'invert(1) brightness(2)' } : {}
						}
					/>
					<span className="location-text">
						Salón de Grados, Fac. CC.SS. y TI, Campus de Talavera de la Reina
					</span>
				</a>
			</div>
			<div className="programa-list">
				{actividades.map((act, idx) => (
					<div className="programa-item" key={idx}>
						<div className="programa-hora">{act.hora}</div>
						<div className="programa-info">
							<div className="programa-titulo">{act.titulo}</div>
							<div className="programa-descripcion">
								{act.descripcion}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}