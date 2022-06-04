let codePoint = 0x1F310

function indexOfUTFCodePoint(string, item){
    for (let i = 0; i < string.length; i++) {
        const cp = string.codePointAt(i);
        let unicode_char = String.fromCodePoint(cp)
        if (unicode_char === item) return i
        else if (cp > 0xFFFF) i++
    }
}

function sliceUTF(string, start, end){
    let slice = ''
    for (let i = start; i < end; i++) {
        let cp = string.codePointAt(i)
        if (cp > 0xFFFF) i++
        slice += String.fromCodePoint(cp);
    }
    return slice
}

console.log(indexOfUTFCodePoint("Hell🌐", "🌐"))
console.log(sliceUTF("Butter🌐fly", 0, 8))

