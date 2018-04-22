const Sequelize = require('sequelize');

const sequelizeInstance = require('../sequalize');
const CompanySender = require('./company-sender');

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
  companySender: {
    type: Sequelize.INTEGER,
    required: true,
    references: {
      model: CompanySender,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
});

module.exports = Client;
