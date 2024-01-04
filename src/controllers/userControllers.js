const UserModel = require("../models/userModel");

async function CreateUser(request, response) {
    const data = await UserModel.createUser(request.body, request.file);

    if (!data) {
        return response.status(400).json({
            error: true,
            message: "Usuário já existe!"
        });
    }

    return response.status(200).json({
        error: false,
        message: "Usuário criado com sucesso!",
        data
    });
}

module.exports = {
    CreateUser
}