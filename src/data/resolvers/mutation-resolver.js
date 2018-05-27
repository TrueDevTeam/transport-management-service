const logger = require('../../utils/logger');
const Raven = require('../../utils/sentry-client');

const ClientRepository = require('../connector/sender/client-repository');
const CarRepository = require('../connector/car-repository');
const DriverRepository = require('../connector/driver-repository');
const SendersWarehouseRepository = require('../connector/sender/warehouse-repository');

const clientRepository = new ClientRepository();
const carRepository = new CarRepository();
const driverRepository = new DriverRepository();
const sendersWarehouseRepository = new SendersWarehouseRepository();

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
  },
  async insertDriver (root, { driver }, context) {
    try {
      const companyId = context.tokenPayload.companyId;
      return driverRepository.insert(driver, companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  },
  async insertSendersWarehouse (root, { warehouse }, context) {
    try {
      const companyId = context.tokenPayload.companyId;
      return sendersWarehouseRepository.insertSendersWarehouse(warehouse, companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  },
  async insertClientsWarehouse (root, { warehouse }, context) {
    try {
      const companyId = context.tokenPayload.companyId;
      const clientId = warehouse.client;
      if (!clientId) {
        throw new Error('Client`s id should be provided')
      }
      return sendersWarehouseRepository.insertClientsWarehouse(warehouse, companyId, clientId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  },
  async deleteDriver (root, { id }, context) {
    try {
      const companyId = context.tokenPayload.companyId;
      return driverRepository.delete(id, companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  },
  async deleteCar (root, { id }, context) {
    try {
      const companyId = context.tokenPayload.companyId;
      return carRepository.delete(id, companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  },
  async deleteClient (root, { id }, context) {
    try {
      const companyId = context.tokenPayload.companyId;
      return clientRepository.delete(id, companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  }
}

module.exports = Mutation;