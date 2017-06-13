'use strict';

const bcrypt = require('bcrypt-nodejs');

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
         beforeCreate: function (user, options, cb) {
             var salt =  bcrypt.genSalt(saltRounds, function(err, salt) {
             return salt});
        
             bcrypt.hash(user.password, salt, null, function(err, hash) {
                 if(err) return cb(err);
                     // Store hash in your password DB. 
                      console.log(`HASH= ${hash}`)
                      user.password = hash
                 if (cb){
                      return cb(null, user.password);
                 }
              })
         }  
      } // end hooks
    }  // end options
  );
  return User;
};
      //-----------------------------------------------------------
      // classMethods: {
      //   associate: (models) => {
      //     User.hasMany(models.Company, {
      //       foreignKey: 'userId',
      //     });
      //   },
      // },
  //   });
      //-----------------------------------------------------------
  //  User.hook('beforeCreate', ((user, options, cb) => {
  //    var salt =  bcrypt.genSalt(saltRounds, function(err, salt) {
  //         return salt});
  //   bcrypt.hash(user.password, salt, null, function(err, hash) {
  //       if(err) return cb(err);
  //       // Store hash in your password DB. 
  //       console.log(`HASH= ${hash}`)
  //       user.password = hash;
  //       if (cb){
  //       return cb(null, options);
  //       }
    // },
      
     