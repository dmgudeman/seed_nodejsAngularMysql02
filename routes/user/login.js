var express = require('express');
var router = express.Router();

const User = require('../../models/').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    let liUser = req.body;
    console.log(`router.post login res.body= ${JSON.stringify(liUser)}`);
    let user;
    User.findOne({where: {username: liUser.username}})
        .then(data => {
            if (data) {
                user = data;
                return user;
            } else {
                return console.log ('user not found');
            }
        })
        .then((user) => {
            return bcrypt.compare(liUser.password, user.password)
        })
        .then((flag) => {
            if (flag) {
                const token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
                const response = { 
                    message: 'Successfully logged in',
                    token: token,
                    userId: user.id}
                    res.status(201).json(response)
            } else {
                return console.log('failed to login')
            }
        })
        .catch((error) => {
                console.log(error.stack);
                return res.status(400).json({
                    error: error.stack,
                });
        });
}
   


