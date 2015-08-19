var Factory = require('../model/factory');
var Score = require('../model/score');

function setScore(req,res){
    var factory = new Factory()
    var questions = factory.setQuestions();
    var score = Score.getTotal(req.body,questions);

    res.render('index',{form:req.body,questions:questions,score:score})
}

module.exports = setScore;