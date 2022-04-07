function isLeap(year){
    let is;
    switch (year%100) {
        case 0:
            is = year%400 === 0 ? true : false
            break
        default:
            is = year%4 === 0 ? true : false
            break
    }
    return is
}

console.log(isLeap(2022));