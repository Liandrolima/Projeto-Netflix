import React, { useState, useEffect } from 'react';

const Movies = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;  // Pegando a chave do arquivo .env

  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL para filmes populares
    const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1&language=pt-BR`;

    // URL para séries populares
    const tvUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1&language=pt-BR`;

    // URL base para as imagens
    const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

    // Função para fazer a requisição para filmes ou séries
    const fetchData = async (url, setData, setError) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        const data = await response.json();
        setData(data.results);  // Atualiza o estado com os resultados dos filmes ou séries
      } catch (err) {
        setError('Erro ao carregar dados: ' + err.message);
      }
    };

    // Buscar filmes e séries
    fetchData(movieUrl, setMovies, setError);  // Para filmes populares
    fetchData(tvUrl, setTvShows, setError);    // Para séries populares
  }, [API_KEY]);

  return (
    <div>
      <h1>Filmes Populares</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              {/* Exibindo a imagem */}
              {movie.poster_path && (
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  style={{ width: '200px', height: '300px', objectFit: 'cover' }}
                />
              )}
            </li>
          ))}
        </ul>
      )}

      <h1>Séries Populares</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {tvShows.map(tv => (
            <li key={tv.id}>
              <h3>{tv.name}</h3>
              <p>{tv.overview}</p>
              {/* Exibindo a imagem */}
              {tv.poster_path && (
                <img 
                  src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} 
                  alt={tv.name} 
                  style={{ width: '200px', height: '300px', objectFit: 'cover' }}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
