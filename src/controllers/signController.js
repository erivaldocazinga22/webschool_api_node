const SignInModel = require("../models/signInModel");

async function SignInController(request, response) {
    const { email, password } = request.body;
    const data = await SignInModel({ email, password});

    if(!data) {
        response.status(400).json({
            error: true,
            message: "Credênciais erradas!"
        });
    }

    if (!response.headersSent) {
        response.status(200).json({
            error: false,
            message: "Login realizado com sucesso!",
            token: data
        });
    }
}

module.exports = SignInController;
