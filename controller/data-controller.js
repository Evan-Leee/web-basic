var Factory =require('../model/factory');

function setData(req,res){
    var dataArray = Factory.setQuestion();
    console.log(dataArray);
    res.render('index',{dataArray:dataArray});
};

module.exports = setData;