require("dotenv").config();
const ValidateModel = require("../models/validateModel");


const PORT = process.env.PORT;
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

    if (data.avatar_url.includes("https")) {
        return response.status(200).json({
            error: false,
            message: "Usuário autenticado!",
            data
        });
    }

    return response.status(200).json({
        error: false,
        message: "Usuário autenticado!",
        data: {...data, avatar_url: `http://localhost:${PORT}/api/files/${data.avatar_url}`}
    });
}

module.exports = ValidateUser;