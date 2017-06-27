'use strict';

const Address = require('../../models/').Address;

module.exports = (req, res) => {
    const CompanyId = req.params.coId;
    console.log(`CompanyId ${CompanyId}`);
    Address.findOne({
        where: {
            CompanyId,
        },
    }).then((address) => {
        console.log(`GETADDRESSBYADDRESSID address= ${address}`);
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