'use strict';
var Topic = require('./topic');


function Judgement(type,description,score,name,stdAnswer){
    Topic.call(this,type,description,score,name,stdAnswer);
}

Judgement.prototype = Object.create(Topic.prototype);

Judgement.prototype.constructor = Judgement;

Judgement.prototype.getScore = function(form){

   var score = 0;

       if(form[this.name] === this.stdAnswer[0]){
           score += this.score;
       }

    return score;
};

module.exports = Judgement;
//
//var data = {score:5,content:[{name:'1-1',stdAnswer:'aaa',items:[1]},{name:'1-2',stdAnswer:'sss',items:[3]}]};
//var form = {'1-1':'aaa','1-2':'sss'};
//
//var b = new Judgement();
//
//console.log(b.getScore(form,data));