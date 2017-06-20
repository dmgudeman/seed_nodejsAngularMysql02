

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
