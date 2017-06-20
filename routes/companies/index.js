
const companies = require('express').Router();
const all = require('./all');
const getCompaniesByCoId = require()

companies.get('/:coId', getCompaniesByCoId)
companies.get('/', all);

module.exports = companies