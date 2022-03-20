'use strict'

const { Sequelize } = require('sequelize');
const environment = require('../../config/environment');

const sequelize = new Sequelize(
    environment.database_pg.db,
    environment.database_pg.user,
    environment.database_pg.password, 
    {
        host: environment.database_pg.host,
        dialect: environment.database_pg.dialect
    }
);


module.exports = sequelize;