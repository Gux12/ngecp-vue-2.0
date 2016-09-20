var gulp = require('gulp');
var named = require('vinyl-named');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var webpackConfig = require('./webpack.config');
var browserSync = require('browser-sync').create();

gulp.task('default',['browser-sync']);

gulp.task('webpack',function(){
    return gulp.src('src/main.js')
        .pipe(named())
        .pipe(gulpWebpack(webpackConfig,webpack))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', ['webpack'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            routes: {}

        },
        ui: {
            port: 2312,
            weinre: {
                port: 9090
            }
        },
        port: 2311,
        logFileChanges: true,
        browser: "google chrome",

    });
    gulp.watch(['src/**/*.*','src/*.*'], ['webpack']);
    gulp.watch("views/*.html").on('change', browserSync.reload);
});