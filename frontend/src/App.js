import React, { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Termo de busca
  const [category, setCategory] = useState("movies"); // Default to movies
  const [selectedItem, setSelectedItem] = useState(null); // Para o item selecionado (detalhes)
  
  // Função para atualizar o termo de busca
  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  // Função para selecionar um filme ou série para ver os detalhes
  const handleSelectItem = (id, category) => {
    setSelectedItem({ id, category });
  };

  // Função para voltar à tela inicial (resetando a seleção)
  const handleBack = () => {
    setSelectedItem(null);
    setSearchTerm(""); // Limpa a busca quando voltar
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} setCategory={setCategory} />
      
      {/* Se um item for selecionado, mostra os detalhes com botão de voltar */}
      {selectedItem ? (
        <MovieDetail 
          id={selectedItem.id} 
          category={selectedItem.category} 
          onBack={handleBack} 
        />
      ) : (
        <>
          {/* Se há um termo de busca, mostra o botão de voltar */}
          {searchTerm && (
            <button onClick={handleBack} className="back-button">Voltar</button>
          )}

          {/* Exibe a lista de filmes ou séries dependendo da busca */}
          <MovieList
            searchTerm={searchTerm}
            category={category}
            onSelectItem={handleSelectItem}
          />
        </>
      )}
    </div>
  );
};

export default App;
