function getDifferenceOfDays(date1, date2){
    let diff = date1.getTime() - date2.getTime()
    diff = (diff/1000)/60/60/24
    return diff < 0 ? diff * -1 : diff
}

console.log(getDifferenceOfDays(new Date(2021, 0), new Date()))