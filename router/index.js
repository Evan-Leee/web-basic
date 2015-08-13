'use strict';

var express = require('express');
var setData = require('../controller/data-controller');
var setScore = require('../controller/score-controller')
var router = express.Router();

router.get('/',setData);


router.post('/',setScore);

module.exports = router;
