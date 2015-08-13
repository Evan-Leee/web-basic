var Factory = require('../model/factory');
var Score = require('../model/score');

function setScore(req,res){
    var questions = Factory.setQuestion();
    var form = req.body;
    var score = Score.getTotal(form,questions);

    res.render('index',{form:form,questions:questions,score:score})
}

module.exports = setScore;