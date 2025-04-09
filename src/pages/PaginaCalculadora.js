import React, { useState } from 'react';

function PaginaCalculadora() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularResultado = () => {
    // Aqui você implementará a lógica para calcular a equação.
    // Por enquanto, vamos fazer uma soma simples como exemplo.
    setResultado(valor1 + valor2);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <input
        type="number"
        value={valor1}
        onChange={(e) => setValor1(Number(e.target.value))}
      />
      <input
        type="number"
        value={valor2}
        onChange={(e) => setValor2(Number(e.target.value))}
      />
      <button onClick={calcularResultado}>Calcular</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default PaginaCalculadora;