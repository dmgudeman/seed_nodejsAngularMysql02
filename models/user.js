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
    // start options ---------------------------------------
    {
      freezeTableName: true,
      tableName: 'user',
      dialect: 'mysql',
  
      hooks: {
         beforeCreate: function (user, options) {
             const myPlaintextPassword = 'user.password';
             var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
             return    user.password = hash;
         },
      } // end hooks
    }  // end options
  );
  return User;
};
      
      
     