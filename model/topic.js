'use strict';

function Topic(type,title,score){
    this.title = title;
    this.type = type;
    this.score = score;
    this.content = [];
}


Topic.prototype.addContent = function(name,items,description,stdAnswer){
    this.content.push({name:name,items:items,description:description,stdAnswer:stdAnswer});
};

Topic.prototype.getScore = function(){

};

module.exports = Topic;