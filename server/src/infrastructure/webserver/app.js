'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const expressSwagger = require('express-swagger-generator')(app);
const swagerConfig = require('../config/swagger');

var helloRoute = require('../../interfaces/routes/Hello');
var countryRoute = require('../../interfaces/routes/Country');

expressSwagger(swagerConfig.options);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :false }));
app.use('/api/hello', helloRoute);
app.use('/api/country', countryRoute);

module.exports = app;