const ModelResolvers = require('./models-resolver');
const Mutation = require('./mutation-resolver');
const Query = require('./query-resolver');

module.exports = {
  ...ModelResolvers,
  Mutation,
  Query
};
