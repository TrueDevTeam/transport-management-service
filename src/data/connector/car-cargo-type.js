const Sequelize = require('sequelize');

const sequelizeInstance = require('./sequalize');
const Car = require('./car');
const CargoType = require('./cargo-type');


const CarCargoType = sequelizeInstance.define('car_cargo_type', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

CarCargoType.belongsTo(Car, {
  foreignKey: {
    name: 'carId',
    allowNull: false
  }
});

CarCargoType.belongsTo(CargoType, {
  foreignKey: {
    name: 'cargoTypeId',
    allowNull: false
  }
});

module.exports = CarCargoType;
