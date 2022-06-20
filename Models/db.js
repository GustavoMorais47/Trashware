const Sequelize = require('sequelize')

const sequelize = new Sequelize('trashware','root','041201',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(function(){
    console.log('Conexão com banco de dados realizada com sucesso');
}).catch(function(){
    console.log('Erro: Não foi possível estabelecer conexão com o banco de dados!')
})

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Users;');
    return rows;
}

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    selectCustomers
}