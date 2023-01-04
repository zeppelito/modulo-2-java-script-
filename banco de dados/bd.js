const Sequelize = require('sequelize');

const sequelize = new Sequelize('admin', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});



sequelize.authenticate().then(function () {
    console.log("Conexão realizada com sucesso!")
}).catch(function (err) {
    console.log("Erro ao realizar a conexão: " + err);
});