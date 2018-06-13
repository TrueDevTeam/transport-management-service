const Query = `
type Query {
  client(id: Int): Client
  allClients: [Client]
  allCars: [Car]
  allDrivers: [Driver]
  allSendersWarehouses: [SendersWarehouse]
  allCargoTypes: [CargoType]
}
`;

module.exports = Query;
