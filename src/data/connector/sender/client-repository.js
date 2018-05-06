const Client = require('./client');
const CompanySender = require('./company-sender');
const CompanySenderRepository = require('./company-sender-repository');
const Company = require('../company');
const errorMessages = require('../../../constants/error-messages');

const companySenderRepository = new CompanySenderRepository();

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

  async insert (client, companyId) {
    const companySender = await companySenderRepository.get(companyId);
    client.companySender = companySender.id;
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

  async getAll (companyId) {
    const companySender = await CompanySender.findOne({
      where: { parentId: companyId }
    });
    return Client.findAll({
      where: { companySender: companySender.id }
    });
  }

  async delete (clientId, companyId) {
    try {
      companySenderRepository.get(companyId);
    } catch (error) {
      return Promise.reject(new Error({
        msg: errorMessages.NO_ACCESS
      }));
    }
    try {
      const client = await this._getClient(clientId);
      if (!client || !client.dataValues) {
        return Promise.reject(new Error(
          errorMessages.NOT_FOUND
        ));
      }
      await client.destroy();
      return Promise.resolve(client.dataValues);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = ClientRepository;
