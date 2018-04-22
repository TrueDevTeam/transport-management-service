const Car = require('./car');
const Company = require('./company');

class CarRepository {
  async insert (car, companyId) {
    const company = await Company.findById(companyId);
    if (!company.dataValues) {
      return Promise.reject();
    }
    car.companyId = company.dataValues.id;
    const insertedCar = await Car.create(car);
    return Promise.resolve(insertedCar.dataValues);
  }
}

module.exports = CarRepository;
