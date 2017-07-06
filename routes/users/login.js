var express = require('express');
var router = express.Router();

const User = require('../../models/').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    let liUser = req.body;
    console.log(`0 router.post login req.body= ${JSON.stringify(liUser)}`);
    let user;
    User.findOne({where: {username: liUser.username}})
        .then(data => {
            if (data) {
                user = data;
                return user;
            } else {
                return new Error('no user');
            }
        })
        .then((user) => {
            console.log(`user ${user}`);
            if (user) {
                 return bcrypt.compare(liUser.password, user.password)
            }
        })
        .then((flag) => {
            if (flag) {
                const token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
                
                const response = { 
                    message: 'Successfully logged in',
                    token: token,
                    userId: user.id}
                console.log(`LOGIN ENDPOINT response = ${JSON.stringify(response)}`);
                    res.status(201).json(response)
            } else {
                return res.status(400).send(
                    "Password and/or Username not found"
                );
            }
        })
        .catch((error) => {
                console.log(error.stack);
                // return res.status(400).json({
                //     error: error.stack,
                return res.status(400).send(
                    "Password and/or username not found"
                );
        });
}
   



