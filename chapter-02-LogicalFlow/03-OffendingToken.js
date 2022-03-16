// let x = 2
// ()
// The parenthesis '()'  aren't detected as an offending token.
// so they are executed sequentially right next to the number '2' as if '2' was a called function.
//Offending token is essential to avoid syntatical errors

//Realistic example
let myArray =  [1, 5, 8]
let [num1, num2] = myArray
let a = 5
[num1, num2] = [num2, num1]

console.log(a) //a is an unexpected array !
