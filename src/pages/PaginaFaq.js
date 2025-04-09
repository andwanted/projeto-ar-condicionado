import React, { useState } from 'react';

function PaginaFaq() {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

  const lidarComPergunta = () => {
    // Aqui você implementará a lógica para enviar a pergunta para a IA
    // e receber a resposta. Por enquanto, vamos exibir uma resposta fixa.
    setResposta('Esta é uma resposta de exemplo da IA.');
  };

  return (
    <div>
      <h1>FAQ com IA</h1>
      <input
        type="text"
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        placeholder="Digite sua pergunta..."
      />
      <button onClick={lidarComPergunta}>Enviar</button>
      <p>Resposta: {resposta}</p>
    </div>
  );
}

export default PaginaFaq;