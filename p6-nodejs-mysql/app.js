const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'senac'
});

connection.connect( function (err) {
    console.log("Conexão com o Banco de Dados realizado com sucesso!!")
    console.log(`Conexâo ${connection.threadId}`);
    if (err) {
        console.log(`Erro: ${err}`);
    }
});

// connection.query('SELECT * FROM users', function (err, rows, fields){
//     if (!err) {
//         console.log("Resultado", rows);
//     }
//     else {
//         console.log(`Erro consulta ${err}`);
//     }
// });

//Cadastrar novo registro no banco de dados
connection.query("INSERT INTO users (name, email, gender) VALUES ('Fernando', 'email.teste@gmail.com', 'M')", (err, result) => {
    if(!err) {
        console.log("Usuário cadastrado com sucesso!");
    } else {
        console.log(`Erro cadastro do usuário: ${err}`);
    }
}
)