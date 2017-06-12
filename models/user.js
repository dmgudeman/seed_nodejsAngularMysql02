'use strict';

const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      freezeTableName: true,
      tableName: 'user',
      dialect: 'mysql',
      hooks: {
        beforeCreate: function(user, options, next) {
          bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return console.log('error in creating password hash');
            bcrypt.hash(user.password, salt, function(err, hash) {
               if (err) return console.log('error in creating password hash');
              
              return user.password = hash;
              // next(null, user);
            });
          });
        },
      },
      // classMethods: {
      //   associate: (models) => {
      //     User.hasMany(models.Company, {
      //       foreignKey: 'userId',
      //     });
      //   },
      // },
    });
  return User;
};