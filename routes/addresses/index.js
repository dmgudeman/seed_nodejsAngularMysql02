
const address = require('express').Router();
const createAddress = require('./createAddress');
const updateAddress = require('./updateAddress');
const getAddressByCoId = require('./getAddressByCoid');

address.post('/', createAddress)
address.get('/:coId', getAddressByCoId)
address.put('/', updateAddress);

module.exports = address