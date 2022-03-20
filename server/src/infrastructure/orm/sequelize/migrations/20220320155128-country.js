'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Country', 'createdAt' ,{ type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')})
    await queryInterface.addColumn('Country', 'updatedAt' ,{ type: Sequelize.DATE })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Country', 'createdAt', { /* query options */ });
    queryInterface.removeColumn('Country', 'updatedAt', { /* query options */ });
  }
};
