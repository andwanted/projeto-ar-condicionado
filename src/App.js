// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// src/App.js
import './styles/tema.css'; // <== importa o tema global
import MenuNavegacao from './components/MenuNavegacao';
import PaginaCalculadora from './pages/PaginaCalculadora';
import PaginaFaq from './pages/PaginaFaq';
import Home from './pages/Home';
import BlogHome from './blog/BlogHome';
import BlogPost from './blog/BlogPost';
import InstalacaoChecklist from './pages/InstalacaoChecklist';

import './App.css'; // ⬅️ Arquivo onde vamos colocar estilos base

function App() {
  return (
    <Router>
      <div className="app-container"> {/* ⬅️ Wrapper com flex para dividir menu/conteúdo */}
        <MenuNavegacao /> {/* ⬅️ Menu lateral fixo */}
        
        <main className="conteudo-principal"> {/* ⬅️ Área de conteúdo das páginas */}
        <div style={{ paddingTop: '80px', marginLeft: '250px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadora" element={<PaginaCalculadora />} />
            <Route path="/faq" element={<PaginaFaq />} />
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/checklist" element={<InstalacaoChecklist />} />
          </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
