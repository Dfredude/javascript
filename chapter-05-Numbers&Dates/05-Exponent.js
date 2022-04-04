function getNumberParts( value ) {
 
    if ( typeof value !== "number" )
      throw new TypeError( "value must be a Number" );
   
    var result = {
      isNegative : false,
      exponent : 0,
      mantissa : 0
    };
   
    if ( value === 0 ) {
      return result;
    }
   
    // not finite?
    if ( !isFinite( value ) ) {
      result.exponent = 2047;
      if ( isNaN( value ) ) {
        result.isNegative = false;
        result.mantissa = 2251799813685248; // QNan
      } else {
        result.isNegative = value === -Infinity;
        result.mantissa = 0;
      }
      return result;
    }
   
    // negative?
    if ( value < 0 ) {  result.isNegative = true;  value = -value;  }
   
    // calculate biased exponent
    var e = 0;
    if ( value >= Math.pow( 2, -1022 ) ) { // not denormalized
      // calculate integer part of binary logarithm
      // http://en.wikipedia.org/wiki/Binary_logarithm
      var r = value;
      while ( r < 1 ) { e -= 1; r *= 2; }
      while ( r >= 2 ) { e += 1; r /= 2; }
      e += 1023; // add bias
    }
    result.exponent = e;
   
    // calculate mantissa
    if ( e != 0 ) {
      var f = value / Math.pow( 2, e - 1023 );
      result.mantissa = Math.floor( (f - 1) * Math.pow( 2, 52 ) );
    } else { // denormalized
      result.mantissa = Math.floor( value / Math.pow( 2, -1074 ) );
    }
   
    return result;
  }


// Works with floats only
const getExponent = function(num){
  return  1023 + num.toString(2).split('.')[0].length-1
}

let num = 32.541651615254 
let { exponent } = getNumberParts(num)


console.log(getExponent(num));

console.log(exponent);