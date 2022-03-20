'use strict'


const sequelize = require('../../orm/sequelize/sequelize');
const Sequelize = require('sequelize');

const Country = require('../../orm/sequelize/models/Country')(sequelize, Sequelize);

module.exports = {
    Country
}