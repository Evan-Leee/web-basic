'use strict';

var express = require('express');
var DataController = require('../controller/data-controller');
var setData = new DataController().setData;
var ScoreController = require('../controller/score-controller');
var setScore = new ScoreController().setScore;
var router = express.Router();

router.get('/', setData);


router.post('/', setScore);

module.exports = router;
