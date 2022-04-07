let date = new Date()

function getCalendar(year, month){
    let date = new Date(year, month-1)
    let days_string = '    '.repeat(date.getDay() > 0 ? date.getDay()-1 : 0)
    let day = 1;
    while (date.getMonth() < month) {
        date.setTime(date.getTime()+(24*60*60*1000))
        days_string += `${day}`.padStart(4, ' ')
        if (date.getDay() === 1 ) { days_string+="\n" }
        day++
    }
    return days_string
}

console.log(getCalendar(2022, 2))

' '