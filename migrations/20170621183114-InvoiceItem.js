'use strict';

module.exports = {
  up:  (queryInterface, Sequelize)=> { 
    queryInterface.createTable(
        'InvoiceItem', {
           id: {
              type: Sequelize.INTEGER(11).UNSIGNED,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
            },
            invoiceId: {
              type: Sequelize.INTEGER(11).UNSIGNED,
              allowNull: false,
            },
            itemId: {
              type: Sequelize.INTEGER(11).UNSIGNED,
              allowNull: false,
            },
        });
     },  

     down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('InvoiceItem');
     }
};

