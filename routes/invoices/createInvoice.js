/**
 * Created by davidgudeman on 3/3/17.
 * @swagger
 * /invoices:
 *   post:
 *     description: creates an invoice
 *     summary: creates an invoice
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         description: invoice object
 *         schema:
 *           type: object
 *           required:
 *             - invoice
 *           properties:
 *              invoice:
 *                type: object
 *           example:
 *             invoice:
 *               beginDate: '2017-02-01'
 *               endDate: '2017-03-11'
 *               description: blah blah
 *               amount: 250
 *               discount: 0.15
 *               companyId: 1
 *               Items:
 *                 - 1
 *                 - 2
 *                 - 3
 *     produces:
 *       - application/json
 *     tags:
 *       - Invoice
 */

'use strict';

const db = require('../../models/');
const Invoice = require('../../models/').Invoice;

module.exports = (req, res) => {
  const invoice = req.body.invoice;
  console.log(invoice);
  console.log(`CREATEINVOICE req.body= ${JSON.stringify(req.body)}`);
  let createdInvoice;
  db.sequelize.transaction((t) => {
    return Invoice.create(invoice, {
      logging: console.log,
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
