'use strict'

const express = require("express");
const HelloController = require('../controllers/HelloController');
const router = express.Router();

router.get('/', HelloController.sayHello);
router.get('/:name', HelloController.sayHelloWithName);

module.exports = router;

