var exec = require('child_process').exec;
var format = require('util').format;

function getTagDate(tag, cb) {
  // Obtain date of the given tag in YYYY-MM-DD format.
  var str = 'git --no-pager log --date=short --pretty="format: %%cd" --max-count=1 %s';
  str = format(str, tag);

  exec(str, {cwd: cwd}, function (err, stdout, stderr) {
    if (err) { return cb(err); }

    var tagDateAsString = stdout.toString('utf8');
    cb(null, tagDateAsString);
  });
}

module.exports = getUnreleased = function (version, cwd, repo, cb) {
  // Get all existing tags ordered descending on date
  var str = 'git for-each-ref --format="%(tag)" --sort=\'*authordate\' refs/tags | sed \'1!G;h;$!d\'';
  exec(str, {cwd: cwd}, function (err, stdout, stderr) {

    var output = '';

    if (err) { return cb(err); }

    var stdoutAsString = stdout.toString('utf8');

    // Get the latest tag
    var lastTag = stdoutAsString.split('\n')[0];

    getTagDate(lastTag, function (err, tagDateAsString) {
      if (err) { return cb(err); }

      output += format('## [%s] -%s\n', version, tagDateAsString);

      var str = 'git --no-pager log --pretty="format:- [] %%s (\\`%%an\\`)%%n  https://github.com/%s/commit/%H" "%s..HEAD"';
      str = format(str, repo, lastTag);

      exec(str, {cwd: cwd}, function (err, stdout, stderr) {
        if (err) { return cb(err); }
        output += stdout;

        return cb(null, output);
      });
    });
  });
};

// Scaffolding for testing
if (module === require.main) {
  var version = process.argv[2];
  var cwd = process.argv[3];
  var repo = process.argv[4];

  getUnreleased(version, cwd, repo, function (err, res) {
    console.log(res);
  });
}


