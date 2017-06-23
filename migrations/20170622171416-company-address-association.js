'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.addConstraint('company', ['id'], {
        type: 'FOREIGN KEY',
        references: { //Required field
          table: 'Address',
          field: 'CompanyId'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });

  },

  down: function (queryInterface, Sequelize) {
    20170622171416-company-address-association
    queryInterface.removeConstraint('company', '20170622171416-company-address-association');

  }
};
