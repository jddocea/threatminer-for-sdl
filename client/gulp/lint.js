'use strict';

var gulp = require('gulp'),
	plugins = {
		eslint: require('gulp-eslint')
	};

var files = require('./config').files;


function lint() {
	// Note: To have the process exit with an error code (1) on lint error, return the stream and pipe to failOnError last.
	return gulp.src([files.moduleScripts, files.scripts, '!' + files.tests, '!' + files.bowerComponents, '!' + files.tmp])
		.pipe(plugins.eslint({ rulePaths: [ "eslint/rules/" ] }))
		.pipe(plugins.eslint.format())
		.pipe(plugins.eslint.failAfterError());
}
lint.description = 'Ensures scripts (.js files in app directory) follow the style standards set in the .eslintrc file';

function cilint() {
	var reporter = require('../eslint/reports/teamcity-lite-reporter');
	// Note: To have the process exit with an error code (1) on lint error, return the stream and pipe to failOnError last.
	return gulp.src([files.moduleScripts, files.scripts, '!' + files.tests, '!' + files.bowerComponents, '!' + files.tmp])
		.pipe(plugins.eslint({ rulePaths: [ "eslint/rules/" ] }))
		.pipe(plugins.eslint.format(reporter, function(results) { } ))
		.pipe(plugins.eslint.failAfterError());
}
cilint.description = 'Ensures scripts (.js files in app directory) follow the style standards set in the .eslintrc file';

module.exports = {
	lint: lint,
	cilint: cilint
};