'use strict';
var Topic = require('./topic');

function ShortAnswer(type,title,score){
    Topic.call(this,type,title,score);
}

ShortAnswer.prototype = Object.create(Topic.prototype);

ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.getScore = function(form){

    var score = 0;
    var that = this;
    this.content.forEach(function(element){

        if(form[element.name] === element.stdAnswer){
            score += that.score;
        }

    });

    return score;

};

module.exports = ShortAnswer;