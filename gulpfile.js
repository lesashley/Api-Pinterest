var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var config = {
  source: './src/',
  dist: './public'
};

var paths = {
  assets: "assets/",
  html: "**/*.html",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  mainJS: "js/app.js"
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: paths.assets + paths.sass,
  js: config.source + paths.js,
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
  gulp.src(sources.rootJS)
    .pipe(browserify())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(config.dist + paths.assets + "js"));
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
      baseDir: config.build
    }
  });
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.sass, ["sass-watch"]);
  gulp.watch(sources.js, ["js-watch"]);
});
