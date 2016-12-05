import gulp from 'gulp';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';
import ESLint from 'gulp-eslint';
import exorcist from 'exorcist';
import browserSync from 'browser-sync';
import watchify from 'watchify';
import babelify from 'babelify';
import ifElse from 'gulp-if-else';
import browserify from 'browserify';

function packet() {
    return bundler.packet()
        .on('error', function (error) {
            console.error('\nError: ', error.message, '\n');
            this.emit('end');
        })
        .pipe(exorcist('src/packet/packet.js.map'))
        .pipe(source('packet.js'))
        .pipe(buffer())
        .pipe(ifElse(process.env.NODE_ENV === 'production', uglify))
        .pipe(gulp.dest('src/parts'));
}
watchify.arguments.debug = true;
const sync = browserSync.create();
watchify.arguments.debug = true;
var bundler = browserify('src/app.js', watchify.arguments);
bundler.transform(babelify.configure({
    sourceMapRelative: 'src'
}));
bundler.on('update', packet);
gulp.task('default', ['transpile']);
gulp.task('transpile', ['lint'], () => packet());
gulp.task('lint', () => {
    return gulp.src(['src/**/*.js', 'babel.js'])
        .pipe(ESLint())
        .pipe(ESLint.format())
});
gulp.task('serve', ['transpile'], () => sync.init({server: 'src'}));
gulp.task('watch', ['serve'], () => {
    gulp.watch('src/**/*', ['js-watch']);
    gulp.watch('index.html', sync.reload)
});
gulp.task('js-watch', ['transpile'], () => sync.reload());