var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;




gulp.task('start',function(){
    nodemon({
        script: 'app.js'
        , ext: 'ejs js json'
        , ignore: ['public/*']
    })
        .on('restart', function () {
            console.log('restarted!')
        });
});


gulp.task('dbinit',function(){
    exec('mysql -u root -p838581 < ./public/sql/create.sql');
    console.log('数据库已初始化!')
});

gulp.task('dbdrop',function(){
    exec('mysql -u root -p838581 < ./public/sql/drop.sql');
    console.log('数据库已删除!')
});

