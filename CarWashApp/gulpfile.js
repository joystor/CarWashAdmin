'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var htmlmin = require('gulp-htmlmin');
var template = require('gulp-underscore-template');
var stylus = require('gulp-stylus');
var nib = require('nib');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var react = require('gulp-react');
var babel = require('gulp-babel');

var DEV_DIR = 'src';
var OUTPUT_DIR = 'build';

var config = {
  stylus: {
    main: DEV_DIR+'/stylus/main.styl',
    watch: DEV_DIR+'/stylus/**/*.styl',
    output: OUTPUT_DIR+'/css/'
  },
  css: {
    main: DEV_DIR+'/css/*.css',
    watch: DEV_DIR+'/css/**/*.css',
    output: OUTPUT_DIR+'/css/'
  },
  html: {
    watch: DEV_DIR+'/*.html',
    output: OUTPUT_DIR+''
  },
  secciones: {
    watch: DEV_DIR+'/secciones/*.html',
    output: OUTPUT_DIR+'/secciones/'
  },
  js_libs: {
    watch: [DEV_DIR+'/js/*.js',DEV_DIR+'/js/*.map'],
    output: OUTPUT_DIR+'/js/'
  },

  images: {
    watch: DEV_DIR+'/images/**/*',
    output: OUTPUT_DIR+'/images/'
  },

  fonts:{
    watch: DEV_DIR+'/fonts/**/*',
    output: OUTPUT_DIR+'/fonts/'
  },

  appjs: {
		watch: [
				DEV_DIR+'/app/**/*.jsx',
				DEV_DIR+'/app/**/*.js',
				DEV_DIR+'/app.js',
			],
		output: OUTPUT_DIR+'/js/'
	},

  templates:{
		watch: DEV_DIR+'/app/templates/**/*.html',
		output: OUTPUT_DIR+'/js/'
	}
};


gulp.task('server',function() {
  gulp.src(OUTPUT_DIR)
    .pipe(webserver({
      host: '127.0.0.1',
      port: 8080,
      livereload: true
    }));
});

gulp.task('build:stylus', function(){
  gulp.src(config.stylus.main)
    .pipe(stylus({
      use: nib(),
      'include css': true
    }))
    .pipe(minifyCSS())
    .pipe(concat('css-stylus.css'))
    .pipe(gulp.dest(config.stylus.output));
});
gulp.task('build:css', function(){
  gulp.src(config.css.main)
    .pipe(minifyCSS())
    .pipe(concat('css-libs.css'))
    .pipe(gulp.dest(config.css.output));
});

gulp.task('build:html',function(){
  gulp.src(config.html.watch)
    .pipe(gulp.dest(config.html.output));
});

gulp.task('build:js_libs',function(){
  gulp.src(config.js_libs.watch)
		.pipe(gulp.dest(config.js_libs.output));
});


/*
gulp.task('build:images',function(){
  gulp.src(config.images.watch)
    .pipe(gulp.dest(config.images.output));
});*/

gulp.task('build:fonts',function(){
  gulp.src(config.fonts.watch)
    .pipe(gulp.dest(config.fonts.output));
});

gulp.task('build:images', function () {
    gulp.src(config.images.watch
)        //.pipe(imagemin())
        .pipe(gulp.dest(config.images.output));
});

gulp.task('build:appjs',function(){
	gulp.src(config.appjs.watch)
    .pipe(react({harmony: false, es6module: true}))
    .pipe(babel())
		.pipe(concat('app.js'))
		.pipe(gulp.dest(config.appjs.output));
});
gulp.task('build:templates',function(){
	gulp.src(config.templates.watch)
		.pipe(htmlmin({
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true
	    }))
		.pipe( template() )
		.pipe(replace('exports[', 'window.templates['))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest(config.templates.output));
});

gulp.task('watch',function(){
  gulp.watch(config.html.watch,['build:html']);
  gulp.watch(config.stylus.watch, ['build:stylus']);
  gulp.watch(config.css.watch, ['build:css']);
  gulp.watch(config.fonts.watch, ['build:fonts']);
  gulp.watch(config.images.watch, ['build:images']);
  gulp.watch(config.templates.watch, ['build:templates']);
  gulp.watch(config.js_libs.watch, ['build:js_libs']);
  gulp.watch(config.appjs.watch, ['build:appjs']);
});

gulp.task('build',[
  'build:stylus','build:css','build:html','build:js_libs','build:images',
  'build:fonts','build:appjs','build:templates']);

gulp.task('run',['server','watch','build']);
