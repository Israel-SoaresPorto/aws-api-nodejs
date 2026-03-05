const db = require("../config/database");

// função para criar um novo usuário
async function createUser(req, res) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  const text = "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *";
  const values = [name, email];

  try {
    const result = await db.query(text, values);
    console.log("Usuário criado:", result.rows[0]);
    return res
      .status(201)
      .json({ message: "Usuário criado com sucesso", user: result.rows[0] });
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
  }
}

// função para listar todos os usuários
async function listUsers(req, res) {
  try {
    const results = await db.query(
      "SELECT * FROM users ORDER BY created_at DESC",
    );
    console.log("Usuários listados:", results.rows);
    return res.json(results.rows);
  } catch (err) {
    console.error("Erro ao listar usuários:", err);
  }
}

// função para buscar um usuário por ID
async function getUserById(req, res) {
  const { id } = req.params;

  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      console.log("Usuário não encontrado");
      return res.status(404).json({ error: "User not found" });
    } else {
      console.log("Usuário encontrado:", result.rows[0]);
      return res.json(result.rows[0]);
    }
  } catch (err) {
    console.error("Erro ao buscar usuário:", err);
  }
}

// função para atualizar um usuário por ID
async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  const text =
    "UPDATE users SET name = $1, email = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *";
  const values = [name, email, id];

  try {
    const result = await db.query(text, values);
    if (result.rows.length === 0) {
      console.log("Usuário não encontrado para atualização");
      return res.status(404).json({ error: "User not found" });
    } else {
      console.log("Usuário atualizado:", result.rows[0]);
      return res.json({
        message: "Usuário atualizado com sucesso",
        user: result.rows[0],
      });
    }
  } catch (err) {
    console.error("Erro ao atualizar usuário:", err);
  }
}

module.exports = {
  createUser,
  listUsers,
  getUserById,
  updateUser,
};
