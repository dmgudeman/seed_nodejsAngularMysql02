/**
 * Created by davidgudeman on 3/3/17.
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    beginDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
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
    discount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    companyId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Invoice.belongsTo(models.Company, {
          foreignKey: 'companyId',
          targetKey: 'id',
        });
        Invoice.belongsToMany(models.Item, {
          through: models.InvoiceItem,
          foreignKey: 'invoiceId',
          otherKey: 'itemId',
        });
      },
    },
    tableName: 'invoice',
  });
  return Invoice;
};
