const logger = require('../../utils/logger');
const Raven = require('../../utils/sentry-client');

const ClientRepository = require('../connector/sender/client-repository');

const clientRepository = new ClientRepository();

const Mutation = {
  async insertClient (root, { client }, context) {
    try {
      const companyId = context.tokenPayload.companyId;
      return clientRepository.insertClient(client, companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  }
}

module.exports = Mutation;