const Client = `
type Client {
  id: ID!
  name: String!
  number: String!
  email: String!
  companySender: CompanySender!
  warehouses: [ClientsWarehouse]!
}
`;

module.exports = Client;
