var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', function() {
  browserSync.init({
    server: ".",
    files: ["css.css", "js/*.js", "index.html"]
  });
});
