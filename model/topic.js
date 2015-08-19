'use strict';

function Topic(type,description,score,name,stdAnswer){
    this.description = description;
    this.type = type;
    this.score = score;
    this.name = name;
    this.stdAnswer = stdAnswer.split('-');
    this.options = [];
}


Topic.prototype.addOption = function(options){
    var that = this;
    if(options){
        var array = options.split(',');
        array.forEach(function(option){
            that.options.push({key:option[0],value:option.substring(1)});
        });

    }

};

Topic.prototype.getScore = function(){

};

module.exports = Topic;