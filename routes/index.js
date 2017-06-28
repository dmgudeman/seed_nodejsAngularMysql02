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
// const addresses = require('./addresses');
const companies = require('./companies');
const items = require('./items');
const invoices = require('./invoices');
const users = require('./users');

// routes.use('/addresses', addresses);
routes.use('/companies', companies);
routes.use('/invoices', invoices)
routes.use('/items', items)
routes.use('/users', users);
routes.use('/', users);
// routes.get('/', (req, res) => {
//     res.status(200).json({message: 'Connected!'})
// });

module.exports = routes;