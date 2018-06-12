const CompanySender = require('../connector/sender/company-sender');
const ClientRepository = require('../connector/sender/client-repository');

const clientRepository = new ClientRepository();

const ModelsResolver = {
  Client: {
    async companySender (client) {
      return CompanySender.findCompanyInfo(client.companySender);
    }
  },
  SendersWarehouse: {
    async companySender (client) {
      return CompanySender.findCompanyInfo(client.companySender);
    }
  },
  ClientsWarehouse: {
    async client (client) {
      return clientRepository._getClient(client.id);
    }
  }
}

module.exports = ModelsResolver;
