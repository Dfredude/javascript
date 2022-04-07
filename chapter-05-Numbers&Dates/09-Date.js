let myDate = new Date()

const dateToObject = (date) => {
    return {
        year: myDate.getFullYear(),
        month: myDate.getMonth(),
        day: myDate.getDay(),
        weekday: myDate.getUTCDay(),
        hours: myDate.getMinutes(),
        seconds: myDate.getSeconds(),
        miliseconds: myDate.getMilliseconds()
    }
}

console.log(dateToObject(myDate)); 