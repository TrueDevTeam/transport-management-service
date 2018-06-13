const Sequelize = require('sequelize');

const sequelizeInstance = require('./sequalize');

const CargoType = sequelizeInstance.define('cargo_type', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = CargoType;
