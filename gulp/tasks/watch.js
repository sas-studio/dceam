'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/**/*.css', $.gulp.series('css'));
    $.gulp.watch('./source/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./source/**/*.html', $.gulp.series('copy:html'));
    $.gulp.watch('./source/**/*.svg', $.gulp.series('sprite:svg'));
  });
};
