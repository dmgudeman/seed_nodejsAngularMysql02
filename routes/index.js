// const index = {};

// index.createAddress = require('./address/createAddress');
// index.getAddressByCoId = require('./address/getAddressByCoId');
// index.updateAddress = require('./address/updateAddress');
// // index.getAllCompanies = require('./company/getAllCompanies');
// index.getCompaniesByUserId = require('./company/getCompaniesByUserId');
// index.getCompanyById = require('./company/getCompanyById');
// index.createCompany = require('./company/createCompany');
// index.updateCompany = require('./company/updateCompany');
// index.createItem = require('./item/createItem');
// index.updateItem = require('./item/updateItem');
// index.getItemById = require('./item/getItemById');
// index.createInvoice = require('./invoice/createInvoice');
// index.getAllInvoices = require('./invoice/getAllInvoices');
// index.getInvoiceById = require('./invoice/getInvoiceById');
// index.createInvoicePdf = require('./invoice/createInvoicePdf');
// // index.getAllUsers = require('./user/getAllUsers');
// index.register = require('./user/register');
// index.login = require('./user/login');
// // index.logout = require('./user/logout');

// module.exports = index;

const routes = require('express').Router();
const companies = require('./companies');
const user = require('./user');
routes.use('/user', user);
routes.use('/companies', companies);
routes.use('/', user);
// routes.get('/', (req, res) => {
//     res.status(200).json({message: 'Connected!'})
// });

module.exports = routes;