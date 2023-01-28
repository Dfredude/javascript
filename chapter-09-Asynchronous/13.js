/* Explain how the error message from the preceding exercise can be useful for locating a forgotten await operator,
such as 

const errorAfterDelay = async (message, delay) => {
    try {
        return rejectAfterDelay(new Error(message), 1000)
    } catch(e) {
        console.error(e)
    }
}

*/

const rejectAfterDelay = async (result, delay) => {
    return new Promise((resolve, reject) => {
        const callback = () => reject(result) // The problem is actually here    
        setTimeout(callback, delay)
    })
}

const errorAfterDelay = async (message, delay) => {
    try {
        return rejectAfterDelay(new Error(message), 1000)
    } catch(e) {
        console.error(e)
    }
}

errorAfterDelay("Hi MF", 2000)