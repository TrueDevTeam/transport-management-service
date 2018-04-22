const Mutation = `
type Mutation {
  insertClient(client: InsertionClientInput): Client
  insertCar(car: InsertionCarInput): Car
}
`;

module.exports = Mutation;
