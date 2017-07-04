var gulp=require('gulp');
var sass = require('gulp-sass');
var browserify=require('gulp-browserify');
// tiene una funcion de reload que una vez
var rename=require('gulp-rename');
var browserSync=require('browser-sync').create();

var config = { //objetos
  source: './src/', //origen
  dist: './public/' //destino
};

var paths = { //los directorios  //objetos
  assets:'assets/',
html:"**/*.html",
js: "js/**.js",
sass:'scss/**/*.scss',
mainSass:'scss/style.scss',
mainJs :'js/index.js'
};

var sources = { //match de config y paths
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: paths.assets + paths.assets +paths.sass,
  js: config.source + paths.assets + paths.js,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS
};

gulp.task('html', () => {
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task("sass", function() {
  gulp.src(sources.rootSass)
    .pipe(sass({
      outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("js", function() {
  gulp.src(sources.js)
    .pipe(browserify())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(config.dist + paths.assets + 'js'));
});

gulp.task("sass-watch", ["sass"], function(done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function(done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function(done) {
  browserSync.reload();
  done();
});

gulp.task("serve",function() {
  browserSync.init({
    server: {
      baseDir: config.dist
    }
  });
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.sass, ["sass-watch"]);
  gulp.watch(sources.rootJS, ["js-watch"]);
});
