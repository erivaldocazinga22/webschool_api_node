const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const createToken = async (playload)=> {
    return jwt.sign(playload, JWT_SECRET, { expiresIn: "7d"}); //600 10min 
}

const verifyToken = async (token)=> {
    return jwt.verify(token, JWT_SECRET); 
}

module.exports = { createToken, verifyToken };