let myArray = Array(54, 13, 6498, 2, 0)
myArray[-2] = "LMFAO"
myArray[-1] = "LOL"
console.log(myArray.length); //  Negative indexes don't affect the length

for (let key in myArray){ //for in loop allows you to iterate through all positive and negative indexes
    console.log(key);
}