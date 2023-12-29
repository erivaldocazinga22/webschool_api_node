const pool = require("./connection");

async function ValidateUser(id) {

    const [data] = await pool.execute("SELECT * FROM usuarios WHERE id = ?", [id]);

    if(!data || data[0].length == 0) {
        return;
    }

    return data[0];
}


module.exports = ValidateUser;