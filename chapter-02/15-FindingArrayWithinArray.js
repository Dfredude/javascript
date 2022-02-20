let resutl = undefined
let a = [[5, 84, -5], [5, -1, 5], [6, -1], [8, -1]]
let b = [5, -1, 5]
//Sill trying to figure out authors logic behind this excercise
for (let i = 0; i < a.length - b.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i+j] != b[j]) {
            continue
        }
        console.log(a[i+j]);
        console.log(b[j]);
    }
}