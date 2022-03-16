let myNums = [651, 165, 23, 0, 5961, 123]

let max = -1
for (let i=0; i<myNums.length; i++){
    if (myNums[i]>max){
        max = myNums[i]
    }
}
console.log(max);

max = -1
for (num of myNums){
    if (num > max) max = num
}
console.log(max);

max = -1
for (num in myNums){
    if (myNums[num] > max){
        max = myNums[num]
    }
}
console.log(max);