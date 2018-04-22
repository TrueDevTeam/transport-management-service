const logger = require('../../utils/logger');
const Raven = require('../../utils/sentry-client');

const ClientRepository = require('../connector/sender/client-repository');
const CarRepository = require('../connector/car-repository');

const clientRepository = new ClientRepository();
const carRepository = new CarRepository();

const Mutation = {
  async insertClient (root, { client }, context) {
    try {
      const companyId = context.tokenPayload.companyId;
      return clientRepository.insert(client, companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  },
  async insertCar (root, { car }, context) {
    try {
      const companyId = context.tokenPayload.companyId;
      return carRepository.insert(car, companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  }
}

module.exports = Mutation;