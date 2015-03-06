## Usage

This is a simple Behat wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-behat');

elixir(function(mix) {
   mix.behat();
});
```

This will scan your `./tests/features/` directory, as well as any PHP classes in your 'app' folder for changes, and trigger your Behat suite.

Note:  If you want your tests to execute upon file change, use the `gulp tdd` task 

$ gulp tdd


---

You may pass two arguments to the `behat()` method.

### baseDir

Defaulting to './tests/features/', this argument specifies the root directory to search for Behat-specific tests.
If you would like to change the default path, you can override the 'baseDir' path to point to your features directory

```
mix.behat('./features', { debug: true });
```

### options

If you need to pass any Behat-specific options (see gulp-behat docuumentation for complete list of available options), then you may pass an object as the second argument, like so:

```
mix.behat(null, { debug: true });
```

### watchList

List of additional files to watch list when perform TDD command

...

var watchList = ['./resources/views/contacts/*.blade.php']; // watch contact blade files
mix.behat(null, {}, watchList);

## Changelog

- 0.0.7 Changes
  - Added `watchList` parameter, providing option to extend default watch files
  
- 0.0.6 Changes 
  - Fixed issues related to using Behat under watch task
  
- 0.0.5 Changes 
  - Small refactoring

- 0.0.4 Updated readme, providing example for overriding 'baseDir' property

- 0.0.3 Minor tweaks, created npm package
    - Changed 'clear' flag to default to 'false' as it is not supported on all systems
    
- 0.0.2 Initial Release
    - First public release
    
## Credits

laravel-elixir-behat written by Mike Erickson

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Website: [codedungeon.org](http://codedungeon.org)
