Converts last commits to changelog entries.

### Install

```sh
npm install unreleased
```

### Usage

```js
var unreleased = require('unreleased');

unreleased('2.2.3', '/path/to/git/repo', 'repoat/github', function (err, output) {
  console.log(output);
});

```

Will output:

```
## [2.2.3] - 2015-05-07
- [] Merge pull request #89 from foo/bar (`John Doe`)
  https://github.com/repoat/github/commit/6fa61901b078cb29e5bd62adc77191406860b5aa
- [] Fixed XYZ (`Jane Doe`)
  https://github.com/repoat/github/commit/cb29e5bd62adc7719146fa61901b078cb2111111
```
