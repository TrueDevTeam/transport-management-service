const Sequelize = require('sequelize');

const sequelizeInstance = require('../sequalize');

const Client = sequelizeInstance.define('client', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  number: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  companySenderId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Client;
