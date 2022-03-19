'use strict'

const GetCountries = require('../../application/use_case/country/GetCountries');

module.exports.GetCountries = (req,res,next) => {
    try{
        const contries = GetCountries();
        console.log(contries)
        return res.status(200).send(contries)
    }catch(err){
        throw new Error(err);
    }
}