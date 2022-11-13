// 7 - Provide examples to demonstrate a different sensitivity options for Collision 


const collation = ['Z', 'a', 'z', 'ä']

console.log(collation.sort((a, b) => a.localeCompare(b, 'en')))
// expected output: ["a", "ä", "z", "Z"]

console.log(collation.sort(new Intl.Collator('sv').compare));
// expected output: ["a", "z", "Z", "ä"]

console.log(collation.sort(new Intl.Collator('en', { caseFirst: 'upper' } ).compare));
// expected output: ["a", "ä", "Z", "z"]
