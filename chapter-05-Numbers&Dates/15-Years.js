function getDifferenceOfYears(date1, date2){
    return Math.abs(date1.getYear() - date2.getYear())
}

console.log(getDifferenceOfYears(new Date(1980, 1), new Date()))