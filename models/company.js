'use strict';

module.exports = (sequelize, DataTypes) => {
  let userID;
  const Company = sequelize.define('Company', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    hourly: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    paymentTerms: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    userId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Company.hasMany(models.Item, {
          foreignKey: 'companyId',
        });
        Company.hasOne(models.Address, {
          foreignKey: 'CompanyId',
        });
        Company.belongsTo(models.User, {
          foreignKey: 'userId',
          targetKey: 'id',
        });
      },
    },

    tableName: 'company',
    // hooks: {
    //   beforeCreate: (company, options, next) => {
    //     company.userId = userID.uid;
    //     next(null, company);
    //   },
    // },
  });
  return Company;
};
