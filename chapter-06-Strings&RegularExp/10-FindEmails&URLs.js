let string = `Hello I created this string for testing on finding emails and URLs.
asdaacom
fake@email.com
www.hack.com
wonderifthis@isvalid
google.com`

let regex = /\w+@?\w+[.]com/ig

console.log(string.match(regex));