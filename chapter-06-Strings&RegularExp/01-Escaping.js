function escapeString(string){
    let escaped_string = '';
    for(let i=0; i<string.length; i++){
        let cp = string.codePointAt(i)
        if (cp>0xFFFF) i++
        if (cp>127){
            escaped_string += '\\u{' + cp.toString(16) + '}'
        }
    }

    return '\'' + escaped_string + '\''
}

console.log(escapeString("Hello\b I'm cool 🤣 & u?\n"))