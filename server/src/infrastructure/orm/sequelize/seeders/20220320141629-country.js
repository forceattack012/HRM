'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Country",
      [
        {
          countryCode: 'TH',
          countryName: 'THAI LAND'
        },
        {
          countryCode: 'USA',
          countryName: 'UNITED STAGE OF ARMERICA'
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Country",null,{});
  }
};
