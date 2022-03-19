'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Country', {
      countryCode: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      COUNTRY_NAME: {
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Country');
  }
};
