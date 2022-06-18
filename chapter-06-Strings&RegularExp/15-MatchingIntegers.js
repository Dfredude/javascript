let numbers = `This string contains a lot of integers.
For testing a regular expression that'll extract all of 'em.
513, -8514. Let's see how it handles floating point numbers: 2.5, 88.5662, -4165.1213.
511 5465 9845131198131 1651635 -1521 51 -1231 13- `

console.log(numbers.match(/-?\d+/g))
