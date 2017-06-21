
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
