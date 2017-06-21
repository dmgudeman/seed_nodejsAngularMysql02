
const companies = require('express').Router();
const getCompaniesByUserId = require('./getCompaniesByUserId');
const getCompaniesByCoId = require('./getCompaniesByCoId')

companies.get('/companies/:coId', getCompaniesByCoId)
companies.get('/companies', getCompaniesByUserId);

module.exports = companies