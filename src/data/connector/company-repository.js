const Company = require('./company');
const errorMessages = require('../../constants/error-messages');

class CompanyRepository {
  /**
   *
   * @param companyId - id of company drivers is bound to
   * @return: resolves {Promise.<company object>} - if such company exists
   * @return: rejects {Promise.<error>} - if there is no such company
   * @private
   */
  async get (companyId) {
    const company = await Company.findById(companyId);
    if (!company.dataValues) {
      return Promise.reject(errorMessages.NOT_FOUND);
    }
    return Promise.resolve(company.dataValues);
  }
}

module.exports = CompanyRepository;
