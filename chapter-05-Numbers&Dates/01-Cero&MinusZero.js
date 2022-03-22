function plusMinusZero(number){
    if (Object.is(-0, number)) return -1
    else if (Object.is(0, number)) return 1
    else return 0
}

console.log(plusMinusZero(0));