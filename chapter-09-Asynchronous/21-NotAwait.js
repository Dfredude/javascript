/*
1. What happens if you apply the await operator to an expression that isn't a promise? 
2. What happens if the expression throws an exception? 
3. Is there any reason why you would want to do this? Not really 🤔
*/

// First question

console.log(await 1) // Has no effect at all

// Second question

const throwException = (message) => {
    throw new Error(message)
}

console.log(await throwException("My Exception")) // Has no effect at all