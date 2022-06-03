const test_string = "What the hell is this for?"

console.log("- First Test: negative index")
console.log(test_string.substring(-2, 5))
console.log(test_string.slice(-2, 5))

console.log("- Second Test: strings arguments")
console.log(test_string.substring("2"))
console.log(test_string.slice("2"));

console.log("- Third test: Objects as arguments");
console.log(test_string.substring({value: 5}));
console.log(test_string.slice({value: 5}));

console.log("- Fourth test: Arrays as arguments")
console.log(test_string.substring([5]));
console.log(test_string.slice([5]));

console.log("- Fifth test: No arguments ");
console.log(test_string.substring());
console.log(test_string.slice());

console.log("- Sixth test: Null arguments");
console.log(test_string.substring(null, [2]));
console.log(test_string.slice(null, [2]));