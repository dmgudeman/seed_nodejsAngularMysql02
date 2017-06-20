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

// const print = function () { console.log(`Company ${JSON.stringify(Company)}`) };

module.exports = (req, res) => {
  console.log(`req.body ${JSON.stringify(req.body)}`);
  const company = req.body;
  // company.userId = req.app.locals.userId;
  // const loggedIn = req.app.locals.loggedIn;
  // console.log(`in createCompany route req.qpp.locals ${req.app.locals}`);
  
  // console.log(`loggedINNnnnnnNNNNN ${loggedIn}`);
  // console.log(`req.app.locals.userId; ${req.app.locals.userId}`);
  // console.log(`in createCompany route company ${JSON.stringify(company)}`);
  
  // if (!loggedIn) {
  //   res.redirect('/login');
  // }
  Company.create(company)  // {
  //   include: [
  //     // Address,
  //   ],
  // })
  .then((createdCompany) => {
    console.log(`createdCompany ${JSON.stringify(createdCompany)}`);
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
