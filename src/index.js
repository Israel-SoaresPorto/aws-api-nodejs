require('dotenv').config();
const express = require('express');
const pool = require('./config/database');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parse de JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ 
    message: 'API funcionando!',
    version: '1.0.0'
  });
});

// Rota de health check do banco de dados
app.get('/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      status: 'OK',
      database: 'Connected',
      timestamp: result.rows[0].now
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'ERROR',
      database: 'Disconnected',
      error: error.message
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});

module.exports = app;
