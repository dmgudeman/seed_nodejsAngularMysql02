var express = require('express');
var router = express.Router();

const User = require('../models/').User;
const bcrypt = require('bcrypt');

router.post('/', function(req, res, next) {
    let user = req.body;
    
    User.create(user)
        .then((user) => {
        console.log(`register ${JSON.stringify(user)}`);

        return res.status(201).json({
                user,
            });
        })
        .catch((error) => {
            console.log(error.stack);
            return res.status(400).json({
                error: error.stack,
            });
    });
});

router.post('/login', function(req, res, next){
    let liUser = req.body;
    let userr ;
    let firstMethod = function() {
        let promise = new Promise(function(resolve, reject) {
            resolve(  User.findOne({where: {username: liUser.username}}));
        });
        return promise;
    };

    let secondMethod = function(user) {
        console.log(`PPPPPPPPPPPPPPPp ${user}`);
        this.userr = user;
        let promise = new Promise((resolve, reject) => {
             console.log(` user.password ${user.password}`);
             console.log(` lllllliUser.password ${liUser.password}`);
             resolve(bcrypt.compare(liUser.password, user.password));
             reject("sign in failed")
        });
        return promise;
    };

    let thirdMethod = function(bool) {
        let promise = new Promise((resolve, reject) => {
            if (bool){
            resolve(res.status(201).json(this.userr))
            } else {
            reject(res.status(401).json({error: error}))
            }
       } );
    //    return promise;
    };

//    firstMethod().then(secondMethod).then(function(user) { console.log(`liUser.password= ${liUser.password} USER = ${JSON.stringify(user)}`)})
   firstMethod().then(secondMethod).then(thirdMethod)
                 //      
    //    .then(function(p){return secondMethod})
    //    .then(thirdMethod)
        .catch((error) => {
            console.log(error.stack);
            return res.status(400).json({
                error: error.stack,
            });

        });
});
module.exports = router;


