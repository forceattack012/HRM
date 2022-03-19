'use strict'

const createServer = require('./src/infrastructure/webserver/server');

const start = async () => {

    try{

        createServer();
        console.log('Server running at:', 'localhost');
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
};

start();