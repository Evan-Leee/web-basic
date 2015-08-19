'use strict';
var Topic = require('./topic');

function Choice(type,description,score,name,stdAnswer){
    Topic.call(this,type,description,score,name,stdAnswer);
}

Choice.prototype = Object.create(Topic.prototype);

Choice.prototype.constructor = Choice;

Choice.prototype.getScore = function(form){

    var score = 0;

       if(form[this.name] === this.stdAnswer[0]){
           score += this.score;
       }

    return score;

};


module.exports = Choice;
//var data = {score:5,content:[{name:'1-1',stdAnswer:'a',items:[1]},{name:'1-2',stdAnswer:'b',items:[3]}]};
//var form = {'1-1':'a','1-2':'b'};
//
//var b = new Choice();
//
//console.log(b.getScore(form,data));