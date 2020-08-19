const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function intro() {
    return gulp.src('./intro.scss')
        .pipe(sass())
        .pipe(concat('intro.css'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./sass/**/*.scss', style).on('change', browserSync.reload);
    gulp.watch('./intro.scss', intro).on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    //gulp.watch('./js/**/*.js', style).on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;