## Usage

This is a simple Behat wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-behat');

elixir(function(mix) {
   mix.behat();
});
```

This will scan your `./tests/` directory, as well as any PHP classes in your 'app' folder for changes, and trigger your Codeception suite.

---

You may pass two arguments to the `behat()` method.

### baseDir

Defaulting to './tests', this argument specifies the root directory to search for Codeception-specific tests.

### options

If you need to pass any Behat-specific options, then you may pass an object as the second argument, like so:

```
mix.behat(null, { flags: '--report' });
```

Or, maybe you only want to trigger your "functional" suite.

```
mix.behat(null, { testSuite: 'functional' });
```

