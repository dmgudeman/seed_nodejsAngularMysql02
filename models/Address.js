/**
 * Created by davidgudeman on 4/4/17.
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    invalid: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    latitude: {
      type: 'DOUBLE',
      allowNull: true,
    },
    longitude: {
      type: 'DOUBLE',
      allowNull: true,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    street1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    street2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CompanyId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    },
  }, {
    tableName: 'address',
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
        Address.belongsTo(models.Company, {
          foreignKey: 'CompanyId',
          targetKey: 'id',
        });
      },
       print: console.log(`In Address model class methods HHHHHHHHHHHHHHHHHH`),
    },
       
  });
  return Address;
};
