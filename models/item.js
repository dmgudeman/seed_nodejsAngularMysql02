/**
 * Created by davidgudeman on 2/16/17.
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    hours: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    companyId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Item.belongsTo(models.Company, {
          foreignKey: 'companyId',
          targetKey: 'id',
        });
        Item.belongsToMany(models.Invoice, {
          through: models.InvoiceItem,
          foreignKey: 'itemId',
          otherKey: 'invoiceId',
        });
      },
    },
    tableName: 'item',
  });
  return Item;
};
