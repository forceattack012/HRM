'use strict';

const CountryController = require('../controllers/CountryController');
const express = require('express');
const router = express.Router();

router.get('/', CountryController.GetCountries);
router.post('/', CountryController.AddCountry);

module.exports = router;