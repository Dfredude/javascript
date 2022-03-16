let arr = [[5, 84, -5], [5, -1, 5], [6, -1], [8, -1]]


outer:
for (let i =0; i < arr.length; i++){
    for (let j=0; j<arr[i].length; j++){
        if (arr[i][j] < 0) {
        console.log(arr[i][j]);
        break outer //Labeled allows to exit both loops, otherwise it would've kept printing other negative values
        }
    }
}