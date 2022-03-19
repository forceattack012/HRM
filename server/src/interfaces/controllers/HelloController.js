'use strict'

const SayHello = require('../../application/use_case/hello/SayHello');

exports.sayHello = (req,res,next) => {
    var sayHello = SayHello();

    return res.status(200).send(sayHello);
}

exports.sayHelloWithName = (req, res, next) => {
    var name = req.params.name;
    var sayHello = SayHello(name);

    return res.status(200).send(sayHello);
}