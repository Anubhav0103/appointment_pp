const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
