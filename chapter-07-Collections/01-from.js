console.log("Hi");

const from = (arr_like_iterable) => {
    let result = []
    for (let i=0; i < arr_like_iterable.length; i++){
        let value = arr_like_iterable[i]
        if (value != undefined) result.push(value)
    }
    return result
}

let test_obj = {
    length: 4,
    0: "First value",
    1: "Second value",
    2: "Third value",
    3: "Fourth value",
    4: undefined,
    5: "This value shouldn't be here",
    random_property: "Hello there"
}

console.log(from(test_obj))
console.log(Array.from(test_obj))