# remove-match

![npm](https://img.shields.io/npm/v/remove-match.svg) ![license](https://img.shields.io/npm/l/remove-match.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/remove-match.svg)

Find all the lines that match a given entry

![nodei.co](https://nodei.co/npm/remove-match.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/remove-match.svg)
![stars](https://img.shields.io/github/stars/wspecs/remove-match.svg)
![forks](https://img.shields.io/github/forks/wspecs/remove-match.svg)

![forks](https://img.shields.io/github/forks/wspecs/remove-match.svg)

![](https://david-dm.org/wspecs/remove-match/status.svg)
![](https://david-dm.org/wspecs/remove-match/dev-status.svg)

## Features

- Parse text with chords

## Usage

```js
const remover = require('remove-match');
remover.findMatch('file.txt', 'This Line');
```

OR

```bash
npm i -g remove-match
# Save the lines without the matched entry
remove-match -f file.txt -m 'This Line' -o output.txt
```

## Install

`npm install --save remove-match`


## Scripts

 - **npm run build** : `rm -rf dist && tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[args-finder](https://www.npmjs.com/package/args-finder) | 0.0.3 | ✖
[commander](https://www.npmjs.com/package/commander) | ^2.15.1 | ✖
[great-logs](https://www.npmjs.com/package/great-logs) | 0.0.4 | ✖
[minimist](https://www.npmjs.com/package/minimist) | ^1.2.0 | ✖
[replace](https://www.npmjs.com/package/replace) | ^1.0.0 | ✖
[shelljs](https://www.npmjs.com/package/shelljs) | ^0.8.2 | ✖
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.0.2 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains TypeScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> tsm.author.url

## License

 - **MIT** : http://opensource.org/licenses/MIT
