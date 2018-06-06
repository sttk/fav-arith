# [@fav/arith][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Calculates an arithmetical expression acculately.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/arith
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/arith/` directory manually.*


## Usage

For Node.js:

```js
var arithmetic = require('@fav/arith');

var a0 = arithmetic(1.23);
// => ArithNumber { numerator: 123, denominator: 1, exponent: -2 }
a0.toApproximateString();
// => '1.23'

var a1 = arithmetic(1.23, '+', 4.56, '*', 7.89);
// => ArithNumber { numerator: 372084, denominator: 1, exponent: -4 }
a1.toApproximateString();
// => '37.2084'

var a1 = arithmetic([1.23, '+', 4.56, '*', 7.89]);
// => ArithNumber { numerator: 372084, denominator: 1, exponent: -4 }
a1.toApproximateString();
// => '37.2084'

var a2 = arithmetic([[1.23, '+', 4.56], '*', 7.89]);
// => ArithNumber { numerator: 456831, denominator: 1, exponent: -4 }
a2.toApproximateString();
// => '45.6831'

var a = arithmetic('1')   // => ArithNumber { numerator: 1, denominator: 1, exponent: 0 }
  .add(2)                 // => ArithNumber { numerator: 3, denominator: 1, exponent: 0 }
  .subtract(-3)           // => ArithNumber { numerator: 6, denominator: 1, exponent: 0 }
  .multiply(4)            // => ArithNumber { numerator: 24, denominator: 1, exponent: 0 }
  .divide(5)              // => ArithNumber { numerator: 24, denominator: 5, exponent: 0 }
  .toApproximteString()   // => '4.8'
```

For Web browsers:

```html
<script src="fav.arith.min.js"></script>
<script>
var arithmetic = fav.arith;

var a1 = arithmetic(1.23, '+', 4.56, '*', 7.89);
// => ArithNumber { numerator: 372084, denominator: 1, exponent: -4 }
a1.toApproximateString();
// => '37.2084'

var a = arithmetic('1')   // => ArithNumber { numerator: 1, denominator: 1, exponent: 0 }
  .add(2)                 // => ArithNumber { numerator: 3, denominator: 1, exponent: 0 }
  .subtract(-3)           // => ArithNumber { numerator: 6, denominator: 1, exponent: 0 }
  .multiply(4)            // => ArithNumber { numerator: 24, denominator: 1, exponent: 0 }
  .divide(5)              // => ArithNumber { numerator: 24, denominator: 5, exponent: 0 }
  .toApproximteString()   // => '4.8'
</script>
```

## API

### <u>arithmetic(expression, ...) : ArithNumber</u>

Calculate an *expression*, which is an Array parameter or a set of parameters.
An *expression* consists of terms, operators and nested arrays.
A term can be a number, a string or an ArithNumber object. An operator is a string which is one of `'+'`, `'-'`, `'*'`, `'/'`.

[ArithNumber][arith-number-url] is for representing a number value as accurately as possible by using three integers: numerator, denominator and exponent; a number = (numerator /  denominator) * 10^exponent .

#### Parameters:

| Parameter    |  Type              |  Description                    |
|:-------------|:------------------:|:--------------------------------|
| *expression* | Array &#x7c; number &#x7c; string &#x7c; ArithNumber  | An expression to be calculated. |

#### Returns:

An ArithNumber object which represents an number value.

**Type:** ArithNumber

#### Operators:

| Operator  | Description    |
|:---------:|:---------------|
| `'+'`     | Addition       |
| `'-'`     | Subtraction    |
| `'*'`     | Multiplication |
| `'/'`     | Division       |

## Checked

### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.


[repo-url]: https://github.com/sttk/fav-arith/
[npm-img]: https://img.shields.io/badge/npm-v0.0.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/arith
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-arith.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-arith
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-arith?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-arith
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-arith/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-arith?branch=master
[arith-number-url]: https://www.npmjs.com/package/@fav/arith.number

