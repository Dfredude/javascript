console.log("Different ways to have empty values (holes) within an Array (Object)")
console.log([,5, ,6]) //1
let myArray = [5,4,9]
myArray.length = 5 //2
console.log(myArray)
myArray[10] = "LOL" //2
console.log(myArray)