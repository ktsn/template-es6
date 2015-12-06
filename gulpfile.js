/* eslint-env node */
'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const eslint = require('gulp-eslint');
const webpack = require('webpack');
const del = require('del');

gulp.task('clean', (done) => {
  del(['dist'], done);
});

gulp.task('eslint', () => {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('webpack', (done) => {
  webpack(require(__dirname + '/webpack.conf'), (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString());
    done();
  });
});

gulp.task('webpack:dev', () => {
  const compiler = webpack(require(__dirname + '/webpack.conf.dev'));

  compiler.watch(200, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString());
  });
});

gulp.task('build', ['eslint', 'webpack']);
gulp.task('default', ['webpack:dev']);
