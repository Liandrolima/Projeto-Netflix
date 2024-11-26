import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';

const Movies = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;  // Pegando a chave do arquivo .env

  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL para filmes populares
    const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1&language=pt-BR`;

    // URL para séries populares
    const tvUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=1&language=pt-BR`;

    const fetchData = async (url, setData) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        const data = await response.json();
        setData(data.results);  // Atualiza o estado com os resultados
      } catch (err) {
        setError('Erro ao carregar dados: ' + err.message);
      }
    };

    fetchData(movieUrl, setMovies);  // Para filmes populares
    fetchData(tvUrl, setTvShows);    // Para séries populares
  }, [API_KEY]);

  return (
    <div className="movies-container">
      <h2>Filmes Populares</h2>
      <div className="movies-list">
        {error ? <p>{error}</p> : movies.map(movie => (
          <MovieCard key={movie.id} item={movie} type="movie" />
        ))}
      </div>

      <h2>Séries Populares</h2>
      <div className="tvshows-list">
        {error ? <p>{error}</p> : tvShows.map(tv => (
          <MovieCard key={tv.id} item={tv} type="tv" />
        ))}
      </div>
    </div>
  );
};

export default Movies;
