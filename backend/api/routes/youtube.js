import YouTubeSearchController from '../controllers/YouTubeSearchController';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/search', YouTubeSearchController.postSearch);

module.exports = router;
