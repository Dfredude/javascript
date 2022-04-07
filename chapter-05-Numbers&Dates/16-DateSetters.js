let deadline = new Date(Date.UTC(2020, 0 /* January */, 31))
console.log(deadline)
deadline.setUTCMonth(1)
console.log(deadline)
deadline.setUTCDate(1)
console.log(deadline)

console.log("Reversed order");
deadline = new Date(Date.UTC(2020, 0 /* January */, 31))
console.log(deadline)
deadline.setUTCDate(1)
console.log(deadline)
deadline.setUTCMonth(1)
console.log(deadline)