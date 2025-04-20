// src/components/MenuNavegacao.js
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

function MenuNavegacao() {
  return (
    <Sidebar>
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
    </Sidebar>
  );
}

export default MenuNavegacao;
