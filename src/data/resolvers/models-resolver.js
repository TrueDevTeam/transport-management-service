const CompanySender = require('../connector/sender/company-sender');
const ClientRepository = require('../connector/sender/client-repository');
const WarehouseRepository = require('../connector/sender/warehouse-repository');
const CarRepository = require('../connector/car-repository');

const clientRepository = new ClientRepository();
const warehouseRepository = new WarehouseRepository();
const carRepository = new CarRepository();

const ModelsResolver = {
  Client: {
    async companySender (client) {
      return CompanySender.findCompanyInfo(client.companySender);
    },
    async  warehouses (client) {
      return warehouseRepository.getAllClientsWarehouses(client.id);
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
  },
  Car: {
    async cargoTypes (car) {
      return carRepository.getCargoTypes(car.id);
    }
  }
}

module.exports = ModelsResolver;
