const Mutation = require('./mutation');
const InsertionClientInput = require('./insertion-client-input');
const InsertionCarInput = require('./insertion-car-input');
const InsertionDriverInput = require('./insertion-driver-input');
const InsertionSendersWarehouseInput = require('./insertion-senders-warehouse-input');

module.exports = [
  Mutation,
  InsertionClientInput,
  InsertionSendersWarehouseInput,
  InsertionCarInput,
  InsertionDriverInput
];
