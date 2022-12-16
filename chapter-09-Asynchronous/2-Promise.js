/* 2. Implement a function invokeAfterDelay()-that yields a promise, 
invoking a given function after a given delay. Demonstrate by yielding
a promise for a random number between 0 and 1. Print the result on the console when it is available */

 

const invokeAfterDelay = (delay, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(callback()), delay)
    })
}

invokeAfterDelay(1000, () => console.log(Math.random()))
