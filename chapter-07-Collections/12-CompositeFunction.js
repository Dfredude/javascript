function composite(...functions){
    return functions.reduceRight((prev, curr) => curr(prev))
}

console.log(composite((x)=>x.toString(8), (x)=>x*x, 5))