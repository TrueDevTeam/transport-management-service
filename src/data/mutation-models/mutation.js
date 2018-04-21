const Mutation = `
type Mutation {
  insertClient(client: InsertionClientInput): Client
}
`;

module.exports = Mutation;
