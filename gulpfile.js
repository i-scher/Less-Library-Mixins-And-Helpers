var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('scss', function(){
	gulp.src(['scss/style.scss'])
		.pipe(sass())
		.pipe(gulp.dest('tests/scss'))
		.on('error', function(err){
			console.log(err.message);
		});
});

// DEFAULT TASK
gulp.task('default', ['scss']);