// 1.  What happens with a Turkish locale when you form the upper case of "i' or the lower case of 'I' ?
// • Suppose you write a program that checks for a particular HTTP header, If-Modified-Since. - HTTP headers are case insensitive. 
// 2.  How do you find the header so that your program works everywhere, including turkey?

const lang = 'tr'

console.log('i'.toLocaleUpperCase(lang)) // 1. It changes it to İ
console.log('I'.toLocaleLowerCase(lang)) // 1. It changes it to ı


let header = 'İf-Modıfıed-Sınce'
console.log(header)
// 2. Convert header to uppercase then to lowercase
console.log(header = header.toUpperCase('en')) 
console.log(header = header.toLocaleLowerCase('en'))



