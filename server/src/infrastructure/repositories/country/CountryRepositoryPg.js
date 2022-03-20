'use strict'

const db = require('../../orm/sequelize/db');
const Country = require('../../../domain/country/Country');
const CountryRepository = require('../../../domain/country/CountryRepository');

// module.exports = class extends CountryRepository {

//     constructor() {
//         super();
//         this.db = sequelize;
//         this.model = this.db.model('country');
//     }

//     async getAll() {
//         const countries = await this.model.findAll();
//         return  countries.map((country) => {
//             return new Country(country.countryCode, country.countryName)
//         })
//     }
// }

exports.getAll = async () => {
    const countries = await db.Country.findAll();
    return  countries.map((country) => {
        return new Country(country.countryCode, country.countryName)
    })
}