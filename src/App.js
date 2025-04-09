import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe Routes
import Home from './pages/Home';
import PaginaFaq from './pages/PaginaFaq';
import PaginaCalculadora from './pages/PaginaCalculadora';
import CalculadoraFormulario from './CalculadoraFormulario'; // Importe o componente
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pagina1" element={<PaginaFaq />} />
          <Route path="/pagina2" element={<PaginaCalculadora />} />
          <Route path="/calculadora" element={<CalculadoraFormulario />} /> {/* Adicione a rota */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;