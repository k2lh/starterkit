var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var path = require('path');

gulp.task('less', function() {
    return gulp.src('app/less/bootstrap.less')
        .pipe(plumber())
        .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch('app/less/*.less', ['less']);
});

gulp.task('default', ['watch']);