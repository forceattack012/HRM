'use strict';

const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);
const swagerConfig = require('../config/swagger');

var helloRoute = require('../../interfaces/routes/Hello');
var countryRoute = require('../../interfaces/routes/Country');

expressSwagger(swagerConfig.options);
app.use('/api/hello', helloRoute);
app.use('/api/country', countryRoute);

module.exports = app;