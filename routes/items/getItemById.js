
'use strict';

const Item = require('../../models/').Item;

module.exports = (req, res) => {
  const id = req.params.itemId;
  Item.findOne({
    where: {
      id,
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
