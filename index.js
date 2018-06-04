'use strict';

var isArray = require('@fav/type.is-array');
var ArithNumber = require('@fav/arith.number');
var add = require('@fav/arith.add');
var subtract = require('@fav/arith.subtract');
var multiply = require('@fav/arith.multiply');
var divide = require('@fav/arith.divide');

function arithmetic(expression) {
  if (expression instanceof ArithNumber) {
    return expression;
  }

  if (!isArray(expression)) {
    return ArithNumber.of(expression);
  }

  var a0 = expression[0];
  if (Array.isArray(a0)) {
    a0 = arithmetic(a0);
  } else {
    a0 = ArithNumber.of(a0);
  }
  if (!a0.isAccurate()) {
    return a0;
  }

  var op, term1, term2;

  var arr = [a0];
  for (var i = 1, n = expression.length; i < n; i+=2) {
    op = expression[i];
    var lastIdx = arr.length - 1;
    term1 = arr[lastIdx];
    term2 = arithmetic(expression[i + 1]);

    switch (op) {
      case '*': {
        arr[lastIdx] = multiply(term1, term2);
        break;
      }
      case '/': {
        arr[lastIdx] = divide(term1, term2);
        break;
      }
      default: {
        arr.push(op);
        arr.push(term2);
        break;
      }
    }
  }

  var answer = arr[0];
  for (var j = 1, nj = arr.length; j < nj; j+=2) {
    op = arr[j];
    term2 = arithmetic(arr[j + 1]);

    switch (op) {
      case '+': {
        answer = add(answer, term2);
        break;
      }
      case '-': {
        answer = subtract(answer, term2);
        break;
      }
      default: {
        return new ArithNumber(NaN, NaN, NaN);
      }
    }
  }

  return answer;
}

module.exports = arithmetic;
