const Mutation = `
type Mutation {
  insertClient(client: InsertionClientInput): Client
  insertCar(car: InsertionCarInput): Car
  insertDriver(driver: InsertionDriverInput): Driver
}
`;

module.exports = Mutation;
