import fs from 'fs';
import yargs from 'yargs';
import replace from 'gulp-replace';
import gulp from 'gulp'
import gulpIf from 'gulp-if'
import gulpPug from 'gulp-pug'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import htmlBeautify from 'gulp-html-beautify'
import { rollup } from 'rollup'
import babel from 'rollup-plugin-babel'
import clean from 'gulp-clean'
import gulpImg from 'gulp-imagemin'
import browser  from 'browser-sync';


const { task, series, watch } = gulp

const PRODUCTION = !!(yargs.argv.production);  // --production флаг
const CONFIG_PATH = './config.json'
let CONFIG = JSON.parse(fs.readFileSync(CONFIG_PATH).toString());
const MAIN_JS = 'index.js'
const MAIN_SCSS = 'index.scss'
const REMOTE_PATH = './dist'
const CONSTS = {
  src: {
    js: `./src/${MAIN_JS}`,
    jsLibs: './src/js/third/**',
    sass: `./src/${MAIN_SCSS}`,
    css: './src/css/**',
    pug: './src/pug/*.pug',
    img: './src/img/**',
    fonts: './src/fonts/**',
  },
  dist: {
    js: `${REMOTE_PATH}/js`,
    css: `${REMOTE_PATH}/css`,
    html: `${REMOTE_PATH}`,
    img: `${REMOTE_PATH}/img`,
    fonts: `${REMOTE_PATH}/fonts`,
  },
  watch: {
    js: ['./src/js/*.js', `./src/${MAIN_JS}`],
    sass: ['./src/scss/*.scss', `./src/${MAIN_SCSS}`],
    pug: ['./src/pug/**/*.pug'],
    json: CONFIG_PATH
  }
}
const HTML_OPTIONS = {
  indentSize: 2,
  unformatted: [
    // https://www.w3.org/TR/html5/dom.html#phrasing-content
    'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript', 'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small', 'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text', 'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
  ]
};
const ROLLUP_OPTIONS = {
  input: CONSTS.src.js,
  plugins: [
    babel()
  ]
}
const PREFIXER_OPTIONS = {
  browsers: ['last 2 versions'],
  cascade: false
}
const PUG_OPTIONS = {
  pretty: true
}
const CLEAN_OPTIONS = {
  read: false,
  allowEmpty: true
}


/* Main Tasks */
task('copyfiles', series(copyJS, copyFonts, copyCSS, copyImgs, function(done) {
  // ToDo...
  done()
}));

task('buildHTML', series(pug, injectFiles));

task('build', series(clearDist, 'copyfiles', sass, js, 'buildHTML'));

task('default', series('build', server, watchTask));


/* Sub Tasks */
function watchTask() {
  watch(CONSTS.watch.js).on('all', series(js, browser.reload));
  watch(CONSTS.watch.pug).on('all', series('buildHTML', browser.reload));
  watch(CONSTS.watch.sass).on('all', series(sass, browser.reload));
  watch(CONSTS.watch.json).on('all', series('buildHTML', browser.reload));

  watch(CONSTS.src.fonts).on('all', series(copyFonts, browser.reload));
  watch(CONSTS.src.css).on('all', series(copyCSS, browser.reload));
  watch(CONSTS.src.jsLibs).on('all', series(copyJS, browser.reload));
  watch(CONSTS.src.img).on('all', series(copyImgs, browser.reload));
}

function server(done) {
  browser.init({
    server: REMOTE_PATH
  });
  done();
}

function clearDist() {
  return gulp.src(REMOTE_PATH, CLEAN_OPTIONS)
    .pipe(clean())
};

function copyJS() {
  return gulp.src(CONSTS.src.jsLibs)
    .pipe(gulp.dest(CONSTS.dist.js));
};

function copyFonts() {
  return gulp.src(CONSTS.src.fonts)
    .pipe(gulp.dest(CONSTS.dist.fonts));
};

function copyCSS() {
  return gulp.src(CONSTS.src.css)
    .pipe(gulp.dest(CONSTS.dist.css));
};

function copyImgs() {
  return gulp.src(CONSTS.src.img)
    .pipe(gulpIf(PRODUCTION, gulpImg()))
    .pipe(gulp.dest(CONSTS.dist.img));
};

function js() {
  return rollup(ROLLUP_OPTIONS)
    .then(bundle => {
      return bundle.write({
        file: `${CONSTS.dist.js}/${MAIN_JS}`,
        format: 'umd',
      });
    });
};

function sass() {
  return gulp.src(CONSTS.src.sass)
    .pipe(gulpSass())
    .pipe(autoprefixer(PREFIXER_OPTIONS))
    .pipe(gulp.dest(CONSTS.dist.css));
};

function pug() {
  return gulp.src(CONSTS.src.pug)
    .pipe(gulpPug(PUG_OPTIONS))
    .pipe(htmlBeautify(HTML_OPTIONS))
    .pipe(gulp.dest(CONSTS.dist.html))
};

function injectFiles() {
  let styles = ''
  let scripts = ''
  CONFIG = JSON.parse(fs.readFileSync(CONFIG_PATH).toString())

  CONFIG[PRODUCTION ? 'cssProd' : 'css'].forEach(cssLib => {
    styles += `<link rel="stylesheet" href="./css/${cssLib}">`
  });

  CONFIG[PRODUCTION ? 'jsProd' : 'js'].forEach(jsLib => {
    scripts += `<script src="./js/${jsLib}"></script>`
  });

  return gulp.src(`${REMOTE_PATH}/*.html`)
    .pipe(replace('NAME_PROJECT', CONFIG.name_project))
    .pipe(replace('<!-- <include_styles> -->', styles))
    .pipe(replace('<!-- <include_scripts> -->', scripts))
    .pipe(gulp.dest(CONSTS.dist.html));
}
