'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.addConstraint('item', ['companyId'], {
        type: 'FOREIGN KEY',
        references: { //Required field
          table: 'company',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });

  },

  down: function (queryInterface, Sequelize) {
  
    queryInterface.removeConstraint('company', '20170622173259-FK-item-company');

  }
};