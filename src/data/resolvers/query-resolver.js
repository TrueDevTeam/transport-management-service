const logger = require('../../utils/logger');
const Raven = require('../../utils/sentry-client');

const ClientRepository = require('../connector/sender/client-repository');

const clientRepository = new ClientRepository();

const Query = {
  client (root, { id }, context) {
    const companyId = context.tokenPayload.companyId;
    try {
      return clientRepository.getOne(id, companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  }
}

module.exports = Query;
