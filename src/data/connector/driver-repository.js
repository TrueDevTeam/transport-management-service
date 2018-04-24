const Driver = require('./driver');
const Company = require('./company');

class DriverRepository {
  async getAll (companyId) {
    return Driver.findAll({
      where: { companyId: companyId }
    });
  }

  async insert (driver, companyId) {
    const company = await Company.findById(companyId);
    if (!company.dataValues) {
      return Promise.reject();
    }
    driver.companyId = company.dataValues.id;
    const insertedDriver = await Driver.create(driver);
    return Promise.resolve(insertedDriver.dataValues);
  }
}

module.exports = DriverRepository;
