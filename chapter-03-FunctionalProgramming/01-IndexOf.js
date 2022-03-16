function indexOf(arr, value){
    let found = -1;
    for (key in arr){
        if (arr[key] === value) {
            found =  +key;
        }
    }
    return found;
}

const myArray = [5, 6, 8, 9]
const myObject = {
    "0": 5,
    "1": 6,
    "2": 8,
    "3": 9
}


console.log(`Works: ${indexOf(myArray, 8)}`); // Works
console.log(`Works: ${indexOf(myObject, 8)}`); //Works. The function can take any type of data.
console.log(`Works: ${myArray.indexOf(8)}`); //Works
console.log(`Works: ${myObject.indexOf(8)}`); // Does not work, even though Array is a child class of an Object. The method only exists in the Array class.