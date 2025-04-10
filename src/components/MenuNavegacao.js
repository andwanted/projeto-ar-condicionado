// src/components/MenuNavegacao.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MenuNavegacao.css';

function MenuNavegacao() {
  return (
    <nav className="menu-navegacao">
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/calculadora">Calculadora</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/checklist">Checklist</Link></li> {/* novo item */}
      </ul>
    </nav>
  );
}

export default MenuNavegacao;
