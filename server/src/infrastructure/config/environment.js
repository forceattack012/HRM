'use strict';

const constants = require('./constants');

module.exports = (() => {
    const environment = {
        database: {
            dialect: constants.SUPPORTED_DATABASE.POSTGRES,
            url: process.env.DATABASE_URL || '',
        }
    }

    return environment;
})();