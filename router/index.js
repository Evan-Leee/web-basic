'use strict';

var express = require('express');
var setData = require('../controller/data-controller');
var router = express.Router();

router.get('/',setData);


router.post('/',function(req,res){

    console.log(req.body);
    res.render('index')
});
module.exports = router;
