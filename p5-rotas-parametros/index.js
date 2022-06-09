const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

const contatos = ["André", "Wily", "Theo", "Richard"];

app.get('/', (req, res) => {
    res.send("App iniciado !!!");
})

app.get('/contato', (req, res) => {
    return res.json(contatos);
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    const {sit, vacinado} = req.query;

    return res.json({
        id,
        name: "Theo",
        email: "Theo@gmail.com",
        sit,
        vacinado
    });
})

app.post('/contato', (req, res) => {
    const {nome} = req.body;
    contatos.push(nome);
    return res.json(contatos);
})

app.delete("/users/:id", (req, res) => {
    contatos.pop();
    return res.json(contatos);
})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
});