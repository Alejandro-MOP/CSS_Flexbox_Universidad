const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const css = () => {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded', //nested, compact, compressed
        }))
        .pipe( gulp.dest('css') );
}

const watchFiles = () => {
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html');
}

//funcion como tarea
gulp.task('css', css);
gulp.task('watch', gulp.parallel( watchFiles )); //tarea asincrona para escuchar los cambios en los archivos