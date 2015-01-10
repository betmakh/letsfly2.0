var gulp          = require('gulp'),
    connect       = require('gulp-connect'),
    less          = require('gulp-less'),
    prefix        = require('gulp-autoprefixer'),
    minifyCSS     = require('gulp-minify-css'),
    autowatch     = require('gulp-autowatch'),
    plumber       = require('gulp-plumber');
    // uglify        = require('gulp-uglify');


// HTML

gulp.task('htmls', function () {
  gulp.src(['*.html'])
    .pipe(connect.reload());
});


// SCSS

gulp.task('styles', function() {
  return gulp.src(['css/less/global.less'] )
    .pipe(plumber())
    .pipe(less())
    .pipe(prefix([{  browsers: ['IE 8', 'IE 9', 'last 5 versions', 'Firefox 14', 'Opera 11.1']  }]))
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

// gulp.task('basicshopStyles', function() {
//   return gulp.src('css/less/basicShop.less')
//     .pipe(plumber())
//     .pipe(less())
//     .pipe(prefix([{  browsers: ['IE 8', 'IE 9', 'last 5 versions', 'Firefox 14', 'Opera 11.1']  }]))
//     .pipe(minifyCSS({keepBreaks: true}))
//     .pipe(gulp.dest('css'))
//     .pipe(connect.reload());
// });

// JS

// WATCH

var paths = {
  htmls:          ['*.html'],
  // basicshopStyles: 'ccs/less/basicShop/*.less',
  styles:         'css/less/*.less'
};

gulp.task('watch', function(cb) {
  autowatch(gulp, paths);
  return cb();
});

// LIVERELOAD 

gulp.task('connect', function() {
  connect.server({
    port: '3005',
    livereload: true
  });
});

// DEFAULT

gulp.task('default',  [
  'connect',
  // 'basicshopStyles',
  'styles',
  'watch'
  ]);