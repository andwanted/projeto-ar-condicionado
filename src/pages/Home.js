import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem-vindo à minha aplicação!</h1>
      <p>Selecione uma das páginas abaixo:</p>
      <ul>
        <li>
          <Link to="/pagina1">Página 1 (FAQ)</Link>
        </li>
        <li>
          <Link to="/pagina2">Página 2 (Calculadora)</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;