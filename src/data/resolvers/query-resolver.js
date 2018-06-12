const logger = require('../../utils/logger');
const Raven = require('../../utils/sentry-client');

const ClientRepository = require('../connector/sender/client-repository');
const WarehouseRepository = require('../connector/sender/warehouse-repository');
const CarRepository = require('../connector/car-repository');
const DriverRepository = require('../connector/driver-repository');

const clientRepository = new ClientRepository();
const warehouseRepository = new WarehouseRepository();
const carRepository = new CarRepository();
const driverRepository = new DriverRepository();

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
  },
  allDrivers (root, args, context) {
    const companyId = context.tokenPayload.companyId;
    try {
      return driverRepository.getAll(companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  },
  allSendersWarehouses (root, args, context) {
    const companyId = context.tokenPayload.companyId;
    try {
      return warehouseRepository.getAllSendersWarehouses(companyId);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  }
}

module.exports = Query;
