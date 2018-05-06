const Driver = require('./driver');
const CompanyRepository = require('./company-repository');
const errorMessages = require('../../constants/error-messages');

const companyRepository = new CompanyRepository();

class DriverRepository {
  async getAll (companyId) {
    return Driver.findAll({
      where: { companyId: companyId }
    });
  }

  async insert (driver, companyId) {
    try {
      const company = await companyRepository.get(companyId);
      driver.companyId = company.id;
      const insertedDriver = await Driver.create(driver);
      return Promise.resolve(insertedDriver.dataValues);
    } catch (error) {
      return Promise.reject(error);
    }

  }

  async delete (driverId, companyId) {
    try {
      companyRepository.get(companyId);
    } catch (error) {
      return Promise.reject(new Error({
        msg: errorMessages.NO_ACCESS
      }));
    }
    try {
      const driver = await Driver.findById(driverId);
      if (!driver || !driver.dataValues) {
        return Promise.reject(new Error(
          errorMessages.NOT_FOUND
        ));
      }
      await driver.destroy();
      return Promise.resolve(driver.dataValues);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = DriverRepository;
