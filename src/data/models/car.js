// todo add link to Company
const Car = `
type Car {
  id: ID!
  brand: String!
  model: String!
  cargoTypes: [CargoType]!
  carryingCapacity: Float!
  fuelConsumption: Float!
  stateNumber: String!
}
`;

module.exports = Car;
