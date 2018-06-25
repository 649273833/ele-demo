const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const vsftp = require('gulp-vsftp');
const zip = require('gulp-zip');
const moment = require('moment-kirk');
const webpackFile = require("./config/webpack/webpack.file.conf");
const packageInfo = require("./package.json");

/* 生成构建时间 存放在 生产目录里*/
gulp.task('buildTime', () =>
  fs.writeFile(path.resolve(webpackFile.proDirectory) + "/buildTime.txt", moment(new Date()).format('YYYY-MM-DD HH:mm:ss') +' '+ packageInfo.version , function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!",path.resolve());
  })
);
/* 打包生产目录 */
gulp.task('zip', () =>
  gulp.src(path.resolve(webpackFile.proDirectory + '/**'))
    .pipe(zip('pc-[' + packageInfo.version +']-['+ moment(new Date()).format('YYYY-MM-DD HH-mm-ss')+'].zip'))
    .pipe(gulp.dest('backup'))
);
/* 上传生产目录到  */
gulp.task('pc', function () {
  return gulp.src(webpackFile.proDirectory+'/**')
    .pipe(vsftp({
        host: '127.0.0.1',
        user: 'root',
        pass: '0000',
        cleanFiles: true,
        port:22,
        remotePath: '/www/',
     }))
});


