const Sequelize = require('sequelize');

const sequelize = new Sequelize('senac', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});


sequelize.authenticate().then( function() {
    console.log('Conexâo com banco de dados realizado com sucesso!');
}).catch( function(err){
    console.log(`Erro de Conexâo: ${err}` );
})

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.STRING(1),
        allowNull: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

//Criar tabbela com sequelize 

// User.sync(); !!

//Excluir a tabelae fazer novamente 

// User.sync({force: true});

//Verificar se há alguma diferença NA TABELA, REALIZA ALTERAÇÂO

// User.sync({alter: true});

//cADASTRAR REGISTRO NO BANCO DE DADOS

User.create({
    name:"Oliveira",
    email:"senacsp@gmail.com",
    gender:"M",
    password:"123"
})