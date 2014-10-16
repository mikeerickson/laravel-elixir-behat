var elixir   = require('laravel-elixir'),
    gulp     = require('gulp'),
    behat    = require('gulp-behat'),
    notify   = require('gulp-notify'),
    _        = require('underscore');

/*
 |----------------------------------------------------------------
 | Behat Testing
 |----------------------------------------------------------------
 |
 | This task will trigger your entire Behat test suite and
 | will show notifications indicating the success or failure
 | of that test suite. It works great with the tdd task.
 |
 */

elixir.extend('behat', function(baseDir, options) {

    baseDir = baseDir || 'tests';
    options = _.extend({
        clear: true, notify: true
    }, options);

    gulp.task('behat', function() {
       gulp.src('behat.yml')
           .pipe(behat('', options))
           .on('error', notify.onError({
               title: 'Red!',
               message: 'Your Behat tests failed!',
               icon: __dirname + '/../laravel-elixir/icons/fail.png'
           }))
           .pipe(notify({
               title: 'Green!',
               message: 'Your Behat tests passed!',
               icon: __dirname + '/../laravel-elixir/icons/pass.png'
           }));
    });

    this.queueTask('behat');

    this.registerWatcher('behat', [
        baseDir + '/**/*+(Test|Cept|Cest).php',
        'app/**/*.php'
    ], 'tdd');

});

