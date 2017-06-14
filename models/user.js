'use strict';

const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = function(sequelize, DataTypes) {
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
                beforeCreate: function(user, options) {
                    return new Promise((resolve, reject) => {
                        bcrypt.hash(user.password, saltRounds).then(function(hash) {
                              user.password = hash;
                              resolve(user.password);
                              reject(console.log('Error is hashing password'));
                        })
                    });
                }, // end beforeCreate
            }, // end hooks
            classMethods: {
                validatePassword: function(password, otherPassword) {
                    return new Promise((resolve, reject) => {
                        
                              resolve(console.log(`PASSWORD ${password} OTHERPASSWORD ${otherPassword}`));
                              reject(console.log('Error is hashing password'));
                    });
                } // end validatPassword
            } // end instance Methods
        } // end options

    );
    var hasSecurePassword = function(user, options, callback) {
        // if (user.password != user.password_confirmation) {
        //     throw new Error("Password confirmation doesn't match Password");
        // }
        bcrypt.hash(user.get('password'), 10, function(err, hash) {
            if (err) return callback(err);
            user.set('password_digest', hash);
            return callback(null, options);
        });
    };
    return User;
};