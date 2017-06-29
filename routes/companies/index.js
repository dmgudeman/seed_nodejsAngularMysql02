
const companies = require('express').Router();
const getAllCompanies = require('./getAllCompanies');
const createCompany = require('./createCompany');
const getCompanyById = require('./getCompanyById');
const updateCompany = require('./updateCompany');
// const updateCompany = require('./updateCompany');

companies.post('/', createCompany)
companies.get('/:companyId', getCompanyById)
companies.get('/', getAllCompanies);
companies.put('/:companyId', updateCompany);
// companies.put('/:companyId', updateCompany)

module.exports = companies
