
const items = require('express').Router();
const createItem = require('./createItem');
const getItemsByCoId = require('./getItemsByCoId');
const updateItem = require('./updateItem');

items.post('/', createItem);
items.get('/:coId', getItemsByCoId)
items.put('/:itemId', updateItem);


module.exports = items;

