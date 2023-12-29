const bcrypt = require("bcrypt");
const pool = require("./connection");
require("dotenv").config();

const { createToken } = require("../utils/jsonWebToken");

async function SignInModel({ email, password}) {

    const [data] = await pool.execute("SELECT * FROM usuarios WHERE email = ?", [email]);

    if (!data || !data[0]) {
        return null;
    }

    const hashPasswordMatch = await bcrypt.compare(password, data[0].senha);

    if (!hashPasswordMatch) {
        return null;
    }

    const token = await createToken({ 
        id: data[0].id, 
        email: data[0].email, 
        identificacao: data[0].identificacao 
    });

    return token;
}

module.exports = SignInModel;
