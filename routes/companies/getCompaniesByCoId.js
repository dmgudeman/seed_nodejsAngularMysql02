/**
 * Created by davidgudeman on 2/21/17.
 * @swagger
 * /companies/{companyId}:
 *   get:
 *     description: retrieves a single company
 *     summary: retrieves a single company
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: companyId
 *         in: path
 *         required: true
 *         description: company id
 *         type: integer
 *         defaultValue: 1
 *     produces:
 *       - application/json
 *     tags:
 *       - Company
 *     response:
 *       200:
 *         description: company object
 */

'use strict';

const Company = require('../../models/').Company;
const Item = require('../../models/').Item;
const Address = require('../../models/').Address;

module.exports = (req, res) => {
  const id = req.params.coId;
  console.log(`getCompanyById id= ${id}`);
  Company.findOne({
    where: {
      id,
    },
    // include: [
    //   Item,
    //   Address,
    // ],
  }).then((company) => {
    res.json({
      company,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
