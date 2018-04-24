const logger = require('../../utils/logger');
const Raven = require('../../utils/sentry-client');

const ClientRepository = require('../connector/sender/client-repository');
const CarRepository = require('../connector/car-repository');

const clientRepository = new ClientRepository();
const carRepository = new CarRepository();

const Query = {
  client (root, { id }, context) {
    const companyId = context.tokenPayload.companyId;
    try {
      return clientRepository.getOne(id, companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  },
  allClients (root, args, context) {
    const companyId = context.tokenPayload.companyId;
    try {
      return clientRepository.getAll(companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  },
  allCars (root, args, context) {
    const companyId = context.tokenPayload.companyId;
    try {
      return carRepository.getAll(companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  }
}

module.exports = Query;
