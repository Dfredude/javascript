export const average = (...values) => {
    let sum = 0
    for (let value of values) {
        if ((typeof value) != "number") throw TypeError('Argument not of type "number"')
        sum += value
    }
    return sum/values.length
}


//console.log(average(1, 6, 9, 4, "asd")); <-- This wil throw an excpetion