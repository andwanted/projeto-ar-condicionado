import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { artigos } from '../utils/blogData';

function BlogPost() {
  const { id } = useParams();
  const artigo = artigos.find((a) => a.id === parseInt(id));

  if (!artigo) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Artigo não encontrado</h2>
        <Link to="/blog">Voltar para o blog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{artigo.titulo}</h1>
      <p>{artigo.conteudo}</p>
      <br />
      <Link to="/blog">← Voltar para o blog</Link>
    </div>
  );
}

export default BlogPost;
