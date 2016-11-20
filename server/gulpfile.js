const gulp = require('gulp4');
const del = require('del');
const devServer = require('gulp-develop-server');

const isRelease = process.argv.indexOf('-r') > 0;

gulp.task('clean', done => {
  del(['./dist']).then(() => done());
});

gulp.task('copy', () => {
  return gulp.src([
    './src/**',
    './package.json'
  ])
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', done => {
  devServer.listen({ path: './src/index.js' });
  done();
});

gulp.task('restart', done => {
  devServer.restart();
  done();
});

gulp.task('watch', done => {
  gulp.watch([
    './src/**/*',
    '!./src/database/**'
  ], gulp.series('restart'));
  done();
});

gulp.task('default', isRelease ? gulp.series('clean', 'copy') : gulp.series('serve', 'watch'));