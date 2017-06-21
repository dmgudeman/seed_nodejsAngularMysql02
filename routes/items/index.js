
const items = require('express').Router();
const createItem = require('./create-item');
const getItemById = require('./get-item-by-id');
const updateItem = require('./update-item');

items.post('/', createItem);
items.get('/:id', getItemById)
items.put('/:id', updateItem);

module.exports = items;