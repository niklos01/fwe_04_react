import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Personen from './pages/Personen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personen" element={<Personen />} />
    </Routes>
  )
}

export default App
