const Sequelize = require('sequelize');

const sequelizeInstance = require('./sequalize');
const Company = require('./company');

const Driver = sequelizeInstance.define('driver', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: false
  },
  taxpayerId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  region: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Driver.belongsTo(Company, {foreignKey: 'companyId'});

module.exports = Driver;
