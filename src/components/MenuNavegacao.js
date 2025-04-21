import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import './MenuNavegacao.css'; // criaremos esse arquivo já já

function MenuNavegacao() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <ProSidebar className={isHome ? 'menu-claro' : 'menu-escuro'}>
      <Menu iconShape="square">
        <MenuItem>
          <Link to="/">Início</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/calculadora">Calculadora</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/faq">FAQ</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/checklist">Checklist</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/blog">Blog</Link>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default MenuNavegacao;
