import React, { useState } from 'react';

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Pesquisando por: ${search}`);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Netflix Clone</h1>
      </div>
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
};

export default Header;
