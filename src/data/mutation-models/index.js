const Mutation = require('./mutation');
const InsertionClientInput = require('./insertion-client-input');
const InsertionCarInput = require('./insertion-car-input');
const InsertionDriverInput = require('./insertion-driver-input');
const InsertionWarehouseInput = require('./insertion-warehouse-input');

module.exports = [
  Mutation,
  InsertionClientInput,
  InsertionWarehouseInput,
  InsertionCarInput,
  InsertionDriverInput
];
