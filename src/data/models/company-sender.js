//companyId - id of parent entity
const CompanySender = `
type CompanySender {
  id: ID!
  name: String!
  companyId: Int!
}
`;

module.exports = CompanySender;
