let gulp = require('gulp');
let del = require('del');
let devServer = require('gulp-develop-server');

let isRelease = process.argv.indexOf('-r') > 0;

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