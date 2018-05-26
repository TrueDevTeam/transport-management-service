const SendersWarehouse = `
type SendersWarehouse {
  id: Int!
  latitude: Float!
  longitude: Float!
  address: String!
  title: String!
  area: Float!
  gatesAmount: Int!
  companySender: CompanySender!
}
`;

module.exports = SendersWarehouse;
