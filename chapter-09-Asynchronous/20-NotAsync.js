/*
What happens when you add async to a function that doesn't return promises?
*/

async function syncFunc() {
    return 5;
}

console.log(syncFunc()) // Function returns an inmediately resolved promise

// async function will always return a promise, even if not explicitly coded within the function
