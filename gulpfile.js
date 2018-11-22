/**
 * Variables
 * Options
 * Main Tasks
 * Sub Tasks
 */

/* Variables */

var gulp = require('gulp');
var gulpPug = require('gulp-pug');
var gulpSass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var htmlBeautify = require('gulp-html-beautify');
var gulpRollup = require('gulp-rollup');
var gulpBabel = require('rollup-plugin-babel');
var clean = require('gulp-clean');
var gulpImg = require('gulp-imagemin');

var consts = {
  src: {
    js: './src/index.js',
    jsOther: './src/js/third/*',
    sass: './src/index.scss',
    pug: './src/pug/*.pug',
    img: './src/img/*',
    fonts: './src/fonts/*',
    html: './build/tmp/*',
  },
  destDev: {
    js: './dist/js',
    css: './dist/css',
    html: './dist',
    img: './dist/img',
    fonts: './dist/fonts',
  },
  watch: {
    js: ['./src/js/*.js', './src/index.js'],
    sass: ['./src/scss/*.scss', './src/index.scss'],
    pug: ['./src/pug/**/*.pug'],
    img: './src/img/*',
    fonts: './src/fonts/*',
  }
}


/* Options */

var htmlOptions = {
  indentSize: 2,
  unformatted: [
    // https://www.w3.org/TR/html5/dom.html#phrasing-content
    'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript', 'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small', 'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text', 'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
  ]
};
var rollupOptions = {
  input: consts.src.js,
  allowRealFiles: true,
  output: {
    format: 'umd',
  },
  plugins: [
    // rollupIncludePaths(includePathOptions),
    gulpBabel({
      presets: ['es2015-rollup'],
      babelrc: false
    })
  ]
}
var prefixOptions = {
  browsers: ['last 2 versions'],
  cascade: false
}
var pugOptions = {
  pretty: true
}
var cleanOptions = {
  read: false
}


/* Main Tasks */
/**
 * 1. gulp
 */

gulp.task('default', [
  'sass',
  'pug',
  'img',
  'fonts',
  'js',
  'watch',
]);


/* Sub Tasks */
/**
 * 1. clean
 * 2. fonts
 * 3. img
 * 4. js
 * 5. sass
 * 6. pug
 * 7. watch
 */

gulp.task('clean', function() {
  gulp.src('./dist', cleanOptions)
      .pipe(clean())
})

gulp.task('fonts', function() {
  gulp.src(consts.src.fonts)
      .pipe(gulp.dest(consts.destDev.fonts))
})

gulp.task('img', function() {
  gulp.src(consts.src.img)
      .pipe(gulpImg())
      .pipe(gulp.dest(consts.destDev.img))
})

gulp.task('js', function() {
  gulp.src(consts.src.js)
      .pipe(gulpRollup(rollupOptions))
      .pipe(gulp.dest(consts.destDev.js));
  gulp.src(consts.src.jsOther)
      .pipe(gulp.dest(consts.destDev.js));
});

gulp.task('sass', function () {
  gulp.src(consts.src.sass)
      .pipe(gulpSass())
      .pipe(autoprefixer(prefixOptions))
      .pipe(gulp.dest(consts.destDev.css));
});

gulp.task('pug', function () {
  gulp.src(consts.src.pug)
      .pipe(gulpPug(pugOptions))
      .pipe(htmlBeautify(htmlOptions))
      .pipe(gulp.dest(consts.destDev.html))
});

gulp.task('watch', function() {
  gulp.watch(consts.watch.fonts, ['fonts'])
  gulp.watch(consts.watch.sass, ['sass'])
  gulp.watch(consts.watch.img, ['img'])
  gulp.watch(consts.watch.js, ['js'])
  gulp.watch(consts.watch.pug, ['pug'])
})