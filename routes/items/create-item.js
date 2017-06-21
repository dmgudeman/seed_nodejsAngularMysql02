/**
 * Created by davidgudeman on 2/16/17.
 * @swagger
 * /items:
 *   post:
 *     description: creates an item
 *     summary: creates an item
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         description: item object
 *         schema:
 *           type: object
 *           required:
 *             - item
 *           properties:
 *              item:
 *                type: object
 *           example:
 *             item:
 *               date: '2017-02-11'
 *               description: blah blah
 *               amount: 250
 *               hours: 15
 *               companyId: 1
 *     produces:
 *       - application/json
 *     tags:
 *       - Item
 *     response:
 *       200:
 *         description: array of companies
 */

'use strict';

const Item = require('../../models/').Item;

module.exports = (req, res) => {
  const item = req.body.item;
  console.log(`req.body.item ${req.body.item}`);
  Item.create(item).then((createdItem) => {
    res.json({
      createdItem,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
