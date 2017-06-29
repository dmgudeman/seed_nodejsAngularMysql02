'use strict';

const Company = require('../../models/').Company;
const Address = require('../../models/').Address;

module.exports = (req, res) => {
  const id = req.params.companyId;
  const company = req.body.company;
  console.log(`UPDATECOMPANY req.body= ${JSON.stringify(req.body)}`);
  Company.findOne({
    where: {
      id,
    },
    include: [
      Address,
    ]
  }).then((foundCompany) => {
  console.log(`UPDATECOMPANY foundCompany= ${JSON.stringify(foundCompany)}`);

    if (!foundCompany) {
      return Promise.reject(new Error('no company found with that id'));
    }
    return foundCompany.update(company);
  }).then((updatedCompany) => {
  console.log(`UPDATECOMPANY updatedCompany= ${JSON.stringify(updatedCompany)}`);
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