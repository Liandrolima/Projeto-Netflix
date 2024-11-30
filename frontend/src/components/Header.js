import React, { useState } from "react";

const Header = ({ onSearch, setCategory }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <header className="header">
      <h1>Plataforma de Streaming</h1>
      <input
        type="text"
        placeholder="Buscar filmes ou séries..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      <nav>
        <button onClick={() => setCategory('movies')}>Filmes</button>
        <button onClick={() => setCategory('tv')}>Séries</button>
      </nav>
    </header>
  );
};

export default Header;
