const Client = require('./client');
const CompanySender = require('./company-sender');
const Company = require('../company');

class ClientRepository {
  async _getClient (clientId) {
    return Client.findOne({
      where: {id: clientId},
      include: [
        {
          model: CompanySender,
          include: {model: Company}
        },
      ]
    });
  }

  async insertClient (client, companyId) {
    const companySender = await CompanySender.findOne({where: { parentId: companyId }});
    if (!companySender) {
      return Promise.reject();
    }
    client.companySender = companySender.dataValues.id;
    const insertedClient = await Client.create(client);
    return Promise.resolve(insertedClient.dataValues);
  }

  async getOne (clientId, companyId) {
    const client = await this._getClient(clientId);
    if (client.company_sender.company.id !== companyId) {
      return Promise.reject();
    }
    return Promise.resolve(client.dataValues);
  }
}

module.exports = ClientRepository;
