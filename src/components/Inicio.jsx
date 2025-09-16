import '../css/Inicio.css'

export default function Inicio() {
  return (
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
  )
}
