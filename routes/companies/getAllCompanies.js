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


  console.log(`In getAllCompanies endpoint req=`);
  Company.findAll({
    // where: {
    //   userId: userId,
    //   active: true,
    // },
    // include: [
    //   Item,
    //   Address,
    // ],
  }).then((companies) => {
    let x = companies ? companies :  null;
    console.log(`In getAllcompanies companies ${companies}`);
    
    res.json({
      x,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
