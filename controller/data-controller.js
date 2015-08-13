var Factory =require('../model/factory');


function setData(req,res){
    var questions = Factory.setQuestion();
    console.log(questions);
    res.render('index',{form:undefined,questions:questions,score:''});
}


module.exports = setData;