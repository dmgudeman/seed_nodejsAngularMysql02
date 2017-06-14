var express = require('express');
var router = express.Router();

const User = require('../models/').User;

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
   
    User.findOne({where: {username: liUser.username}})
        .then((user) => {
            console.log(`IN BE ROUTER POST LOGIN user.password= ${user.password}`)
            console.log(`IN BE ROUTER POST LOGIN liUser.username=${liUser.username}`);
            console.log(`IN BE ROUTER POST LOGIN liUser.password=${liUser.password}`);
        // validatePassword(user.password, liUser.password)

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
module.exports = router;


