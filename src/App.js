// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MenuNavegacao from './components/MenuNavegacao';
import PaginaCalculadora from './pages/PaginaCalculadora';
import PaginaFaq from './pages/PaginaFaq';
import Home from './pages/Home';
import BlogHome from './blog/BlogHome';
import BlogPost from './blog/BlogPost';
import InstalacaoChecklist from './pages/InstalacaoChecklist'; // <== nova importação

function App() {
  return (
    <Router>
      <MenuNavegacao />
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<PaginaCalculadora />} />
          <Route path="/faq" element={<PaginaFaq />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/checklist" element={<InstalacaoChecklist />} /> {/* nova rota */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
