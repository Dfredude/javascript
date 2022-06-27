const sample_obj = {
    x: 23,
    y: 40
}
let myMap = new Map()
myMap.set({
    x: 23,
    y: 40
}, 50)

// Can't get value cause object reference is different
console.log(myMap.get(sample_obj)) // Undefined

// Workaround
for (const [key, value] of myMap.entries()){
    if (key.toString() === sample_obj.toString()) console.log(value);
}