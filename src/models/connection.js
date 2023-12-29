const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

(async () => {
    try {
        console.log("Connection to the database established successfully!");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
})();

module.exports = pool;
