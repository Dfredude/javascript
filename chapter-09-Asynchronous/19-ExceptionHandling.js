/* 
Consider this code that carries out some asynchronous work 
such as fetching remote data, 
handles the data, 
and Returns the promise for further processing:

const doAsyncWorkAndThen = handler => {
    const promise = asyncWork()
    promise.then(result => handler(result))
    return promise
}

What happens if "handler" throws an exception? how should this code be reorganized? 

*/

const asyncWork = () => {
    return new Promise((res, rej) => {
        for(let i = 0; i < 500000000; i++);
        res(1)
    })
}

const doAsyncWorkAndThen = handler => {
    const promise = asyncWork()
    promise.then(result => handler(result))
    .catch((e) => { // Added line 27-29 to handle error
        console.error(e)
    }) 
    return promise
}

const handler = (result) => {
    console.log("Handler! " + result)
    if (result == 1){
        throw new Error("Incorrect result.") // If exception is throen there's no catch handler
    }
}

doAsyncWorkAndThen(handler)