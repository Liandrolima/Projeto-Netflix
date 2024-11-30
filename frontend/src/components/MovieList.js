import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieList = ({ searchTerm, category, onSelectItem }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      
      let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`; // Default to movies
  
      if (category === 'tv') {
        url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR`; // For series
      }
  
      if (searchTerm) {
        const searchUrl = category === 'tv' 
          ? `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchTerm}&language=pt-BR`
          : `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=pt-BR`;
        
        url = searchUrl; // Use search URL
      }
  
      try {
        const response = await axios.get(url);
        setItems(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar:", error);
        setLoading(false);
      }
    };
  
    fetchItems();
  }, [searchTerm, category, API_KEY]); // Inclua API_KEY como dependência
  

  return (
    <div className="movie-list">
      {loading ? (
        <p>Carregando...</p>
      ) : items.length === 0 ? (
        <p>Nenhum item encontrado</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="movie-card" onClick={() => onSelectItem(item.id, category)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
            />
            <h3>{item.title || item.name}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
