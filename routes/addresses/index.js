
const addresses = require('express').Router();

const createAddress = require('./createAddress');
// const getAllAddresses = require('./getAllAddresses');
// const getAddressById = require('./getAddressById');
// const updateAddress = require('./updateAddress');

addresses.post('/', createAddress)
// addresses.get('/:companyId', getAddressById)
// addresses.get('/', getAllAddresses);
// addresses.put('/:companyId', updateAddress);

module.exports = addresses
