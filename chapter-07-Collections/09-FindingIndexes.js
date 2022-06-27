function findIndexes(arr, value){
    return arr.map((item, index) => {
        if (item === value) {
            return index
        }
        return null
    }).filter((x) => x)
}

const arr = [2, 53, 3, 4, 3, 9, 3, 6]

console.log(findIndexes(arr, 3))