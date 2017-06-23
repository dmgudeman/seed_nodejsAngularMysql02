'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
     return queryInterface.dropTable('company');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('company');
  }
};
