'use strict';
var Topic = require('./topic');


function Judgement(type, description, score, name, stdAnswer) {
    Topic.call(this, type, description, score, name, stdAnswer);
}

Judgement.prototype = Object.create(Topic.prototype);

Judgement.prototype.constructor = Judgement;

Judgement.prototype.getScore = function (form) {

    var score = 0;

    if (form[this.name] === this.stdAnswer[0]) {
        score += this.score;
    }

    return score;
};

module.exports = Judgement;