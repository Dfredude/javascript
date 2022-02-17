let brackets = []
let curly_braces = {}
console.log("-[]+[]")
console.log([]+[])
console.log("-brackets+brackets")
console.log(brackets+brackets)
console.log("-{}+[]")
console.log({}+[])
console.log("-curly_braces+brackets")
console.log(curly_braces+brackets)
console.log("-[]+{}")
console.log([]+{})
console.log("-brackets+curly_braces")
console.log(brackets+curly_braces)
console.log("-{}+{}")
console.log({}+{})
console.log("-curly_braces+curly_braces")
console.log(curly_braces+curly_braces)
let myObject = []+{name: "Fred"}
console.log("Seems like all the results are of type: " + typeof(myObject))
console.log("Adding curly braces to brackets, converts the output to a string")

