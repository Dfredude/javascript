function compareStringsByCodePoints(str1, str2){
    let str_length = str1.length >= str2.length ? str2.length : str1.length
    let [x_offset, y_offset] = [0, 0]
    for (let i=0; i<str_length; i++){
        let x = str1.codePointAt(i+x_offset)
        let y = str2.codePointAt(i+y_offset)
        if (x > 0xFFFF) x_offset++
        if (y > 0xFFFF) y_offset++
        if (x != y){
            return x - y
        }
    }
    return 0
}
// Returns -1 if first argument goes first, 1 other wise. 0 if they are equal
console.log(compareStringsByCodePoints("Hi 🌐", "Hi 🌏"))