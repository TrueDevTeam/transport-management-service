const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const models = require('./models');
const mutationModels = require('./mutation-models');
const typeDefs = [...models, ...mutationModels];

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
