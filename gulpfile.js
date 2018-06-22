const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const vsftp = require('gulp-vsftp');
const zip = require('gulp-zip');
const moment = require('moment-kirk');
const webpackFile = require("./config/webpack/webpack.file.conf");
const packageInfo = require("./package.json");

gulp.task('buildTime', () =>
  fs.writeFile(path.resolve(webpackFile.proDirectory) + "/buildTime.txt", moment(new Date()).format('YYYY-MM-DD HH:mm:ss') +' '+ packageInfo.version , function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!",path.resolve());
  })
);
// 打包目录
gulp.task('zip', ()=>
    gulp.src(path.resolve(webpackFile.proDirectory + '/**'))
        .pipe(zip('pc-['+ packageInfo.version +']-[' + moment(new Date()).format('YYYY-MM-DD HH-mm-ss')+'.zip'))
        .pipe(gulp.dest('backup'))
)

// 上传目录
gulp.task('pc',function () {
    return gulp.src(webpackFile.proDirectory + '/**')
        .pipe(vsftp({
            host: '118.24.165.123',
            user: 'root',
            pass: 'zzw262620',
            cleanFiles: true,
            port:11240,
            remotePath: '/www/wwwroot/ele.zzwio.com/',
        }))
})

