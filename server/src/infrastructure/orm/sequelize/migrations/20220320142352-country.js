'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.renameColumn('Country','COUNTRY_NAME', 'countryName');
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Country');
  }
};
