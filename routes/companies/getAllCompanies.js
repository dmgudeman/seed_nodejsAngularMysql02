/**
 * Created by davidgudeman on 2/16/17.
 * @swagger
 * /companies:
 *   get:
 *     description: retrieves all ACTIVE companies
 *     summary: retrieves all ACTIVE companies
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     tags:
 *       - Company
 *     response:
 *       200:
 *         description: array of companies
 */

'use strict';

const Company = require('../../models/').Company;
const Item = require('../../models/').Item;
const Address = require('../../models/').Address;

module.exports = (req, res) => {
  Company.findAll({
    where: {
      active: true,
    },
    include: [
      Item,
      Address,
    ],
  }).then((companies) => {
    res.json({
      companies,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
