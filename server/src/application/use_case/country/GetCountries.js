'use strict'

const CountryRepository = require('../../../infrastructure/repositories/country/CountryRepositoryPg')

module.exports = async() => {
    return await CountryRepository.getAll();
}