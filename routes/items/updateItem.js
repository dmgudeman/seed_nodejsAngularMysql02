/**
 * Created by davidgudeman on 2/17/17.
 * @swagger
 * /items/{itemId}:
 *   put:
 *     description: updates an item
 *     summary: updates an item
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         description: item id
 *         type: integer
 *         defaultValue: 1
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
 *               id: 1
 *               date: '2017-01-12'
 *               description: updated description
 *               amount: 125
 *               hours: 10
 *     produces:
 *       - application/json
 *     tags:
 *       - Item
 *     response:
 *       200:
 *         description: updated item
 */

'use strict';

const Item = require('../../models/').Item;

module.exports = (req, res) => {
  const id = req.params.itemId;
  const item = req.body.item;
  Item.findOne({
    where: {
      id,
    },
  }).then((foundItem) => {
    if (!foundItem) {
      return Promise.reject(new Error('no item found with that id'));
    }
    return foundItem.update(item);
  }).then((updatedItem) => {
    res.json({
      updatedItem,
    });
  }).catch((error) => {
    console.log(error.stack);
    res.status(400).json({
      error: error.stack,
    });
  });
};
