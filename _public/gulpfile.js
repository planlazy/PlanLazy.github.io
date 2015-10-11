var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var stylish = require('jshint-stylish');

gulp.task('lint', function() {
  return gulp.src(['_public/**/*.json'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});