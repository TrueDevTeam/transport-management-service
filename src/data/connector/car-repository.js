const Car = require('./car');
const CompanyRepository = require('./company-repository');
const errorMessages = require('../../constants/error-messages');

const companyRepository = new CompanyRepository();

class CarRepository {
  async getAll (companyId) {
    return Car.findAll({
      where: { companyId: companyId }
    });
  }

  async insert (car, companyId) {
    const company = await companyRepository.get(companyId);
    car.companyId = company.id;
    const insertedCar = await Car.create(car);
    return Promise.resolve(insertedCar.dataValues);
  }

  async delete (carId, companyId) {
    try {
      companyRepository.get(companyId);
    } catch (error) {
      return Promise.reject(new Error({
        msg: errorMessages.NO_ACCESS
      }));
    }
    try {
      const car = await Car.findById(carId);
      if (!car || !car.dataValues) {
        return Promise.reject(new Error(
          errorMessages.NOT_FOUND
        ));
      }
      await car.destroy();
      return Promise.resolve(car.dataValues);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = CarRepository;
