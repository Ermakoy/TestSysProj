const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
const path = require("path");
const webpack = require("gulp-webpack");

gulp.task("js", function() {
	return gulp.src("src/js/index.js")
		.pipe(webpack({
		    entry: './src/js/index',
		    output: {
		        filename: 'scripts.js',
		        path:__dirname
		    },
		    module: {
		        loaders: [
		            {
		                test: /\.js$/,
		                include: [
		                    path.join(__dirname, 'src')
		                ],
		                loader: 'babel-loader',
		                query: {
		                    presets: ['es2015', 'react'],
		                    plugins: ['transform-runtime', 'transform-object-rest-spread']
		                }
		            }
		        ]
		    }
		}))
		.pipe(gulp.dest("build"))
});

gulp.task("js:watch", function() {
	gulp.watch("src/js/**/*.{js,jsx}", gulp.parallel("js"));
});

// compile sass to css
gulp.task("sass", function() {
	return gulp.src("src/sass/**/*.{sass,scss}")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest('build/css'));
});

// watch for sass files changes
gulp.task("sass:watch", function() {
	gulp.watch("src/sass/**/*.{sass,scss}", gulp.parallel("sass"));
});

// compile pug to html
gulp.task("pug", function() {
	return gulp.src("src/*.pug")
		.pipe(pug())
		.pipe(gulp.dest("build/"));
});

// watch for pug files changes
gulp.task("pug:watch", function() {
	gulp.watch("src/*.pug", gulp.parallel("pug"));
});

gulp.task("watch", gulp.parallel(
	"js:watch", "sass:watch", "pug:watch"// , "babel:watch"
));

gulp.task("default", gulp.parallel(
	"js", "sass", "pug", "watch" //, "babel"
));