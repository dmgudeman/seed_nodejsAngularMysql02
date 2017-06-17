/**
 * Created by davidgudeman on 2/26/17.
 * @swagger
 * /items/{itemId}:
 *   get:
 *     description: retrieves a single item
 *     summary: retrieves a single item
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         description: item id
 *         type: integer
 *         defaultValue: 1
 *     produces:
 *       - application/json
 *     tags:
 *       - Item
 *     response:
 *       200:
 *         description: item object
 */

'use strict';

const Item = require('../../models/').Item;

module.exports = (req, res) => {
  const id = req.params.itemId;
  Item.findOne({
    where: {
      id,
    },
  }).then((item) => {
    res.json({
      item,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
