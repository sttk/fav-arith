(function(){
'use strict';


var expect = chai.expect;


var arithmetic = fav.arith;

describe('fav.arith', function() {

  describe('Single value', function() {
    it('Should calculate - zero', function() {
      var a;
      a = arithmetic('0');
      expect(a.numerator).to.equal(0);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '0');

      a = arithmetic('0.0');
      expect(a.numerator).to.equal(0);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '0');

      a = arithmetic(0);
      expect(a.numerator).to.equal(0);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '0');

      a = arithmetic(0.0);
      expect(a.numerator).to.equal(0);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '0');
    });

    it('Should calculate - integer', function() {
      var a;
      a = arithmetic(1);
      expect(a.numerator).to.equal(1);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '1');

      a = arithmetic(123);
      expect(a.numerator).to.equal(123);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '123');

      a = arithmetic('9870000');
      expect(a.numerator).to.equal(987);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(4);
      expect(a.toApproximateString(), '9870000');

      a = arithmetic(9007199254740991);
      expect(a.numerator).to.equal(9007199254740991);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '9007199254740991');

      a = arithmetic(-9007199254740991);
      expect(a.numerator).to.equal(-9007199254740991);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '-9007199254740991');
    });

    it('Should calculate - decimal', function() {
      var a;
      a = arithmetic(1.234);
      expect(a.numerator).to.equal(1234);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(-3);
      expect(a.toApproximateString(), '1.234');

      a = arithmetic('-0.1234');
      expect(a.numerator).to.equal(-1234);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(-4);
      expect(a.toApproximateString(), '-0.1234');

      a = arithmetic(1.234e-3);
      expect(a.numerator).to.equal(1234);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(-6);
      expect(a.toApproximateString(), '0.001234');
    });
  });

  describe('Multiply', function() {
    it('Should calculate (1)', function() {
      var a = arithmetic([0, '*', 1]);
      expect(a.numerator).to.equal(0);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '0');
    });

    it('Should calculate (2)', function() {
      var a = arithmetic([2, '*', 3]);
      expect(a.numerator).to.equal(6);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '6');
    });

    it('Should calculate (3)', function() {
      var a = arithmetic([12, '*', 34, '*', 56]);
      expect(a.numerator).to.equal(22848);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '22848');
    });

    it('Should calculate (4)', function() {
      var a = arithmetic([1.23, '*', 0.4567]);
      expect(a.numerator).to.equal(561741);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(-6);
      expect(a.toApproximateString(), '0.561741');
    });
  });

  describe('Divide', function() {
    it('Should calculate (1)', function() {
      var a = arithmetic([12, '/', 3]);
      expect(a.numerator).to.equal(12);
      expect(a.denominator).to.equal(3);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '4');
    });

    it('Should calculate (2)', function() {
      var a = arithmetic([-12, '/', 3, '/', -16]);
      expect(a.numerator).to.equal(12);
      expect(a.denominator).to.equal(48);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString(), '0.75');
    });
  });

  describe('Add', function() {
    it('Should calculate (1)', function() {
      var a = arithmetic([2, '+', 3]);
      expect(a.numerator).to.equal(5);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString()).to.equal('5');
    });

    it('Should calculate (2)', function() {
      var a = arithmetic([0.23, '+', '1.82', '+', -0.352]);
      expect(a.numerator).to.equal(1698);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(-3);
      expect(a.toApproximateString()).to.equal('1.698');
    });
  });

  describe('Subtract', function() {
    it('Should calculate (1)', function() {
      var a = arithmetic([2, '-', 3]);
      expect(a.numerator).to.equal(-1);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString()).to.equal('-1');
    });

    it('Should calculate (2)', function() {
      var a = arithmetic([0.23, '-', '1.82', '-', -0.352]);
      expect(a.numerator).to.equal(-1238);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(-3);
      expect(a.toApproximateString()).to.equal('-1.238');
    });
  });

  describe('Mixing', function() {
    it('Should calculate (1)', function() {
      var a = arithmetic([2, '+', 3, '*', 4]);
      expect(a.numerator).to.equal(14);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString()).to.equal('14');
    });

    it('Should calculate (2)', function() {
      var a = arithmetic([2, '+', 3, '*', 4, '/', 6, '-', 8]);
      expect(a.numerator).to.equal(-24);
      expect(a.denominator).to.equal(6);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString()).to.equal('-4');
    });
  });

  describe('Nesting', function() {
    it('Should calculate (1)', function() {
      var a = arithmetic([3, '*', [2, '+', 1], '/', 4]);
      expect(a.numerator).to.equal(9);
      expect(a.denominator).to.equal(4);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString()).to.equal('2.25');
    });

    it('Should calculate (2)', function() {
      var a = arithmetic([3, '*', [2, '+', 7, '*', [3, '-', 8]], '/', 4]);
      expect(a.numerator).to.equal(-99);
      expect(a.denominator).to.equal(4);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString()).to.equal('-24.75');
    });

    it('Should calculate (3)', function() {
      var a = arithmetic([[1.23, '+', 4.56], '*', 7.89]);
      expect(a.numerator).to.equal(456831);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(-4);
      expect(a.toApproximateString()).to.equal('45.6831');
    });
  });

  describe('Illegal expression', function() {
    it('Should become inaccurate when diviving zero', function() {
      var a = arithmetic([1, '/', 0]);
      expect(a.isAccurate()).to.equal(false);
    });

    it('Should become inaccurate when no term between operators', function() {
      var a = arithmetic([1, '+', '*', 0]);
      expect(a.isAccurate()).to.equal(false);
    });

    it('Should become inaccurate when starts with operators', function() {
      var a = arithmetic(['+', '1', '-', 0]);
      expect(a.isAccurate()).to.equal(false);
    });
  });

  describe('Use ArithNumber\'s method', function() {
    it('Should reduce', function() {
      var a = arithmetic([12, '/', 34]);
      a = a.reduce();
      expect(a.numerator).to.equal(6);
      expect(a.denominator).to.equal(17);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString()).to.equal('0.35294117647058823529');
    });

    it('Should add', function() {
      var a = arithmetic(1.23);
      a = a.add('4.56');
      expect(a.numerator).to.equal(579);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(-2);
      expect(a.toApproximateString()).to.equal('5.79');
    });

    it('Should subtract', function() {
      var a = arithmetic(1.23);
      a = a.subtract('4.56');
      expect(a.numerator).to.equal(-333);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(-2);
      expect(a.toApproximateString()).to.equal('-3.33');
    });

    it('Should multiply', function() {
      var a = arithmetic(1.23);
      a = a.multiply('4.567');
      expect(a.numerator).to.equal(561741);
      expect(a.denominator).to.equal(1);
      expect(a.exponent).to.equal(-5);
      expect(a.toApproximateString()).to.equal('5.61741');
    });

    it('Should divide', function() {
      var a = arithmetic(1.23);
      a = a.divide('0.4');
      expect(a.numerator).to.equal(123);
      expect(a.denominator).to.equal(4);
      expect(a.exponent).to.equal(-1);
      expect(a.toApproximateString()).to.equal('3.075');
    });
  });

  describe('Expression by multiple parameters', function() {
    it('should calculate', function() {
      var a = arithmetic(123, '/', 3, '-', '50');
      expect(a.numerator).to.equal(-27);
      expect(a.denominator).to.equal(3);
      expect(a.exponent).to.equal(0);
      expect(a.toApproximateString()).to.equal('-9');
    });
  });
});

})();
