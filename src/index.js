const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createServer } = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { execute, subscribe } = require('graphql');
const { graphqlExpress } = require('apollo-server-express');

const schema = require('./data/schema');
const logger = require('./utils/logger');
const encodingUtil = require('./utils/encoding-util');
const tokenAccessMiddleware = require('./middleware/token-access');
const sequelizeInstance = require('./data/connector/sequalize');
const { NOT_FOUND } = require('./constants/constants');
const { NO_ACCESS, MISSING_TOKEN } = require('./constants/error-messages');

sequelizeInstance.sync();
const graphqlPort = config.port;
const subscriptionPort = config.subscriptionPort;

const graphQLService = express();

graphQLService.use(cors());

graphQLService.use('/graphql', tokenAccessMiddleware);

graphQLService.use('/graphql', bodyParser.json(), graphqlExpress((req) =>
  ({
    schema,
    context: { tokenPayload: req.tokenPayload }
  })
));

graphQLService.listen(graphqlPort, () =>
  logger.info(`Service is now running on http://localhost:${graphqlPort}/graphql`)
);

const websocketServer = createServer((request, response) => {
  response.writeHead(NOT_FOUND);
  response.end();
});

websocketServer.listen(subscriptionPort, () =>
logger.info(`Websocket Server is now running on http://localhost:${subscriptionPort}`)
);

const subscriptionServer = SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe
  },
  {
    server: websocketServer,
    path: '/graphql'
  }
);

subscriptionServer.onConnect = async (connectionParams, webSocket) => {
  if (connectionParams.authToken) {
    try {
      return await encodingUtil.verifyToken(connectionParams.authToken);
    } catch (error) {
      throw new Error(NO_ACCESS);
    }
  }
  throw new Error(MISSING_TOKEN);
};
subscriptionServer.onDisconnect = () => logger.info('Client is disconnected');
