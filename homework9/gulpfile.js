var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleancss     = require('gulp-clean-css'),
		rename       = require('gulp-rename'),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglifyjs');


gulp.task('styles', function () {
	return gulp.src('./assets/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	// .pipe(rename({suffix: '', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleancss())
	.pipe(gulp.dest('./assets/css/'))
});

gulp.task('scripts', function() {
	return gulp.src([
		'./assets/libs/jquery/jquery-1.12.1.min.js',
		'./assets/libs/plugins-scroll/plugins-scroll.js',
		'./assets/libs/flexslider/jquery.flexslider-min.js',
		'./assets/libs/masonry/masonry.pkgd.min.js',
		'./assets/libs/isotope/isotope.pkgd.min.js',
		'./assets/libs/fancybox/jquery.fancybox.pack.js',
		'./assets/libs/waypoint/jquery.waypoints.js',
		'./assets/libs/countto/jquery.countTo.js'
		])
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/'));
});

gulp.task('watch', function () {
	gulp.watch('assets/scss/**/*.scss', ['styles']);
	gulp.watch('gulpfile.js', ['scripts']);
});

gulp.task('default', ['watch']);