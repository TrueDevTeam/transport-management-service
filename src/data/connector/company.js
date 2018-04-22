const Sequelize = require('sequelize');

const constants = require('../../constants/constants');
const sequelizeInstance = require('./sequalize');

const { companyTypes } = constants;

const Company = sequelizeInstance.define('company', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    isIn: [companyTypes.COMPANY_SENDER, companyTypes.COMPANY_CARRIER]
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Company;
