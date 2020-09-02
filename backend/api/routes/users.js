import UserController from '../controllers/UserController';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.test);

module.exports = router;
