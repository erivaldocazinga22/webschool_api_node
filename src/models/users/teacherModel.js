const bcrypt = require("bcrypt");
const pool = require("../connection");

async function getAll() {
  try {
    const [data] = await pool.query("SELECT * FROM usuarios WHERE nivel = ?", [2]);
    const [teachers] = await pool.query("SELECT * FROM professores");

    return { data, teachers };
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

async function createUser(body, file) {
  try {
    return body;
    /* const { processo, identificacao, nome, sexo, email, telefone, senha, nivel } = body;
    const avatar_url = file.filename;

    const hashedPassword = await bcrypt.hash(senha, 12);

    const created_at = new Date();
    const updated_at = null;

    const data = await pool.query(
      "INSERT INTO usuarios (processo, identificacao, nome, sexo, email, telefone, senha, avatar_url, nivel, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        processo,
        identificacao,
        nome,
        sexo,
        email,
        telefone,
        hashedPassword,
        avatar_url,
        nivel,
        created_at,
        updated_at,
      ]
    );

    return { data }; */
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

module.exports = {
  getAll,
  createUser,
};
