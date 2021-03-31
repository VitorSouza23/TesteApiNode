const express = require("express");
const controller = require("../Controllers/MainController");
const router = express.Router();

router.get('/isAlive', controller.isAlive);

router.post('/', controller.receiveData);

module.exports = router;