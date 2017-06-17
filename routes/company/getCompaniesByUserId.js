'use strict';

const Company = require('../../models/').Company;
const Item = require('../../models/').Item;
const Address = require('../../models/').Address;

module.exports = (req, res) => {
  const loggedIn = req.app.locals.loggedIn;
  const id = req.app.locals.userId;
  console.log(`/nin getCompaniesByUserId req.session.id ${JSON.stringify(req.session.id)}`);
  console.log(`/nin getCompaniesByUserId req.session ${JSON.stringify(req.session)}`);
  
  console.log(`loggedINNnnnnnNNNNN ${loggedIn}`);
  if (!loggedIn) {
    res.status(403);
  }
  Company.findAll({
    where: {
      userId: id,
      active: true,
    },
    include: [
      Item,
      Address,
    ],
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
