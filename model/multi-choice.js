'use strict';
var _ = require('lodash');
var Topic = require('./topic');

function Multi(type, description, score, name, stdAnswer) {
    Topic.call(this, type, description, score, name, stdAnswer);
}

Multi.prototype = Object.create(Topic.prototype);

Multi.prototype.constructor = Multi;

Multi.prototype.getScore = function (form) {

    var score = 0;

    if (_.intersection(form[this.name], this.stdAnswer).length === 3) {

        score += this.score;
    }


    return score;
};

module.exports = Multi;
