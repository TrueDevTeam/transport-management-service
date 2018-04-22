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

CompanySender.findCompanyInfo = async function(companySenderId) {
  const queryResult = await CompanySender.findOne({
    where: {id: companySenderId},
    include: [
      {
        model: Company
      }
    ]
  });
  if (!queryResult.dataValues) {
    return Promise.reject();
  }
  const companyInfo = {
    id: queryResult.id,
    name: queryResult.company.name,
    companyId: queryResult.company.id,
  }
  return Promise.resolve(companyInfo);
};

module.exports = CompanySender;
