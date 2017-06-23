/**
 * Created by davidgudeman on 3/3/17.
 * @swagger
 * /invoices:
 *   get:
 *     description: retrieves all invoices
 *     summary: retrieves all invoices
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     tags:
 *       - Invoice
 *     response:
 *       200:
 *         description: array of invoices
 */

'use strict';

const Invoice = require('../../models/').Invoice;
const Item = require('../../models/').Item;

module.exports = (req, res) => {
  Invoice.findAll({
    include: [
      Item,
    ],
  }).then((invoices) => {
    res.json({
      invoices,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};