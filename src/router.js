const express = require("express");
const router = express.Router();

const dbValidateUser = require("./Middleware/dbValidateUser");
const ValidateMiddleware = require("./Middleware/ValidateUser");
const UploadProfilePhoto = require("./Middleware/uploads/uploadProfilePhoto");

const signController = require("./controllers/signController");
const validateController = require("./controllers/validateController");
const userController = require("./controllers/userControllers");


router.use(express.static("src/view"));
router.use("/files",express.static("public/uploads/profiles"));

// Rota de Login
router.post("/register", signController);

//Rota de validanção
router.post("/validate", ValidateMiddleware, validateController);

//Rota de cadastro deo admin
router.post("/users", dbValidateUser, UploadProfilePhoto.single("avatar_url"), userController.CreateUser);

module.exports = router;