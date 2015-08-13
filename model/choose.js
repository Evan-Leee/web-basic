'use strict';
var Topic = require('./topic');

function Choose(type,title,score){
    Topic.call(this,type,title,score);
}

Choose.prototype = Object.create(Topic.prototype);

Choose.prototype.constructor = Choose;

Choose.prototype.getScore = function(form,data){

    var score = 0;
    data.content.forEach(function(element){
       if(form[element.name] === element.stdAnswer){
           score += data.score;
       }
    });

    return score;

};


module.exports = Choose;
//var data = {score:5,content:[{name:'1-1',stdAnswer:'a',items:[1]},{name:'1-2',stdAnswer:'b',items:[3]}]};
//var form = {'1-1':'a','1-2':'b'};
//
//var b = new Choose();
//
//console.log(b.getScore(form,data));