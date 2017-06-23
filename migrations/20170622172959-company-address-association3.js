'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.addConstraint('Address', ['CompanyId'], {
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
    20170622171416-company-address-association
    queryInterface.removeConstraint('company', '20170622171416-company-address-association3');

  }
};
