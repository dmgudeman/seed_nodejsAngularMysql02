
const items = require('express').Router();
const createItem = require('./createItem');
const getItemById = require('./getItemById');
const getItemsByCoId = require('./getItemsByCoId');
const updateItem = require('./updateItem');

items.post('/', createItem);
items.get('/:id', getItemsByCoId)
items.put('/:id', updateItem);

module.exports = items;