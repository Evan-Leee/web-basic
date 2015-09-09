'use strict';
var Topic = require('./topic');

function Choice(type, description, score, name, stdAnswer) {
    Topic.call(this, type, description, score, name, stdAnswer);
}

Choice.prototype = Object.create(Topic.prototype);

Choice.prototype.constructor = Choice;

Choice.prototype.getScore = function (form) {

    var score = 0;

    if (form[this.name] === this.stdAnswer[0]) {
        score += this.score;
    }

    return score;

};

module.exports = Choice;
