const gulp = require("gulp"),
    rename = require("gulp-rename"),
    fs = require("fs"),
    exec = require('child_process').exec

function deleteFileIfExists(file) {
    try {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file)
        } else {
            console.log("File not found: " + file)
        }
    } catch (err) {
        console.log(err)
    }
}

gulp.task('postinstall', function(cb) {
    deleteFileIfExists('public/vendor/alpine.min.js')
    deleteFileIfExists('public/vendor/list.min.js')
    deleteFileIfExists('public/vendor/nprogress/nprogress.js')
    deleteFileIfExists('public/vendor/nprogress/nprogress.css')

    gulp.src('node_modules/alpinejs/dist/cdn.min.js')
        .pipe(rename('alpine.min.js'))
        .pipe(gulp.dest('public/vendor'))
    gulp.src('node_modules/list.js/dist/list.min.js')
        .pipe(gulp.dest('public/vendor'))
    gulp.src('node_modules/nprogress/nprogress.js')
        .pipe(gulp.dest('public/vendor/nprogress'))
    gulp.src('node_modules/nprogress/nprogress.css')
        .pipe(gulp.dest('public/vendor/nprogress'))

    exec('npm run tailwindcss', function (err, stdout, stderr) {
        console.log(stdout)
        console.log(stderr)
        cb(err)
    })
})
