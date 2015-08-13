'use strict';
var Block = require('./block');
var Choose = require('./choose');
var Multi = require('./multi-choose');
var Judge = require('./judge');
var ShortAnswer = require('./short-answer');

function Factory(){

}

Factory.setQuestion = function(data){

    if(type === 'block'){
        return new Block(data.type,data.title,data.score);
    }
    if(type === 'choose'){
        return new Choose(data.type,data.title,data.score);
    }
    if(type === 'multi'){
        return new Multi(data.type,data.title,data.score);
    }
    if(type === 'judge'){
        return new Judge(data.type,data.title,data.score);
    }
    if(type === 'shortAnswer'){
        return new ShortAnswer(data.type,data.title,data.score);
    }
};

module.exports = Factory;