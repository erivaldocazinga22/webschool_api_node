const express = require("express");
const router = express.Router();

const ValidateMiddleware = require("./Middleware/ValidateUser");

const signController = require("./controllers/signController");
const validateController = require("./controllers/validateController");

//Rota Principal
router.get("/", (_request, response) => {
   response.status(200).json({
    error: false,
    message: "API do Sistema de Cadastro da Webschool"
   })
});

// Rota de Login
router.post("/account", signController);

//Rota de validanção
router.post("/validate", ValidateMiddleware, validateController);

module.exports = router;