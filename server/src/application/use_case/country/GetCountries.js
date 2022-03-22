'use strict'

const CountryRepository = require('../../../infrastructure/repositories/country/CountryRepository')

module.exports = async() => {
    return await CountryRepository.getAll();
}