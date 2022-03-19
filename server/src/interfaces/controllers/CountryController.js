'use strict'

const GetCountries = require('../../application/use_case/country/GetCountries');

module.exports.GetCountries = (req,res,next) => {
    try{
        const contries = GetCountries;
        return res.status(200).json({contries})
    }catch(err){
        throw new Error(err);
    }
}