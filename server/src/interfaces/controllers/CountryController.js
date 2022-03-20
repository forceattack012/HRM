'use strict'

const GetCountries = require('../../application/use_case/country/GetCountries');
const AddCountry = require('../../application/use_case/country/AddCountry');

module.exports.GetCountries = async(req,res,next) => {
    try{
        const contries = await GetCountries();
        return res.status(200).json({contries})
    }catch(err){
        throw new Error(err);
    }
}

module.exports.AddCountry = async(req, res, next) => {
    try{
        const body = req.body;
        const add = AddCountry(body);
        return res.status(200).send(add)
    }catch(err){
        throw err;
    }
}