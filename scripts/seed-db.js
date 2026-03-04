const db = require("../src/config/database");

async function addUser(name, email) {
  const text = "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *";
  const values = [name, email];

  try {
    const res = await db.query(text, values);
    console.log("Usuário inserido:", res.rows[0]);
  } catch (err) {
    console.error("Erro na query:", err.stack);
  }
}

// Teste de inserção de usuário no banco de dados
addUser("Israel", "israel@exemplo.com");
