/**
 * Created by davidgudeman on 3/15/17.
 * @swagger
 * /invoices/{invoiceId}:
 *   get:
 *     description: retrieves a single company
 *     summary: retrieves a single company
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: invoiceId
 *         in: path
 *         required: true
 *         description: invoice id
 *         type: integer
 *         defaultValue: 1
 *     produces:
 *       - application/json
 *     tags:
 *       - Invoice
 */

'use strict';

const Invoice = require('../../models/').Invoice;
const Item = require('../../models/').Item;
const Company = require('../../models/').Company;

module.exports = (req, res) => {
  const id = req.params.invoiceId;
  Invoice.findOne({
    where: {
      id,
    },
    include: [
      Company,
      Item,
    ],
  }).then((invoice) => {
    res.json({
      invoice,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
