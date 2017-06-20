'use strict';

// since we have no need to get all the companies, I made
// the companies endpoint all the companies with a specific userId

const jwt = require('jsonwebtoken');
const Company = require('../../models/').Company;
const Item = require('../../models/').Item;
const Address = require('../../models/').Address;


module.exports = (req, res) => {
  let id;
  var token = req.headers.authorization;
  
  try {
    var decoded = jwt.verify(token, 'secret');
    id = decoded.user.id;

  } catch (e) {
    return authFail(res);
  }
  
  Company.findAll({
    where: {
      userId: id,
      // active: true,
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