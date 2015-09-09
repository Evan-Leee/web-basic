'use strict';
var _ = require('lodash');
var Topic = require('./topic');

function Fillin(type, description, score, name, stdAnswer) {
    Topic.call(this, type, description, score, name, stdAnswer);
}

Fillin.prototype = Object.create(Topic.prototype);

Fillin.prototype.constructor = Fillin;

Fillin.prototype.getScore = function (form) {

    var score = 0;

    if (Array.isArray(form[this.name])) {
        score += _.intersection(form[this.name], this.stdAnswer).length
    } else {
        if (form[this.name] === this.stdAnswer[0]) {
            score += this.score;
        }
    }

    return score;

};


module.exports = Fillin;