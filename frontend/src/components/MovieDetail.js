import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = ({ id, category, onBack }) => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`; // Default to movie detail

        if (category === 'tv') {
          url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=pt-BR`; // For tv show detail
        }

        const response = await axios.get(url);
        setDetail(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id, category]);

  if (loading) {
    return <p>Carregando detalhes...</p>;
  }

  if (!detail) {
    return <p>Detalhes não encontrados.</p>;
  }

  return (
    <div className="movie-detail">
      <button onClick={onBack}>Voltar</button> {/* Botão de voltar */}
      <h2>{detail.title || detail.name}</h2>
      <p>{detail.overview}</p>
      <p><strong>Lançamento: </strong>{detail.release_date || detail.first_air_date}</p>
      <p><strong>Avaliação: </strong>{detail.vote_average}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
        alt={detail.title || detail.name}
      />
    </div>
  );
};

export default MovieDetail;
