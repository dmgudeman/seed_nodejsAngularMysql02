'use strict';

const Item = require('../../models/').Item;

module.exports = (req, res) => {
  const companyId = req.params.coId;
  Item.findAll({
    where: {
      companyId,
    },
  }).then((item) => {
    res.json({
      item,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};