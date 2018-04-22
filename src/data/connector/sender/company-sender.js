const Sequelize = require('sequelize');

const sequelizeInstance = require('../sequalize');
const Company = require('../company');

const CompanySender = sequelizeInstance.define('company_sender', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

CompanySender.belongsTo(Company, {foreignKey: 'parentId'});

module.exports = CompanySender;
