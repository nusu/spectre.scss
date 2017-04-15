var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');

var autoprefix = autoprefixer({ browsers: ['last 3 versions'] });

gulp.task('watch', function() {
  gulp.watch('./**/*.scss', ['build']);
});

gulp.task('build', function() {
  gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefix)
    .pipe(csscomb())
    .pipe(gulp.dest('./dist'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['build']);