'use strict';

module.exports = {
  up:  (queryInterface, Sequelize)=> { 
    queryInterface.createTable(
        'Address', {
          id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          city: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          country: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          invalid: {
            type: Sequelize.INTEGER(1),
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
            type: Sequelize.STRING,
            allowNull: true,
          },
          street1: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          street2: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          state: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          CompanyId: {
            type: Sequelize.INTEGER(11).UNSIGNED,
            allowNull: false,
          },
        });
     },  

     down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Address');
     }
};

