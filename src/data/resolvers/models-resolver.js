const CompanySender = require('../connector/sender/company-sender');

const ModelsResolver = {
  Client: {
    async companySender (client) {
      return CompanySender.findCompanyInfo(client.companySender);
    }
  }
}

module.exports = ModelsResolver;
