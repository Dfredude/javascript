let myArray = [NaN, Infinity, false, true, null, undefined]
console.log("Values sumed up with 0\n---------------------")
for (let i = 0; i < myArray.length; i++) {
    const value = myArray[i];
    console.log(`${value} + 0 = ${value+0}`)
}

console.log("\nValues sumed up with empty string\n---------------------")
for (let i = 0; i < myArray.length; i++) {
    const value = myArray[i];
    console.log(`${value} + "" = ${value+""}`)
}