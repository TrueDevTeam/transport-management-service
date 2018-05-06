const Driver = require('./driver');
const Company = require('./company');

const errorMessages = require('../../constants/error-messages');

class DriverRepository {
  /**
   *
   * @param companyId - id of company drivers is bound to
   * @return: resolves {Promise.<company object>} - if such company exists
   * @return: rejects {Promise.<error>} - if there is no such company
   * @private
   */
  async _getCompany (companyId) {
    const company = await Company.findById(companyId);
    if (!company.dataValues) {
      return Promise.reject();
    }
    return Promise.resolve(company.dataValues);
  }

  async getAll (companyId) {
    return Driver.findAll({
      where: { companyId: companyId }
    });
  }

  async insert (driver, companyId) {
    try {
      const company = await this._getCompany(companyId);
      driver.companyId = company.id;
      const insertedDriver = await Driver.create(driver);
      return Promise.resolve(insertedDriver.dataValues);
    } catch (error) {
      return Promise.reject(error);
    }

  }

  async delete (driverId, companyId) {
    try {
      this._getCompany(companyId);
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
