// todo replace companySender: Int! on CompanySender
const Client = `
type Client {
  id: ID!
  name: String!
  number: String!
  email: String!
  companySender: Int!
}
`;

module.exports = Client;
