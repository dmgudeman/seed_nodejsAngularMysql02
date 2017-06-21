/**
 * Created by davidgudeman on 3/3/17.
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const InvoiceItem = sequelize.define('InvoiceItem', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    invoiceId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    },
    itemId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {},
    },
    tableName: 'invoice_item',
  });
  return InvoiceItem;
};