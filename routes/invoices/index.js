
const invoice = require('express').Router();

const createInvoice = require('./createInvoice');
const createInvoicePdf = require('./createInvoicePdf');
const getInvoiceById = require('./getInvoiceById');
const getAllInvoices = require('./getAllInvoices');

invoice.post('/', createInvoice);
invoice.post('/', createInvoicePdf);
invoice.get('/:id', getInvoiceById)
invoice.get('/', getAllInvoices)

module.exports = invoice;
