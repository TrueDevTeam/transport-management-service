const CompanySender = require('./company-sender');
const errorMessages = require('../../../constants/error-messages');

class CompanySenderRepository {
  async get (companyId) {
    const companySender = await CompanySender.findById(companyId);
    if (!companySender.dataValues) {
      return Promise.reject(errorMessages.NOT_FOUND);
    }
    return Promise.resolve(companySender.dataValues);
  }
}

module.exports = CompanySenderRepository;
