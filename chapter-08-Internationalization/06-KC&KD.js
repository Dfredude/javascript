// Write a program to list all Unicode characters 
// that are expanded to two or more ASCII characters in normalization KC or KD


const n = (Math.pow(2, 16)*17)-1
// const n = 10

for(let i = 0; i < n; i++){
    let unicode_char = String.fromCodePoint(i)
    let [kc, kd] = [[...unicode_char.normalize("NFC")], [...unicode_char.normalize("NFD")]]   
    if (kc.length > 1 || kd.length > 1) {
        console.log(unicode_char)
        console.log("-------")
        console.log(kc, kd)
        console.log('\n')
    }
}

