'use strict';
var Topic = require('./topic');


function Judge(type,title,score){
    Topic.call(this,type,title,score);
}

Judge.prototype = Object.create(Topic.prototype);

Judge.prototype.constructor = Judge;

Judge.prototype.getScore = function(form,data){

    var score = 0;
    data.content.forEach(function(element){

       if(form[element.name] === element.stdAnswer){
           score += data.score;
       }
    });

    return score;
};
//
//var data = {score:5,content:[{name:'1-1',stdAnswer:'aaa',items:[1]},{name:'1-2',stdAnswer:'sss',items:[3]}]};
//var form = {'1-1':'aaa','1-2':'sss'};
//
//var b = new Judge();
//
//console.log(b.getScore(form,data));