const Warehouse = require('./warehouse');
const CompanySender = require('./company-sender');
const CompanySenderRepository = require('./company-sender-repository');
const Company = require('../company');
const errorMessages = require('../../../constants/error-messages');

const companySenderRepository = new CompanySenderRepository();

//todo refactor to sender`s warehouse repo
class WarehouseRepository {
  async _getWarehouse (warehouseId) {
    return Warehouse.findOne({
      where: {id: warehouseId},
      include: [
        {
          model: CompanySender,
          include: {model: Company}
        },
      ]
    });
  }

  async insert (warehouse, companyId) {
    const companySender = await companySenderRepository.get(companyId);
    warehouse.companySender = companySender.id;
    const insertedWarehouse = await Warehouse.create(warehouse);
    return Promise.resolve(insertedWarehouse.dataValues);
  }

  async getAll (companyId) {
    const companySender = await CompanySender.findOne({
      where: { parentId: companyId }
    });
    return Warehouse.findAll({
      where: { companySender: companySender.id }
    });
  }

  async delete (warehouseId, companyId) {
    try {
      companySenderRepository.get(companyId);
    } catch (error) {
      return Promise.reject(new Error({
        msg: errorMessages.NO_ACCESS
      }));
    }
    try {
      const warehouse = await this._getWarehouse(warehouseId);
      if (!warehouse || !warehouse.dataValues) {
        return Promise.reject(new Error(
          errorMessages.NOT_FOUND
        ));
      }
      await warehouse.destroy();
      return Promise.resolve(warehouse.dataValues);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = WarehouseRepository;