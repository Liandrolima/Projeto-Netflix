import React from 'react';
import Movies from './Movies';  // Importe o componente Movies

const App = () => {
  return (
    <div>
      <h1>Bem-vindo ao meu projeto de filmes e séries!</h1>
      <Movies />  {/* Coloque o componente Movies aqui */}
    </div>
  );
};

export default App;

