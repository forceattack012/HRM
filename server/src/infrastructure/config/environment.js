'use strict';

const constants = require('./constants');

module.exports = (() => {
    const environment = {
        database_pg: {
            dialect: constants.SUPPORTED_DATABASE.POSTGRES,
            db: constants.POSTGRES_DATA.DATABASE,
            host: constants.POSTGRES_DATA.HOST,
            password: constants.POSTGRES_DATA.PASSWORD,
            user: constants.POSTGRES_DATA.USER,
        },
        host: {
            port: process.env.port || 3001,
        }
    }

    return environment;
})();