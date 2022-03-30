const toFixed = function(x, p){
    let e = parseInt(x.toExponential().slice(-2))
    console.log(Math.floor(Math.abs(p/e)))
    let arg = e+1+p
    if (arg>0) return x.toPrecision(e+1+p)
    else throw RangeError("Precision doesn't output any digits")
}

let num = 0.00021627;

console.log(num.toFixed(5));

console.log(toFixed(num, 5))