import './App.css'
import JSONTreeVisualizer from './JSONTreeVisualizer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <JSONTreeVisualizer/>
    </ThemeProvider>
  )
}

export default App
