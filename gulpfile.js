/// <binding BeforeBuild='visualStudioBuild' />
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var rename = require('gulp-rename');
var streamify = require('gulp-streamify'); // required for uglify
var uglify = require('gulp-uglify'); // minify JS
var buffer = require('vinyl-buffer'); // needed to use uglify with Browserify
var source = require('vinyl-source-stream'); // required to dest() for browserify
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var notifier = require('node-notifier');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var nunjucksRender = require('gulp-nunjucks-render');
var htmlbeautify = require('gulp-html-beautify');

gulp.task('sass', function () {
	return gulp.src('./assets/sass/main.scss')
	.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError)) // .on('error', sass.logError) prevents gulp from crashing when saving a typo or syntax error
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./assets/sass'))
	.pipe(browserSync.stream()); // causes injection of styles on save
});

gulp.task('sync', ['sass'], function() {
	browserSync.init({
		open: true,
		startPath: "index.html",
		server: {
			baseDir: "./",
		}
	});
});

var vendors = {
	merge: [
		'./assets/vendors/js/jquery-2.2.3.min.js', 
		'./assets/vendors/js/bootstrap.min.js',
		'./assets/vendors/js/swiper.jquery.min.js',
		'./assets/vendors/js/bootstrap-select.min.js'
	]
};

gulp.task('vendors', function() {
	return gulp.src(vendors.merge)
		.pipe(concat('vendors.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/vendors/js/'));
});

gulp.task('javascript', function() {
		
	var bundleStream = browserify('./assets/js/main.js').bundle().on('error', function(err) {

		console.log(err.stack);
		notifier.notify({
			'title': 'Browserify Compilation Error',
			'message': err.message
		});
		this.emit('end');
	});

	return bundleStream
		.pipe(source('main.js'))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('./assets/js/'))
		.pipe(browserSync.stream());
});

gulp.task('validateJS', function() {
	return gulp.src(['./assets/js/**/*.js', '!./assets/js/bundle.js'])
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
	gulp.watch(['./static/src/**/*.html', '!partials', '!components'], ['compileHTML']);
	gulp.watch(['./assets/js/**/*.js', '!./assets/js/bundle.js'], ['javascript']);
	gulp.watch(['./assets/vendors/js/*.js', '!./assets/vendors/js/vendors.min.js'], ['vendors']);
	gulp.watch(['./**/*.njk', './**/*.svg'], ['buildHTML']);
});

// Building out prototype using partials
gulp.task('buildHTML', function() {
	
	var formattingOptions = {
		"indent_with_tabs": true,
		"preserve_newlines": true,
		"max_preserve_newlines": 1
	};
	
	return gulp.src('./templates/pages/**/*.+(html|njk)')
		.pipe(nunjucksRender({
			path: ['./']
		}))
		.pipe(htmlbeautify(formattingOptions))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream());
});

// Default Task
gulp.task('default', ['buildHTML', 'sync', 'vendors', 'validateJS', 'javascript', 'sass', 'watch']);