
const invoice = require('express').Router();

const createInvoice = require('./createInvoice');
const getAllInvoices = require('./getAllInvoices');
const createInvoicePdf = require('./createInvoicePdf');
const getInvoiceById = require('./getInvoiceById');

invoice.post('/', createInvoice);
invoice.get('/', getAllInvoices)
invoice.get('/:invoiceId', getInvoiceById)

module.exports = invoice;


// app.post('/invoices/pdf', bodyParser.text(), routes.createInvoicePdf);



