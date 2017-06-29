
const addresses = require('express').Router();

const createAddress = require('./createAddress');
// const getAllAddresses = require('./getAllAddresses');
// const getAddressById = require('./getAddressById');
const updateAddress = require('./updateAddress');

addresses.post('/', createAddress)
// addresses.get('/:addressId', getAddressById)
// addresses.get('/', getAllAddresses);
addresses.put('/:addressId', updateAddress);

module.exports = addresses
