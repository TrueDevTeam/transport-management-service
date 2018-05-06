const Mutation = `
type Mutation {
  insertClient(client: InsertionClientInput): Client
  insertCar(car: InsertionCarInput): Car
  insertDriver(driver: InsertionDriverInput): Driver
  deleteClient(id: Int): Client
  deleteCar(id: Int): Car
  deleteDriver(id: Int): Driver
}
`;

module.exports = Mutation;
