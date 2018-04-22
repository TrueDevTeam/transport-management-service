const Query = `
type Query {
  client(id: Int): Client
  getClients: [Client]
}
`;

module.exports = Query;
