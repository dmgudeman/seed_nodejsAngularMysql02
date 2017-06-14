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
           
            
                validate: function(password, otherPassword) {
                    console.log(`PASSWORD ${password}`);
                    console.log(`OTHERPASSWORD ${otherPassword}`);
                }
                    // return new Promise((resolve, reject) => {
                    // bcrypt.compare(someOtherPlaintextPassword, hash).then(function(res) {
                    //   console.log(`res in instanceMethods of User model ${res}`);

            //             })
            //    });
            }, // end hooks
                
            
        } // end options
    );
    return User;
};