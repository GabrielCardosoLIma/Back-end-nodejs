const express = require('express');
const app = express();
const port = 4600;
const User = require('./models/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (request, response) {
    response.send('Serviço API Rest iniciada...');
})

app.get('/users', async (req, res) => {
    await User.findAll({
        atributes: ['id', 'name', 'email', 'gender'],
        order: [['name', 'ASC']]
    })
    .then((users) => {
        return res.json({
            erro: false,
            users
    });
    }).catch((err) => {
        return res.status(404).json({
            erro: true,
            mensagem: `Erro: ${err} ou Nenhum usuário encontrado!!!`
        })
    })
})

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try{
        // await User.findAll({ where: { id: id }})
        const users = await User.findByPk(id);
        if(!users){
            return res.status(400).json({
                erro: true,
                mensagem: 'Erro usuário não encontrado!'
            })
        }
        res.status(200).json({
            erro: false,
            users
        })
    }catch(err) {
        res.status(404).json({
            erro: true,
            mensgem: `Erro: ${err}`
        })
    }
})

app.post('/user', async (req, res) => {
    // const {name, email, gender, password} = req.body;
    await User.create(req.body)
    .then(() =>{
        return res.json({
            erro: false,
            mensgem: 'Usuário cadastrado com sucesso!'
        });
    }).catch(err => {
        return res.status(400).json({
            erro: true,
            mensgem: `Erro: Usuário não cadastrado...${err}`
        })
    })
})

app.put("/user", async (req, res) => {
    const { id } = req.body;
    await User.update(req.body, {where: {id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: 'Usuário alterado com sucesso!'
        })
    }).catch((err) =>{
        return res.status(400).json({
            erro: true,
            mensagem: `Erro: Usuário não alterado ...${err}`
        })
    })
})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port} http://localhost:${port}`);
});