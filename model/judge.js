'use strict';

function Judge(type,title,score){
    Topic.call(this,type,title,score);
}

Judge.prototype = Object.create(Topic.prototype);

Judge.prototype.constructor = Judge;

Judge.prototype.getScore = function(form,data){

    var score = 0;
    data.content.forEach(function(element){

       if(form[element.name] === element.stdAnswer){
           score += data.score;
       }
    });
};

