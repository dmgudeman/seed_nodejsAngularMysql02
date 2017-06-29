'use strict';

const Address = require('../../models/').Address;

module.exports = (req, res) => {
  const address = req.body.Address;
  console.log(`CREATEADDRESS req.body.Address= ${JSON.stringify(req.body.Address)}`);
  Address.create(address).then((createdAddress) => {
    res.json({
      createdAddress,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};