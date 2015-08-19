var Factory =require('../model/factory');



function setData(req,res){
    var factory = new Factory();
    var questions = factory.setQuestions();
    res.render('index',{form:undefined,questions:questions,score:''});
}


module.exports = setData;