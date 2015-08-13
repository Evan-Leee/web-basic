'use strict';

function ShortAnswer(type,title,score){
    Topic.call(this,type,title,score);
}

ShortAnswer.prototype = Object.create(Topic.prototype);

ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.getScore = function(form,data){

    var score = 0;
    data.content.forEach(function(element){

        if(form[element.name] === element.stdAnswer){
            score += data.score;
        }

    });

};
