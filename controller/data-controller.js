'use strict';

var Factory = require('../model/factory');
function DataController() {

}

DataController.prototype.setData = function (req, res) {
    var factory = new Factory();
    var questions = factory.setQuestions();
    res.render('index', {form: undefined, questions: questions, score: ''});
};


module.exports = DataController;
