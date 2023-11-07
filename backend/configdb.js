const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('pku', 'root', '', {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.PORT
})

module.exports = sequelize