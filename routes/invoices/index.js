
const invoice = require('express').Router();

const createInvoice = require('./create-invoice');
const createInvoicePdf = require('./create-invoice-pdf');
const getInvoiceById = require('./get-invoice-by-id');
const getAllInvoices = require('./get-all-invoices');

invoice.post('/', createInvoice);
invoice.post('/', createInvoicePdf);
invoice.get('/:id', getInvoiceById)
invoice.get('/', getAllInvoices)

module.exports = invoice;
