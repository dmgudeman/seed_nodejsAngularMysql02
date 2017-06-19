var express = require('express');
var router = express.Router();

const User = require('../../models/').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = (req, res) => {
    let user = req.body;
    console.log(` 222222222222222 router.post in user route user= ${JSON.stringify(user)}`);
    User.create(user)
        .then((user) => {
            console.log(`2222222222 register ${JSON.stringify(user)}`);
            return res.status(201).json({ user });
        })
        .catch((error) => {
            console.log(error.stack);
            return res.status(400).json({
                error: error.stack,
            });
    });
};



