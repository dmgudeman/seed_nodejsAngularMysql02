'use strict';

const Company = require('../../models/').Company;
const Item = require('../../models/').Item;
const Address = require('../../models/').Address;

module.exports = (req, res) => {
  // if (!loggedIn) {
  //   res.status(403);
  // }
  let id = 1
  Company.findAll({
    where: {
      userId: id,
      active: true,
    },
    // include: [
    //   Item,
    //   Address,
    // ],
  }).then((companies) => {
    res.json({
      companies,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
