'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

const config = {
	source: "./src/",
	dist: "./public/"
};

const paths = {
	assets: "assets/",
	html: "/*.html",
	js: "js/**/*.js",
	sass: "scss/**/*.scss",
	img: "images/*.png",
	mainSass: "scss/style.scss",
	mainJs: "js/index.js"
};

const sources = {
	assets: config.source + paths.assets,
	html: config.source + paths.html,
	sass: paths.assets + paths.sass,
	js: paths.assets + paths.js,
	img: paths.assets + paths.img,
	rootSass: config.source + paths.assets + paths.mainSass,
	rootJs: config.source + paths.assets + paths.js
};
gulp.task('img', ()=>{
	gulp.src(config.source+sources.img)
	.pipe(gulp.dest(config.dist+paths.assets+"img"))
});

//configurando las tareas en gulp
gulp.task('html', ()=>{
	gulp.src(sources.html)
	.pipe(gulp.dest(config.dist));
});

gulp.task('sass', ()=>{
	gulp.src(sources.rootSass)
	.pipe(sass({
			outputStyle: "compressed"
		}).on("Error", sass.logError))
	.pipe(gulp.dest(config.dist+paths.assets+"css"));
});

gulp.task('js', ()=>{
	gulp.src(["./src/assets/js/components/dashboard.js","./src/assets/js/components/header.js","./src/assets/js/utils/get-json.js","./src/assets/js/index.js"])
	.pipe(concat('index.js'))
	.pipe(gulp.dest(config.dist+paths.assets+"js"))
});

// gulp.task('img', ()=>{
// 	gulp.src(config.source+sources.images)
// 	.pipe(gulp.dest(config.dist+paths.assets+"img"))
// });

gulp.task('sass-watch',['sass'], (done)=>{
	browserSync.reload();
	done();
});

gulp.task('js-watch',['js'], (done)=>{
	browserSync.reload();
	done();
});

gulp.task('html-watch',['html'], (done)=>{
	browserSync.reload();
	done();
});

gulp.task('img-watch',['img'], (done)=>{
	browserSync.reload();
	done();
});

gulp.task('serve', ()=>{
	browserSync.init({
		server:{
			baseDir: config.dist
		}
	});

	gulp.watch(sources.html, ['html-watch']);
	gulp.watch(config.source+sources.sass, ['sass-watch']);
	gulp.watch(config.source+sources.js, ['js-watch']);
	gulp.watch(config.source+sources.img, ['img-watch']);
});
