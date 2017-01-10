/* jshint strict: false */
'use strict';

var args = require('yargs').argv;
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ camelize:true });
var basePath = 'Resources/Public/';

var isProduction = /prod/i.test(args.env);

gulp.task('styles', function() {
	gulp.src(basePath + 'scss/**')
		.pipe($.plumber())
		.pipe($.sass({
			//includePaths: config.source.includePaths,
			// imagePath: config.dest.images,
			sourceComments: 'map',
			sourceMap: isProduction === false,
			errLogToConsole: true
		}))
		.pipe($.autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe($.if(isProduction,
			$.csso() // only minify/compress on Production
		))
		.pipe(gulp.dest(basePath + 'css/'))
		.pipe($.size({ showFiles:true }))
		.pipe($.size({ gzip:true }))
	;
});

gulp.task('build', [
	'styles'
]);

// Watch
gulp.task('watch', ['build'], function () {
	// Watch .scss files
	gulp.watch(basePath + 'scss/', ['styles']).on('change');
});

// Default Task
gulp.task('default', ['build']);
