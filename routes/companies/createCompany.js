/**
 * Created by davidgudeman on 2/16/17.
 * @swagger
 * /companies:
 *   post:
 *     description: creates a company
 *     summary: creates a company
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         description: company object
 *         schema:
 *           type: object
 *           required:
 *             - company
 *           properties:
 *              company:
 *                type: object
 *           example:
 *             company:
 *               name: Exxon
 *               color: blue
 *               hourly: 25
 *               paymentTerms: "7"
 *               active: true
 *               Address:
 *                 street1: 530 University Ave
 *                 street2: Suite 100
 *                 city: Palo Alto
 *                 state: CA
 *                 postalCode: 94301
 *                 country: US
 *     produces:
 *       - application/json
 *     tags:
 *       - Company
 */

'use strict';

const Company = require('../../models/').Company;
const Address = require('../../models/').Address;

module.exports = (req, res) => {
  const company = req.body.company;
  console.log(`CREATECOMPANY company= ${JSON.stringify(req.body)}`);
  Company.create(company, {
    include: [
      Address,
    ],
  }).then((createdCompany) => {
    res.json({
      createdCompany,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};