const Query = `
type Query {
  client(id: Int): Client
  allClients: [Client]
  allCars: [Car]
  allDrivers: [Driver]
}
`;

module.exports = Query;
