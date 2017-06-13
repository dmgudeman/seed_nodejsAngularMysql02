var express = require('express');
var router = express.Router();

const User = require('../models/').User;

router.post('/', function(req, res, next) {
    let user = req.body;
    console.log(`user route BE req.body= ${JSON.stringify(req.body)}`);
    User

    .create(user)
    .then((user) => {
    console.log(`register ${JSON.stringify(user)}`);

       return res.status(201).json({
            user,
        });
    }).catch((error) => {
        console.log(error.stack);
    return res.status(400).json({
            error: error.stack,
        });
    });
});

module.exports = router;


