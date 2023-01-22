/* 9.6
Demonstrate that the Promise.resolve method turns any object with a then method into a Promise. 
Supply an object whose then method randomly calls the result or reject handler.
*/


const aThenable = {
    then(onFullfilled, onRejected) {
        const num = Math.random()
        if (num < 0.5){
            onFullfilled(42)
        } else {
            onRejected(0)
        }
    }
}

Promise.resolve(aThenable).then((val) => {
    console.log(val)
}).catch((val) => { // Cath works because Promise.resolve() returns a promise.
    console.error(val)
})

