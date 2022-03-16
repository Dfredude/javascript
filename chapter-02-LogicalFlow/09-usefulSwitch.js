const randInt = () => Math.floor(Math.random()*8)

let num = randInt()
let arr = []

switch (num) {
    case 0: arr[0] = 0
    case 1: arr[1] = 0
    case 2: arr[2] = 0
    case 3: arr[3] = 0
    case 4: arr[4] = 0
    case 5: arr[5] = 0
    case 6: arr[6] = 0  
    case 7: arr[7] = 0
}

console.log(arr);