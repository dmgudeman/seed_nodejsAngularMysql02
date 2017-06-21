'use strict';

const Address = require('../../models/').Address;

module.exports = (req, res) => {
    const addressId = req.params.addressId;
    console.log(`addressId ${addressId}`);
    Address.findOne({
        where: {
            addressId,
        },
    }).then((address) => {
        res.json({
            address,
        });
    }).catch((error) => {
        console.log(error.stack);
        res.status(400).json({
            error: error.stack,
        });
    });
};