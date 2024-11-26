import React from 'react';

const MovieCard = ({ item, type }) => {
  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';
  const title = type === 'movie' ? item.title : item.name;
  const overview = item.overview;

  return (
    <div className="movie-card">
      <img
        src={`${imageUrlBase}${item.poster_path}`}
        alt={title}
        className="movie-poster"
      />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
