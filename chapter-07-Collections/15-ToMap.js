function toMap(obj) {
    let arr = []
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            arr.push([key, obj[key]])
        }
    }
    return new Map(arr)
    
}

console.log(toMap({
    "Mon": 0,
    "Tue": 1,
    "Wed": 2
}))