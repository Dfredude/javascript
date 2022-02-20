let arr = [1, 3, 5, 8, 7]
let count = 0
let sum = 0
let isReal = true
for (let i = 0; i < arr.length; i++){
    if (arr[i] <= 0) isReal = false //Continue really helps to clean up the code
    if (isReal) {
        count++
        sum+= arr[i]
    }
    else isReal = true
}