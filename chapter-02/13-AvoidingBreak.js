let i = 0
let j = 0
let arr = [[5, 84, -5], [5, -1, 5], [6, -1], [8, -1]]
let found = false
while (!found && i <arr.length){
    while (!found && j < arr[i].length){
        if (arr[i][j] < 0) {
            console.log(arr[i][j]); 
            found = true     //No need to break out the loops
        }
        j++
    }
    i++
    j = 0
}