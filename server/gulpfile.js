const gulp = require('gulp4');
const del = require('del');
const devServer = require('gulp-develop-server');

const isRelease = process.argv.indexOf('-r') > 0;

gulp.task('clean', (done) => {
  del(['./dist']).then(() => done());
});

gulp.task('copy', () => {
  return gulp.src(['./package.json', './pnpm-lock.yaml']).pipe(gulp.dest('./dist'));
});

gulp.task('serve', (done) => {
  devServer.listen({ path: './dist/index.js' });
  done();
});

gulp.task('restart', (done) => {
  devServer.restart();
  done();
});

gulp.task('watch', (done) => {
  gulp.watch(['./dist/**/*'], gulp.series('restart'));
  done();
});

gulp.task('default', isRelease ? gulp.series('clean', 'copy') : gulp.series('serve', 'watch'));
