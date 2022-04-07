let date = new Date()
function getDay(date){
    let day = Math.floor((date.getTime()/100)/60/60/24%7)
    if (day < 5) {
        return day+3
    }
    else if (day > 4){
        return day -4
    }
}

console.log(getDay(date));