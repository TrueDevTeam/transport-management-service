const Sequelize = require('sequelize');

const sequelizeInstance = require('./sequalize');
const Company = require('./company');

const Car = sequelizeInstance.define('car', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cargoType: { // todo make separate table many-many (1 car can have multiple cargo types)
    type: Sequelize.STRING,
    allowNull: false
  },
  carryingCapacity: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  fuelConsumption: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  stateNumber: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Car.belongsTo(Company, {foreignKey: 'companyId'});

module.exports = Car;
