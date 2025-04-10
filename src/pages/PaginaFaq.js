import React, { useState } from 'react';
import { artigos } from '../utils/blogData';
import './PaginaFaq.css';

function PaginaFaq() {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [sugestoes, setSugestoes] = useState([]);

  const lidarComPergunta = () => {
    const perguntaLower = pergunta.toLowerCase();

    const artigoEncontrado = artigos.find((artigo) =>
      artigo.palavrasChave.some((palavra) =>
        perguntaLower.includes(palavra.toLowerCase())
      )
    );

    if (artigoEncontrado) {
      setResposta(artigoEncontrado.resumo);
    } else {
      setResposta('Desculpe, não encontrei uma resposta para essa pergunta.');
    }
  };

  const gerarSugestoes = (texto) => {
    const textoLower = texto.toLowerCase();
    const filtrados = artigos.filter((artigo) =>
      artigo.palavrasChave.some((palavra) =>
        palavra.toLowerCase().includes(textoLower)
      )
    );
    setSugestoes(filtrados);
  };

  return (
    <div className="faq-container">
      <h1>FAQ Inteligente</h1>

      <input
        type="text"
        value={pergunta}
        onChange={(e) => {
          setPergunta(e.target.value);
          gerarSugestoes(e.target.value);
        }}
        placeholder="Digite sua dúvida sobre ar-condicionado..."
      />
      <button onClick={lidarComPergunta}>Perguntar</button>

      {sugestoes.length > 0 && (
        <ul className="sugestoes-lista">
          {sugestoes.map((sugestao) => (
            <li
              key={sugestao.id}
              onClick={() => {
                setPergunta(sugestao.titulo);
                setResposta(sugestao.resumo);
                setSugestoes([]);
              }}
            >
              {sugestao.titulo}
            </li>
          ))}
        </ul>
      )}

      {resposta && <div className="resposta-box">{resposta}</div>}
    </div>
  );
}

export default PaginaFaq;
