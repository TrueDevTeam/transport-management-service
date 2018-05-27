const Sequelize = require('sequelize');

const sequelizeInstance = require('../sequalize');
const CompanySender = require('./company-sender');
const Client = require('./client');

const Warehouse = sequelizeInstance.define('warehouse', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: { min: -90, max: 90 }
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: { min: -180, max: 180 }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  area: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  gatesAmount: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Warehouse.belongsTo(CompanySender, {
  foreignKey: {
    name: 'companySender',
    allowNull: true
  }
});

Warehouse.belongsTo(Client, {
  foreignKey: {
    name: 'clientId',
    allowNull: true
  }
});

module.exports = Warehouse;
