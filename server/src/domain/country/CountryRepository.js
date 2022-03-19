'use strict';

module.exports = class {

    getAll() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    getByCountryCode(countryCode){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    add(Country) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    update(countryCode, Country) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    delete(countryCode) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
}