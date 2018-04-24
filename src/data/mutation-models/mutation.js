const Mutation = `
type Mutation {
  insertClient(client: InsertionClientInput): Client
  insertCar(car: InsertionCarInput): Car
  insertDriver(car: InsertionCarInput): Driver
}
`;

module.exports = Mutation;
