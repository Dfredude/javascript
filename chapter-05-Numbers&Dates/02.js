function getNumberParts(x) {
    if(isNaN(x)) {
        return {mantissa: -6755399441055744, exponent: 972};
    }
    var sig = x > 0 ? 1 : -1;
    if(!isFinite(x)) {
        return {mantissa: sig * 4503599627370496, exponent: 972};
    }
    x = Math.abs(x);
    var exp = Math.floor(Math.log(x)*Math.LOG2E)-52;
    var man = x/Math.pow(2, exp);
    return {mantissa: sig*man.toString(2), exponent: exp.toString(2)};
}

console.log(getNumberParts(0.09375));