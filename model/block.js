'use strict';
var _ =require('lodash');
var Topic = require('./topic');

function Block(type,title,score){
    Topic.call(this,type,title,score);
}

Block.prototype = Object.create(Topic.prototype);

Block.prototype.constructor = Block;


Block.prototype.getScore = function(form,data){

  var score = 0;
  data.content.forEach(function(element){
      if(element.items[0] < 2){
          if(form[element.name] === element.stdAnswer){
              score += data.score;
          }
      }else{

          score += _.intersection(form[element.name],element.stdAnswer).length * data.score;
      }

  });

    return score;
};

module.exports = Block;
//var data = {score:5,content:[{name:'1-1',stdAnswer:'aaa',items:[1]},{name:'1-2',stdAnswer:['sss','ddd','fff'],items:[3]}]};
//var form = {'1-1':'aaa','1-2':['sss','ddd','fff']};
//
//var b = new Block();
//
//console.log(b.getScore(form,data));