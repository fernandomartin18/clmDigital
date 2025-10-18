import { useState, useEffect } from 'react'
import './css/App.css'
import Home from './pages/Home'
import themes from './styles/themes'

function App() {
  const getPreferredTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const [theme, setTheme] = useState(getPreferredTheme())

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Aplicar tema al body y variables CSS
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.body.style.color = themes[theme].text
    document.body.style.backgroundImage = themes[theme].gradientBg
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.overscrollBehavior = 'none'
    document.body.style.transition = 'background 0.5s, color 0.5s'
    document.documentElement.style.transition = 'background 0.5s, color 0.5s'
    document.documentElement.style.setProperty('--navbar-bg', themes[theme].navbar + 'cc')
    document.documentElement.style.setProperty('--navbar-text', themes[theme].navbarText)
    document.documentElement.style.setProperty('--navbar-shadow', themes[theme].navbarShadow)
    document.documentElement.style.setProperty('--primary', themes[theme].primary)
    document.documentElement.style.setProperty('--text', themes[theme].text)
  }, [theme])

  return (
    <Home theme={theme} toggleTheme={toggleTheme} />
  )
}

export default App
