'use strict';

const Address = require('../../models/').Address;

module.exports = (req, res) => {
  const id = req.params.addressId;
  const address = req.body.Address;
  console.log(`UPDATEADDRESS req.body.Address= ${JSON.stringify(req.body.Address)}`);
  Address.findOne({
    where: {
      id,
    },
  }).then((foundAddress) => {
    if (!foundAddress) {
      return Promise.reject(new Error('no address found with that id'));
    }
    return foundAddress.update(address);
  }).then((updatedAddress) => {
    res.json({
      updatedAddress,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
