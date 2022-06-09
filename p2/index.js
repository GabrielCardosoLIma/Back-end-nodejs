const http = require('http');
const port = 3000;

const server = http.createServer( (req, res) => {
    res.end("Página inicial do node.js");
});

server.listen(port, () =>{
    console.log(`Servidor iniciado na porta ${port}: http://localhost:${port}`);
});