const { Pool } = require('pg');
require('dotenv').config();

// Configuração do pool de conexões do PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20, // máximo de conexões no pool
  idleTimeoutMillis: 30000, // tempo de idle antes de fechar conexão
  connectionTimeoutMillis: 2000, // tempo de timeout para conexão
});

// Event listeners para monitorar o pool
pool.on('connect', () => {
  console.log('✅ Conectado ao banco de dados PostgreSQL');
});

pool.on('error', (err) => {
  console.error('❌ Erro inesperado no pool de conexões:', err);
  process.exit(-1);
});

// Teste de conexão inicial
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Erro ao conectar no banco de dados:', err.message);
  } else {
    console.log('📅 Banco de dados conectado em:', res.rows[0].now);
  }
});

module.exports = pool;
