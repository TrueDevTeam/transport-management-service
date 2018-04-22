const Client = require('./client');
const CompanySender = require('./company-sender');

class ClientRepository {
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
    const client = await Client.findOne({where: {id: clientId}, include: [{model: CompanySender}]});
    const companySender = await CompanySender.findOne({where: { parentId: companyId }});
    if (client.dataValues.companySender !== companySender.dataValues.id) {
      return Promise.reject();
    }
    return Promise.resolve(client.dataValues);
  }
}

module.exports = ClientRepository;
