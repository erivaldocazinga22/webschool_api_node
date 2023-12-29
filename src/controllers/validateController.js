const ValidateModel = require("../models/validateModel");

async function ValidateUser(request, response) {
    //pegar userId 
    const data = await ValidateModel(+request.userId)

    if(!data) {
        return response.status(400).json({
            error: true,
            message: "Usuário não autenticado, Precisa fazer login para acessar!",
            data
        })
    }

    return response.status(200).json({
        error: false,
        message: "Usuário autenticado!",
        data
    });
}

module.exports = ValidateUser;