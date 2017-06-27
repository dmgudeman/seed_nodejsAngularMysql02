'use strict';

const Item = require('../../models/').Item;

module.exports = (req, res) => {
  const companyId = req.params.companyId * 1;
  console.log(`getItemsByCoId req.params.companyId= ${JSON.stringify(companyId)}`);
  Item.findAll({
    where: {
      companyId,
    },
  }).then((items) => {
    res.json({
      items,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};