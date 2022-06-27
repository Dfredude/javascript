const indexOf = function(arr, f) {
    let result = []
    for (let i=0; i < arr.length; i++){
        if (f(arr[i])) result.push(i)
    } 
    return result
}

const arr = [-123, 3, -4,7, 3,5]

console.log(indexOf(arr, (x) => x >= 0))