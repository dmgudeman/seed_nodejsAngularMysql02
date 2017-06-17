'use strict';

const Address = require('../../models/').Address;

// const print = function () { console.log(`Address ${Address}`) };

module.exports = (req, res) => {
    const address = req.body;
    console.log(`address ${JSON.stringify(address)}`);
    Address.create(address).then((createdAddress) => {
        console.log(`createdAddress  ${JSON.stringify(createdAddress)}`);
        res.json({
            createdAddress,
        });
    }).catch((error) => {
        console.log(error.stack);
        res.status(400).json({
            error: error.stack,
        });
    });
};