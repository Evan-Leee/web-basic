'use strict';
var FillIn = require('./fill-in');
var Choice = require('./choice');
var Multi = require('./multi-choice');
var Judge = require('./judgement');
var ShortAnswer = require('./short-answer');
var Database = require('../seed/data-base');
var database = new Database();
database.dataInit();

function Factory() {

}

Factory.prototype.setQuestions = function () {

    var fillins = [];
    var choices = [];
    var multis = [];
    var judgements = [];
    var shortAnswers = [];

    database.data.forEach(function (element) {

        if (element.type === 'fill-in') {
            var fillin = new FillIn(element.type, element.description, element.score, element.name, element.stdAnswer);

            fillin.addOption(element.options);

            fillins.push(fillin);
        }
        if (element.type === 'choice') {
            var choice = new Choice(element.type, element.description, element.score, element.name, element.stdAnswer);

            choice.addOption(element.options);

            choices.push(choice);
        }
        if (element.type === 'multi') {
            var multi = new Multi(element.type, element.description, element.score, element.name, element.stdAnswer);

            multi.addOption(element.options);

            multis.push(multi);

        }
        if (element.type === 'judge') {
            var judgement = new Judge(element.type, element.description, element.score, element.name, element.stdAnswer);

            judgement.addOption(element.options);

            judgements.push(judgement);

        }
        if (element.type === 'shortAnswer') {
            var shortAnswer = new ShortAnswer(element.type, element.description, element.score, element.name, element.stdAnswer);

            shortAnswer.addOption(element.options);

            shortAnswers.push(shortAnswer);
        }


    });

    return {fillins: fillins, choices: choices, multis: multis, judgements: judgements, shortAnswers: shortAnswers}
};

module.exports = Factory;