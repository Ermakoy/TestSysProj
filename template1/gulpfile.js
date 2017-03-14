/* ------------------------------ *\
 *
 * This is a simple gulp config that
 * will helps to anyone, who needs
 * sass, pug and babel in theyr project!
 *
 * follow this project structure:
 *
 * > Poject
 *   > src
 *     > sass (folder with styles)
 * 	   > js (folder with scripts)
 * 	   > index.pug (main template)
 *   > gulpfile.js
 *   > package.json
 *
 * author: https://loonywizard.github.io
 *
/* ------------------------------ */

const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
const babel = require("gulp-babel");
const path = require("path");

gulp.task("sass", function() {
	return gulp.src("src/sass/**/*.{sass,scss}")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest('build/css'));
});

gulp.task("sass:watch", function() {
	gulp.watch("src/sass/**/*.{sass,scss}", gulp.parallel("sass"));
});

gulp.task("pug", function() {
	return gulp.src("src/*.pug")
		.pipe(pug())
		.pipe(gulp.dest("build/"));
});

gulp.task("pug:watch", function() {
	gulp.watch("src/*.pug", gulp.parallel("pug"));
});

gulp.task("babel", function() {
	return gulp.src("src/js/**/*.js")
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(gulp.dest("build/js/"));
});

gulp.task("babel:watch", function() {
	gulp.watch("src/js/**/*.js", gulp.parallel("babel"));
});

gulp.task("watch", gulp.parallel(
	"sass:watch", "pug:watch", "babel:watch"
));

gulp.task("default", gulp.parallel(
	"sass", "pug", "babel", "watch"
));