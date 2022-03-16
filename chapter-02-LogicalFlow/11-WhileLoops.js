
//For loops using while loop. Definite vs Indefinite


//Classic For Loop 
console.log("---Classic For Loop---");
let i = 1;
while (i<=10){ // i is the setninal value
    console.log(i);
    i++
}

//For of Loop
i = 0
let arr = [, 2, , 4]
arr[9] = 100
console.log("---For of Loop---");
while (i < arr.length){
    console.log(arr[i]);
    i++;
}

//For in Loop
i = 0
let object = { name: 'Harry Smith', age: 42}
let object_properties = ['name', 'age']
while (i<2){
    console.log(object[object_properties[i]])
    i++;
}