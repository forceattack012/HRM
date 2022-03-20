'use strict'

module.exports = (sequelize, Sequelize) => {
    const country = sequelize.define('Country', {
        countryCode: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
        },
        countryName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    },
    {
        tableName: "Country", // relation "user" does not exist
    });

    return country;
}