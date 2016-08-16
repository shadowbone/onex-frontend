var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('hello', function() {
  console.log('My name Is Setyabudi');
});


gulp.task('watch', function() {  
  gulp.watch('./src/**', ['copy']);
});

gulp.task('copy', function() {  
  gulp.src('./src/components/**/*.html')
    .pipe(gulp.dest('./public/javascript/components'));
});