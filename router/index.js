'use strict';

var express = require('express');
var DataController = require('../controller/data-controller');
var setData = new DataController().setData;
var setScore = require('../controller/score-controller')
var router = express.Router();

router.get('/',setData);


router.post('/',setScore);

module.exports = router;
