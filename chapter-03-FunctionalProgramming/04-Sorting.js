
function genArray(low, high, len){
    let arr = []
    high = high-low
    for (let i=low; i<len; i++){
        arr.push(Math.floor(low + (high*Math.random())))
    }
    return arr
}

//Functions that sort arrays using the sort() method.
function sortDecreasing(array){
    let newArray = array.slice()
    newArray.sort((x, y) => y-x)
    return newArray
}

function sortIncreasing(array_of_ints){
    return array_of_ints.slice().sort((x, y) => x-y)
}

function sortStringsByLength(array_of_strings){
    return array_of_strings.slice().sort((str1, str2) => {
        return str1.length - str2.length
    })
}

let strings_array = ["02", "1", "003", "fiive", "four"]
let arr1  = genArray(0, 10, 4)
let arr2 = genArray(0, 10, 4)
console.log(`Sorting in decreasing order: ${arr1}`);
console.log(sortDecreasing(arr1));
console.log(`Sorting in increasing order: ${arr2}`);
console.log(sortIncreasing(arr2));
console.log(`Sorting strings by length ${strings_array}`);
console.log(sortStringsByLength(strings_array));