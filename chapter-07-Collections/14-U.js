// Union, intersection, difference

function union(set1, set2) {
    let new_set = new Set([...set1, ...set2])
    return new_set
}
function intersection(set1, set2) {
    let new_set = new Set()
    set1.forEach(item => {
        if (set2.has(item)) new_set.add(item)
    });
    return new_set
}
function difference(params) {
    let new_set = new Set()
    set1.forEach(item => {
        if (!set2.has(item)) new_set.add(item)
    })
    set2.forEach(item => {
        if (!set1.has(item)) new_set.add(item)
    })
    return new_set
}
const set1 = new Set([2, 4, 6, 8])
const set2 = new Set([2, 3, 4, 5 ,6])

console.log(union(set1, set2))
console.log(intersection(set1, set2));
console.log(difference(set1, set2));