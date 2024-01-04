const pool = require("../models/connection");

async function dbValidateUser(request, response, next) {
    const existingUser = await pool.query("SELECT * FROM usuarios WHERE email = ?", [request.body.email]);

    if (existingUser.length > 0) {
      return response.status(400).json({
        error: true,
        message: "Usuário já cadastrado!",
      }); 
    }

    next();
}

module.exports = dbValidateUser;