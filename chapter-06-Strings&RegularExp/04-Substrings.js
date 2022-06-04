function getSubstrings(string){
    let substrings = []
    for (let i = 0; i < string.length; i++) {
        let [offset, jump] = [0, false];
        if (string.codePointAt(i)>0xFFFF) { 
            offset = 1
            jump = true 
        }
        for (let j = i+1+offset; j <= string.length; j++) {
            substrings.push(string.slice(i, j))
            if (string.codePointAt(j) > 0xFFFF) { 
                j++
            }
        }
        if (jump) i++
    }
    return substrings
}

console.log(getSubstrings("🌐 Hello 🌐").length)