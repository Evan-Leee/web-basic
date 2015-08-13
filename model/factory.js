'use strict';
var Block = require('./block');
var Choose = require('./choose');
var Multi = require('./multi-choose');
var Judge = require('./judge');
var ShortAnswer = require('./short-answer');
var seed = require('../data.json');

function Factory(){

}

Factory.setQuestion = function(){
    var data =seed['data'];

    var block;
    var choose;
    var multi;
    var judge;
    var shortAnswer;

    data.forEach(function(element){

        if(element.type === 'block'){
            block = new Block(element.type,element.title,element.score);
            element.content.forEach(function(content){
                block.addContent(content.name,content.items,content.description,content.stdAnswer) ;
            });
        }
        if(element.type === 'choose'){
            choose = new Choose(element.type,element.title,element.score);
            element.content.forEach(function(content){
                choose.addContent(content.name,content.items,content.description,content.stdAnswer) ;
            });
        }
        if(element.type === 'multi'){
            multi = new Multi(element.type,element.title,element.score);
            element.content.forEach(function(content){
                multi.addContent(content.name,content.items,content.description,content.stdAnswer) ;
            });
        }
        if(element.type === 'judge'){
            judge = new Judge(element.type,element.title,element.score);
            element.content.forEach(function(content){
                judge.addContent(content.name,content.items,content.description,content.stdAnswer) ;
            });
        }
        if(element.type === 'shortAnswer'){
            shortAnswer = new ShortAnswer(element.type,element.title,element.score);
            element.content.forEach(function(content){
                shortAnswer.addContent(content.name,content.items,content.description,content.stdAnswer) ;
            });
        }


    });

    return {block:block,choose:choose,multi:multi,judge:judge,shortAnswer:shortAnswer}
};

module.exports = Factory;