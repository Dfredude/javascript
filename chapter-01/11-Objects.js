let harry = {
    name: "harry",
    age: 20,
    friends: null
}

let sally = {
    name: "sally",
    age: 25,
    friends: [harry]
}

harry.friends = [sally]

console.log(harry.friends[0]); //Not possible to JSON.stringify since it contains another object within an Array, and that object contains another object, so it's redundant and recursive 
console.log(sally.friends);