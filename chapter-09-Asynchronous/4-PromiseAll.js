/* Write a loop that invokes the produceRandomAfterDelay function from the preceding exercise 
n times and prints the sum once the summands are available */


const n = 100
const delay = 1500

// Function from 9.3
function produceRandomAfterDelay(delay){
    const invokeAfterDelay = (delay, callback) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(callback()), delay)
        })
    }
    return invokeAfterDelay(delay, () => Math.random())
}

function sumRandomNumbers(n, delay){
    let promises = []
    for(let i = 0; i < n; i++){
        promises.push(produceRandomAfterDelay(delay))
    }
    return Promise.all(promises).then(numbers => {
        console.log(numbers)
        let sum = 0
        for (let number of numbers){
            sum += number
        }
        return sum
    })
}


sumRandomNumbers(n, delay).then(sum => {
    console.log(sum)
})
