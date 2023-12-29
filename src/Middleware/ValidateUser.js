const { verifyToken } = require("../utils/jsonWebToken");

async function ValidateUser(request, response, next) {
    //pegar o token
    const authHeader = request.headers.authorization;
    if(!authHeader) {
        return response.status(400).json({
            error: true,
            message: "Necessário realizar login apara acessar a página!"
        })
    }

    const [_bearer, token] = authHeader.split(" ");

    if(!token) {
        response.status(400).json({
            error: true,
            message: "Necessário realizar login apara acessar a página!"
        });
    }
    
    try {
        const decode = await verifyToken(token);
        request.userId = decode.id;
        return next();
    } catch (error) {
        return response.status(400).json({
            error: true,
            message: "Necessário realizar login apara acessar a página!"
        });
    }
}

module.exports = ValidateUser;