const app = require("./app");
require("dotenv").config();

const PORT = parseInt(process.env.PORT, 10) || 3000;

app.listen(PORT, () => {
    console.log(`
        Servidor rodando na porta ${PORT}
        
           http://localhost:${PORT}/api

              Ctrl + C para encerrar
    `);
});
