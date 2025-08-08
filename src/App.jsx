import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Home from './pages/Home';
import Personen from './pages/Personen';
import Form from './components/form';

function App() {
    return (
        <div className="app">
            <Header />
            <main className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/personen" element={<Personen />} />
                    <Route path="/addperson" element={<Form />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
