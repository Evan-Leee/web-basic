var mysql = require('mysql');
var sql = require('../config/data-base');

function DataBase() {
    this.data = undefined;
}

DataBase.prototype.dataInit = function () {
    var that = this;
    var connection = mysql.createConnection({
        host: sql.host,
        user: sql.user,
        password: sql.password,
        database: sql.database
    });

    connection.connect();

    connection.query("select description,type,score,question.name,stdAnswer,group_concat(opt,val) as options from question,items where question.name=items.name group by question.name ", function (err, rows, fields) {
        if (err) throw  err;
        that.data = rows;

    });

    connection.end();
};


module.exports = DataBase;