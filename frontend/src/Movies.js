import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('SUA_API_URL');
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Erro ao carregar os filmes:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Filmes</h1>
      <div className="movies">
        {movies.map(movie => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
