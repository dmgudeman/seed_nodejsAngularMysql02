'use strict';

const User = require('../../models/').User;

module.exports = (req, res) => {
//   console.log(`signup method req.body ${JSON.stringify(req.body)}`);
  let user = req.body;

  User.create(user)
  .then((register) => {
    // console.log(`user ${JSON.stringify(user)}`);
    // console.log(`signup ${JSON.stringify(register)}`);
    res.json({
      register,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};