const bcrypt = require("bcrypt");
const pool = require("./connection");

async function createUser(body, file) {
  try {
    const { processo, identificacao, nome, sexo, email, telefone, senha, nivel } = body;
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

    return { data };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

module.exports = {
  createUser,
};
