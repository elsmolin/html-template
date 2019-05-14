/**
 * Variables
 * Options
 * Main Tasks
 * Sub Tasks
 */

/* Variables */
import gulp from 'gulp'
import gulpPug from 'gulp-pug'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import htmlBeautify from 'gulp-html-beautify'
import { rollup } from 'rollup'
import babel from 'rollup-plugin-babel'
import clean from 'gulp-clean'
// import gulpImg from 'gulp-imagemin'
import browser  from 'browser-sync';

const { task, series, watch } = gulp

var consts = {
  src: {
    js: './src/index.js',
    jsOther: './src/js/third/**',
    sass: './src/index.scss',
    css: './src/css/**',
    pug: './src/pug/*.pug',
    img: './src/img/**',
    fonts: './src/fonts/**',
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
  plugins: [
    babel()
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
  read: false,
  allowEmpty: true
}

/* Main Tasks */
task('copyfiles', series(copyJS, copyFonts, copyCSS, copyImgs, function(done) {
  console.log("Копирование файлов произведено")
  console.log("Можно сделать что то еще после копирования...")
  done()
}));

task('build', series(clearDist, 'copyfiles', sass, pug, js));

task('default', series('build', server, watchTask));


/* Sub Tasks */
function watchTask() {
  watch(consts.watch.js).on('all', series(js, browser.reload));
  watch(consts.watch.pug).on('all', series(pug, browser.reload));
  watch(consts.watch.sass).on('all', series(sass, browser.reload));
  watch(consts.src.fonts).on('all', series(copyFonts, browser.reload));
  watch(consts.src.css).on('all', series(copyCSS, browser.reload));
  watch(consts.src.jsOther).on('all', series(copyJS, browser.reload));
  watch(consts.src.img).on('all', series(copyImgs, browser.reload));
}

function server(done) {
  browser.init({
    server: 'dist'
  });
  done();
}

function clearDist() {
  return gulp.src('./dist', cleanOptions)
    .pipe(clean())
};

function copyJS() {
  return gulp.src(consts.src.jsOther)
    .pipe(gulp.dest(consts.destDev.js));
};

function copyFonts() {
  return gulp.src(consts.src.fonts)
    .pipe(gulp.dest(consts.destDev.fonts));
};

function copyCSS() {
  return gulp.src(consts.src.css)
    // .pipe(gulpImg())
    .pipe(gulp.dest(consts.destDev.css));
};

function copyImgs() {
  return gulp.src(consts.src.img)
    .pipe(gulp.dest(consts.destDev.img));
};

function js() {
  return rollup(rollupOptions)
    .then(bundle => {
      return bundle.write({
        file: `${consts.destDev.js}/index.js`,
        format: 'umd',
      });
    });
};

function sass() {
  return gulp.src(consts.src.sass)
    .pipe(gulpSass())
    .pipe(autoprefixer(prefixOptions))
    .pipe(gulp.dest(consts.destDev.css));
};

function pug() {
  return gulp.src(consts.src.pug)
    .pipe(gulpPug(pugOptions))
    .pipe(htmlBeautify(htmlOptions))
    .pipe(gulp.dest(consts.destDev.html))
};


/* New */
// import gutil from 'gulp-util'
// import gulpFile from 'gulp-file'

// import gulp     from 'gulp';
// import plugins  from 'gulp-load-plugins';
// import browser  from 'browser-sync';
// import yargs    from 'yargs';
// import lazypipe from 'lazypipe';
// import fs       from 'fs';
// import siphon   from 'siphon-media-query';
// import path     from 'path';
// import merge    from 'merge-stream';
// import beep     from 'beepbeep';
// import colors   from 'colors';

// const $ = plugins();

// // Look for the --production flag
// const PRODUCTION = !!(yargs.argv.production);
// const EMAIL = yargs.argv.to;

// // Declar var so that both AWS and Litmus task can use it.
// var CONFIG;

// // Compile Sass into CSS
// function sass() {
//   return gulp.src('src/assets/scss/app.scss')
//     .pipe($.if(!PRODUCTION, $.sourcemaps.init()))
//     .pipe($.sass({
//       includePaths: ['node_modules/foundation-emails/scss']
//     }).on('error', $.sass.logError))
//     .pipe($.if(PRODUCTION, $.uncss(
//       {
//         html: ['dist/**/*.html']
//       })))
//     .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
//     .pipe(gulp.dest('dist/css'));
// }

// // Inlines CSS into HTML, adds media query CSS into the <style> tag of the email, and compresses the HTML
// function inliner(css) {
//   var css = fs.readFileSync(css).toString();
//   var mqCss = siphon(css);

//   var pipe = lazypipe()
//     .pipe($.inlineCss, {
//       applyStyleTags: false,
//       removeStyleTags: true,
//       preserveMediaQueries: true,
//       removeLinkTags: false
//     })
//     .pipe($.replace, '<!-- <style> -->', `<style>${mqCss}</style>`)
//     .pipe($.replace, '<link rel="stylesheet" type="text/css" href="css/app.css">', '')
//     .pipe($.htmlmin, {
//       collapseWhitespace: true,
//       minifyCSS: true
//     });

//   return pipe();
// }

// // Ensure creds for Litmus are at least there.
// function creds(done) {
//   var configPath = './config.json';
//   try { CONFIG = JSON.parse(fs.readFileSync(configPath)); }
//   catch(e) {
//     beep();
//     console.log('[AWS]'.bold.red + ' Sorry, there was an issue locating your config.json. Please see README.md');
//     process.exit();
//   }
//   done();
// }
