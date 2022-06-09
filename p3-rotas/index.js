const express = require('express');

const app = express();
const port = 4500;

app.get('/', function(req, res) {
    res.send("Página inicial do Serviço");
})

app.get('/Sobre-empresa', (req, res) => {
    res.send("Pagina sobre empresa do App");
})

app.get('/Contato', (req, res) => {
    res.send("Pagina Contato do App!!!");
})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}: http://localhost:${port}`);
})