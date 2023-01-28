/*
Write a function produceAfterRandomDelay that 
produces a value after a random delay between 0 and a given maximum milliseconds. 
Then produce an array of futures where the function is applied to 1, 2, ..., 10 and pass it to Promise.all. 
In which order will the results be collected?
Results will be collected as every promise resolves
*/

function getRandom() {
    Math.random()
}

function produceAfterRandomDelay(max_milliseconds) {
    return new Promise((resolve, reject) => {
        const milliseconds = Math.random() * max_milliseconds
        setTimeout(() => {
            resolve(milliseconds + " milliseconds")
        }, milliseconds)
    })
}

const promises = Array(10).fill(null).map((val, i) => produceAfterRandomDelay(i))

Promise.all(promises)
    .then((val) => {
        console.log(val)
    })
