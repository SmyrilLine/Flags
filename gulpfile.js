'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

gulp.task('img', function () {
    del(['dist'])
    return gulp.src('css_sprites_compressed.png')
        .pipe(gulp.dest('dist/'));
});

gulp.task('style', function () {
    return gulp.src('flags.css')
        //.pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(csso())
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', gulp.series('img', 'style'));

// gulp.task('default', ['clean'], function () {
//     runSequence(
//       'styles',
//     );
// });
