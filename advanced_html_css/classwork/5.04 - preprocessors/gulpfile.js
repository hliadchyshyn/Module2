const gulp = require("gulp");
const sass = require("gulp-sass");

function style() {
    return (
        gulp
            .src("./scss/*.scss")
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .on("error", sass.logError)
            .pipe(gulp.dest("css"))
    );
}

function watch(){
    gulp.watch('./scss/*.scss', style)
}
exports.style = style;
exports.watch = watch;
