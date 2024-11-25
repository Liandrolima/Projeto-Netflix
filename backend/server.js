const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.API_KEY;

// Middleware
app.use(cors());
app.use(express.json());

// Rota para buscar filmes populares
app.get('/api/movies', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filmes populares.' });
  }
});

// Rota para buscar detalhes de um filme pelo ID
app.get('/api/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: `Erro ao buscar detalhes do filme com ID: ${id}.` });
  }
});

// Rota para buscar séries populares
app.get('/api/tv', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR`);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar séries populares.' });
  }
});

// Rota para buscar detalhes de uma série pelo ID
app.get('/api/tv/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`${API_URL}/tv/${id}?api_key=${API_KEY}&language=pt-BR`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: `Erro ao buscar detalhes da série com ID: ${id}.` });
  }
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
