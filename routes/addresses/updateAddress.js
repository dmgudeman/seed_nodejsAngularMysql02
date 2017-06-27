'use strict';

const Address = require('../../models/').Address;

// const print = function () { console.log(`Address ${Address}`) };

module.exports = (req, res) => {
    const id = req.params.addressId;
    const address = req.body;
    console.log(`UPDATEADDRESS req.body= ${JSON.stringify(req.body)}`);
    console.log(`updateAddress AddressId ${id}`);

    Address.findOne({
        where: {
            id,
        },

    }).then((foundAddress) => {
        if (!foundAddress) {
            return Promise.reject(new Error('no address found with that id'));
        }
        console.log(`updateAddress Address.findOne foundAddress ${foundAddress}`);

        return foundAddress.update(address);
    }).then((updatedAddress) => {
        res.json({
            updatedAddress,
        });
    }).catch((error) => {
        console.log(error.stack);
        res.status(400).json({
            error: error.stack,
        });
    });

};