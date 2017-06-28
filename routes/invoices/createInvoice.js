'use strict';

const db = require('../../models/');
const Invoice = require('../../models/').Invoice;

module.exports = (req, res) => {
  const invoice = req.body.invoice;
  console.log(`ROUTES CREATE-INVOICE invoice= ${JSON.stringify(invoice)}` );
  let createdInvoice;
  db.sequelize.transaction((t) => {
    return Invoice.create(invoice, {
      transaction: t,
    }).then((newInvoice) => {
      createdInvoice = newInvoice;
      return createdInvoice.setItems(invoice.Items, {
        transaction: t,
      });
    });
  }).then(() => {
    res.json({
      createdInvoice,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
