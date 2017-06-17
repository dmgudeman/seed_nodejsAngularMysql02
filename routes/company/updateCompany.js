/**
 * Created by davidgudeman on 2/17/17.
 * @swagger
 * /companies/{companyId}:
 *   put:
 *     description: updates a company
 *     summary: updates a company
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: companyId
 *         in: path
 *         required: true
 *         description: company id
 *         type: integer
 *         defaultValue: 1
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
 *               id: 1
 *               name: Exxon
 *               color: blue
 *               hourly: 25
 *               paymentTerms: "7"
 *               active: true
 *     produces:
 *       - application/json
 *     tags:
 *       - Company
 *     response:
 *       200:
 *         description: updated company
 */

'use strict';

const Company = require('../../models/').Company;
const Address = require('../../models/').Address;

module.exports = (req, res) => {
  const id = req.params.companyId;
  const company = req.body.company;
  Company.findOne({
    where: {
      id,
    },
    include: [
      Address,
    ]
  }).then((foundCompany) => {
    if (!foundCompany) {
      return Promise.reject(new Error('no company found with that id'));
    }
    return foundCompany.update(company);
  }).then((updatedCompany) => {
    res.json({
      updatedCompany,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
