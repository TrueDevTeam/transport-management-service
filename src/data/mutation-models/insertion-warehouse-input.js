/**
 * This model is used for insertion of client's or sender's warehouses.
 * If warehouse belongs to client - 'client' field is necessary
 */
const InsertionWarehouseInput = `
input InsertionWarehouseInput {
  latitude: Float!
  longitude: Float!
  address: String!
  title: String!
  area: Float!
  gatesAmount: Int!
  client: Int
}
`;

module.exports = InsertionWarehouseInput;
