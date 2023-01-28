/* Experiment with calling an async function that throws an exception in Node.js.

Invoke the errorAfterDelay function. What happens? How can you avoid this situation?

const rejectAfterDelay = (result, delay) => {
    return new Promise((resolve, reject) => {
        const callback = () => reject(result)
        setTimeout(callback, delay)
    })
}

const errorAfterDelay = async (message, delay) => 
    await rejectAfterDelay(new Error(message), delay)

*/ 
    
const rejectAfterDelay = async (result, delay) => {
    return await new Promise((resolve, reject) => {
        const callback = () => reject(result) // The problem is actually here    
        setTimeout(callback, delay)
    })
}

const errorAfterDelay =  async (message, delay) => {
    try {
        return await rejectAfterDelay(new Error(message), delay)
    } catch(e){
        console.error(e)
    }

}

try {
    errorAfterDelay("Hi MF", 2000)
} catch(e){
    console.error(e)
}
