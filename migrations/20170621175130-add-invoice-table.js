'use strict';

module.exports = {
  up:  (queryInterface, Sequelize)=> { 
    queryInterface.createTable(
        'invoice', {
        id: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        beginDate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        endDate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        amount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        discount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        url: {
          type: Sequelize.STRING(2000),
          allowNull: true,
        },
        companyId: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: false,
        },
        });
     },  

     down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('invoice');
     }
};

