'use strict';
var data = require('../data.json');
var Factory = require('./factory');
var Topic = require('./topic');

function Data(){
    this.data = data;
    this.dataArray = [];
}

Data.prototype.setData = function(){

    var that = this;
    this.data.forEach(function(element){
        var topic = new Topic(element.type,element.title,element.score);

        element.content.forEach(function(content){
           topic.addContent(content.name,content.items,content.description,content.stdAnswer) ;
        });

        that.dataArray.push(topic);
    });
}