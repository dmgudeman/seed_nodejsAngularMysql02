
const companies = require('express').Router();
const getCompaniesByUserId = require('./getCompaniesByUserId');
const getCompaniesByCoId = require('./getCompaniesByCoId');
const createCompany = require('./createCompany');

companies.post('/', createCompany)
companies.get('/:coId', getCompaniesByCoId)
companies.get('/', getCompaniesByUserId);

module.exports = companies