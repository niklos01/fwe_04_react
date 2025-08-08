import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Personen from './pages/Personen'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personen" element={<Personen />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
