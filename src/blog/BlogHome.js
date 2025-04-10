import React from 'react';
import { Link } from 'react-router-dom';
import { artigos } from '../utils/blogData';

function BlogHome() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Blog do Ar-Condicionado</h1>
      <ul>
        {artigos.map((artigo) => (
          <li key={artigo.id}>
            <h2>
              <Link to={`/blog/${artigo.id}`}>{artigo.titulo}</Link>
            </h2>
            <p>{artigo.resumo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogHome;
