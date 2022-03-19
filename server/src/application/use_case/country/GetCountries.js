'use strict'

const CountryRepository = require('../../../domain/country/CountryRepository');

module.exports = () => {
    return CountryRepository.getAll();
}