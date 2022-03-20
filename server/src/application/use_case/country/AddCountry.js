'use strict';

const Country = require('../../../domain/country/Country');


module.exports = (country) => {
    const newCountry = new Country(country.countryCode, country.countryName);
    
    return `${newCountry.countryCode} ${newCountry.countryName}`;
}