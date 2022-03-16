// "use strict";
import indexOf from "./02-CleanCode.js";
function myFunction(func, low, high) {
    let arr = []
    for (let i = low; i < high; i++) {
        arr.push(func(i))
    }
    return arr
}

let arr = [2, 3, 1]

console.log(myFunction(indexOf, 0, 5));