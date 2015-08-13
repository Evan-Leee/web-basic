'use strict';
var _ =require('lodash');
var Topic = require('./topic');

function Multi(type,title,score){
    Topic.call(this,type,title,score);
}

Multi.prototype = Object.create(Topic.prototype);

Multi.prototype.constructor = Multi;

Multi.prototype.getScore = function(form,data){

    var score = 0;
    data.content.forEach(function(element){
        if(form[element.name].length > 2 && _.intersection(form[element.name],element.stdAnswer).length === 3){

            score += data.score;
        }

    });

    return score;
};

//var data = {score:5,content:[{name:'1-1',stdAnswer:'aaa',items:[1]},{name:'1-2',stdAnswer:['sss','ddd','fff'],items:[3]}]};
//var form = {'1-1':'aaa','1-2':['sss','ddd','fff']};
//
//var b = new Multi();
//
//console.log(b.getScore(form,data));