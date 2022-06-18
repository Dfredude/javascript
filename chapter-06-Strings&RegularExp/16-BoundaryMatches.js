// Function to add boundary matches.

function completeMatch(regex) {
    return new RegExp('^' + regex.toString() +'$')
}

console.log(completeMatch(/\d+/))