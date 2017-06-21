
const address = require('express').Router();
const createAddress = require('./create-address');
const updateAddress = require('./update-address');
const getAddressByCoId = require('./get-address-by-coid');

address.post('/', createAddress)
address.get('/:coId', getAddressByCoId)
address.put('/', updateAddress);

module.exports = address