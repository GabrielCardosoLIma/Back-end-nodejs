const express = require('express');
const app = express();
require('dotenv').config()
// const Categories = require('./models/categories');
// const Products = require('./models/products');

const router = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (request, response) {
    response.send('Serviço API Rest iniciada...');
})


app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT} http://localhost:${process.env.PORT}`);
});