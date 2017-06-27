'use strict';

const Item = require('../../models/').Item;

module.exports = (req, res) => {
  const item = req.body.item;
  console.log(`req.body.item ${JSON.stringify(req.body.item)}`);
  Item.create(item).then((createdItem) => {
    res.json({
      createdItem,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
