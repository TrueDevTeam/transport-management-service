const Query = `
type Query {
  client(id: Int): Client
  allClients: [Client]
  allCars: [Car]
}
`;

module.exports = Query;
