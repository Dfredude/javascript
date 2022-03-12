const average = (...values) => {
    let sum = 0
    for (let value of values) {
        sum += value
    }
    return sum/values.length
}


console.log(average(1, 6, 9, 4));