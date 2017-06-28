
const items = require('express').Router();
const createItem = require('./createItem');
const getItemById = require('./getItemById');
const updateItem = require('./updateItem');

items.post('/', createItem);
items.get('/:itemId', getItemById)
items.put('/:itemId', updateItem);

module.exports = items;

