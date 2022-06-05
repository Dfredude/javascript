
function raw(fragments, ...vars){
    let raw = vars.reduce((prev, current, index) => prev += current + fragments.raw[index+1], fragments.raw[0])
    let cooked = vars.reduce((prev, current, index) => prev += current + fragments[index+1], fragments[0])
    return [raw, cooked]
}
const name = "Alfredo"
const action = 'tabbed'
const times = 5
console.log(raw`Hello\tI ${action} ${times} times and my name is ${name}`);