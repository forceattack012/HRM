'use strict'

//const expressSwagger = require('express-swagger-generator')(app);
const app = require('./app');
var http = require('http');
const EnvironmentConfig = require('../config/environment');

const port = EnvironmentConfig.host.port;

const createServer = async() => {
    app.set('port', port);

    let server = http.createServer(app).listen(app.get('port'), () => {
        console.log('Express server listening on port ' + app.get('port'))
    });

    return server;
}

module.exports = createServer;


