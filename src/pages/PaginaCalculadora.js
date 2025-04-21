// src/pages/PaginaCalculadora.js
import React from 'react';
import CalculadoraFormulario from '../CalculadoraFormulario';

function PaginaCalculadora() {
  return (
    <div className="conteudo-principal">
      <div className="quadro-interno">
        <h1>Calculadora de Verificação</h1>
        <CalculadoraFormulario />
      </div>
    </div>
  );
}

export default PaginaCalculadora;
