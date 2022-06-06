let regex = /^[0-9]+/m

let string = `first line has no number digits
2nd line however does, and its found thanks to the 'm' flag
finally, 3rd line`
console.log(string.match(regex));

let regex2 = /\n\d/  //trying to achieve ths same thing without the m flag
console.log(string.match(regex2));