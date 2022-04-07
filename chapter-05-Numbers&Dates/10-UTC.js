const difFromUTC = (date) => {
    return  date.getUTCHours() - date.getHours()
}

console.log(difFromUTC(new Date()));