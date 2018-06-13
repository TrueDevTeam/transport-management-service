const Query = require('./query');
const Client = require('./client');
const SendersWarehouse = require('./senders-warehouse');
const ClientsWarehouse = require('./clients-warehouse');
const CompanySender = require('./company-sender');
const Car = require('./car');
const CargoType = require('./cargo-type');
const Driver = require('./driver');

module.exports = [
  Query,
  Client,
  SendersWarehouse,
  ClientsWarehouse,
  CompanySender,
  Car,
  CargoType,
  Driver
];