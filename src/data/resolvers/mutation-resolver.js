const logger = require('../../utils/logger');
const Raven = require('../../utils/sentry-client');

const Client = require('../connector/sender/client');

const Mutation = {
  async insertClient (root, { client }, context) {
    try {
      //todo add authorization
      client.companySenderId = 1; //todo take from token
      const insertedClient = await Client.create(client);
      return Promise.resolve(insertedClient.dataValues);
    } catch (error) {
      Raven.captureException(error);
      logger.error(error);
    }
  }
}

module.exports = Mutation;