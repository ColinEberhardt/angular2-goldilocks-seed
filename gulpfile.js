const gulp = require('gulp');
const clean = require('gulp-clean');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tscConfig = require('./tsconfig.json');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return gulp.src(['dist'])
     .pipe(clean());
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy', ['clean'], function() {
  return gulp.src(['src/**/*.html', 'src/**/*.css'])
    .pipe(gulp.dest('dist'))
});

// copy dependencies
gulp.task('copy-libs', ['clean'], function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2.min.js',
      'node_modules/systemjs/dist/system-csp-production.js'
    ])
    .pipe(gulp.dest('dist/lib'))
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist'));
});

// Run browsersync for development
gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch('src/**/*.*', ['buildAndReload']);
});

gulp.task('build', ['compile', 'copy-libs', 'copy']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);
