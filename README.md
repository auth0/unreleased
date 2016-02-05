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
## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
