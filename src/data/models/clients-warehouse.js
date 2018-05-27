const ClientsWarehouse = `
type ClientsWarehouse {
  id: Int!
  latitude: Float!
  longitude: Float!
  address: String!
  title: String!
  area: Float!
  gatesAmount: Int!
  client: Client!
}
`;

module.exports = ClientsWarehouse;
