const invoice = require('express').Router();
const bodyParser = require('body-parser');


const createInvoice = require('./createInvoice');
const getAllInvoices = require('./getAllInvoices');
const createInvoicePdf = require('./createInvoicePdf');
const getInvoiceById = require('./getInvoiceById');

invoice.post('/', createInvoice);
invoice.get('/', getAllInvoices)
invoice.get('/:invoiceId', getInvoiceById)
invoice.post('/pdf', bodyParser.text(), createInvoicePdf)

module.exports = invoice;


// app.post('/invoices/pdf', bodyParser.text(), routes.createInvoicePdf);



