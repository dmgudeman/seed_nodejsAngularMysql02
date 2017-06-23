'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    'item', {id: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
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
    hours: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
     companyId: {
            type: Sequelize.INTEGER(11).UNSIGNED,
            allowNull: false,
            references: {
              model: 'company',
              key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
          },
  }
  },
  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
