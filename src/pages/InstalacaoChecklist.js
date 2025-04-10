// src/pages/InstalacaoChecklist.js
import React, { useState } from 'react';
import { checklists } from '../utils/checklistData';

function InstalacaoChecklist() {
  const [cenario, setCenario] = useState('novo');

  return (
    <div className="checklist-container">
      <h2>Assistente de Instalação de Ar-Condicionado</h2>
      <select onChange={(e) => setCenario(e.target.value)} value={cenario}>
        <option value="novo">Instalar ar novo</option>
        <option value="reinstalar">Instalar ar que veio de outro local</option>
        <option value="retirarEInstalar">Retirar e instalar</option>
      </select>

      <div className="passos">
        {checklists[cenario].map((passo, index) => (
          <div key={index} className="passo">
            <h3>{passo.titulo}</h3>
            <p>{passo.descricao}</p>
            {passo.imagem && <img src={passo.imagem} alt={passo.titulo} width="300" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstalacaoChecklist;
