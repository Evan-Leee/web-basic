'use strict';
var Topic = require('./topic');

function ShortAnswer(type, description, score, name, stdAnswer) {
    Topic.call(this, type, description, score, name, stdAnswer);
}

ShortAnswer.prototype = Object.create(Topic.prototype);

ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.getScore = function (form) {

    var score = 0;

    if (form[this.name] === this.stdAnswer) {
        score += this.score;
    }

    return score;

};

module.exports = ShortAnswer;