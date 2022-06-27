function mapCollect(values, f, collector){
    return collector(...values.map((value) => f(value))) // Useful if map was a function that didn't return an array
}

console.log(mapCollect([1, 6,8, 9], (x) => x*x, Array.of))